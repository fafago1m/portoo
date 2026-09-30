import { useId } from 'react';
import { useReducedMotion } from 'motion/react';

// Animate isolated parts of the supplied illustration without changing the source asset.
const handOutline = 'M1018 467 C982 450 974 420 973 388 L956 333 Q953 308 973 305 Q994 300 1016 363 L1037 263 Q1045 236 1064 241 Q1082 245 1076 272 L1069 318 L1090 264 Q1100 239 1118 247 Q1135 253 1126 278 L1108 325 L1130 284 Q1143 265 1157 277 Q1172 286 1159 310 L1138 351 L1169 328 Q1185 317 1195 330 Q1205 343 1186 366 L1150 412 Q1131 454 1101 470 L1112 496 L1027 502 Z';

// Include the hair, ears and jaw; pivot at the neck so the face moves as one unit.
const headOutline = 'M545 634 L540 597 Q503 578 486 544 Q444 560 420 517 Q402 482 418 455 L373 425 Q352 389 364 342 Q351 286 401 245 L413 201 L450 210 L451 177 Q492 191 538 167 Q630 121 681 169 L723 162 L711 191 Q751 187 758 225 Q817 246 800 310 L800 353 L786 390 L780 407 Q800 431 787 470 Q775 503 738 508 Q724 553 692 579 L700 634 Z';

const eyes = [
    { name: 'left', x: 535, y: 462, rx: 17, ry: 23 },
    { name: 'right', x: 659, y: 441, rx: 16, ry: 24 },
];
const mouthOutline = 'M556 526 Q605 518 656 504 Q665 503 663 518 Q656 564 611 568 Q574 570 556 535 Z';

export function WavingDeveloper() {
    const id = useId().replace(/:/g, '');
    const reduceMotion = useReducedMotion();
    const source = `${import.meta.env.BASE_URL}images/developer-loading.png`;

    return (
        <svg
            role="img"
            aria-label="Ihza waving hello"
            viewBox="0 0 1271 1238"
            className="block h-full w-full overflow-visible"
        >
            <defs>
                <clipPath id={`${id}-head`}>
                    <path d={headOutline} />
                </clipPath>
                {eyes.map(({ name, x, y, rx, ry }) => (
                    <clipPath key={name} id={`${id}-${name}-eye`}>
                        <ellipse cx={x} cy={y} rx={rx} ry={ry} />
                    </clipPath>
                ))}
                <clipPath id={`${id}-mouth`}>
                    <path d={mouthOutline} />
                </clipPath>
                <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#fbbf90" />
                    <stop offset="1" stopColor="#fabb8d" />
                </linearGradient>
                <clipPath id={`${id}-hand`}>
                    <path d={handOutline} />
                </clipPath>
                <mask id={`${id}-body`} maskUnits="userSpaceOnUse" x="0" y="0" width="1271" height="1238">
                    <rect width="1271" height="1238" fill="white" />
                    <path d={handOutline} fill="black" />
                    <path d={headOutline} fill="black" />
                </mask>
                <radialGradient id={`${id}-background`}>
                    <stop stopColor="#e8e0fc" />
                    <stop offset="1" stopColor="#dcd0fa" />
                </radialGradient>
            </defs>
            {reduceMotion ? (
                <image href={source} width="1271" height="1238" />
            ) : (
                <>
                    {/* Restore the circular backdrop behind the moving hand. */}
                    <g clipPath={`url(#${id}-hand)`}>
                        <ellipse cx="625" cy="585" rx="506" ry="491" fill={`url(#${id}-background)`} />
                    </g>
                    <path d={headOutline} fill={`url(#${id}-background)`} />
                    <image href={source} width="1271" height="1238" mask={`url(#${id}-body)`} />
                    {/* Overlap the neck under the head to keep the joint connected. */}
                    <path d="M553 606 Q618 632 687 601 L695 642 Q622 676 550 646 Z" fill={`url(#${id}-skin)`} />
                    <g data-wave-head="">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 620 630;-1.6 620 630;1.1 620 630;0 620 630"
                            keyTimes="0;0.3;0.65;1"
                            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                            calcMode="spline"
                            dur="3.4s"
                            repeatCount="indefinite"
                        />
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;0 3;0 -2;0 0"
                                keyTimes="0;0.3;0.65;1"
                                keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                                calcMode="spline"
                                dur="3.4s"
                                repeatCount="indefinite"
                            />
                            <image href={source} width="1271" height="1238" clipPath={`url(#${id}-head)`} />
                            {/* Skin underlays prevent the original pupils/smile showing through. */}
                            {eyes.map(({ name, x, y, rx, ry }) => (
                                <g key={name}>
                                    <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id}-skin)`} />
                                    <g transform={`translate(${x} ${y})`}>
                                        <g>
                                            {/* A quick close, short hold, and softer reopening. */}
                                            <animateTransform
                                                attributeName="transform"
                                                type="scale"
                                                values="1 1;1 1;1 0.08;1 0.08;1 1;1 1"
                                                keyTimes="0;0.26;0.29;0.31;0.36;1"
                                                dur="3.4s"
                                                repeatCount="indefinite"
                                            />
                                            <g transform={`translate(${-x} ${-y})`}>
                                                <image href={source} width="1271" height="1238" clipPath={`url(#${id}-${name}-eye)`} />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            ))}
                            <path d={mouthOutline} fill={`url(#${id}-skin)`} />
                            <g transform="translate(610 526) rotate(-11)">
                                <g>
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        values="1 1;1.025 0.84;1 1;1 1"
                                        keyTimes="0;0.35;0.7;1"
                                        keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                                        calcMode="spline"
                                        dur="2.6s"
                                        repeatCount="indefinite"
                                    />
                                    <g transform="rotate(11) translate(-610 -526)">
                                        <image href={source} width="1271" height="1238" clipPath={`url(#${id}-mouth)`} />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    <ellipse cx="1067" cy="490" rx="39" ry="22" fill="#f8b780" />
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 1067 492;8 1067 492;-7 1067 492;8 1067 492;0 1067 492"
                            keyTimes="0;0.22;0.48;0.74;1"
                            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                            calcMode="spline"
                            dur="1.8s"
                            repeatCount="indefinite"
                        />
                        <image href={source} width="1271" height="1238" clipPath={`url(#${id}-hand)`} />
                    </g>
                </>
            )}
        </svg>
    );
}
