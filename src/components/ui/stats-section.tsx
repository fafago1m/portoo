import { motion } from 'motion/react';

const stats = [
    { label: 'Completed Projects', value: '42+' },
    { label: 'Lines of Code', value: '1.2M+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Experience Years', value: '5+' },
];

export function StatsSection() {
    return (
        <section className="py-24 bg-background transition-colors duration-500 border-b border-border">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <span className="text-4xl md:text-6xl font-black mb-3 tracking-tighter text-foreground" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-foreground/40">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
