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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50 relative mt-10">
      {/* Top Gradient Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      {/* Glass Background */}
      <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-md -z-10" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-sm">
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start z-10">
            <div className="font-bold text-[16px] text-white mb-4">Community</div>
            <a href="https://youtube.com/@fafagaming" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a href="https://github.com/fafago1m" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="#" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start z-10">
            <div className="font-bold text-[16px] text-white mb-4">Social Media</div>
            <a href="#" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="#" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a href="#" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start z-10">
            <div className="font-bold text-[16px] text-white mb-4">About</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <span className="text-[15px] ml-[6px] text-gray-400 hover:text-white transition-colors">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <span className="text-[15px] ml-[6px] text-gray-400 hover:text-white transition-colors">Learning about me</span>
            </p>
            <a href="mailto:alfacastel3@gmail.com" className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <span className="text-[15px] ml-[6px]">alfacastel3@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center text-gray-400 opacity-60">
          &copy; Fafa Dev 2025. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
