import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { TimelineIllustration, type TimelineIconKind } from './timeline-illustration';

const linkedInProfile = 'https://www.linkedin.com/in/ihza-maulana-alfarisi-991a0b318/';

interface Milestone {
    year: string;
    date: string;
    title: string;
    organization: string;
    description?: string;
    kind: TimelineIconKind;
}

// Dates and roles follow the publicly indexed LinkedIn profile.
// The LKS financing application is part of the competition, not a separate job.
const milestones: Milestone[] = [
    {
        year: '2026', date: '2026', kind: 'award',
        title: '2nd Place · LKS Web Technologies',
        organization: 'D.I. Yogyakarta',
        description: 'Built a financing system with Laravel and Vue.js, including approvals, access controls, and audit logs.',
    },
    {
        year: '2026', date: 'Apr 2026', kind: 'award',
        title: '1st Place · Ujian Kompetensi Keahlian',
        organization: 'SMK N 1 Sanden',
    },
    {
        year: '2026', date: 'Mar 2026 — Present', kind: 'work',
        title: 'Programmer', organization: 'Farmagitech',
    },
    {
        year: '2025', date: 'Nov 2025', kind: 'award',
        title: 'Penghargaan Kewirausahaan',
        organization: 'Pemerintah Provinsi Daerah Istimewa Yogyakarta',
    },
    {
        year: '2025', date: 'Jun 2025 — Mar 2026', kind: 'work',
        title: 'Intern', organization: 'Farma Global Teknologi',
    },
    {
        year: '2024', date: 'Sep 2024', kind: 'certificate',
        title: 'Madani Entrepreneur Academy',
        organization: 'PT Permodalan Nasional Madani (Persero)',
    },
    {
        year: '2023', date: '2023 — 2026', kind: 'education',
        title: 'Software Engineering', organization: 'SMK Negeri 1 Sanden',
    },
    {
        year: '2022', date: 'Aug 2022 — Present', kind: 'founder',
        title: 'Founder', organization: 'Advance Code Teknologi',
        description: 'Website development, domains, hosting, VPS, and server maintenance.',
    },
];

const years = [...new Set(milestones.map((milestone) => milestone.year))];

export function TimelineSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="timeline" aria-labelledby="timeline-title" className="scroll-mt-28 bg-background px-6 py-20 text-foreground sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex flex-col justify-between gap-6 border-b border-foreground/10 pb-8 sm:flex-row sm:items-end md:mb-16">
                    <div>
                        <h2 id="timeline-title" className="text-5xl font-black leading-none tracking-[-0.055em] sm:text-6xl">Time<span className="text-primary">line.</span></h2>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/55">Experience, education, and achievements along the way.</p>
                    </div>
                    <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm border-b border-primary/30 pb-1 text-xs font-semibold text-primary hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        View LinkedIn <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                </div>

                <ol>
                    {years.map((year) => (
                        <li key={year} className="grid gap-7 md:grid-cols-[140px_1fr] md:gap-10 lg:grid-cols-[180px_1fr]">
                            <h3 className="flex self-start items-center gap-4 pt-2 text-4xl font-black tabular-nums tracking-[-0.06em] text-primary md:text-5xl">
                                {year}<span aria-hidden="true" className="h-px flex-1 bg-foreground/10 md:hidden" />
                            </h3>
                            <ol className="ml-2 border-l border-primary/20 pl-6 md:ml-0 md:pl-8">
                                {milestones.filter((milestone) => milestone.year === year).map((milestone) => (
                                    <motion.li
                                        key={`${milestone.title}-${milestone.date}`}
                                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.45, ease: 'easeOut' }}
                                        className="group relative pb-10 last:pb-14 md:pb-12 md:last:pb-16"
                                    >
                                        <span aria-hidden="true" className={`absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full border-2 border-primary md:-left-[37px] ${milestone.kind === 'award' ? 'bg-accent' : 'bg-background'}`} />
                                        <div className="flex items-start gap-3 sm:gap-5">
                                            <div className="shrink-0 transition-transform duration-300 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:-translate-y-1">
                                                <TimelineIllustration kind={milestone.kind} />
                                            </div>
                                            <div className="min-w-0 pt-1 sm:pt-2">
                                                <p className="mb-2 text-[10px] font-semibold tracking-wide text-foreground/45 sm:text-xs">{milestone.date}</p>
                                                <h4 className="text-lg font-extrabold leading-snug tracking-tight sm:text-2xl">{milestone.title}</h4>
                                                <p className="mt-1.5 text-xs font-medium leading-5 text-primary sm:text-sm">{milestone.organization}</p>
                                                {milestone.description && <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/60">{milestone.description}</p>}
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
