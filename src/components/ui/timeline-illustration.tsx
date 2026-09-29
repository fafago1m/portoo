export type TimelineIconKind = 'award' | 'work' | 'education' | 'founder' | 'certificate';

export function TimelineIllustration({ kind }: { kind: TimelineIconKind }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 96 96" fill="none" className="h-16 w-16 shrink-0 overflow-visible sm:h-20 sm:w-20">
            <ellipse cx="49" cy="85" rx="31" ry="5" fill="#21113f" fillOpacity="0.12" />
            <g stroke="#21113f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {kind === 'award' && (
                    <g transform="rotate(-7 48 48)">
                        <path d="M27 22H15v12q0 17 22 18m32-30h12v12q0 17-22 18" fill="#c4b5fd" />
                        <path d="M28 15h40v22q0 23-20 23T28 37V15Z" fill="#ccff00" />
                        <path d="M44 60h8v13h-8z" fill="#c4b5fd" />
                        <path d="M34 73h28l6 9H28l6-9Z" fill="#7c3aed" />
                        <path d="m48 25 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 4-8Z" fill="#f8f5ef" strokeWidth="2" />
                        <path d="M36 21v14" stroke="white" strokeWidth="3" />
                    </g>
                )}
                {kind === 'work' && (
                    <g transform="rotate(6 48 48)">
                        <path d="M35 28v-7a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v7" strokeWidth="5" />
                        <rect x="13" y="28" width="72" height="51" rx="9" fill="#a78bfa" />
                        <path d="M13 39v8q35 18 72 0v-8" fill="#c4b5fd" />
                        <rect x="42" y="46" width="14" height="17" rx="3" fill="#ccff00" />
                        <path d="M22 65v6h12" stroke="#f8f5ef" strokeWidth="3" />
                    </g>
                )}
                {kind === 'education' && (
                    <g transform="rotate(-5 48 48)">
                        <path d="M11 21h25q8 0 12 6 4-6 12-6h25v57H60q-8 0-12 5-4-5-12-5H11V21Z" fill="#7c3aed" />
                        <path d="M16 16h20q8 0 12 7 4-7 12-7h20v56H60q-8 0-12 5-4-5-12-5H16V16Z" className="fill-[#f8f5ef] dark:fill-[#eae3ff]" />
                        <path d="M48 25v50M24 39h15m-15 10h15m-15 10h9m24-20h15m-15 10h15m-15 10h9" strokeWidth="2" />
                        <path d="M61 17h10v18l-5-4-5 4V17Z" fill="#ccff00" strokeWidth="2" />
                    </g>
                )}
                {kind === 'founder' && (
                    <g transform="rotate(4 48 48)">
                        <rect x="18" y="33" width="61" height="46" rx="4" fill="#c4b5fd" />
                        <path d="M20 16h57l9 19H11l9-19Z" fill="#ccff00" />
                        <path d="M11 35v6q9 11 18 0 10 11 20 0 9 11 18 0 10 11 19 0v-6" fill="#f8f5ef" />
                        <path d="m32 16-3 19m20-19v19m17-19 1 19" strokeWidth="2" />
                        <rect x="27" y="52" width="19" height="17" rx="2" fill="#7c3aed" />
                        <path d="M56 79V52h15v27" fill="#f8f5ef" />
                        <path d="M61 64v3" strokeWidth="2" />
                    </g>
                )}
                {kind === 'certificate' && (
                    <g transform="rotate(-6 48 48)">
                        <rect x="17" y="14" width="62" height="63" rx="5" fill="#c4b5fd" />
                        <rect x="12" y="10" width="62" height="63" rx="5" className="fill-[#f8f5ef] dark:fill-[#eae3ff]" />
                        <path d="M23 23h27m-27 10h38M23 43h22" stroke="#7c3aed" strokeWidth="3" />
                        <path d="m49 62-4 23 12-6 10 6-4-23" fill="#7c3aed" />
                        <circle cx="56" cy="59" r="14" fill="#ccff00" />
                        <path d="m50 59 4 4 8-9" strokeWidth="2.5" />
                    </g>
                )}
            </g>
        </svg>
    );
}
