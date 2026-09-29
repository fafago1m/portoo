import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const codeLines = [
    { path: 'M135 157h38', color: '#a78bfa' },
    { path: 'M182 157h52', color: '#ccff00' },
    { path: 'M147 180h65', color: '#f8f5ef' },
    { path: 'M221 180h24', color: '#a78bfa' },
    { path: 'M147 203h32', color: '#a78bfa' },
    { path: 'M188 203h48', color: '#ccff00' },
    { path: 'M135 226h49', color: '#f8f5ef' },
];

export function LaptopIllustration() {
    const container = useRef<HTMLDivElement>(null);
    const inView = useInView(container, { amount: 0.2 });
    const reduceMotion = useReducedMotion();
    const animate = inView && !reduceMotion;

    return (
        <div ref={container} className="mx-auto flex h-full w-full max-w-[540px] items-center justify-center pb-8">
            <motion.svg
                role="img"
                aria-label="Open laptop with animated code on its screen"
                viewBox="0 0 480 420"
                className="h-auto max-h-full w-full overflow-visible"
                fill="none"
                whileHover={reduceMotion ? undefined : { scale: 1.025, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            >
                <motion.ellipse
                    cx="240" cy="382" rx="156" ry="12" fill="#21113f"
                    animate={animate ? { opacity: [0.2, 0.1, 0.2], scaleX: [1, 0.9, 1] } : { opacity: 0.18, scaleX: 1 }}
                    transition={{ duration: 4.5, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}
                    style={{ transformOrigin: '240px 382px' }}
                />
                <motion.g
                    animate={animate ? { y: [0, -10, 0], rotate: [-3, -1, -3] } : { y: 0, rotate: -3 }}
                    transition={{ duration: 4.5, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}
                    style={{ transformOrigin: '240px 240px' }}
                    stroke="#21113f" strokeWidth="3" strokeLinejoin="round"
                >
                    {/* Offset casing gives the illustration depth without a 3D canvas. */}
                    <rect x="88" y="71" width="316" height="227" rx="17" fill="#21113f" />
                    <rect x="82" y="65" width="316" height="227" rx="17" className="fill-[#c4b5fd] dark:fill-[#a78bfa]" />
                    <rect x="97" y="83" width="286" height="190" rx="9" className="fill-[#24143d] dark:fill-[#120c20]" />
                    <circle cx="240" cy="74" r="2.5" fill="#21113f" stroke="none" />

                    <path d="M106 83h268a9 9 0 0 1 9 9v25H97V92a9 9 0 0 1 9-9Z" className="fill-[#f8f5ef] dark:fill-[#eae3ff]" />
                    <g stroke="none">
                        <circle cx="111" cy="100" r="3" fill="#7c3aed" />
                        <circle cx="123" cy="100" r="3" fill="#a78bfa" />
                        <circle cx="135" cy="100" r="3" fill="#ccff00" />
                        <text x="365" y="103" textAnchor="end" fill="#5b21b6" fontFamily="monospace" fontSize="9" fontWeight="700">hello.tsx</text>
                    </g>

                    <g stroke="none" fill="#a78bfa" fillOpacity="0.5" fontFamily="monospace" fontSize="9">
                        {[157, 180, 203, 226].map((y, index) => <text key={y} x="110" y={y + 3}>{index + 1}</text>)}
                    </g>
                    {codeLines.map((line, index) => (
                        <motion.path
                            key={line.path}
                            d={line.path}
                            stroke={line.color}
                            strokeWidth="5"
                            strokeLinecap="round"
                            animate={animate ? { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] } : { pathLength: 1, opacity: 1 }}
                            transition={animate ? { duration: 6, delay: index * 0.16, times: [0, 0.18, 0.85, 1], repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' } : { duration: 0 }}
                        />
                    ))}
                    <motion.path
                        d="M197 219v14" stroke="#ccff00" strokeWidth="3"
                        animate={animate ? { opacity: [1, 1, 0, 0] } : { opacity: 1 }}
                        transition={{ duration: 1.2, times: [0, 0.45, 0.5, 1], repeat: animate ? Infinity : 0 }}
                    />

                    <path d="M266 133v111" stroke="#a78bfa" strokeOpacity="0.2" strokeWidth="1" />
                    <circle cx="320" cy="181" r="36" fill="#7c3aed" stroke="#a78bfa" strokeWidth="2" />
                    <path d="m307 170-10 11 10 11m26-22 10 11-10 11m-9-26-8 30" stroke="#ccff00" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M300 230h40M310 240h20" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />

                    <path d="M82 292h316l47 56H35l47-56Z" className="fill-[#f8f5ef] dark:fill-[#ddd3f5]" />
                    <path d="M35 348h410l-7 10a10 10 0 0 1-8 4H50a10 10 0 0 1-8-4l-7-10Z" fill="#a78bfa" />
                    <path d="M99 302h282l15 21H83l16-21Z" fill="#c4b5fd" strokeWidth="2" />
                    <g strokeWidth="1.5" strokeOpacity="0.4">
                        <path d="M91 312h296M121 302l-5 21m32-21-3 21m30-21-2 21m29-21-1 21m28-21v21m27-21 1 21m26-21 2 21m25-21 3 21m24-21 5 21m22-21 7 21" />
                    </g>
                    <path d="M209 329h63l7 13h-78l8-13Z" fill="#a78bfa" strokeWidth="1.5" />
                    <path d="M192 348h96l-5 5h-86l-5-5Z" fill="#21113f" stroke="none" />
                    <g transform="rotate(-8 365 336)">
                        <rect x="347" y="329" width="37" height="13" rx="3" fill="#ccff00" strokeWidth="1.5" />
                        <text x="365.5" y="338" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="7" fontWeight="900" fill="#21113f" stroke="none">IHZA</text>
                    </g>
                </motion.g>
                <motion.g
                    stroke="#ccff00" strokeWidth="3" strokeLinecap="round"
                    animate={animate ? { opacity: [0.45, 1, 0.45], y: [0, -4, 0] } : { opacity: 1, y: 0 }}
                    transition={{ duration: 3, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}
                >
                    <path d="m405 49 10-15m1 31 16-3M49 190l-15-5m17 22-14 5" />
                </motion.g>
            </motion.svg>
        </div>
    );
}
