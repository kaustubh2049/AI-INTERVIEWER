import React from "react";
import PlanCard from "../components/PlanCard";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Kickstart your interview prep with essential practice.",
    features: [
      "5 AI interviews / month",
      "Basic question bank",
      "Email OTP auth",
      "Community tips",
      "Limited feedback summary",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "Level up with unlimited practice and smarter insights.",
    highlighted: true,
    features: [
      "Unlimited AI interviews",
      "Adaptive difficulty",
      "Advanced analytics & insights",
      "Behavioral + system design rounds",
      "Downloadable transcripts",
      "Priority email support",
    ],
  },
  {
    name: "Team",
    price: "Custom",
    description: "For bootcamps & organizations training talent.",
    features: [
      "Team dashboard",
      "Centralized candidate tracking",
      "Custom interview templates",
      "Bulk invitations",
      "Usage analytics export",
      "Dedicated success manager",
    ],
  },
];

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-10 pb-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose a plan that scales with your goals. Upgrade anytime. Cancel
          whenever you like.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p) => (
          <PlanCard
            key={p.name}
            {...p}
            onSelect={() => {
              if (p.price === "$0") navigate("/signup");
              else if (p.name === "Pro")
                navigate("/signup", { state: { plan: p.name } });
              else navigate("/contact", { state: { topic: "team-plan" } });
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need a custom enterprise plan?
        </h2>
        <p className="text-gray-400 mb-6">
          We can tailor interviews, reporting, and deployment for your org.
          Reach out and we will design the right solution.
        </p>
        <button
          onClick={() =>
            navigate("/contact", { state: { topic: "enterprise" } })
          }
          className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-colors"
          type="button"
        >
          Contact Sales
        </button>
      </div>
    </main>
  );
};

export default PricingPage;
