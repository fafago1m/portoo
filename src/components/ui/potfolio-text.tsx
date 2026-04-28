import { cn } from "@/lib/utils";

interface AnimatedLetterTextProps {
    text: string;
    letterToReplace: string;
    className?: string;
}

export function AnimatedLetterText({ text, letterToReplace, className }: AnimatedLetterTextProps) {
    const parts = text.split(new RegExp(`(${letterToReplace})`, 'i'));
    let replaced = false;

    return (
        <h2 className={cn("font-black tracking-tighter leading-none m-0 p-0 text-foreground flex items-center justify-center", className)}
            style={{
                fontFamily: '"Arial Black", Impact, sans-serif',
                textShadow: "4px 4px 0 var(--clr-primary-dark), 8px 8px 0 rgba(0,0,0,0.1)"
            }}>
            {parts.map((part, i) => {
                if (part.toLowerCase() === letterToReplace.toLowerCase() && !replaced) {
                    replaced = true;
                    return (
                        <span key={i} className="inline-flex items-center justify-center relative mx-2 aspect-square h-[0.8em]">
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                    <filter id="innerShadow">
                                        <feOffset dx="0" dy="4" />
                                        <feGaussianBlur stdDeviation="3" result="offset-blur" />
                                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                                        <feFlood floodColor="black" floodOpacity="0.5" result="color" />
                                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                                    </filter>
                                    <filter id="diamondGlow">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#CCFF00" />
                                        <stop offset="100%" stopColor="#88AA00" />
                                    </linearGradient>
                                    <linearGradient id="diamondShine" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                                        <stop offset="50%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Scalloped Shape */}
                                <path
                                    d="M50 5 
                     C 60 5, 65 20, 75 25 
                     C 85 30, 95 40, 95 50 
                     C 95 60, 85 70, 75 75 
                     C 65 80, 60 95, 50 95 
                     C 40 95, 35 80, 25 75 
                     C 15 70, 5 60, 5 50 
                     C 5 40, 15 30, 25 25 
                     C 35 20, 40 5, 50 5 Z"
                                    className="fill-foreground transition-colors duration-500"
                                    filter="url(#innerShadow)"
                                />

                                {/* Rotating Diamond */}
                                <g className="animate-diamond-rotate" style={{ transformOrigin: "50% 50%" }}>
                                    <path
                                        d="M50 20 L70 50 L50 80 L30 50 Z"
                                        fill="url(#diamondGradient)"
                                        filter="url(#diamondGlow)"
                                    />
                                    <path
                                        d="M50 20 L70 50 L50 80 L30 50 Z"
                                        fill="url(#diamondShine)"
                                    />
                                </g>
                            </svg>
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </h2>
    );
}
