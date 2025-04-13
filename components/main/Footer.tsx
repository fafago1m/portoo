import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Bagian Atas Footer */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Community Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-lg mb-4">Community</div>
            <a
              href="https://youtube.com/fafagaming"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <FaYoutube className="mr-2" />
              <span>Youtube</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <RxGithubLogo className="mr-2" />
              <span>Github</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <RxDiscordLogo className="mr-2" />
              <span>Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-lg mb-4">Social Media</div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <RxInstagramLogo className="mr-2" />
              <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <RxTwitterLogo className="mr-2" />
              <span>Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <RxLinkedinLogo className="mr-2" />
              <span>Linkedin</span>
            </a>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-lg mb-4">About</div>
      
            <a
              href="#about"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <span>Learning about me</span>
            </a>
            <a
              href="mailto:alfacastel3@gmail.com"
              className="flex items-center my-2 hover:text-purple-500 transition-colors"
            >
              <span>alfacastel3@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bagian Bawah Footer */}
        <div className="text-sm text-center mt-8 border-t border-gray-700 pt-4 w-full">
          &copy; Fafa Dev 2025. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;