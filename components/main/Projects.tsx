"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Provincial LKS Game Competition",
    description: "Developed a comprehensive Full Stack RESTful API using React JS for the front end, designed specifically for the provincial-level competition. The system handles real-time data and user interactions efficiently.",
    image: "/lks.jpg",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
    tags: ["React", "API", "Competition"]
  },
  {
    title: "Catering Management System",
    description: "A robust Full Stack solution combining Laravel's powerful backend with React JS's dynamic frontend. This application streamlines catering operations, from order management to inventory tracking.",
    image: "/cate1.png",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
    tags: ["Laravel", "React", "Business"]
  },
  {
    title: "Personal Portfolio v2",
    description: "The latest iteration of my professional portfolio, built with Next.js 14 and TypeScript. Features modern glassmorphism UI, interactive 3D elements, and fully responsive design.",
    image: "/poto.png",
    link: "https://github.com/fafago1m",
    source: "https://github.com/fafago1m",
    tags: ["Next.js", "TypeScript", "3D"]
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group glass-panel rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Open Project
                  </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h1 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {tag}
                      </span>
                  ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                {project.description}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
                 <span className="text-xs text-gray-500 font-medium">
                    2024
                 </span>
                 <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-white flex items-center gap-2 transition-colors"
                  >
                    Code <span className="text-lg">↗</span>
                  </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 z-30">
        <a
          href="https://github.com/fafago1m"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-8 py-3 rounded-lg bg-transparent border border-[#7042f88b] text-white hover:bg-[#7042f835] transition-all duration-300 shadow-[0_0_20px_rgba(112,66,248,0.5)]"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Projects;
