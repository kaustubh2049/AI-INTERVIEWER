import React from "react";
import { Check, Zap } from "lucide-react";

const PlanCard = ({
  name,
  price,
  period = "mo",
  description,
  features,
  highlighted,
  ctaText,
  onSelect,
}) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-900/80 to-gray-800/60 border-white/10 text-white transition-transform hover:-translate-y-1 hover:shadow-2xl ${
        highlighted ? "ring-2 ring-purple-500/60" : ""
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
        {highlighted && <Zap className="w-5 h-5 text-yellow-400" />} {name}
      </h3>
      <p className="text-sm text-gray-300 mb-6 min-h-[40px]">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold">{price}</span>
        {price !== "Custom" && (
          <span className="text-gray-400 font-medium ml-1">/{period}</span>
        )}
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="w-5 h-5 flex-shrink-0 text-green-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full rounded-xl py-3 font-semibold text-sm transition-colors shadow-md shadow-black/40 border border-white/10 ${
          highlighted
            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
            : "bg-white/10 hover:bg-white/20"
        }`}
        type="button"
      >
        {ctaText || (price === "Custom" ? "Contact Sales" : "Get Started")}
      </button>
    </div>
  );
};

export default PlanCard;
