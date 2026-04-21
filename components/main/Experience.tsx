"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "PKL & Magang – PT Farma Global Teknologi",
        duration: "10 Bulan",
        type: "experience"
    },
    {
        title: "Freelance Web Developer",
        duration: "1+ Tahun",
        type: "experience"
    },
    {
        title: "Founder – Advance Code Technology (ACT STORE)",
        duration: "2023 - Sekarang",
        type: "experience"
    },
    {
        title: "Pendidikan – SMK N 1 SANDEN",
        duration: "2023 - 2026",
        type: "education"
    },
];

const Experience = () => {
    return (
        <section id="experience" className="relative flex flex-col items-center justify-center py-24 bg-[#030014] overflow-hidden w-full">
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-start lg:items-center mb-16 text-left lg:text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-6"
                    >
                        Rekam Jejak
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
                    >
                        Pengalaman & Pendidikan
                    </motion.h2>
                </div>

                <div className="relative border-l-2 border-zinc-900 ml-4 lg:mx-auto lg:w-fit">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 py-8 group"
                        >
                            {/* Simple Solid Dot */}
                            <div className="absolute left-[-9px] top-10 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-zinc-500 transition-all z-10" />

                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                                    {exp.duration}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                                    {exp.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
