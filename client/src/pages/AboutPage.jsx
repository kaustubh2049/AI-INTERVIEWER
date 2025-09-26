import React from "react";
import { Brain, Rocket, Users, Target, Sparkles } from "lucide-react";

const valueProps = [
  {
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    title: "AI-Powered Coaching",
    text: "Adaptive questioning and feedback that learns from each response to sharpen your reasoning and communication.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Structured Readiness",
    text: "From fundamentals to system design, progress through intentional tiers aligned with real hiring loops.",
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Human + AI Synergy",
    text: "Blend automated mock rounds with peer review and future mentor layers (coming soon).",
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "Faster Iteration",
    text: "Tight practice loops: attempt → feedback → refine. Ship interview skill improvements weekly, not monthly.",
  },
];

const team = [
  { name: "You?", role: "Early Contributor", avatar: "🚀" },
  { name: "(Hiring Soon)", role: "AI Engineer", avatar: "🤖" },
  { name: "(Hiring Soon)", role: "Content Architect", avatar: "📘" },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-12 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-wider uppercase font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" /> Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
            Building Confident, Interview‑Ready Engineers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            AI Interviewer was created to remove randomness from technical
            interview prep. Instead of endless question lists, we focus on
            mastery through intelligent repetition, feedback depth, and clarity
            of progress.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Why We Exist</h2>
            <p className="text-gray-300 leading-relaxed">
              Many candidates plateau after watching tutorials or solving
              isolated problems. Real interviews test structured thinking under
              pressure, communication, prioritization, and tradeoff clarity. We
              help you practice exactly that.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe interview prep should feel like a training platform,
              not a guessing game. You're not just memorizing answers—you are
              becoming the kind of engineer who can reason clearly in novel
              situations.
            </p>
          </div>
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" /> How It Works
            </h3>
            <ol className="space-y-4 list-decimal list-inside text-gray-300">
              <li>
                Pick a track: algorithms, system design, behavioral, or mixed.
              </li>
              <li>Run an AI-led mock interview with adaptive follow-ups.</li>
              <li>
                Receive categorized feedback: clarity, depth, structure,
                tradeoffs.
              </li>
              <li>Drill weak dimensions with focused micro-rounds.</li>
              <li>Track improvement trends over time.</li>
            </ol>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/30">
              ⚡
            </span>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-purple-400/40 transition-colors"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-semibold mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30">
              👥
            </span>
            The Early Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-white/10 p-6 bg-white/5 flex flex-col items-center text-center hover:border-blue-400/40 transition-colors"
              >
                <div className="text-4xl mb-4" aria-hidden>
                  {m.avatar}
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-400">{m.role}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center">
            Want to help build the future of interview prep? Reach out—roles
            will open soon.
          </p>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-700/30 via-blue-700/20 to-cyan-700/20 border border-white/10 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            We're just getting started
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            More dimensions, deeper analytics, and mentor-led hybrid sessions
            are on the roadmap. Your feedback steers the product.
          </p>
          <button
            onClick={() => (window.location.href = "/signup")}
            className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-colors"
            type="button"
          >
            Start Practicing Free
          </button>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
