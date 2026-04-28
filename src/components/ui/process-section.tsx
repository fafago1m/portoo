import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Search, Lightbulb, PenTool, Terminal } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Research',
        desc: 'Understanding the problem space, audience needs, and competitive landscape to build a solid foundation.',
        icon: Search,
        color: 'var(--clr-primary)',
    },
    {
        id: '02',
        title: 'Strategy',
        desc: 'Defining the architecture, user flows, and technical requirements to ensure a scalable and efficient solution.',
        icon: Lightbulb,
        color: 'var(--clr-accent)',
    },
    {
        id: '03',
        title: 'Design',
        desc: 'Crafting high-fidelity mockups and interactive prototypes with a focus on polished aesthetics and UX.',
        icon: PenTool,
        color: 'var(--clr-primary)',
    },
    {
        id: '04',
        title: 'Build',
        desc: 'Translating designs into clean, performant, and responsive code using the latest web technologies.',
        icon: Terminal,
        color: 'var(--clr-accent)',
    },
];

export function ProcessSection() {
    return (
        <section className="py-24 md:py-32 bg-background transition-colors duration-500 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-4xl md:text-5xl font-black tracking-tight mb-6"
                        >
                            The Methodology
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/60"
                        >
                            A disciplined, engineering-first approach to digital product design and development,
                            ensuring every pixel serves a purpose.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-[10px] font-black uppercase tracking-widest text-foreground/50"
                    >
                        How I Work <div className="w-1 h-1 rounded-full bg-black/20" /> 4 Stages
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-dashed border-t border-dashed border-black/10 z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative z-10 flex flex-col group"
                        >
                            <div className="flex items-start md:flex-col gap-6 md:gap-0">
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                                        idx % 2 === 0 ? "bg-primary text-white" : "bg-accent text-primary-dark"
                                    )}
                                >
                                    <step.icon size={24} />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-xs font-black text-foreground/20 font-mono">{step.id}</span>
                                        <h3 className="text-xl font-black uppercase">{step.title}</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-foreground/50 pr-4">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
