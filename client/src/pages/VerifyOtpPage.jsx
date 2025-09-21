import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // email was passed from SignupPage
  const email = location.state?.email || "";
  const previewUrl = location.state?.previewUrl || "";

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const { ok, data } = await apiFetch("/api/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({ email, otp }),
      });

      if (ok) {
        // If backend returns a token, log the user in automatically
        if (data?.token) {
          localStorage.setItem("token", data.token);
          alert("Signup complete. Redirecting to dashboard...");
          navigate("/dashboard");
          return;
        }
        // Fallback: old behavior
        alert("OTP verified! Signup complete.");
        navigate("/login");
      } else {
        alert(data?.message || "OTP verification failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Verify OTP
        </h2>
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <div>
            <label className="block text-white mb-1">OTP sent to {email}</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {previewUrl && (
            <div className="text-sm text-blue-300">
              Dev only: Open email preview here:{" "}
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                View OTP email
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded hover:from-green-600 hover:to-blue-700 transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
