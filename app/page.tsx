import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Certificates from "@/components/main/Certificates";
import { SignupFormDemo } from "@/components/sub/SignupFormDemo";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#030014]">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <SignupFormDemo />
      </div>
    </main>
  );
}