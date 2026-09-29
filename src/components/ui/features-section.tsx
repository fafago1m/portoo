import { motion, useReducedMotion } from 'motion/react';
import { FeatureIllustration, type FeatureIconKind } from './feature-illustration';

interface Feature {
    icon: FeatureIconKind;
    label: string;
    title: string;
    subtitle: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: 'browser',
        label: 'React · Vue · TypeScript',
        title: 'FRONTEND',
        subtitle: 'DEVELOPMENT',
        description: 'Building responsive interfaces for dashboards, websites, and web applications.',
    },
    {
        icon: 'server',
        label: 'Laravel · MySQL · REST API',
        title: 'BACKEND',
        subtitle: 'DEVELOPMENT',
        description: 'Building APIs, role-based access, and approval workflows for real business needs.',
    },
    {
        icon: 'award',
        label: 'LKS DIY · 2026',
        title: '2ND PLACE',
        subtitle: 'WEB TECHNOLOGIES',
        description: 'Built an MSME financing system with Laravel and Vue.js during a two-day competition.',
    },
];

export function FeaturesSection() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-3 lg:gap-6">
            {features.map((feature, index) => (
                <motion.article
                    key={feature.icon}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
                    className={`group flex h-full flex-col rounded-3xl border p-6 lg:p-8 ${feature.icon === 'award' ? 'border-primary/20 bg-primary/5' : 'border-foreground/10 bg-muted'}`}
                >
                    <div className="mb-7 flex items-start justify-between gap-4">
                        <div className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-3">
                            <FeatureIllustration kind={feature.icon} />
                        </div>
                        <span aria-hidden="true" className={`mt-1 text-xs font-bold tabular-nums ${feature.icon === 'award' ? 'rounded-full bg-accent px-3 py-1 text-[#21113f]' : 'py-1 text-foreground/30'}`}>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="mb-3 text-[10px] font-semibold leading-5 tracking-wide text-primary">{feature.label}</p>
                    <h3 className="mb-4 font-black leading-[1.05] tracking-tight text-foreground">
                        <span className="block text-3xl">{feature.title}</span>
                        <span className={`mt-1 block ${feature.icon === 'award' ? 'text-lg' : 'text-2xl lg:text-3xl'}`}>{feature.subtitle}</span>
                    </h3>
                    <p className="text-sm leading-6 text-foreground/60">{feature.description}</p>
                </motion.article>
            ))}
        </div>
    );
}
