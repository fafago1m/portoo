import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const links = [
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: '#', type: 'primary' },
    { name: 'GitHub', icon: <FaGithub />, href: '#', type: 'primary' },
    { name: 'Twitter/X', icon: <FaXTwitter />, href: '#', type: 'primary' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#', type: 'accent' },
    { name: 'Email', icon: <HiOutlineMail />, href: 'mailto:ihza@ihza.dev', type: 'accent' },
];

export function SocialLinks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Fixed Sidebar */}
            <div className="hidden md:flex fixed top-[35%] left-0 z-40 flex-col gap-2">
                {links.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ x: -120 }}
                        whileHover={{ x: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`w-44 pl-6 pr-4 py-3 rounded-r-2xl flex items-center justify-end gap-4 shadow-lg ml-[-120px] ${link.type === 'primary'
                            ? 'bg-gradient-to-r from-[#0038FF] to-[#0066FF] text-white'
                            : 'bg-gradient-to-r from-[#CCFF00] to-[#AAEE00] text-primary-dark'
                            }`}
                    >
                        <span className="font-bold text-sm">{link.name}</span>
                        <span className="text-xl">{link.icon}</span>
                    </motion.a>
                ))}
            </div>

            {/* Mobile Floating Action Button */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[40]"
                        />
                    )}
                </AnimatePresence>

                <div className="relative z-[50]">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                }}
                                className="absolute bottom-full right-0 mb-4 flex flex-col gap-3"
                            >
                                {links.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, scale: 0.8 },
                                            visible: { opacity: 1, y: 0, scale: 1 }
                                        }}
                                        className={`w-auto px-4 py-3 rounded-full flex items-center justify-between gap-3 shadow-xl whitespace-nowrap ${link.type === 'primary'
                                            ? 'bg-gradient-to-r from-[#0038FF] to-[#0066FF] text-white'
                                            : 'bg-gradient-to-r from-[#CCFF00] to-[#AAEE00] text-primary-dark'
                                            }`}
                                    >
                                        <span className="font-bold text-sm pl-2">{link.name}</span>
                                        <span className="text-xl">{link.icon}</span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-white font-bold"
                        style={{ background: 'var(--clr-primary)' }}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </motion.div>
                    </motion.button>
                </div>
            </div>
        </>
    );
}
