// src/pages/MainPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!role.trim()) return;
    localStorage.setItem("interview_role", role); // Store role
    navigate("/interview"); // Go to interview page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        👋 Hi! I'm your AI Interviewer.
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center">
        Practice job interviews with AI. Anytime. Any field.
      </p>

      <input
        type="text"
        placeholder="e.g. Frontend Developer, Civil Engineer..."
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-lg text-black text-lg mb-6 outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        onClick={handleStart}
        className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-6 py-3 rounded-xl text-lg font-semibold"
      >
        Start Interview
      </button>
    </div>
  );
}
