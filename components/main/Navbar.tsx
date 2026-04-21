"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about-me", label: "Tentang Saya" },
    { href: "#skills", label: "Keahlian" },
    { href: "#certificates", label: "Sertifikat" },
    { href: "#projects", label: "Proyek" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12 
      ${scrolled ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#about-me" className="group flex items-center gap-2">
        
          <span className="font-bold text-xl md:text-2xl text-white tracking-tight">
            Ihza<span className="text-zinc-500">.</span>Dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-6 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-2xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-gray-300 hover:text-purple-400 py-2 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 w-full py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-zinc-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
