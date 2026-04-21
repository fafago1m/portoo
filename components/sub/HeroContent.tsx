"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Lanyard from "../../app/components/Lanyard/Lanyard";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 mt-20 lg:mt-40 w-full z-[20] gap-12 lg:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left m-auto lg:w-1/2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-zinc-800 bg-zinc-900/50 flex items-center gap-2 w-fit rounded-full"
        >
          <SparklesIcon className="text-zinc-400 h-4 w-4" />
          <h1 className="Welcome-text text-[12px] text-zinc-300 font-semibold tracking-widest">
            Portfolio Ihza Maulana Alfarisi
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-[600px] leading-tight"
        >
          <span>
            Menciptakan
            <span className="text-white relative z-10 px-2">
              Pengalaman Digital
              <span className="absolute bottom-1 left-0 w-full h-[30%] bg-white/20 -z-10 rounded-sm"></span>
            </span>
            Terbaik
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Saya adalah Junior Fullstack Web Developer dengan pengalaman membangun aplikasi berbasis Laravel, Vue.js, dan Next.js untuk kebutuhan bisnis, pendidikan, dan SaaS. Terbiasa mengembangkan sistem end-to-end secara profesional.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 md:mt-10"
        >
          <a
            href="/cv.pdf"
            download
            className="group relative px-8 py-3.5 bg-white text-black font-bold rounded-lg transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-3"
          >
            <span>Unduh CV</span>
            <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-800 transition-all hover:border-zinc-700 active:scale-95 flex items-center gap-3"
          >
            <span>Jelajahi Proyek</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex flex-1 justify-center items-center relative w-full lg:w-1/2 mt-10 lg:mt-0"
      >
        <div className="relative z-[50] w-full max-w-[600px] flex justify-center items-center">
          <div className="absolute inset-0 z-20 pointer-events-none translate-y-[-40px] md:translate-y-[-70px] lg:translate-y-[-100px]">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <Image
            src="/mainIconsdark.svg"
            alt="tech stack"
            height={600}
            width={600}
            className="w-full h-auto opacity-80"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;