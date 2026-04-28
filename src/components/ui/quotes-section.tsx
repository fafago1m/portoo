import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function QuotesSection() {
    return (
        <section className="py-24 md:py-40 bg-background transition-colors duration-500 overflow-hidden border-y border-border">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-10"
                >
                    <Quote size={20} fill="currentColor" />
                </motion.div>

                <motion.blockquote
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    className="text-2xl md:text-5xl font-black italic leading-[1.1] tracking-tighter mb-12 uppercase text-foreground"
>
    "Whether successful or not, <br />
    this process will continue there is <br />
    no giving up until all those <span className="text-primary italic">dreams are achieved</span>"
</motion.blockquote>

                
            </div>
        </section>
    );
}
