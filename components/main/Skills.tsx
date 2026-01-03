
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-6xl px-4 z-20">
        {/* Frontend Section */}
        <div className="relative group overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(112,66,248,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-8 border-b border-white/10 pb-4 w-full text-center tracking-wider relative z-10">FRONTEND DEVELOPMENT</h3>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
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
        <div className="relative group overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(112,66,248,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-8 border-b border-white/10 pb-4 w-full text-center tracking-wider relative z-10">BACKEND ARCHITECTURE</h3>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
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
        <div className="relative group overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(112,66,248,0.3)]">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
             <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-8 border-b border-white/10 pb-4 w-full text-center tracking-wider relative z-10">FULL STACK & MOBILE</h3>
             <div className="flex flex-wrap justify-center gap-8 relative z-10">
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
        <div className="relative group overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(112,66,248,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-8 border-b border-white/10 pb-4 w-full text-center tracking-wider relative z-10">DEVOPS & TOOLS</h3>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
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
    </section>
  );
};

export default Skills;
