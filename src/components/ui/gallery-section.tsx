import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { InteractiveBentoGallery } from "./interactive-bento-gallery";

export function GallerySection()
 {const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t" style={{ borderColor: 'var(--clr-border)' }}>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-center gap-8">
                <div className="text-center mb-1">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-foreground"
                                    >
                                        CERTIF<span className="text-primary">ICATE</span>
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.1 }}
                                        className="text-foreground/50 "
                                    >
                                        Proof of my skills, achievements, and continuous growth in tech
                                    </motion.p>
                                </div>
            </div>
            <InteractiveBentoGallery />
        </section>
    );
}
