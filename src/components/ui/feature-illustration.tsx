import { TimelineIllustration } from './timeline-illustration';

export type FeatureIconKind = 'browser' | 'server' | 'award';

export function FeatureIllustration({ kind }: { kind: FeatureIconKind }) {
    if (kind === 'award') return <TimelineIllustration kind="award" />;

    return (
        <svg aria-hidden="true" viewBox="0 0 96 96" fill="none" className="h-16 w-16 shrink-0 overflow-visible sm:h-20 sm:w-20">
            <ellipse cx="49" cy="85" rx="31" ry="5" fill="#21113f" fillOpacity="0.12" />
            <g stroke="#21113f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {kind === 'browser' ? (
                    <g transform="rotate(-6 48 48)">
                        <rect x="16" y="20" width="71" height="59" rx="8" fill="#7c3aed" />
                        <rect x="10" y="14" width="71" height="59" rx="8" className="fill-[#f8f5ef] dark:fill-[#eae3ff]" />
                        <path d="M18 14h55a8 8 0 0 1 8 8v8H10v-8a8 8 0 0 1 8-8Z" fill="#c4b5fd" />
                        <g stroke="none">
                            <circle cx="20" cy="22" r="2" fill="#7c3aed" />
                            <circle cx="28" cy="22" r="2" fill="#a78bfa" />
                            <circle cx="36" cy="22" r="2" fill="#ccff00" />
                        </g>
                        <rect x="20" y="40" width="22" height="23" rx="4" fill="#ccff00" />
                        <path d="M51 43h20M51 51h15M51 59h10" stroke="#7c3aed" />
                        <path d="m64 65 5 20 5-7 9-2-19-11Z" fill="#a78bfa" strokeWidth="2" />
                    </g>
                ) : (
                    <g transform="rotate(5 48 48)">
                        <path d="M47 71v12m-23 0h47M24 80v6m47-6v6" stroke="#7c3aed" />
                        {[16, 36, 56].map((y) => (
                            <g key={y}>
                                <rect x="20" y={y + 3} width="62" height="19" rx="5" fill="#7c3aed" />
                                <rect x="15" y={y} width="62" height="19" rx="5" fill="#c4b5fd" />
                                <circle cx="27" cy={y + 9.5} r="3" fill="#ccff00" strokeWidth="1.5" />
                                <path d={`M43 ${y + 7}h24M43 ${y + 12}h16`} strokeWidth="1.5" />
                            </g>
                        ))}
                    </g>
                )}
            </g>
        </svg>
    );
}
