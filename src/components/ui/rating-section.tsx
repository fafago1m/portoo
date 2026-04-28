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
        <section className="py-24 md:py-32 px-6 border-t flex flex-col items-center text-center overflow-hidden"
            style={{ borderColor: 'var(--clr-border)' }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-xl w-full"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-black mb-4 uppercase"
                >
                    How did I do?
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-foreground/50 mb-12"
                >
                    Your honest feedback helps me build better digital experiences.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <EmojiRating />
                </motion.div>
            </motion.div>
        </section>
    );
}
