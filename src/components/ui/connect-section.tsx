import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MagneticButton } from './magnetic-button';

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/fafago1m', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ihza-maulana-alfarisi-991a0b318?originalSubdomain=id', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_actshop/', label: 'Instagram' },
];

export function ConnectSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-12 md:p-24 overflow-hidden relative group">
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-10 shadow-xl shadow-primary-dark/20"
                        >
                            <Mail className="text-black" size={32} />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-4xl md:text-7xl font-black text-white leading-tight mb-8"
                            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
                        >
                            READY TO <span style={{ color: "var(--clr-accent)" }}>SHIP</span> <br />
                            YOUR NEXT IDEA?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 font-medium"
                        >
                            Let's collaborate to build something that stands out. Whether you’re a startup or an established brand, I’m here to help.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <MagneticButton distance={200} strength={0.3}>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="mailto:alfacastel3@gmail.com"
                                    className="group flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-lg font-black uppercase tracking-tight shadow-2xl transition-all"
                                >
                                    Let's Talk
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                            </MagneticButton>

                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        href={social.href}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-lg"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
