
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
        <div className="glass-panel rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-200 mb-6 border-b border-white/5 pb-2">Frontend Stack</h3>
            <div className="flex flex-wrap gap-6">
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
        <div className="glass-panel rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-200 mb-6 border-b border-white/5 pb-2">Backend Stack</h3>
            <div className="flex flex-wrap gap-6">
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
        <div className="glass-panel rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300">
             <h3 className="text-lg font-medium text-gray-200 mb-6 border-b border-white/5 pb-2">Full Stack & Mobile</h3>
             <div className="flex flex-wrap gap-6">
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
        <div className="glass-panel rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-200 mb-6 border-b border-white/5 pb-2">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-6">
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
