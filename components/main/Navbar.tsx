"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`w-full h-[70px] fixed top-0 z-50 px-6 md:px-10 border-b border-[#7042f8]/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex items-center justify-between 
      ${scrolled ? "bg-[#0a0025]/95 shadow-[#330099]/60" : "bg-transparent"}`}
    >
      <a href="#about-me" className="flex items-center gap-2">
        <span className="font-extrabold text-lg md:text-xl text-white tracking-wide drop-shadow-lg">
          Fafa Dev
        </span>
      </a>

      <nav className="hidden md:flex items-center justify-between gap-4 px-8 py-3 text-gray-300 shadow-2xl backdrop-blur-lg">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#7042f8] hover:text-white hover:shadow-lg text-sm font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="md:hidden z-50">
        {menuOpen ? (
          <HiX className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <HiMenu className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-b from-[#1a0066] to-[#330099] shadow-lg backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-[#7042f8]"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
