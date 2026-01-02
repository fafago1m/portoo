
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-6xl px-4 z-20">
        {/* Frontend Section */}
        <div className="bg-neutral-900/40 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 flex flex-col items-center hover:border-purple-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-purple-500/30 pb-2 w-full text-center tracking-wider">FRONTEND DEVELOPMENT</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </div>

        {/* Backend Section */}
        <div className="bg-neutral-900/40 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 flex flex-col items-center hover:border-purple-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-purple-500/30 pb-2 w-full text-center tracking-wider">BACKEND ARCHITECTURE</h3>
            <div className="flex flex-wrap justify-center gap-6">
                 {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </div>

        {/* Full Stack Section */}
        <div className="bg-neutral-900/40 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 flex flex-col items-center hover:border-purple-500/50 transition-colors duration-300">
             <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-purple-500/30 pb-2 w-full text-center tracking-wider">FULL STACK & MOBILE</h3>
             <div className="flex flex-wrap justify-center gap-6">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </div>

        {/* Tools Section */}
        <div className="bg-neutral-900/40 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 flex flex-col items-center hover:border-purple-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-purple-500/30 pb-2 w-full text-center tracking-wider">DEVOPS & TOOLS</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
