import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

const milestones = [
    {
        year: '2026',
        title: '2nd Place – LKS Web Technology',
        company: 'D.I. Yogyakarta Province',
        desc: 'Developed a fullstack system using Laravel REST API and Vue SPA with complex workflows, RBAC, and audit logging during the competition.',
        icon: Award,
        type: 'award',
    },
    {
        year: '2026',
        title: '1st Place – Software Engineering Competency Exam (UKK)',
        company: 'SMK N 1 Sanden',
        desc: 'Developed a fullstack web application based on industry standards, demonstrating strong programming and database skills.',
        icon: Award,
        type: 'award',
    },
    {
        year: '2026',
        title: 'Fullstack Developer',
        company: 'National MSME Financing System Project',
        desc: 'Built a multi-role system with verification, analysis, and approval workflows using Laravel, Vue.js, and MySQL.',
        icon: Briefcase,
        type: 'work',
    },
    {
    year: '2025',
    title: 'Programmer',
    company: 'PT Farma Global Teknologi',
    desc: 'Developed a hospital E-Document (E-Doc) system using PHP, HTML, CSS (Bootstrap), JavaScript, and Vue.js, focusing on building responsive interfaces and efficient document management features.',
    icon: Briefcase,
    type: 'work',
},
    {
        year: '2025',
        title: 'Founder & Freelance Web Developer',
        company: 'Advance Code Technology (ACT STORE)',
        desc: 'Built and managed a digital business focused on web hosting and IT services while handling multiple client projects.',
        icon: Briefcase,
        type: 'work',
    },
    
    {
        year: '2024',
        title: 'Fullstack Developer',
        company: 'GPS-Based Attendance System',
        desc: 'Developed a location-based attendance system with radius validation using Laravel and Geo Location API.',
        icon: Briefcase,
        type: 'work',
    },
    {
        year: '2023',
        title: 'Software Engineering Student',
        company: 'SMK N 1 Sanden',
        desc: 'Started my journey in software engineering with a focus on web development.',
        icon: GraduationCap,
        type: 'edu',
    },
];

const TimelineContent = ({ milestone, align }: { milestone: any; align: 'left' | 'right' }) => (
    <div className={`flex flex-col w-full ${align === 'right' ? 'md:items-end md:text-right' : 'items-start text-left'}`}>
        <div className={`flex items-center gap-3 mb-3 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-xs font-black text-primary font-mono tracking-tighter bg-primary/5 px-2.5 py-1 rounded-md border border-primary/20 shadow-sm">
                {milestone.year}
            </span>
            <div className="text-foreground/40 p-1.5 rounded-full bg-background border border-foreground/10 shadow-sm hidden md:block">
                <milestone.icon size={14} />
            </div>
        </div>

        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1 text-foreground">
            {milestone.title}
        </h3>
        <p className="text-[10px] md:text-xs font-black text-foreground/40 uppercase tracking-widest mb-4">
            {milestone.company}
        </p>
        <p className={`text-sm md:text-base text-foreground/60 max-w-sm font-medium leading-relaxed ${align === 'right' ? 'md:ml-auto' : ''}`}>
            {milestone.desc}
        </p>
    </div>
);

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Make the timeline rope scale dynamically with scroll!
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-24 md:py-40 bg-background transition-colors duration-500 relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
                 <div className="text-center mb-24">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-foreground"
                                    >
                                        TIME<span className="text-primary">LINE</span>
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.1 }}
                                        className="text-foreground/50 "
                                    >
                                        Real-world projects built with modern technologies and a focus on performance and user experience
                                    </motion.p>
                                </div>


                <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pb-20 isolate">

                    {/* ===== DESKTOP TIMELINE ROPE ===== */}
                    {/* Faded Background Line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-[2px] bg-foreground/10 z-0" />
                    {/* Animated Paint Scroll Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-[3px] bg-primary z-10"
                    />

                    {/* ===== MOBILE TIMELINE ROPE ===== */}
                    <div className="md:hidden absolute left-[15px] top-4 bottom-0 w-[2px] bg-foreground/10 z-0" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="md:hidden absolute left-[15px] top-4 bottom-0 w-[3px] bg-primary z-10"
                    />

                    <div className="space-y-16 md:space-y-36 relative z-20">
                        {milestones.map((milestone, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    // Bawa balik animasi yang di-request (jangan dihilangkan / once: false)
                                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                                    className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                                >
                                    {/* Desktop Center Hollow Dot - Persis Gambar Tali */}
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-30 transition-transform duration-500 group-hover:scale-[1.6] group-hover:bg-primary shadow-[0_0_15px_rgba(var(--clr-primary),0.3)]" />

                                    {/* Mobile Dot */}
                                    <div className="md:hidden absolute left-[15px] -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-30 transition-transform duration-500 group-hover:scale-125" />

                                    {/* Mobile Content (Selalu Kiri) */}
                                    <div className="md:hidden w-full pl-10">
                                        <TimelineContent milestone={milestone} align="left" />
                                    </div>

                                    {/* Desktop Split Content */}
                                    <div className={`hidden md:flex w-1/2 justify-end pr-16 lg:pr-24`}>
                                        {isEven ? <TimelineContent milestone={milestone} align="right" /> : <div className="opacity-0" />}
                                    </div>

                                    <div className={`hidden md:flex w-1/2 justify-start pl-16 lg:pl-24`}>
                                        {!isEven ? <TimelineContent milestone={milestone} align="left" /> : <div className="opacity-0" />}
                                    </div>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
