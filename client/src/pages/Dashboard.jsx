import React from "react";
import { useNavigate } from "react-router-dom";

// Lightweight placeholder widgets. These can be moved to separate files later.
const Card = ({ title, children, className = "" }) => (
  <div
    className={`bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm shadow-sm hover:shadow-md transition ${className}`}
  >
    {title && (
      <h3 className="text-sm font-semibold mb-2 text-indigo-300 tracking-wide uppercase">
        {title}
      </h3>
    )}
    {children}
  </div>
);

const GuidanceStrip = () => (
  <div className="col-span-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4 text-white shadow">
    <div className="flex-1">
      <p className="text-sm opacity-90">Hi Student 👋</p>
      <h2 className="text-lg md:text-xl font-semibold">
        You are tracking towards{" "}
        <span className="underline decoration-white/40">Frontend Engineer</span>
      </h2>
      <p className="text-sm mt-1 text-white/90">
        Next best action: Finish React State Mgmt Challenge.
      </p>
    </div>
    <div className="flex gap-3">
      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-md text-sm font-medium">
        View Roadmap
      </button>
      <button className="px-4 py-2 bg-black/30 hover:bg-black/40 rounded-md text-sm font-medium border border-white/20">
        Start Challenge
      </button>
    </div>
  </div>
);

const RoleRecommendationCard = () => (
  <Card title="Recommended Roles" className="col-span-12 md:col-span-4">
    <div className="flex flex-wrap gap-2 mb-3">
      {["Frontend Engineer", "Fullstack Developer", "UI Engineer"].map((r) => (
        <span
          key={r}
          className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-medium"
        >
          {r}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 rotate-[-90deg]" viewBox="0 0 36 36">
          <path
            className="text-indigo-800/40"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
          />
          <path
            className="text-indigo-400"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            strokeDasharray="72 100"
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-indigo-200 text-sm font-semibold">
          72%
        </div>
      </div>
      <div className="text-xs text-slate-300">
        Focus on:
        <ul className="mt-1 flex flex-wrap gap-1">
          <li className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
            System Design
          </li>
          <li className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full">
            Optimization
          </li>
        </ul>
      </div>
    </div>
    <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-sm font-medium py-2 rounded-md">
      View Roadmap
    </button>
  </Card>
);

const QuickActionsPanel = () => {
  const navigate = useNavigate();
  const actions = [
    {
      label: "Start Mock",
      icon: "🎤",
      onClick: () => navigate("/interview/setup"),
    },
    {
      label: "View Feedback",
      icon: "📝",
      onClick: () => navigate("/dashboard#feedback"),
    },
    {
      label: "Analyze Resume",
      icon: "📄",
      onClick: () => navigate("/dashboard#resume"),
    },
    {
      label: "Practice",
      icon: "⚡",
      onClick: () => navigate("/dashboard#practice"),
    },
    {
      label: "Update Skills",
      icon: "📊",
      onClick: () => navigate("/dashboard#progress"),
    },
    {
      label: "Book Mentor",
      icon: "🤝",
      onClick: () => navigate("/dashboard#mentor"),
    },
  ];
  return (
    <Card title="Quick Actions" className="col-span-12 md:col-span-4">
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <button
            key={a.label}
            onClick={a.onClick}
            className="flex flex-col items-center justify-center gap-1 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 text-xs font-medium text-slate-200"
          >
            <span className="text-lg" aria-hidden>
              {a.icon}
            </span>
            {a.label}
          </button>
        ))}
      </div>
    </Card>
  );
};

const InterviewFeedbackCard = () => (
  <Card title="Latest Interview Feedback" className="col-span-12 md:col-span-4">
    <p className="text-xs text-slate-300 mb-2">Last mock: 2 days ago</p>
    <div className="flex gap-3 mb-3">
      {[
        { label: "Communication", score: 68 },
        { label: "Problem Solving", score: 74 },
        { label: "Technical", score: 62 },
      ].map((m) => (
        <div
          key={m.label}
          className="flex-1 bg-white/5 rounded-md p-2 text-center"
        >
          <div className="text-sm font-semibold text-indigo-300">{m.score}</div>
          <div className="text-[10px] text-slate-400 tracking-wide uppercase">
            {m.label}
          </div>
        </div>
      ))}
    </div>
    <button className="w-full bg-white/10 hover:bg-white/15 py-2 rounded-md text-sm">
      View Detailed Feedback
    </button>
  </Card>
);

const ProgressPlaceholder = () => (
  <Card title="Progress" className="col-span-12 md:col-span-8">
    <div className="h-40 flex items-center justify-center text-slate-400 text-sm">
      Progress charts coming soon...
    </div>
  </Card>
);

const ResumeAnalyzerWidget = () => (
  <Card title="Resume Analyzer" className="col-span-12 md:col-span-4">
    <p className="text-xs text-slate-300 mb-3">
      Upload your resume to get instant insights.
    </p>
    <div className="flex flex-col gap-2">
      <input
        type="file"
        className="text-xs text-slate-200 file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:bg-indigo-600 file:text-white file:text-xs file:cursor-pointer"
      />
      <button className="bg-indigo-600 hover:bg-indigo-500 text-sm font-medium py-2 rounded-md">
        Analyze
      </button>
    </div>
  </Card>
);

const PracticeChallengesPanel = () => (
  <Card title="Practice Challenges" className="col-span-12 md:col-span-8">
    <div className="grid md:grid-cols-3 gap-3">
      {["React State", "Array Algo", "Behavioral Story"].map((ch) => (
        <div
          key={ch}
          className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-2"
        >
          <h4 className="text-xs font-semibold text-indigo-200">{ch}</h4>
          <p className="text-[11px] text-slate-400 line-clamp-2">
            Mini task to strengthen this area.
          </p>
          <button className="mt-auto text-[11px] px-2 py-1 rounded bg-indigo-600/80 hover:bg-indigo-500 text-white">
            Start
          </button>
        </div>
      ))}
    </div>
  </Card>
);

const CalendarWidget = () => (
  <Card title="Upcoming Sessions" className="col-span-12 md:col-span-4">
    <ul className="text-xs text-slate-300 space-y-2">
      <li className="flex justify-between">
        <span>Mock System Design</span>
        <span className="text-slate-400">Today 6pm</span>
      </li>
      <li className="flex justify-between">
        <span>HR Practice</span>
        <span className="text-slate-400">Tomorrow 11am</span>
      </li>
      <li className="flex justify-between">
        <span>Frontend Round</span>
        <span className="text-slate-400">Fri 4pm</span>
      </li>
    </ul>
    <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/15 rounded-md text-sm">
      Open Calendar
    </button>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white px-4 py-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <GuidanceStrip />
          <RoleRecommendationCard />
          <QuickActionsPanel />
          <InterviewFeedbackCard />
          <ProgressPlaceholder />
          <ResumeAnalyzerWidget />
          <PracticeChallengesPanel />
          <CalendarWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
