import { motion } from "motion/react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-background mt-10 md:mt-20">
            <div className="max-w-6xl mx-auto rounded-t-4xl border-t border-border relative z-10 px-8 py-16 md:py-24"
                style={{
                    background: 'radial-gradient(35% 128px at 50% 0%, color-mix(in srgb, var(--clr-primary) 6%, transparent), transparent)',
                }}>

                {/* Top Glow Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-[1px] origin-center"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--clr-accent), transparent)' }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">

                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            whileHover="hover"
                            className="inline-flex items-center gap-1.5 cursor-pointer mb-6"
                        >
                            <motion.div
                                variants={{ hover: { x: -2 } }}
                                className="bg-foreground text-background font-black tracking-tight text-xl px-4 py-2 rounded-2xl rounded-bl-sm relative"
                            >
                                IHZA
                                <div className="absolute -bottom-2 left-0 w-4 h-4 bg-foreground"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hover: { scale: 1.1, rotate: 6, transition: { type: "spring", stiffness: 300 } }
                                }}
                                className="text-primary-dark font-black text-xl px-4 py-2 rounded-full border-2 border-foreground"
                                style={{ background: "var(--clr-accent)" }}
                            >
                                DEV
                            </motion.div>
                        </motion.div>

                        <p className="text-foreground/60 font-medium max-w-sm mb-8 leading-relaxed">
                            Elevating digital products through premium frontend experiences, solid architecture, and motion design.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: <FaLinkedinIn />, href: '#' },
                                { icon: <FaGithub />, href: '#' },
                                { icon: <FaXTwitter />, href: '#' },
                                { icon: <FaInstagram />, href: '#' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -4, color: 'var(--clr-primary)' }}
                                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 transition-colors hover:bg-foreground/10"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            <h4 className="font-bold text-sm tracking-widest uppercase text-foreground/40 mb-6">Explore</h4>
                            <ul className="space-y-4">
                                {['Work', 'Services', 'About', 'Stack'].map((link) => (
                                    <motion.li key={link} variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}>
                                        <motion.a
                                            href={`#${link.toLowerCase()}`}
                                            whileHover={{ x: 4, color: 'var(--clr-primary)' }}
                                            className="font-bold text-foreground/80 flex items-center gap-2 w-max"
                                        >
                                            {link}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
                        >
                            <h4 className="font-bold text-sm tracking-widest uppercase text-foreground/40 mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {['Privacy Policy', 'Terms of Service'].map((link) => (
                                    <motion.li key={link} variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}>
                                        <motion.a
                                            href="#"
                                            whileHover={{ x: 4, color: 'var(--clr-primary)' }}
                                            className="font-bold text-foreground/80 flex items-center gap-2 w-max"
                                        >
                                            {link}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-xs font-bold text-foreground/40 tracking-widest uppercase">
                        © {new Date().getFullYear()} Ihza.dev. All rights reserved.
                    </p>
                    <div className="text-xs font-bold text-foreground/40 tracking-widest uppercase flex items-center gap-2">
                        Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-red-500 text-sm"
                        >
                            ♥
                        </motion.span>
                        Ihza dev
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
