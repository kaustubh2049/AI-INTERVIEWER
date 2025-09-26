import React, { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const linkClasses = (path) =>
    `hover:text-purple-400 transition-colors ${
      location.pathname === path ? "text-purple-400" : "text-white"
    }`;

  return (
    <nav className="relative z-10 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 group"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">AI Interviewer</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => {
              const el = document.getElementById("features-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/");
            }}
            className={linkClasses("/features-anchor")}
            type="button"
          >
            Features
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className={linkClasses("/pricing")}
            type="button"
          >
            Pricing
          </button>
          <button
            onClick={() => navigate("/about")}
            className={linkClasses("/about")}
            type="button"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={linkClasses("/contact")}
            type="button"
          >
            Contact
          </button>
          <button
            className="hover:text-purple-400 font-medium text-white"
            onClick={() => onGetStarted()}
            type="button"
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
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
          <button
            onClick={() => {
              navigate("/pricing");
              setIsMenuOpen(false);
            }}
            className={linkClasses("/pricing") + " text-left"}
            type="button"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setIsMenuOpen(false);
            }}
            className={linkClasses("/about") + " text-left"}
            type="button"
          >
            About
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
            className={linkClasses("/contact") + " text-left"}
            type="button"
          >
            Contact
          </button>
          <button
            className="hover:text-purple-400 text-left font-medium"
            onClick={() => {
              onGetStarted();
              setIsMenuOpen(false);
            }}
            type="button"
          >
            Login
          </button>
          <button
            onClick={() => {
              onGetStarted();
              setIsMenuOpen(false);
            }}
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
