import { motion } from 'motion/react';

const techs = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
    'Node.js', 'PostgreSQL', 'Vercel', 'Three.js', 'UI/UX Design',
    'GSAP', 'Clean Code', 'Performance', 'Scalability'
];

export function TechMarquee() {
    return (
        <div className="py-10 bg-background transition-colors duration-500 overflow-hidden border-y border-border select-none pointer-events-none">
            

            <div className="flex whitespace-nowrap ">
                {/* Row 2 — Reverse */}
                <motion.div
                    initial={{ x: '-50%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 items-center pr-20"
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={i}
                            className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-foreground/5"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
