import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { MagneticButton } from './magnetic-button';

const PROJECTS = [
    {
        title: "FinTech Core",
        category: "Banking System",
        description: "A revolutionary banking dashboard designed for speed and clarity. Built with intensive data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        link: "#",
        tech: ["React", "Zustand"]
    },
    {
        title: "Aura Commerce",
        category: "Digital Experience",
        description: "High-conversion headless e-commerce solution with dynamic 3D product rendering.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        year: "2023",
        link: "#",
        tech: ["Next.js", "Three.js"]
    },
    {
        title: "Nexus AI",
        category: "SaaS Platform",
        description: "Context-aware AI editor that helps creators write better and faster with real-time feedback.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
        year: "2024",
        link: "#",
        tech: ["OpenAI", "React"]
    },
    {
        title: "Vanguard Sec",
        category: "Cybersecurity",
        description: "Enterprise-grade threat monitoring and network visualization dashboard.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        year: "2023",
        link: "#",
        tech: ["Vue", "D3.js"]
    }
];

export function SpotlightSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-background transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] -left-20 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Header Content */}
            <div className="text-center mb-16">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-foreground"
                                    >
                                        PRO<span className="text-primary">JECT</span>
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.1 }}
                                        className="text-foreground/50 "
                                    >
                                        Real-world projects built with modern technologies and a focus on performance and user experience
                                    </motion.p>
                                </div>

            {/* Accordion Gallery Showcase */}
            <div className="w-full max-w-[1440px] px-4 md:px-10 h-[65vh] md:h-[75vh] flex flex-col md:flex-row gap-3 md:gap-4 relative z-10">
                {PROJECTS.map((project, idx) => {
                    const isActive = activeIndex === idx;

                    return (
                        <motion.div
                            key={idx}
                            layout
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={() => setActiveIndex(idx)}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`relative overflow-hidden cursor-pointer group rounded-3xl md:rounded-[3rem] bg-muted ${isActive ? 'flex-[6] md:flex-[8] shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)]' : 'flex-1 md:flex-[1]'
                                }`}
                        >
                            <motion.img
                                layout
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                            />

                            {/* Overlay Gradients */}
                            <div className={`absolute inset-0 transition-opacity duration-700 ${isActive
                                    ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
                                    : 'bg-black/60 group-hover:bg-black/40'
                                }`} />

                            {/* Active Panel Content */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end h-full"
                                    >
                                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                                            <span className="px-3 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-[10px] md:text-xs font-black text-white uppercase tracking-widest shadow-lg">
                                                {project.category}
                                            </span>
                                            <span className="text-accent font-black text-xs md:text-sm">{project.year}</span>
                                        </div>

                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 w-full">
                                            <div className="flex-1 max-w-2xl">
                                                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/70 text-sm md:text-lg leading-relaxed max-w-lg">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-6 md:gap-8 shrink-0 pb-2">
                                                {/* Tech Stack Pills */}
                                                <div className="hidden lg:flex gap-2">
                                                    {project.tech.map(t => (
                                                        <span key={t} className="px-4 py-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black text-white/90 uppercase tracking-widest">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                <MagneticButton strength={0.3}>
                                                    <a href={project.link} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-black font-black hover:scale-110 transition-transform duration-500 shadow-2xl">
                                                        <ArrowUpRight size={36} className="md:w-10 md:h-10" />
                                                    </a>
                                                </MagneticButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Inactive Vertical/Horizontal Text */}
                            <AnimatePresence>
                                {!isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <p className="text-white font-black text-xl md:text-3xl uppercase tracking-widest md:-rotate-90 whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                            {project.title}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
