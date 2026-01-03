
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
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-8 border-b border-border pb-4 w-full text-center tracking-wide">FRONTEND DEVELOPMENT</h3>
            <div className="flex flex-wrap justify-center gap-8">
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
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-8 border-b border-border pb-4 w-full text-center tracking-wide">BACKEND ARCHITECTURE</h3>
            <div className="flex flex-wrap justify-center gap-8">
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
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
             <h3 className="text-lg font-semibold text-foreground mb-8 border-b border-border pb-4 w-full text-center tracking-wide">FULL STACK & MOBILE</h3>
             <div className="flex flex-wrap justify-center gap-8">
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
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-8 border-b border-border pb-4 w-full text-center tracking-wide">DEVOPS & TOOLS</h3>
            <div className="flex flex-wrap justify-center gap-8">
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
