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
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center z-10"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-full h-auto"
        />
      </motion.div>
      <div className="relative h-full w-full flex flex-col gap-5 justify-center m-auto text-start z-20">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Programmer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-4xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0 pointer-events-none">
              <Lanyard position={[0, 0, 25]} gravity={[0, -20, 0]} />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Ihza{" "}
            </span>
            Maulana Alfarisi
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/cv.pdf"
          download
          className="relative py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base z-30"
        >
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;