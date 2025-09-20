import React from "react";
import { Code, Mic, BarChart3, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Technical Mastery",
    desc: "Practice coding challenges from easy to hard difficulty with real-time code execution and AI feedback.",
    highlights: [
      "1000+ Coding Problems",
      "Multiple Programming Languages",
      "System Design Questions",
      "Code Quality Analysis",
    ],
    badge: { label: "Most Popular", color: "green" },
  },
  {
    icon: Mic,
    title: "Voice Analysis",
    desc: "Perfect your communication skills with AI-powered voice analysis and behavioral question practice.",
    highlights: [
      "Speech Clarity Analysis",
      "Confidence Assessment",
      "Behavioral Questions",
      "Industry-Specific Scenarios",
    ],
    badge: { label: "AI-Powered", color: "blue" },
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Get detailed insights into your performance with comprehensive analytics and personalized improvement plans.",
    highlights: [
      "Performance Tracking",
      "Weakness Identification",
      "Progress Reports",
      "Personalized Recommendations",
    ],
    badge: { label: "Data-Driven", color: "purple" },
  },
];

const FeaturesSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
    {features.map((feature, idx) => {
      const Icon = feature.icon;
      const badgeColor = feature.badge.color;

      const bgMap = {
        green: "from-green-500/10 to-emerald-500/10",
        blue: "from-blue-500/10 to-cyan-500/10",
        purple: "from-purple-500/10 to-pink-500/10",
      };
      const borderMap = {
        green: "border-green-500/20",
        blue: "border-blue-500/20",
        purple: "border-purple-500/20",
      };
      const textMap = {
        green: "text-green-400",
        blue: "text-blue-400",
        purple: "text-purple-400",
      };

      return (
        <div
          key={idx}
          className={`bg-gradient-to-br ${bgMap[badgeColor]} backdrop-blur-lg rounded-3xl p-8 border ${borderMap[badgeColor]} hover:border-opacity-60 transition-all duration-300 transform hover:scale-105`}
        >
          <div
            className={`bg-gradient-to-r ${borderMap[badgeColor]} p-4 rounded-2xl w-fit mb-6`}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white/80 mb-6">{feature.desc}</p>
          <div className="space-y-3 mb-6">
            {feature.highlights.map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle className={`w-5 h-5 ${textMap[badgeColor]}`} />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div
            className={`bg-${badgeColor}-500/10 rounded-2xl p-4 border ${borderMap[badgeColor]}`}
          >
            <div className={`${textMap[badgeColor]} font-semibold mb-1`}>
              {feature.badge.label}
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default FeaturesSection;
