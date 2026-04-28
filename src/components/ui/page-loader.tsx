"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageLoader({ duration = 2500 }: { duration?: number }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const el = document.documentElement;
        el.style.overflow = "hidden";
        return () => { el.style.overflow = ""; };
    }, []);

    useEffect(() => {
        if (exit) document.documentElement.style.overflow = "";
    }, [exit]);

    useEffect(() => {
        const start = performance.now();
        const tick = (now: number) => {
            const elapsed = now - start;
            const pct = Math.min(elapsed / duration, 1);
            setProgress(pct);
            if (pct < 1) {
                requestAnimationFrame(tick);
            } else {
                setDone(true);
                setTimeout(() => setExit(true), 800);
            }
        };
        requestAnimationFrame(tick);
    }, [duration]);

    const percent = Math.round(progress * 100);

    return (
        <AnimatePresence>
            {!exit && (
                <div className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none">
                    {/* Top Shutter */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: done ? "-100%" : 0 }}
                        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
                        className="absolute top-0 left-0 w-full h-[50dvh] z-[100] pointer-events-auto"
                        style={{ background: "var(--clr-primary)" }}
                    />

                    {/* Bottom Shutter */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: done ? "100%" : 0 }}
                        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
                        className="absolute bottom-0 left-0 w-full h-[50dvh] z-[100] pointer-events-auto"
                        style={{ background: "var(--clr-primary)" }}
                    />

                    {/* Content Layer (Center) */}
                    <div className="absolute inset-0 flex items-center justify-center z-[110]">
                        <motion.div
                            className="flex flex-col items-center gap-12"
                            animate={{
                                opacity: done ? 0 : 1,
                                y: done ? -20 : 0,
                                scale: done ? 0.9 : 1
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Massive Percentage */}
                            <div className="relative">
                                <span className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        color: "var(--clr-accent)",
                                        filter: "brightness(1.1)"
                                    }}>
                                    {percent}
                                </span>
                                <span className="absolute -top-4 -right-12 text-4xl font-black text-white/40">
                                    %
                                </span>
                            </div>

                            {/* Minimalist Message */}
                            <div className="flex flex-col items-center gap-2">
                                <motion.span
                                    className="text-white font-black uppercase tracking-[0.4em] text-[10px]"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {done ? "SYNERGY COMMENCING" : "ESTABLISHING COLLECTIVE"}
                                </motion.span>
                                <div className="h-[1px] w-12 bg-white/20" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Top Edge Progress Line */}
                    <motion.div
                        className="absolute top-0 left-0 h-1 bg-accent z-[120]"
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
}
