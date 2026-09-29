import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: "FinTech Core",
        category: "Banking System",
        description: "Banking dashboard with interactive data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        link: "#",
        tech: ["React", "Zustand"]
    },
    {
        title: "Aura Commerce",
        category: "Digital Experience",
        description: "An e-commerce storefront with interactive 3D product views.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        year: "2023",
        link: "#",
        tech: ["Next.js", "Three.js"]
    },
    {
        title: "Nexus AI",
        category: "SaaS Platform",
        description: "A writing editor with AI suggestions and real-time feedback.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
        year: "2024",
        link: "#",
        tech: ["OpenAI", "React"]
    },
    {
        title: "Vanguard Sec",
        category: "Cybersecurity",
        description: "A dashboard for monitoring threats and visualizing network activity.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        year: "2023",
        link: "#",
        tech: ["Vue", "D3.js"]
    }
];

export function SpotlightSection() {
    return (
        <section id="work" aria-labelledby="projects-title" className="scroll-mt-28 bg-background px-6 py-20 text-foreground sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex items-end justify-between gap-6 border-b border-foreground/15 pb-7 md:mb-14">
                    <h2 id="projects-title" className="text-5xl font-black leading-none tracking-[-0.055em] sm:text-6xl md:text-7xl">Projects<span className="text-primary">.</span></h2>
                    <span className="pb-1 text-xs tabular-nums text-foreground/45">01 — {String(PROJECTS.length).padStart(2, '0')}</span>
                </div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16">
                    {PROJECTS.map((project, index) => (
                        <article key={project.title} className={index % 2 === 1 ? 'md:translate-y-14' : ''}>
                            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted sm:aspect-[8/5]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} — ${project.category}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="mt-5 flex items-baseline justify-between gap-4">
                                <h3 className="text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                                    {project.link !== '#' ? (
                                        <a href={project.link} className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                            {project.title}<ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                                        </a>
                                    ) : project.title}
                                </h3>
                                <span className="text-xs tabular-nums text-foreground/45">{project.year}</span>
                            </div>
                            <p className="mt-2 max-w-md text-sm leading-6 text-foreground/60">{project.description}</p>
                            <p className="mt-4 text-[11px] font-medium text-primary">{project.tech.join(' / ')}</p>
                        </article>
                    ))}
                </div>
                <div className="mt-12 border-t border-foreground/15 pt-5 md:mt-28">
                    <a href="mailto:alfacastel3@gmail.com" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary">
                        Have a project in mind? <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
