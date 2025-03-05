"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Floating Elements",
    description: "Experience futuristic hover effects with 3D depth.",
    image: "/Cardimage.png",
    link: "https://example.com/floating-elements",
    source: "https://github.com/example/floating-elements",
  },
  {
    title: "Interactive Web Design",
    description: "Next-level interactive UI components with smooth animations.",
    image: "/InteractiveDesign.png",
    link: "https://example.com/interactive-design",
    source: "https://github.com/example/interactive-design",
  },
  {
    title: "AI-Powered Analytics",
    description: "Leverage AI to gain insights from your data.",
    image: "/AIAnalytics.png",
    link: "https://example.com/ai-analytics",
    source: "https://github.com/example/ai-analytics",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:40px_40px] opacity-20 animate-grid-scroll"></div>
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10 font-orbitron">
        My Projects
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black bg-opacity-80 border border-purple-500 rounded-xl p-6 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 w-full max-w-sm"
            >
              <h2 className="text-xl font-bold text-purple-300 font-orbitron">{project.title}</h2>
              <p className="text-sm text-gray-400 mt-2">{project.description}</p>
              <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
                <Image src={project.image} height={500} width={500} className="rounded-lg object-cover w-full h-48" alt="thumbnail" />
              </motion.div>
              <div className="flex justify-between items-center mt-6 z-10 relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-white border border-purple-400 hover:bg-purple-500 transition"
                >
                  View →
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-cyan-500 transition"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
