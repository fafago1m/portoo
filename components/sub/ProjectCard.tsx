"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  source?: string;
}

const ProjectCard = ({ src, title, description, link, source }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-[#110132]/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(123,31,162,0.2)] transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Buttons on Image Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-purple-600 hover:border-purple-500 transition-all active:scale-95"
              title="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-cyan-600 hover:border-cyan-500 transition-all active:scale-95"
              title="Source Code"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-xl hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all"
            >
              Explore <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;