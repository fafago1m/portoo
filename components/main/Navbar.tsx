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
      className={`w-full h-[70px] fixed top-0 z-50 px-6 md:px-10 border-b transition-all duration-300 backdrop-blur-md flex items-center justify-between
      ${scrolled ? "bg-background/80 border-border shadow-sm" : "bg-transparent border-transparent"}`}
    >
      <a href="#about-me" className="flex items-center gap-2">
        <span className="font-bold text-lg md:text-xl text-foreground tracking-tight">
          Fafa Dev
        </span>
      </a>

      <nav className="hidden md:flex items-center justify-between gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="md:hidden z-50">
        {menuOpen ? (
          <HiX className="text-foreground text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <HiMenu className="text-foreground text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-background border-l border-border shadow-xl flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-foreground text-lg font-medium transition-all duration-300 hover:text-primary"
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
