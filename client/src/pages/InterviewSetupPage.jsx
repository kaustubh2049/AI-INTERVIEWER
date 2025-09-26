import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const INTERVIEW_TYPES = [
  { value: "dsa", label: "DSA / Coding Round" },
  { value: "frontend", label: "Frontend (React/JS)" },
  { value: "backend", label: "Backend (APIs/System)" },
  { value: "fullstack", label: "Full Stack" },
  { value: "behavioral", label: "Behavioral / HR" },
  {
    value: "system-design",
    label: "System Design (coming soon)",
    disabled: true,
  },
];

const DIFFICULTIES = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function InterviewSetupPage() {
  const navigate = useNavigate();
  const [type, setType] = useState("dsa");
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("normal"); // normal | timed | adaptive
  const [questionCount, setQuestionCount] = useState(1);

  const handleStart = () => {
    // For behavioral we could direct to a different page in future
    if (type === "behavioral") {
      navigate(
        `/technical-round?type=${type}&difficulty=${difficulty}&mode=${mode}&q=${questionCount}`
      );
    } else {
      navigate(
        `/technical-round?type=${type}&difficulty=${difficulty}&mode=${mode}&q=${questionCount}`
      );
    }
  };

  return (
    <div className="min-h-screen text-white px-4 py-8 md:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Start a Mock Interview
          </h1>
          <p className="text-sm text-slate-400">
            Choose the interview type and settings. These are placeholders until
            backend logic is connected.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-1">
                Interview Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                {INTERVIEW_TYPES.map((t) => (
                  <option key={t.value} value={t.value} disabled={t.disabled}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-1">
                Difficulty
              </label>
              <div className="flex gap-2">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDifficulty(d.value)}
                    className={`flex-1 py-2 rounded-md text-xs font-medium border border-white/10 transition ${
                      difficulty === d.value
                        ? "bg-indigo-600"
                        : "bg-white/5 hover:bg-white/10 text-slate-200"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-1">
                Mode
              </label>
              <div className="flex gap-2">
                {["normal", "timed", "adaptive"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-2 rounded-md text-xs font-medium border border-white/10 transition ${
                      mode === m
                        ? "bg-indigo-600"
                        : "bg-white/5 hover:bg-white/10 text-slate-200"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-1">
                Number of Questions
              </label>
              <input
                type="number"
                min={1}
                max={5}
                value={questionCount}
                onChange={(e) =>
                  setQuestionCount(parseInt(e.target.value) || 1)
                }
                className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                For now this affects only displayed metadata.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-4">
            <div>
              <h2 className="text-sm font-semibold text-indigo-300">Preview</h2>
              <p className="text-xs text-slate-300 mt-1">
                You are about to start a{" "}
                <span className="text-white font-medium">{difficulty}</span>{" "}
                {type.replace("-", " ")} interview in{" "}
                <span className="text-white font-medium">{mode}</span> mode with{" "}
                <span className="text-white font-medium">{questionCount}</span>{" "}
                question(s).
              </p>
            </div>
            <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
              <li>Questions adapt based on difficulty (future).</li>
              <li>Timer appears in timed mode.</li>
              <li>Adaptive mode changes difficulty dynamically.</li>
            </ul>
            <div className="mt-auto flex gap-3 pt-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 py-2 rounded-md bg-white/10 hover:bg-white/15 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleStart}
                className="flex-1 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-medium"
              >
                Start Interview
              </button>
            </div>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-indigo-300 mb-2">
            Interview Types Explained
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-[12px] text-slate-300">
            <div className="space-y-1">
              <p className="font-semibold text-slate-200">DSA / Coding</p>
              <p>Algorithm & data structure focused problems.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-200">Frontend</p>
              <p>DOM, React patterns, performance, CSS reasoning.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-200">Behavioral</p>
              <p>STAR format prompts evaluating communication & ownership.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
