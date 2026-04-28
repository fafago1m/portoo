import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        // Fallback for browsers that don't support View Transitions
        if (!document.startViewTransition) {
            setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
            return;
        }

        // Set the coordinates for the reveal origin
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);

        // Start the View Transition
        document.startViewTransition(() => {
            flushSync(() => {
                setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
            });
        });
    };

    return (
        <div className="fixed top-8 right-8 z-[1001]">
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                onClick={toggleTheme}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-2xl transition-all duration-700 overflow-hidden group"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === 'light' ? (
                        <motion.div
                            key="sun"
                            initial={{ y: 30, opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -30, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                        >
                            <Sun size={24} className="text-black group-hover:rotate-45 transition-transform duration-700" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ y: 30, opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -30, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                        >
                            <Moon size={24} className="text-white group-hover:-rotate-12 transition-transform duration-700" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
