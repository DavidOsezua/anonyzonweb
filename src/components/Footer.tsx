import React from "react";
import LogoText from "./svgComponents/LogoText";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mt-8 lg:mt-16 bg-[#00000099]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center">
            <LogoText />
          </div>

          <div className="flex gap-4 text-center sm:text-left">
            <a
              href="#privacy"
              className="text-gray-400 border-r border-[#FFFFFF] pr-6 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 border-r border-[#FFFFFF] pr-6 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#support"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
