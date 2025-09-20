import React from "react";
import { Sparkles, Play, ArrowRight } from "lucide-react";

const HeroSection = ({ onGetStarted }) => (
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-12 mb-20">
    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
      <Sparkles className="w-5 h-5 text-yellow-400" />
      <span className="font-medium">🚀 Trusted by 12,500+ Job Seekers</span>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
      Ace Your Next Interview <br />
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        with AI Power
      </span>
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
      Practice coding challenges, behavioral questions, and get instant AI
      feedback. Join thousands who've landed jobs at top tech companies.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <button
        onClick={onGetStarted}
        className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:scale-105 shadow-2xl transition-transform"
        type="button"
      >
        <div className="flex items-center justify-center space-x-2">
          <Play className="w-6 h-6" />
          <span>Start Free Trial</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      <button className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/30 transition-all duration-300 border border-white/20">
        <div className="flex items-center justify-center space-x-2">
          <Play className="w-6 h-6" />
          <span>Watch Demo</span>
        </div>
      </button>
    </div>
  </div>
);

export default HeroSection;
