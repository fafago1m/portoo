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
      <div className="relative h-full w-full flex flex-col gap-5 justify-center m-auto text-start z-20 order-2 md:order-1">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm"
        >
          <SparklesIcon className="text-indigo-400 mr-2 h-4 w-4" />
          <span className="text-indigo-200 text-sm font-medium">Full Stack Software Engineer</span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-[600px]"
        >
          <span>
            Hi, I&apos;m
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Ihza Maulana
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-muted-foreground my-5 max-w-[600px] leading-relaxed font-light"
        >
          I architect and build scalable web applications. With a focus on performance and user experience, I transform complex problems into elegant digital solutions using modern technologies.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
            <a
            href="#projects"
            className="py-3 px-8 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all hover:translate-y-[-2px]"
            >
            See My Work
            </a>
            <a
            href="/cv.pdf"
            download
            className="py-3 px-8 border border-border bg-card/50 text-foreground rounded-lg font-semibold hover:bg-card transition-all"
            >
            Download CV
            </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
