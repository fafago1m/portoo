interface BrandLogoProps {
    className?: string;
    onPrimary?: boolean;
}

export function BrandLogo({ className = "", onPrimary = false }: BrandLogoProps) {
    return (
        <span role="img" aria-label="Ihza Dev" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
            <span className="flex h-10 w-10 shrink-0 -rotate-6 items-center justify-center rounded-[13px] border border-black/10 bg-accent shadow-[3px_3px_0_rgba(0,0,0,0.18)]">
                <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 text-[#171121]" fill="none">
                    <path d="M7 8h8M11 8v16M7 24h8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
                    <path d="m20 9 6 7-6 7" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="miter" />
                </svg>
            </span>
            <span aria-hidden="true" className="flex flex-col gap-1">
                <span className={`text-[23px] font-black leading-[0.85] tracking-[-0.065em] ${onPrimary ? "text-white" : "text-foreground"}`}>ihza<span className={onPrimary ? "text-accent" : "text-primary"}>.</span></span>
                <span className={`text-[8px] font-bold uppercase leading-none tracking-[0.3em] ${onPrimary ? "text-white/75" : "text-foreground/60"}`}>DEV / CREATIVE</span>
            </span>
        </span>
    );
}
