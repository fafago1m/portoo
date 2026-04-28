import { motion } from 'motion/react';
import { AnimatedLetterText } from './potfolio-text';

export function PortfolioTextSection() {
    return (
        <section className="py-32 flex flex-col items-center justify-center border-t overflow-hidden"
            style={{ borderColor: 'var(--clr-border)' }}>
            <div className="flex flex-col items-center gap-8 w-full max-w-6xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                    <AnimatedLetterText text="PORTFOLIO" letterToReplace="O"
                        className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem]" />
                </motion.div>
                
                
            </div>
        </section>
    );
}
