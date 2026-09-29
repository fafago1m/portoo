import { useSyncExternalStore } from 'react';

const motionPreference = '(prefers-reduced-motion: reduce)';
const getReducedMotion = () => window.matchMedia(motionPreference).matches;
const getServerReducedMotion = () => true;

// Separate the palm at the wrist so its scale and wave can change without moving the sleeve.
const handPath = "M277 172l-7-25-13-23q-5-8 1-11 5-3 10 5l7 11-7-35q-2-8 4-9 6-1 8 7l6 25-1-39q0-8 6-8 6 0 6 8l1 36 5-30q1-8 7-7 6 1 5 9l-5 32 8-18q3-7 8-4 6 2 2 10l-12 32q-3 19-18 34";
const waveTiming = {
    dur: '2.4s',
    repeatCount: 'indefinite',
    calcMode: 'spline' as const,
    keyTimes: '0;0.25;0.5;0.75;1',
    keySplines: '0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1',
};

function subscribeToMotionPreference(onChange: () => void) {
    const query = window.matchMedia(motionPreference);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
}

export function WavingDeveloper() {
    const reduceMotion = useSyncExternalStore(subscribeToMotionPreference, getReducedMotion, getServerReducedMotion);
    const animate = !reduceMotion;

    return (
        <svg role="img" aria-label="Ihza's illustrated developer character waving hello" viewBox="0 0 360 360" className="block h-full w-full overflow-visible" fill="none">
            <circle cx="176" cy="195" r="132" fill="#C4B5FD" fillOpacity="0.2" />
            <ellipse cx="181" cy="330" rx="105" ry="9" fill="#21113F" fillOpacity="0.15" />
            <g data-wave-body="" stroke="#21113F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {animate && <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" />}
                <g data-wave-arm="">
                    <path d="M239 197L261 217Q265 221 269 216L298 172L277 172C264 181 252 188 239 197Z" fill="#E8B58E" />
                    <g transform="translate(288 172) scale(0.9) translate(-288 -172)">
                        <g data-wave-hand="">
                            {animate && <animateTransform attributeName="transform" type="rotate" values="0 288 172;6 288 172;-6 288 172;4 288 172;0 288 172" {...waveTiming} />}
                            <path d={handPath} fill="#E8B58E" />
                            <path d="M278 140q13-3 18 8" stroke="#B77F60" strokeWidth="2" />
                        </g>
                    </g>
                </g>

                {/* Torso and raised sleeve have one outline, with no seam across the shoulder. */}
                <path d="M151 214H201Q215 215 227 204L239 197L261 217L239 245Q228 252 230 275L235 324H109L104 284L78 268L94 237Q108 214 151 214Z" fill="#A78BFA" />
                <path d="M239 197L261 217L251 230L229 208Z" fill="#CCFF00" />
                <path d="m102 252 13 35M228 254l-6-13m-5-20 8-3" stroke="#5B21B6" strokeWidth="2.5" />
                <path d="m85 263 25 15-5 16-27-16 7-15Z" fill="#CCFF00" />
                <path d="M81 282q-4 23 17 29l38 8 6-20-31-12" fill="#E8B58E" />
                <path d="m134 300 24-5q11-2 18 4l8 7q4 5-1 8l-10-5q9 9 2 13l-38-4-3-18Z" fill="#E8B58E" />
                <path d="m157 309 15 6" stroke="#B77F60" strokeWidth="2" />

                <path d="M157 192v28q17 19 34 0v-28" fill="#E8B58E" />
                <path d="M158 195q17 13 32 0v13q-16 10-32-1v-12Z" fill="#CC9675" stroke="none" />
                <path d="M145 217q10 29 29 29 20 0 29-29l-12-1q-16 19-34 0l-12 1Z" fill="#7C3AED" />
                <path d="m155 266-11 13 11 13m38-26 11 13-11 13m-14-30-9 33" stroke="#CCFF00" strokeWidth="4" />

                <g>
                    {animate && <animateTransform attributeName="transform" type="rotate" values="0 175 207;-1.2 175 207;0 175 207" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" />}
                    <ellipse cx="123" cy="153" rx="10" ry="14" fill="#E8B58E" />
                    <ellipse cx="226" cy="153" rx="10" ry="14" fill="#E8B58E" />
                    <path d="M125 111q0-45 50-45t50 45l-4 51q-2 17-15 29l-18 13q-13 7-26 0l-18-13q-13-12-15-29l-4-51Z" fill="#E8B58E" />
                    <path d="M128 145q-13-9-12-31l1-22q1-21 20-30l-4-11q16 4 30-2 24-10 42 3 29 4 29 34l-8 54-7 5-3-35q-11-8-16-20-20 24-63 21l-3 32-6 2Z" fill="#21113F" />
                    <path d="M133 96q35 0 55-24m20 3q12 8 14 22" stroke="#554366" strokeWidth="3" />
                    <path d="m141 136 10-3 10 2m28 0 10-2 10 3" strokeWidth="3.5" />
                    {[151, 199].map((x) => (
                        <ellipse key={x} cx={x} cy="150" rx="3" ry="4" fill="#21113F" stroke="none">
                            {animate && <animate attributeName="ry" values="4;4;0.5;4;4" keyTimes="0;0.52;0.56;0.6;1" dur="3.2s" repeatCount="indefinite" />}
                        </ellipse>
                    ))}
                    <path d="m174 152-3 12h6" stroke="#B77F60" strokeWidth="2" />
                    <path d="M160 177q15 5 30-1-3 13-16 12-9 0-14-11Z" fill="#F8F5EF" strokeWidth="2" />
                    <path d="M168 196q7 2 14-1" stroke="#B77F60" strokeWidth="2" />
                </g>
            </g>
            <g stroke="#CCFF00" strokeWidth="3" strokeLinecap="round">
                {animate && <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" repeatCount="indefinite" />}
                <path d="m308 55 8-12m4 26 14-3M74 119l-11-7" />
            </g>
        </svg>
    );
}
