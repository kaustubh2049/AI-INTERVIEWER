import React from "react";

const ProcessSection = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Your Path to Success in 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Choose Your Interview
            </h3>
            <p className="text-gray-300">
              Select your job role, difficulty, and focus area. Our AI tailors
              questions just for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Complete the Interview
            </h3>
            <p className="text-gray-300">
              Solve coding challenges and answer behavioral questions with our
              interactive tools.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Get Your Detailed Report
            </h3>
            <p className="text-gray-300">
              Receive a comprehensive scorecard with AI-powered feedback on your
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
