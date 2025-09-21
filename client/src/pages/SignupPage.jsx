import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  // Handle Signup → send OTP + save pending user
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { ok, data } = await apiFetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, username, email, phone, dob, password }),
      });

      if (ok) {
        const hint = data?.previewUrl
          ? `\nDev hint: Open the email preview link after redirect if you don't receive a real email.`
          : "";
        alert("OTP sent to your email. Please verify." + hint);
        // navigate to VerifyOtpPage and pass email along
        navigate("/verify-otp", {
          state: { email, previewUrl: data?.previewUrl },
        });
      } else {
        alert(data?.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error during signup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-white mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1">Set Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-white/70">Already have an account?</span>
          <Link
            to="/login"
            className="ml-2 text-blue-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
