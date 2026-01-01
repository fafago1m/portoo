"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Provincial LKS Game Competition",
    description: "Full Stack RESTful API with React JS. Created for the provincial level competition.",
    image: "/lks.jpg",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
  },
  {
    title: "Catering Website",
    description: "Full Stack RESTful API with Laravel & React JS. A complete solution for catering businesses.",
    image: "/cate1.png",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
  },
  {
    title: "Portfolio Update",
    description: "Fullstack project with Next.js and TypeScript. The latest iteration of my personal portfolio.",
    image: "/poto.png",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0c0c1dd2] backdrop-blur-sm max-w-sm mx-auto w-full group cursor-pointer hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-purple-600 transition text-white text-sm font-bold"
                  >
                    View Project
                  </a>
              </div>
            </div>

            <div className="p-4 relative z-10">
              <h1 className="text-2xl font-semibold text-white mb-2">{project.title}</h1>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex justify-between items-center mt-2">
                 <span className="text-xs text-purple-400 border border-purple-500/30 px-2 py-1 rounded">
                    Fullstack
                 </span>
                 <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1"
                  >
                    Code &rarr;
                  </a>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 z-30">
        <a
          href="https://github.com/fafago1m"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-8 py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
