import { motion } from "motion/react";
import { EmojiRating } from "./emoji-rating";

export function RatingSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section id="feedback" aria-labelledby="feedback-title" className="overflow-hidden border-y border-foreground/10 bg-muted/40 px-6 py-20 text-foreground sm:px-8 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
            >
                <div>
                    <motion.p variants={itemVariants} className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        A quick check-in
                    </motion.p>
                    <motion.h2 variants={itemVariants} id="feedback-title" className="whitespace-nowrap text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none tracking-[-0.065em]">
                        How did I <span className="text-primary">do?</span>
                    </motion.h2>
                </div>

                <div className="max-w-xl md:justify-self-end">
                    <motion.p variants={itemVariants} className="max-w-md text-base leading-7 text-foreground/65 sm:text-lg">
                        Thanks for taking a look around. How was your experience?
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-7">
                        <EmojiRating />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
