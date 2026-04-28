import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { User, Briefcase, Code, FileText } from "lucide-react";

export const FloatingNavbar = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Show navbar when scrolled past Hero section
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    const navItems = [
        { name: "Work", link: "#work", icon: <Briefcase className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" /> },
        { name: "About", link: "#about", icon: <User className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" /> },
        { name: "Stack", link: "#stack", icon: <Code className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" /> },
    ];

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    // Muncul dari atas untuk desktop, dari bawah untuk mobile
                    initial={{ opacity: 0, y: isMobile ? 100 : -100, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: isMobile ? 100 : -100, x: "-50%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    // Desktop: top-6, Mobile: bottom-6
                    className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 z-[100] w-[95%] sm:w-max max-w-fit"
                >
                    <div className="mx-auto flex items-center justify-between sm:justify-center gap-2 md:gap-8 lg:gap-14 px-1.5 py-1.5 md:px-2 md:py-2 md:pr-2 rounded-full backdrop-blur-2xl bg-white/90 border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:bg-black/80 dark:border-white/10 dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)] text-black dark:text-white">

                        {/* Logo/Brand (Speech Bubble) - Terlihat di Desktop, Sembunyi di Mobile */}
                        <a href="#" className="hidden md:flex items-center md:ml-2 md:mr-2 shrink-0">
                            <div className="bg-black text-white dark:bg-white dark:text-black font-black tracking-tight text-[12px] px-3.5 py-2 rounded-[14px] rounded-bl-sm relative shadow-sm">
                                IHZA
                                <div className="absolute -bottom-1.5 left-0 w-2.5 h-2.5 bg-black dark:bg-white"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                            </div>
                        </a>

                        {/* Links */}
                        <nav className="flex items-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-10 overflow-hidden ml-2 md:ml-0">
                            {navItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="group relative flex items-center gap-1.5 md:gap-2 text-[11px] sm:text-[12px] md:text-[14px] font-bold text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
                                >
                                    <span className="opacity-60 p-0.5">{item.icon}</span>
                                    <span className="shrink-0 tracking-tight">{item.name}</span>
                                </a>
                            ))}
                        </nav>

                        {/* Neon CTA Desktop & Mobile */}
                        <a
                            href="mailto:alfacastel3@gmail.com"
                            className="font-black text-[10px] md:text-[13px] uppercase tracking-widest px-5 py-2.5 md:px-8 md:py-3.5 rounded-full hover:scale-105 active:scale-95 transition-transform flex-shrink-0 ml-2 md:ml-4 shadow-lg text-black bg-[#caff00] whitespace-nowrap"
                            style={{ background: "#caff00", color: "#000" }}
                        >
                            HIRE ME
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
