import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleGetOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
    alert("OTP sent to " + email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signed up as " + username);
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
          <div className="flex gap-2 items-end">
            <div className="flex-1">
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
              type="button"
              onClick={handleGetOtp}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded hover:from-green-500 hover:to-blue-600 transition-colors"
            >
              Get OTP
            </button>
          </div>
          {otpSent && (
            <div>
              <label className="block text-white mb-1">Enter OTP</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded hover:from-blue-600 hover:to-purple-700 transition-colors mt-2"
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
