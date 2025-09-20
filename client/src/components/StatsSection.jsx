import React from "react";
import { Users, Code2, Briefcase } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "12,500+",
    label: "Active Users",
    description: "Job seekers practicing and improving daily.",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 2,
    icon: Code2,
    value: "8,000+",
    label: "Technical Interviews",
    description: "Mock interviews completed with real-time feedback.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    icon: Briefcase,
    value: "5,000+",
    label: "Job Offers",
    description: "Success stories from our users worldwide.",
    color: "from-purple-400 to-pink-500",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center mb-20">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 mb-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500/80 text-white text-xs font-semibold tracking-widest uppercase">
          Trusted by thousands
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Our Impact in Numbers
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          See how AI-INTERVIEWER is helping job seekers land their dream roles
          every day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white/5 backdrop-blur rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-90`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-white/80 text-lg font-semibold mb-1">
                {stat.label}
              </p>
              <p className="text-white/60 text-sm">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
