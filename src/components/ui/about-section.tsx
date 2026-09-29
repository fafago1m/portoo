import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { NotebookIllustration } from "./notebook-illustration";

export function AboutSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="about" aria-labelledby="about-title" className="scroll-mt-28 px-6 pb-12 pt-20 text-foreground sm:px-8 md:pb-16 md:pt-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14 lg:gap-20">
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative order-2 mx-auto w-full max-w-[440px] md:order-1"
                >
                    <div aria-hidden="true" className="absolute inset-x-4 bottom-8 top-6 rounded-[45%_55%_48%_52%] bg-primary/10 dark:bg-primary/15" />
                    <motion.div whileHover={reduceMotion ? undefined : { rotate: 2, y: -5 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                        <NotebookIllustration />
                    </motion.div>
                    <p className="relative text-center text-[11px] font-medium tracking-wide text-foreground/45">A few notes on the person behind the code.</p>
                </motion.div>

                <div className="order-1 min-w-0 md:order-2">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">About me</p>
                    <h2 id="about-title" className="text-5xl font-black leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Hi, I'm <span className="text-primary">Ihza.</span></h2>
                    <p className="mb-6 mt-3 text-sm font-medium text-foreground/50">Ihza Maulana Alfarisi · Full Stack Developer</p>
                    <div className="space-y-4 text-sm leading-7 text-foreground/65 sm:text-base sm:leading-7">
                        <p>I'm a Full Stack Web Developer building applications for business, education, and SaaS. I work across the full stack—from database design and REST APIs to responsive single-page applications.</p>
                        <p>My projects include an UMKM financing system with multi-role approvals, sales employee monitoring, and a point-of-sale system integrated with attendance, payroll, and HR. I work with Laravel, Vue.js, React, Next.js, and MySQL.</p>
                        <p>I also have over a year of freelance experience and founded ACT STORE, a digital business providing web hosting and IT services.</p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-6">
                        <a href="#work" className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-accent px-5 py-3 text-sm font-extrabold text-[#21113f] shadow-[3px_3px_0_rgba(0,0,0,0.12)] transition-transform motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">See my work <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
                        <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary/30 underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Say hello <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
