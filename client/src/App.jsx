import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ProcessSection from "./components/ProcessSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import TechnicalRoundPage from "./pages/TechnicalRoundPage";
import InterviewSetupPage from "./pages/InterviewSetupPage";

function App() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/login");
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <Navbar onGetStarted={handleGetStarted} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection onGetStarted={handleGetStarted} />
              <StatsSection />
              <FeaturesSection />
              <ProcessSection />
              <Testimonials
                testimonials={[
                  {
                    avatar: "😀",
                    rating: 5,
                    content: "This platform helped me ace my interviews!",
                    name: "Alice Smith",
                    role: "Software Engineer at Google",
                  },
                  {
                    avatar: "🚀",
                    rating: 4,
                    content: "Great practice questions and feedback.",
                    name: "Bob Johnson",
                    role: "Data Scientist at Facebook",
                  },
                  {
                    avatar: "💼",
                    rating: 5,
                    content: "I landed my dream job thanks to this site!",
                    name: "Carol Lee",
                    role: "Product Manager at Amazon",
                  },
                ]}
                currentTestimonial={0}
                setCurrentTestimonial={() => {}}
              />
              <CTASection onGetStarted={handleGetStarted} />
              <Footer />
            </>
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technical-round"
          element={
            <ProtectedRoute>
              <TechnicalRoundPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview/setup"
          element={
            <ProtectedRoute>
              <InterviewSetupPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
