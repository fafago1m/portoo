import { BrandLogo } from "./brand-logo";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { LaptopIllustration } from "./laptop-illustration";

export function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-primary text-white dark:bg-black">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

            <nav aria-label="Hero navigation" className="relative z-30 mx-auto mb-8 flex w-full max-w-[1440px] items-center justify-between gap-2 px-4 py-6 pr-20 md:gap-4 md:px-10 md:py-8 md:pr-28">
                <a href="#home" aria-label="Ihza Dev — Home" className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                    <BrandLogo onPrimary />
                </a>
                <div className="hidden items-center space-x-2 md:flex">
                    {["Work", "About", "Stack"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10">{item}</a>
                    ))}
                </div>
                <a href="mailto:alfacastel3@gmail.com" className="shrink-0 rounded-full border border-white px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark md:px-6 md:text-sm">Hire me</a>
            </nav>

            <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-6 pb-12 sm:px-8 lg:min-h-[640px] lg:grid-cols-[1.2fr_1fr] lg:gap-4 lg:px-12 lg:pb-16">
                <motion.div className="relative z-10 min-w-0 pt-4 lg:pt-0" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[10px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#ccff0055]" /> Available for freelance
                    </p>
                    <p className="mb-5 flex items-center gap-3 text-sm font-medium text-white/75">
                        <span className="h-px w-8 bg-accent" aria-hidden="true" /> Hey, I'm Ihza. A full stack developer.
                    </p>
                    <h1 id="hero-title" className="text-[clamp(3.1rem,7.3vw,6.5rem)] font-black leading-[1.02] tracking-[-0.065em]">
                        Good design.<br />
                        Great code.<br />
                        <span className="relative inline-block pb-3 text-accent">
                            Real impact.
                            <svg aria-hidden="true" viewBox="0 0 440 20" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-3 w-full text-accent/70" fill="none">
                                <path d="M3 14C110 1 267 0 436 9M80 18C207 7 333 7 401 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mt-6 max-w-[360px] text-sm leading-7 text-white/75 sm:text-base">Full stack developer turning ideas into thoughtful, interactive websites. Built to feel as good as they look.</p>
                    <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-7">
                        <a href="#work" className="group inline-flex items-center gap-4 rounded-full bg-accent pl-6 pr-2 py-2 text-sm font-extrabold text-black shadow-[4px_4px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                            Explore my work <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-accent transition-transform group-hover:rotate-45"><ArrowUpRight aria-hidden="true" className="h-5 w-5" /></span>
                        </a>
                        <a href="#about" className="inline-flex items-center gap-2 border-b border-white/40 py-2 text-sm font-semibold hover:border-accent hover:text-accent">More about me <ArrowDown aria-hidden="true" className="h-4 w-4" /></a>
                    </div>
                </motion.div>

                <div className="relative mt-4 h-[380px] min-w-0 sm:h-[470px] lg:mt-0 lg:h-[570px]" aria-label="Developer laptop illustration">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="absolute aspect-square w-[88%] rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-transparent" />
                        <div className="absolute aspect-square w-[70%] rounded-full border border-dashed border-white/10" />
                        <span className="absolute left-0 top-[16%] text-[clamp(4rem,9vw,8rem)] font-black tracking-tighter text-white/[0.06]">MAKE IT</span>
                        <span className="absolute bottom-[13%] right-0 text-[clamp(4rem,9vw,8rem)] font-black tracking-tighter text-white/[0.06]">MATTER.</span>
                        <Sparkles className="absolute right-[7%] top-[18%] h-7 w-7 text-accent" strokeWidth={1.3} />
                        <span className="absolute bottom-[22%] left-[7%] h-2 w-2 rounded-full bg-accent" />
                    </div>
                    <div className="absolute inset-0 overflow-hidden">
                        <LaptopIllustration />
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Not just pixels. Personality.</span>
                        <span className="text-[11px] text-white/50">Ihza / Full Stack Developer</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/15 px-6 pb-32 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:px-8 lg:px-12">
                <span>Design-minded. Detail-driven.</span>
                <span>React <span className="mx-2 text-accent">/</span> TypeScript <span className="mx-2 text-accent">/</span> Motion</span>
            </div>
        </section>
    );
}
