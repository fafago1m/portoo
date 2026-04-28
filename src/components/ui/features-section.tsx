import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function FeaturesSection() {
    const [active, setActive] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
            {/* Card 1 */}
            <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px] shadow-sm border border-border"
                style={{ background: 'var(--clr-bg-card)' }}
            >
                <div className="flex justify-between items-start">
                    <motion.div
                        initial={false}
                        animate={active === 1 ? { scale: 1.05, rotate: 2, y: -2 } : { scale: 1, rotate: 0, y: 0 }}
                        whileHover={{ scale: 1.05, rotate: 2, y: -2 }}
                        whileTap={{ scale: 0.95, rotate: -2 }}
                        onHoverStart={() => setActive(1)}
                        onHoverEnd={() => setActive(null)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white cursor-pointer relative overflow-hidden"
                        style={{ background: 'var(--clr-primary)' }}
                    >
                        <div className="w-5 h-5 rounded-full bg-white/20 overflow-hidden shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ihza&backgroundColor=D2B48C" alt="avatar" />
                        </div>
                        <span className="text-[10px] font-bold">ihza.dev / React·Next.js</span>

                        <AnimatePresence>
                            {active === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 0.2, scale: 2 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 bg-white rounded-full pointer-events-none"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="px-3 py-1 rounded-full text-[10px] font-bold shadow-sm"
                        style={{ background: 'var(--clr-accent)', color: 'var(--clr-primary-dark)' }}>
                        TypeScript
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="text-3xl font-black tracking-tight leading-none mb-2 text-foreground">BUILD<br />FAST UIs</h3>
                    <p className="text-sm text-foreground/50 font-medium">Performance-obsessed frontend development for modern web applications.</p>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px] shadow-sm border border-border"
                style={{ background: 'var(--clr-bg-card)' }}
            >
                <div className="flex justify-between items-start">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -45 }}
                        whileTap={{ scale: 0.9, rotate: -30 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md"
                        style={{ background: 'var(--clr-primary)' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </motion.div>

                    <div className="px-3 py-1.5 rounded-full text-[10px] font-bold bg-muted/50 border border-border shadow-sm text-foreground/70">
                        shadcn/ui · Tailwind
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="text-3xl font-black tracking-tight leading-none mb-2 text-foreground">CLEAN<br />CODEBASE</h3>
                    <p className="text-sm text-foreground/50 font-medium">Maintainable, scalable, and beautifully structured React architectures.</p>
                </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px] shadow-sm border border-border"
                style={{ background: 'var(--clr-bg-card)' }}
            >
                <div className="flex items-start">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="px-4 py-2 rounded-xl text-xs font-black shadow-sm flex flex-col cursor-pointer"
                        style={{ background: 'var(--clr-accent)', color: 'var(--clr-primary-dark)' }}
                    >
                        <span className="text-[10px] opacity-70">Completed</span>
                        <motion.span
                            whileHover={{ scale: 1.2, originX: 0 }}
                            className="text-lg">42+ Projects
                        </motion.span>
                    </motion.div>
                </div>

                <div className="mt-auto w-full">
                    <h3 className="text-3xl font-black tracking-tight leading-none mb-2 text-foreground">SHIP<br />ON TIME</h3>
                    <p className="text-sm text-foreground/50 font-medium">Reliable delivery with pixel-perfect precision and smooth animations.</p>

                    <div className="w-full h-1.5 bg-foreground/5 rounded-full mt-4 overflow-hidden relative">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-foreground/20 w-full"
                        />
                    </div>
                </div>
            </motion.div>

        </motion.div>
    );
}
