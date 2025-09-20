import React from "react";
import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-6 py-12 text-white/80">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <div className="space-y-2">
            <div>Features</div>
            <div>Pricing</div>
            <div>API</div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <div className="space-y-2">
            <div>About</div>
            <div>Blog</div>
            <div>Careers</div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <div className="space-y-2">
            <div>Help Center</div>
            <div>Contact</div>
            <div>Status</div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <div className="space-y-2">
            <div>Privacy</div>
            <div>Terms</div>
            <div>Security</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold">AI Interviewer</span>
        </div>
        <div className="text-white/70">
          © 2025 AI Interviewer. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
