import React from "react";

const CTASection = ({ onGetStarted }) => (
  <section className="w-full py-16 flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 rounded-3xl shadow-lg my-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
      Ready to Ace Your Next Interview?
    </h2>
    <p className="text-lg md:text-xl text-white/80 mb-8 text-center max-w-2xl">
      Start your free trial today and unlock personalized AI-powered interview
      practice, instant feedback, and more!
    </p>
    <button
      onClick={onGetStarted}
      className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-600 transition-transform duration-200 text-xl"
      type="button"
    >
      Get Started For Free
    </button>
  </section>
);

export default CTASection;
