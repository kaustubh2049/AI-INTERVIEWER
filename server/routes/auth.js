const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendEmail } = require("../utils/mailer");
const User = require("../model/User");

const router = express.Router();

// In-memory OTP store (better: Redis/DB)
const otpStore = {};

// JWT auth middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Step 1: Signup request → generate OTP & send mail
router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, phone, dob, password } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // check if user already exists
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    // generate OTP
    const key = email.toLowerCase();
    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore[key] = {
      otp,
      expires: Date.now() + 5 * 60 * 1000, // 5 min expiry
      userData: { name, username, email, phone, dob, password },
    };

    // send OTP via email
    const meta = await sendEmail(email, "Your OTP Code", `Your OTP is ${otp}`);
    console.log("OTP generated for", key, "->", otp);

    res.json({
      message: "OTP sent successfully, please verify",
      previewUrl: meta?.previewUrl, // dev-only when using Ethereal/SMTP fallback
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in signup process" });
  }
});

// Step 2: Verify OTP → finalize signup
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const key = String(email || "").toLowerCase();
    const candidate = String(otp || "");

    const record = otpStore[key];
    if (!record)
      return res.status(400).json({ message: "No signup initiated" });
    if (Date.now() > record.expires) {
      delete otpStore[key];
      return res.status(400).json({ message: "OTP expired" });
    }
    if (String(record.otp) !== candidate)
      return res.status(400).json({ message: "Invalid OTP" });

    // hash password and save user
    const hashedPassword = await bcrypt.hash(record.userData.password, 10);
    const newUser = new User({ ...record.userData, password: hashedPassword });
    await newUser.save();

    // Issue JWT so user is logged in immediately
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    delete otpStore[key];
    res.json({
      message: "Signup successful",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error verifying OTP" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Example protected route
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("_id username email");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Simple test email endpoint: /api/auth/test-email?to=email@example.com
router.get("/test-email", async (req, res) => {
  try {
    const to = req.query.to;
    if (!to)
      return res.status(400).json({ message: "Missing 'to' query param" });
    const meta = await sendEmail(
      to,
      "Test email",
      "This is a test email from AI Interviewer."
    );
    res.json({ message: "Test email queued", meta });
  } catch (err) {
    res.status(500).json({
      message: "Failed to send test email",
      error: err?.message || String(err),
    });
  }
});

module.exports = router;
