import { Suspense } from "react";
import { motion } from "motion/react";
import { Lanyard } from "./lanyard";
import { AnimatedLetterText } from "./potfolio-text";

export function Hero() {
    return (
        <div className="relative min-h-screen md:h-[120vh] flex flex-col font-sans overflow-hidden w-full bg-primary dark:bg-black">

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />

            {/* 3D Lanyard Layer - High Z-Index for interaction */}
            <div className="absolute inset-0 z-[100] pointer-events-none overflow-visible">
                <Suspense fallback={null}>
                    <Lanyard />
                </Suspense>
            </div>

            {/* Navbar */}
            <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
                <div className="flex items-center gap-1">
                    <div className="bg-foreground text-background font-black tracking-tight text-xs md:text-sm px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm">
                        IHZA
                        <div className="absolute -bottom-1.5 left-0 w-3 h-3 bg-foreground"
                            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                    </div>
                    <div className="text-primary-dark font-black text-xs md:text-sm px-3 py-1.5 rounded-full border-[1.5px] border-white shadow-sm"
                        style={{ background: "var(--clr-accent)" }}>DEV</div>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    {["Work", "About", "Stack", "Blog"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                            className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
                <a href="mailto:alfacastel3@gmail.com"
                    className="px-6 py-2 rounded-full border border-white text-white text-xs md:text-sm font-semibold transition-colors"
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--clr-primary)";
                        (e.currentTarget as HTMLElement).style.background = "#fff";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}>
                    Hire me
                </a>
            </nav>

            {/* Hero Content */}
            <main className="flex-1 relative z-10 pt-8 pb-40 md:pt-12 md:pb-64 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
                <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-20 mt-4 mb-16">

                    {/* Card 1 — Bottom Left (desktop only) */}
                    <motion.div animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="hidden md:block absolute -bottom-16 -left-20 z-10 pointer-events-auto">
                        <div className="w-52 aspect-[3/3.5] backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500"
                            style={{ background: "rgba(255,255,255,0.2)" }}>
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden"
                                style={{ background: "#D2B48C" }}>
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ihza&backgroundColor=D2B48C" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <p className="font-bold text-lg text-white">ihza.dev</p>
                                <p className="text-xs text-white/80 mt-1">42+ projects</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 — Top Right (desktop only) */}
                    <motion.div animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="hidden md:block absolute -top-10 -right-20 z-10 pointer-events-auto">
                        <div className="w-52 aspect-[3/3.5] backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500"
                            style={{ background: "rgba(255,255,255,0.2)" }}>
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden"
                                style={{ background: "#2C3E50" }}>
                                <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Frontend" alt="Avatar" className="w-full h-full object-cover scale-150" />
                            </div>
                            <div className="text-center mt-2">
                                <p className="font-bold text-lg text-white">React Dev</p>
                                <p className="text-xs text-white/80 mt-1">3+ yrs experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 — Mid Left (Layered) */}
                    <motion.div animate={{ x: [0, 15, 0], y: [0, -25, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="hidden md:block absolute top-[20%] -left-32 z-0 pointer-events-auto">
                        <div className="w-52 aspect-video backdrop-blur-md border border-white/40 rounded-2xl p-4 flex flex-col items-center justify-center rotate-[-8deg] shadow-xl hover:rotate-0 transition-transform duration-500 bg-white/10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">Core Stack</p>
                            <div className="flex gap-2">
                                {["React", "Next", "TS", "Framer"].map(t => (
                                    <span key={t} className="px-2 py-1 rounded bg-accent text-[8px] font-black text-primary-dark">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 — Mid Right (Layered) */}
                    <motion.div animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="hidden md:block absolute bottom-[30%] -right-32 z-0 pointer-events-auto">
                        <div className="w-48 aspect-square backdrop-blur-md border border-white/40 rounded-3xl p-4 flex flex-col items-center justify-center rotate-[10deg] shadow-xl hover:rotate-0 transition-transform duration-500 bg-white/10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Efficiency</p>
                            <h4 className="text-4xl font-black text-accent leading-none">99%</h4>
                            <p className="text-[8px] text-white/40 font-bold mt-1 uppercase tracking-widest">Performance Score</p>
                            <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "99%" }} transition={{ duration: 2, delay: 1 }} className="h-full bg-accent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Availability badge */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-1.5 md:gap-2 rounded-full px-3 py-1 md:px-4 md:py-2 mb-8 md:mb-10 border"
                        style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                        <span className="relative w-1.5 h-1.5 md:w-2 md:h-2">
                            <span className="absolute inset-0 rounded-full animate-ping opacity-70" style={{ background: "var(--clr-accent)" }} />
                            <span className="relative block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ background: "var(--clr-accent)" }} />
                        </span>
                        <span className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-widest">Available for freelance</span>
                    </motion.div>

                    {/* Portfolio Text Section Integrated into Hero */}
                    <div className="flex flex-col items-center gap-6 w-full text-center mt-8 md:mt-12 mb-2 md:mb-6">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                            <AnimatedLetterText text="PORTFOLIO" letterToReplace="O"
                                className="text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem]" />
                        </motion.div>
                       
                    </div>

                    {/* Cinematic Horizontal Typography - IHZA DEV */}
                    <div className="w-full flex flex-row items-center justify-center gap-2 md:gap-4 flex-wrap py-4 md:py-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="flex flex-row overflow-hidden pb-2"
                        >
                            {"IHZA".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { y: 150, rotate: 10 },
                                        visible: { y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 } }
                                    }}
                                    className="text-[clamp(3.5rem,10vw,110px)] font-black leading-[0.85] tracking-tighter m-0 p-0 uppercase inline-block"
                                    style={{
                                        fontFamily: '"Arial Black", Impact, sans-serif', color: "var(--clr-accent)",
                                        textShadow: "4px 4px 0 var(--clr-primary-dark), 8px 8px 0 rgba(0,0,0,0.1)"
                                    }}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="flex flex-row overflow-hidden pb-2"
                        >
                            {"DEV".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { y: 150, rotate: -10 },
                                        visible: { y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.05 } }
                                    }}
                                    className="text-[clamp(3.5rem,10vw,110px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase inline-block"
                                    style={{
                                        fontFamily: '"Arial Black", Impact, sans-serif',
                                        textShadow: "4px 4px 0 var(--clr-primary-dark), 8px 8px 0 rgba(0,0,0,0.1)"
                                    }}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile pill cards — md:hidden, in-flow */}
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden flex items-center justify-center gap-3 mt-10 w-full">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg"
                            style={{ background: "rgba(255,255,255,0.15)" }}>
                            <div className="w-9 h-9 rounded-full border-2 border-white/50 overflow-hidden shrink-0" style={{ background: "#D2B48C" }}>
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ihza&backgroundColor=D2B48C" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-black text-xs text-white leading-none">ihza.dev</p>
                                <p className="text-[10px] text-white/70 mt-0.5 font-semibold">42+ projects</p>
                            </div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg"
                            style={{ background: "rgba(255,255,255,0.15)" }}>
                            <div className="w-9 h-9 rounded-full border-2 border-white/50 overflow-hidden shrink-0" style={{ background: "#2C3E50" }}>
                                <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Frontend" alt="Avatar" className="w-full h-full object-cover scale-150" />
                            </div>
                            <div>
                                <p className="font-black text-xs text-white leading-none">React Dev</p>
                                <p className="text-[10px] text-white/70 mt-0.5 font-semibold">3+ yrs exp</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
