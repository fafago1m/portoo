"use client";
import { BrandLogo } from "./brand-logo";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { WavingDeveloper } from "./waving-developer";

export function PageLoader({ duration = 2500 }: { duration?: number }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [visible, setVisible] = useState(true);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!visible) return;
        const root = document.documentElement;
        const previousOverflow = root.style.overflow;
        root.style.overflow = "hidden";
        return () => { root.style.overflow = previousOverflow; };
    }, [visible]);

    useEffect(() => {
        const start = performance.now();
        let frame = 0;
        let timeout: ReturnType<typeof setTimeout>;
        const effectiveDuration = reduceMotion ? 300 : Math.max(duration, 1);
        const tick = (now: number) => {
            const next = Math.min((now - start) / effectiveDuration, 1);
            setProgress(next);
            if (next < 1) {
                frame = requestAnimationFrame(tick);
            } else {
                timeout = setTimeout(() => setDone(true), reduceMotion ? 0 : 250);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(timeout);
        };
    }, [duration, reduceMotion]);

    const percent = Math.floor(progress * 100);

    return (
        <AnimatePresence onExitComplete={() => setVisible(false)}>
            {!done && (
                <motion.div
                    key="page-loader"
                    className="fixed inset-0 z-[99999] flex flex-col overflow-hidden bg-primary px-6 py-6 text-white dark:bg-black md:px-10 md:py-8"
                    initial={{ opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
                    transition={{ duration: reduceMotion ? 0.15 : 0.75, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }} />

                    <div className="relative mx-auto flex w-full max-w-[1360px] items-center justify-between">
                        <BrandLogo onPrimary />
                        <span className="rounded-full border border-white/30 px-3 py-1.5 text-[10px] font-semibold sm:text-xs">One moment...</span>
                    </div>

                    <motion.div
                        className="relative mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center justify-center gap-2 py-3 text-center sm:flex-row sm:gap-6 sm:py-5 sm:text-left"
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="aspect-square w-[min(55vw,32dvh)] max-w-[320px] shrink-0">
                            <WavingDeveloper />
                        </div>
                        <div>
                            <p className="mb-2 text-xs font-semibold text-white/75 sm:mb-4 sm:text-sm">Hi, I'm Ihza. Welcome!</p>
                            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-tighter text-white">
                                LOADING<span className="text-accent">.</span>
                            </h1>
                            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:mt-4">Full Stack Developer</p>
                        </div>
                    </motion.div>

                    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/30 bg-white/10 p-5 shadow-[0_8px_0_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <p role="status" className="text-sm font-bold">{percent === 100 ? "Let's explore!" : "Getting things ready"}</p>
                                <p className="mt-1 text-[11px] text-white/70">Welcome to my portfolio.</p>
                            </div>
                            <span aria-hidden="true" className="text-3xl font-black tabular-nums tracking-tighter text-accent sm:text-4xl">{String(percent).padStart(2, "0")}<span className="ml-0.5 text-sm">%</span></span>
                        </div>
                        <div role="progressbar" aria-label="Preparing portfolio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} className="h-2 overflow-hidden rounded-full bg-black/20">
                            <div className="h-full origin-left rounded-full bg-accent" style={{ transform: `scaleX(${progress})` }} />
                        </div>
                    </div>
                    <div className="relative mx-auto mt-5 flex w-full max-w-md items-center justify-between text-[9px] font-semibold uppercase tracking-widest text-white/70">
                        <span>Full Stack Developer</span>
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        <span>Built with passion</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
