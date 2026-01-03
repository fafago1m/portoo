"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Lanyard from "@/app/components/Lanyard/Lanyard";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Lanyard Background */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[-1] pointer-events-none">
         <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center z-10 order-1 md:order-2"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-full h-auto max-w-[400px] md:max-w-[650px]"
        />
      </motion.div>
      <div className="relative h-full w-full flex flex-col gap-6 justify-center m-auto text-start z-20 order-2 md:order-1">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center px-4 py-2 rounded-full glass-panel"
        >
          <SparklesIcon className="text-primary mr-2 h-4 w-4" />
          <span className="text-gray-300 text-sm font-medium tracking-wide">Available for Freelance</span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-6xl md:text-7xl font-bold text-white max-w-[600px] leading-tight"
        >
          <span>
            Crafting
            <span className="block text-gradient-purple">
              Digital Experiences
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg md:text-xl text-gray-400 my-4 max-w-[600px] font-light leading-relaxed"
        >
          I&apos;m <span className="text-white font-medium">Ihza Maulana</span>, a Full Stack Engineer specializing in building exceptional digital products with modern technologies.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-6"
        >
            <a
            href="#projects"
            className="py-3 px-8 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
            View Projects
            </a>
            <a
            href="/cv.pdf"
            download
            className="py-3 px-8 rounded-xl glass-panel text-white font-semibold hover:bg-white/10 transition-colors"
            >
            Download CV
            </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
