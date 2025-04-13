"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lomba GAME LKS Tingkat Provinsi",
    description: "Full Stack Rest Full API dengan React JS.",
    image: "/lks.jpg",
    link: "https://example.com/floating-elements",
    source: "https://github.com/example/floating-elements",
  },
  {
    title: "Web Catering",
    description: "Full Stack Rest Full API dengan Laravel & React JS.",
    image: "/cate1.png",
    link: "https://example.com/interactive-design",
    source: "https://github.com/example/interactive-design",
  },
  {
    title: "Portofolio Update",
    description: "Project fullstack dengan Next JS dan TypeScript.",
    image: "/poto.png",
    link: "https://example.com/ai-analytics",
    source: "https://github.com/example/ai-analytics",
  },
];

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center py-20 bg-gradient-to-br relative overflow-hidden"
        id="projects"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:40px_40px] opacity-20 animate-grid-scroll z-0"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10 font-orbitron z-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 w-full max-w-7xl z-10">
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
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-neutral-900 border border-purple-500 rounded-xl shadow-lg p-4 max-w-sm w-full"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    width={500}
                    height={300}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <h2 className="text-xl font-semibold text-purple-300 mt-4 font-orbitron">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md text-white border border-purple-400 hover:bg-purple-500 transition"
                  >
                    View →
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-cyan-500 transition"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tombol di luar section project */}
      <div className="flex justify-center mt-10 z-50 relative">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/fafago1m" // Ganti dengan GitHub kamu
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/50 transition-all font-medium shadow-lg"
        >
          All Projects in GitHub
        </motion.a>
      </div>
    </>
  );
};

export default Projects;
