import { motion } from "motion/react";
import { RevealImageList } from "./reveal-images";

export function ServicesSection() {
    const stacks = [
        { name: "React", type: "primary" },
        { name: "Next.js", type: "accent" },
        { name: "TypeScript", type: "primary" },
        { name: "Tailwind", type: "accent" },
        { name: "Framer Motion", type: "primary" },
        { name: "Node.js", type: "accent" }
    ];

    return (
        <section id="stack" className="py-24 md:py-32 bg-background transition-colors duration-500">
            <div className="px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Reveal Image List */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                        className="order-2 lg:order-1"
                    >
                        <RevealImageList />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                        className="order-1 lg:order-2 flex flex-col items-start"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-border bg-muted/50"
                        >
                            <span className="relative w-2 h-2">
                                <span className="absolute inset-0 rounded-full animate-ping opacity-70" style={{ background: "var(--clr-accent)" }} />
                                <span className="relative block w-2 h-2 rounded-full" style={{ background: "var(--clr-accent)" }} />
                            </span>
                            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">Available for freelance</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 text-foreground">
                            DIGITAL<br /><span className="text-primary italic">EXPERIENCE</span><br />ARCHITECT
                        </h2>

                        <p className="text-lg md:text-xl text-foreground/60 font-medium mb-10 max-w-md leading-relaxed">
                            I craft responsive, accessible, and highly interactive web applications that drive real business results.
                        </p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="flex flex-wrap gap-3 mb-16"
                        >
                            {stacks.map((stack) => (
                                <motion.div
                                    key={stack.name}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, y: 10 },
                                        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                    }}
                                    className={`px-4 py-2 rounded-full text-xs font-bold ${stack.type === 'primary'
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-accent text-primary-dark shadow-lg shadow-accent/10'
                                        }`}
                                >
                                    {stack.name}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Floating Experience Card */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 8, scale: 0.85 }}
                            whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
                            viewport={{ once: false }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="ml-auto w-64 bg-primary rounded-[2rem] p-6 shadow-xl relative overflow-hidden"
                        >
                            {/* Inner Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                            <h3 className="text-white text-5xl font-black tracking-tighter mb-1">3+</h3>
                            <p className="text-white/80 font-bold text-sm leading-tight">Years of<br />professional<br />experience</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
