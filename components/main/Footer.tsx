"use client";

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
    <footer className="relative w-full bg-[#030014] text-gray-400 py-16 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-xl text-white tracking-tight">
                Ihza<span className="text-purple-500">.</span>Dev
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Membangun pengalaman digital berkualitas tinggi dengan teknologi modern
              serta fokus pada performa dan kegunaan yang maksimal.
            </p>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Komunitas</h4>
            <div className="flex flex-col gap-3">
              <a href="https://porto.actstore.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <FaYoutube size={18} /> Website Utama
              </a>
              <a href="https://github.com/fafago1m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <RxGithubLogo size={18} /> Github
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <RxLinkedinLogo size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Media Sosial</h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <RxInstagramLogo size={18} /> Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <RxLinkedinLogo size={18} /> Linkedin
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors text-sm">
                <RxTwitterLogo size={18} /> Twitter
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Kontak</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:alfacastel3@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                alfacastel3@gmail.com
              </a>
              <p className="text-gray-400">+62 896 7585 0011</p>
              <p className="text-gray-400">Yogyakarta, Bantul, 55711</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Ihza Maulana Alfarisi. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;