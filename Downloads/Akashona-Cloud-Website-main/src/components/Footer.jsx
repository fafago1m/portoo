import { ChevronDown, Twitter, Facebook, Youtube, Linkedin, Github, Gitlab } from "lucide-react";
import { footersection } from "../database/footersection";
import Logo from "../assets/logo.png";
import React, { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

const sections = footersection;

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 lg:px-16">
      <div className="lg:flex lg:justify-between lg:items-start lg:space-x-8">
        
        {/* Desktop View */}
        <div className="hidden lg:flex lg:space-x-8">
        {sections.map(section => (
            <div key={Object.keys(section)[0]}>
                <h3 className="font-semibold text-gray-400 mb-3">{Object.keys(section)[0]}</h3>
                <ul className="space-y-1 text-gray-500">
                {section[Object.keys(section)[0]].map(item => (
                    <li key={item} className="hover:text-gray-400 transition duration-200">{item}</li>
                ))}
                </ul>
            </div>
            ))}

        </div>
        <div className="lg:hidden">
        {sections.map(section => {
            const title = Object.keys(section)[0];
            return (
                <div key={title} className="mb-6">
                <button
                    className="font-semibold text-gray-400 text-lg mb-2 w-full flex justify-between items-center transition duration-200 ease-in-out rounded-md"
                    onClick={() => toggleSection(title)}
                >
                    {title}
                    <span className="text-2xl">
                    <ChevronDown className={`mt-[0.6px] transition-transform duration-200 ${openSection === title ? "rotate-180" : ""}`} />
                    </span>
                </button>
                <ul className={`transition-all duration-300 ease-in-out ${openSection === title ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    {section[title].map(item => (
                    <li key={item} className="text-gray-500 hover:text-gray-400 transition duration-200">{item}</li>
                    ))}
                </ul>
                </div>
            );
            })}
        </div>

        <div className="text-center lg:text-left mt-6 lg:mt-0">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
            <img src={Logo} alt="Logo" className="h-12" />
            <p className="text-sm text-gray-200 lg:mt-2">Simplicity Meets Performance</p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-blue-500 transition duration-200">cs@akashonacloud.com</a>
            <a href="#" className="hover:text-blue-500 transition duration-200">62 851 9000 1285</a>
          </div>
          <div className="mt-4 space-x-4 text-gray-400">
            <a href="/tos" className="text-sm hover:text-gray-200 transition duration-200">Terms of Service</a>
            <a href="/tos" className="text-sm hover:text-gray-200 transition duration-200">Privacy Policy</a>
          </div>
          <p className="text-sm text-gray-500 mt-4">AkashonaCloud© 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
