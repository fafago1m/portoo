import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const whatsappChannelUrl = 'https://whatsapp.com/channel/0029VbDqyee5K3zPo2wfIu0A';

function ProjectChannelIllustration() {
    return (
        <svg aria-hidden="true" viewBox="0 0 420 360" className="relative z-10 h-full w-full" fill="none">
            <circle cx="210" cy="181" r="143" fill="#C4B5FD" fillOpacity="0.18" />
            <circle cx="210" cy="181" r="117" stroke="#7C3AED" strokeOpacity="0.12" strokeDasharray="3 8" />
            <ellipse cx="210" cy="337" rx="90" ry="8" fill="#21113F" fillOpacity="0.12" />

            <g stroke="#21113F" strokeWidth="3" strokeLinejoin="round">
                <rect x="128" y="17" width="164" height="315" rx="27" fill="#21113F" />
                <rect x="136" y="25" width="148" height="299" rx="21" fill="#F8F5EF" />
                <path d="M136 47q0-22 21-22h106q21 0 21 22v39H136V47Z" fill="#EEE8F9" stroke="none" />
                <rect x="177" y="31" width="64" height="8" rx="4" fill="#21113F" stroke="none" />
                <circle cx="153" cy="64" r="12" fill="#CCFF00" stroke="none" />
                <path d="M149 59q-2 2 1 6t6 3l2-2-3-2-2 1-2-2 1-2-1-2Z" fill="#21113F" stroke="none" />
                <text x="171" y="62" fill="#21113F" stroke="none" fontSize="8" fontWeight="800" letterSpacing="0.7">ACT STORE</text>
                <text x="171" y="74" fill="#6B6178" stroke="none" fontSize="7">Previews · builds · updates</text>

                <rect x="150" y="98" width="120" height="91" rx="10" fill="#FFFFFF" stroke="#E4DDED" strokeWidth="1.5" />
                <rect x="158" y="106" width="104" height="55" rx="6" fill="#EDE8F8" stroke="none" />
                <rect x="158" y="106" width="104" height="10" rx="6" fill="#21113F" stroke="none" />
                <circle cx="165" cy="111" r="1.5" fill="#CCFF00" stroke="none" />
                <circle cx="171" cy="111" r="1.5" fill="#A78BFA" stroke="none" />
                <rect x="166" y="125" width="41" height="28" rx="3" fill="#7C3AED" stroke="none" />
                <path d="M215 128h37m-37 7h29m-29 8h33" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                <text x="158" y="174" fill="#21113F" stroke="none" fontSize="7" fontWeight="800" letterSpacing="0.5">STORE FRONT · PROJECT</text>

                <rect x="150" y="199" width="120" height="91" rx="10" fill="#FFFFFF" stroke="#E4DDED" strokeWidth="1.5" />
                <rect x="158" y="207" width="104" height="55" rx="6" fill="#24143D" stroke="none" />
                <rect x="164" y="214" width="92" height="8" rx="3" fill="#382458" stroke="none" />
                <rect x="164" y="228" width="26" height="26" rx="4" fill="#7C3AED" stroke="none" />
                <path d="M198 232h51m-51 7h42m-42 7h47" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" />
                <text x="158" y="275" fill="#21113F" stroke="none" fontSize="7" fontWeight="800" letterSpacing="0.5">DASHBOARD · PROJECT</text>

                <rect x="150" y="299" width="120" height="14" rx="7" fill="#CCFF00" stroke="none" />
                <circle cx="161" cy="306" r="3" fill="#21113F" stroke="none" />
                <text x="169" y="309" fill="#21113F" stroke="none" fontSize="6" fontWeight="800" letterSpacing="0.5">NEW WORK SHARED HERE</text>
            </g>

            <path d="m315 77 5-10m5 19 11-2M94 250l-9-5" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" />
            <circle cx="315" cy="274" r="5" fill="#7C3AED" fillOpacity="0.45" />
        </svg>
    );
}

export function SpotlightSection() {
    return (
        <section id="work" aria-labelledby="projects-title" className="scroll-mt-28 bg-background px-6 py-20 text-foreground sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex items-end justify-between gap-6 border-b border-foreground/15 pb-7 md:mb-14">
                    <h2 id="projects-title" className="text-5xl font-black leading-none tracking-[-0.055em] sm:text-6xl md:text-7xl">Projects<span className="text-primary">.</span></h2>
                    <span className="pb-1 text-xs text-foreground/45">Previews & updates</span>
                </div>

                <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-primary/[0.06] px-5 dark:bg-primary/[0.12] sm:px-10">
                        <ProjectChannelIllustration />
                    </div>

                    <div className="max-w-lg">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Follow the work</p>
                        <h3 className="text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">Projects and updates, shared on WhatsApp.</h3>
                        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
                            See project previews, new releases, and behind-the-scenes updates on my WhatsApp channel.
                        </p>
                        <a
                            href={whatsappChannelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-[#21113f] shadow-[3px_3px_0_rgba(0,0,0,0.12)] transition-transform motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            <FaWhatsapp aria-hidden="true" className="h-5 w-5 text-[#16833D]" />
                            View projects on WhatsApp
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </a>
                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/40">Project previews · builds · releases</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
