import { motion } from 'motion/react';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiFramer,
    SiVercel,
    SiGithub,
    SiNodedotjs,
    SiPostgresql,
    SiReact
} from 'react-icons/si';

const brands = [
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiFramer, name: 'Framer' },
    { icon: SiVercel, name: 'Vercel' },
    { icon: SiGithub, name: 'GitHub' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiReact, name: 'React' },
];

export function BrandMarquee() {
    return (
        <div className="py-12 bg-background border-b border-border overflow-hidden select-none pointer-events-none transition-colors duration-500">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-24 items-center pr-24"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <div key={i} className="flex items-center gap-3 text-foreground/20 hover:text-foreground/40 transition-colors">
                            <brand.icon size={32} />
                            <span className="text-sm font-black uppercase tracking-widest">{brand.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
