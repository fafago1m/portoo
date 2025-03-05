"use client"; // Pastikan ini adalah Client Component

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SiPhp, SiLaravel } from "react-icons/si"; // Ikon framework
import { FiEye } from "react-icons/fi"; // Ikon mata (view)

interface Props {
  src: string; // URL gambar project
  title: string;
  description: string;
  framework: "php" | "laravel"; // Jenis framework
}

const ProjectCard = ({ src, title, description, framework }: Props) => {
  // Pilih ikon berdasarkan framework
  const getFrameworkIcon = () => {
    switch (framework) {
      case "php":
        return <SiPhp className="w-6 h-6 text-white" />; // Ikon PHP
      case "laravel":
        return <SiLaravel className="w-6 h-6 text-red-500" />; // Ikon Laravel
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-[#4A1E8C] group"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg transition-all duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Logo Framework (Diperkecil dan ditempatkan di sudut kanan atas) */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-md">
        {getFrameworkIcon()}
      </div>

      {/* Content */}
      <div className="relative p-6 bg-gradient-to-br from-[#1A0B2E] to-[#2A0E61]">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 text-sm">{description}</p>
        {/* Button with Icon */}
        <div className="mt-4">
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
            <span>View Project</span>
            <FiEye className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125 group-hover:text-purple-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;