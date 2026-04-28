import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What is your primary tech stack?',
        answer: 'I specialize in React, Next.js, and TypeScript, utilizing Tailwind CSS for styling and Framer Motion for high-fidelity animations. On the backend, I leverage Node.js and PostgreSQL.',
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Yes! I work with clients globally. I have optimized my workflow for remote collaboration, using tools like Figma, Slack, and Zoom for seamless communication.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'A high-end landing page typically takes 2–4 weeks, while complex full-stack applications peuvent vary from 2–4 months depending on requirements.',
    },
    {
        question: 'Are you available for freelance work?',
        answer: 'I am currently accepting select freelance projects and collaborations. Feel free to reach out via the connect section to discuss your idea.',
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 bg-background transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-foreground"
                    >
                        Inquiries & <span className="text-primary">FAQ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/50 mb-12"
                    >
                        Common questions about my workflow and availability
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-border rounded-[2rem] overflow-hidden bg-muted/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-foreground/[0.02] transition-colors"
                                aria-expanded={openIndex === idx}
                            >
                                <span className="text-lg md:text-xl font-black pr-8 text-foreground">{faq.question}</span>
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                                    {openIndex === idx ? <Minus size={18} className="text-foreground" /> : <Plus size={18} className="text-foreground" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-8 pb-8 text-foreground/50 leading-relaxed text-base md:text-lg">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
