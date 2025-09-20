import React from "react";
import { Star } from "lucide-react";

const Testimonials = ({
  testimonials,
  currentTestimonial,
  setCurrentTestimonial,
}) => (
  <div className="mb-20 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">
      Join Thousands Who{" "}
      <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Got Hired
      </span>
    </h2>
    <p className="text-white/80 text-xl mb-12">
      See how our users landed their dream jobs at top companies
    </p>

    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
      <div className="max-w-4xl mx-auto relative h-64">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-500 ${
              idx === currentTestimonial
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                {t.avatar}
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-white/80 text-2xl leading-relaxed mb-6 max-w-3xl mx-auto">
                "{t.content}"
              </p>
              <div className="text-white font-semibold text-lg">{t.name}</div>
              <div className="text-purple-400 font-medium">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 rounded-full transition-all duration-300 ${
              idx === currentTestimonial
                ? "bg-purple-500 w-12"
                : "bg-gray-600 w-3"
            }`}
            onClick={() => setCurrentTestimonial(idx)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
