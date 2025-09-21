// Email sending modes (priority):
// 1) SMTP (when SMTP_HOST/USER/PASS are set) → preferred if present
// 2) Brevo API (when BREVO_API_KEY is set)
// 3) Ethereal fallback for dev (no real delivery)

const brevo = require("@getbrevo/brevo");
const nodemailer = require("nodemailer");

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
}

function isBrevoConfigured() {
  return Boolean(process.env.BREVO_API_KEY);
}

async function sendViaBrevo(to, subject, text) {
  const api = new brevo.TransactionalEmailsApi();
  if (typeof api.setApiKey === "function") {
    // v3 SDK pattern
    api.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );
  } else if (brevo.ApiClient && brevo.ApiClient.instance) {
    // fallback for older SDKs
    const client = brevo.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
  }

  const email = new brevo.SendSmtpEmail();
  // Prefer explicit Brevo sender envs, then SMTP_FROM; otherwise, fail fast
  const senderName =
    process.env.BREVO_SENDER_NAME ||
    process.env.SMTP_FROM?.split("<")[0]?.replace(/\"/g, "").trim() ||
    "AI Interviewer";
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL ||
    (process.env.SMTP_FROM?.match(/<([^>]+)>/) || [])[1] ||
    process.env.BREVO_SENDER ||
    null;
  if (!senderEmail) {
    throw new Error(
      "BREVO_SENDER_EMAIL (or SMTP_FROM) not set. Please set a verified sender email."
    );
  }
  email.sender = { name: senderName, email: senderEmail };
  email.to = [{ email: to }];
  email.subject = subject;
  email.textContent = text;

  const result = await api.sendTransacEmail(email);
  const id =
    result?.messageId ||
    result?.messageIds?.[0] ||
    result?.body?.messageId ||
    result?.data?.messageId;
  if (!id) {
    // Log response shape for debugging when messageId is undefined
    try {
      console.log(
        "ℹ️ Brevo sendTransacEmail response:",
        JSON.stringify(result)
      );
    } catch (_) {
      console.log("ℹ️ Brevo sendTransacEmail response (non-serializable)");
    }
  }
  console.log("✅ Brevo email sent:", id);
  return { messageId: id, previewUrl: null };
}

async function createSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    const smtpPort = port ?? 587;
    const secure = smtpPort === 465; // SSL on 465, STARTTLS on 587
    console.log(
      `📨 Using SMTP provider ${host}:${smtpPort} as ${user} (secure=${secure})`
    );
    return nodemailer.createTransport({
      host,
      port: smtpPort,
      secure,
      auth: { user, pass },
    });
  }
  console.log("🧪 No SMTP env provided; using Ethereal test account");
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

async function sendViaSmtp(to, subject, text) {
  const transporter = await createSmtpTransporter();
  const defaultUser = transporter.options?.auth?.user || process.env.SMTP_USER;
  const fromAddress =
    process.env.SMTP_FROM || `"AI Interviewer" <${defaultUser}>`;
  const info = await transporter.sendMail({
    from: fromAddress,
    to,
    subject,
    text,
  });
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log("📧 OTP Email sent:", info.messageId);
    console.log("Preview URL:", previewUrl);
  }
  if (!previewUrl) {
    console.log("📧 SMTP Email queued:", info.messageId);
  }
  return { messageId: info.messageId, previewUrl };
}

async function sendEmail(to, subject, text) {
  try {
    const smtpConfigured = isSmtpConfigured();
    const brevoConfigured = isBrevoConfigured();
    if (smtpConfigured) {
      console.log("✉️ Email mode: SMTP (will use SMTP_HOST)");
      // Prefer SMTP when configured
      return await sendViaSmtp(to, subject, text);
    }
    if (brevoConfigured) {
      console.log("✉️ Email mode: Brevo API (BREVO_API_KEY present)");
      return await sendViaBrevo(to, subject, text);
    }
    console.log("✉️ Email mode: Ethereal dev (no SMTP or Brevo configured)");
    // Dev fallback
    return await sendViaSmtp(to, subject, text);
  } catch (err) {
    console.error(
      "❌ Email send failed:",
      err.response?.body || err.message || err
    );
    throw err;
  }
}

module.exports = { sendEmail };
