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
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Full Stack Software Engineer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Ihza Maulana{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I architect and build scalable web applications. With a focus on performance and user experience, I transform complex problems into elegant digital solutions using modern technologies.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
            <a
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg z-30 font-semibold hover:shadow-purple-500/50 transition-shadow"
            >
            See My Work
            </a>
            <a
            href="/cv.pdf"
            download
            className="py-2 px-6 border border-[#7042f88b] bg-transparent text-center text-gray-300 cursor-pointer rounded-lg z-30 font-semibold hover:bg-[#7042f835] hover:text-white transition-colors"
            >
            Download CV
            </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
