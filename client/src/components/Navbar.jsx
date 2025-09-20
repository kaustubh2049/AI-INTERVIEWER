import React, { useState } from "react";
import { Brain, Menu, X } from "lucide-react";

const Navbar = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">AI Interviewer</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white items-center space-x-8">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            className="hover:text-purple-400 font-medium"
            onClick={() => onGetStarted()}
          >
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform"
            type="button"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/20 p-6 flex flex-col space-y-4">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <button key={item} className="hover:text-purple-400 text-left">
              {item}
            </button>
          ))}
          <button
            className="hover:text-purple-400 text-left font-medium"
            onClick={() => onGetStarted()}
          >
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
            type="button"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
