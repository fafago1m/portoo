import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
    { href: 'https://github.com/fafago1m', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ihza-maulana-alfarisi-991a0b318?originalSubdomain=id', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/_actshop/', label: 'Instagram' },
];

export function ConnectSection() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-28 bg-background px-5 py-16 sm:px-8 md:py-24">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#7C3AED] text-white dark:bg-[#A78BFA] sm:rounded-[3rem]">
                <div className="grid items-center gap-6 px-7 pt-10 sm:px-12 sm:pt-14 md:grid-cols-[1.3fr_1fr] md:gap-4 lg:px-16 lg:pt-16">
                    <div className="relative z-10">
                        <p className="mb-7 text-xs font-semibold text-white/70">Have something in mind?</p>
                        <h2 id="contact-title" className="text-[clamp(2.3rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.06em]">
                            READY TO<br />SHIP YOUR<br />
                            <span className="relative mt-2 inline-block -rotate-2 bg-accent px-2 pb-2 pt-1 text-[#21113f] sm:px-3">NEXT IDEA?</span>
                        </h2>
                        <p className="mt-7 max-w-xs text-sm leading-6 text-white/75">Send me a message. Let's talk about what you'd like to build.</p>
                        <a href="mailto:alfacastel3@gmail.com" className="mt-6 inline-flex items-center gap-3 border-b-2 border-accent pb-2 text-base font-bold text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                            Let's talk <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                        </a>
                    </div>

                    <a href="mailto:alfacastel3@gmail.com" aria-label="Email Ihza" className="group relative mx-auto block w-full max-w-[260px] rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:max-w-[340px] md:max-w-none">
                        <svg aria-hidden="true" viewBox="0 0 360 340" className="w-full overflow-visible transition-transform duration-300 motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-2" fill="none">
                            <ellipse cx="182" cy="304" rx="128" ry="12" fill="black" fillOpacity="0.12" />
                            <g transform="rotate(8 180 180)">
                                <path d="M42 145 180 48l138 97v128a12 12 0 0 1-12 12H54a12 12 0 0 1-12-12V145Z" fill="#5B21B6" stroke="#21113f" strokeWidth="3" strokeLinejoin="round" />
                                <rect x="70" y="77" width="220" height="183" rx="8" fill="#F8F5EF" stroke="#21113f" strokeWidth="3" />
                                <path d="M92 101h13m-6.5 0v21m-6.5 0h13m12-20 9 10-9 10" stroke="#7C3AED" strokeWidth="4" />
                                <path d="M92 146h104M92 161h165M92 176h130" stroke="#21113f" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round" />
                                <path d="m42 145 138 97 138-97v128a12 12 0 0 1-12 12H54a12 12 0 0 1-12-12V145Z" fill="#C4B5FD" stroke="#21113f" strokeWidth="3" strokeLinejoin="round" />
                                <path d="m46 279 103-82m165 82-103-82" stroke="#21113f" strokeWidth="3" />
                                <circle cx="180" cy="236" r="28" fill="#CCFF00" stroke="#21113f" strokeWidth="3" />
                                <path d="m169 247 22-22m-22 0h22v22" stroke="#21113f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <path d="m301 46 9-16m6 28 17-5M45 78 31 65" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>

                <div className="mx-7 mt-8 flex flex-col justify-between gap-5 border-t border-white/20 py-6 sm:mx-12 sm:mt-12 md:flex-row md:items-center lg:mx-16 lg:mt-14">
                    <a href="mailto:alfacastel3@gmail.com" className="w-fit break-all text-sm text-white/80 hover:text-accent">alfacastel3@gmail.com</a>
                    <nav aria-label="Social profiles" className="flex flex-wrap gap-x-5 gap-y-3">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/65 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                                {social.label}<ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
