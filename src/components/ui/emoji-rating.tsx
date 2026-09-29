import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SplashedPushNotifications, type NotificationType } from "./splashed-push-notifications";

const emojis = [
    { id: 1, label: "Awful", emoji: "😔" },
    { id: 2, label: "Bad", emoji: "😕" },
    { id: 3, label: "Okay", emoji: "😐" },
    { id: 4, label: "Good", emoji: "🙂" },
    { id: 5, label: "Amazing", emoji: "😍" }
];

const RATING_TOASTS: Record<number, { type: NotificationType; title: string; content: string }> = {
    1: { type: 'error', title: 'That bad, huh?', content: "Sorry to hear that. Your honest feedback helps me improve." },
    2: { type: 'warning', title: 'Room to improve', content: "Thanks for letting me know. I'll work on making it better!" },
    3: { type: 'help', title: 'Pretty okay!', content: "Good to know. Tell me what could make it even better." },
    4: { type: 'success', title: 'Glad you liked it!', content: "Thanks for the kind rating. Much appreciated!" },
    5: { type: 'success', title: 'You made my day! 🎉', content: "Amazing! Thank you so much for the love." },
};

export function EmojiRating() {
    const [rating, setRating] = useState<number | null>(null);
    const [burst, setBurst] = useState<{ id: number; key: number } | null>(null);
    const notifyRef = useRef<{ createNotification: (t: string, c: string, ty: NotificationType) => void }>(null);

    const handleRate = (id: number) => {
        setRating(id);
        setBurst((current) => ({ id, key: (current?.key ?? 0) + 1 }));

        if (notifyRef.current && RATING_TOASTS[id]) {
            const toast = RATING_TOASTS[id];
            notifyRef.current.createNotification(toast.title, toast.content, toast.type);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <div role="group" aria-label="Rate your experience" className="relative z-10 mx-auto flex w-fit max-w-full items-center justify-center gap-2 overflow-x-auto px-1 py-2 no-scrollbar sm:gap-3 sm:overflow-visible">
                    {emojis.map((item) => {
                        const isActive = rating === item.id;
                        return (
                            <div key={item.id} className="relative">
                                {/* Background active ring + blur */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-bg"
                                            className="absolute inset-0 rounded-full"
                                            style={{ background: 'var(--clr-accent)', filter: 'blur(8px)', opacity: 0.5 }}
                                            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Click burst ring */}
                                <AnimatePresence>
                                    {burst?.id === item.id && (
                                        <motion.div
                                            key={burst.key}
                                            initial={{ scale: 0.8, opacity: 1, borderWidth: "4px" }}
                                            animate={{ scale: 2, opacity: 0, borderWidth: "1px" }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="absolute inset-0 rounded-full pointer-events-none"
                                            style={{ borderColor: 'var(--clr-accent)', borderStyle: "solid" }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Emoji button */}
                                <motion.button
                                    type="button"
                                    onClick={() => handleRate(item.id)}
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    whileTap={{ scale: 0.8 }}
                                    animate={isActive ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }}
                                    aria-label={`Rate ${item.label}`}
                                    aria-pressed={isActive}
                                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border text-3xl transition-colors sm:h-16 sm:w-16 sm:text-4xl ${isActive ? 'border-primary bg-accent shadow-[0_5px_0_rgba(33,17,63,0.14)]' : 'border-foreground/10 bg-background hover:border-primary/40 hover:bg-primary/5'
                                        }`}
                                >
                                    {item.emoji}
                                </motion.button>
                            </div>
                        );
                    })}
                </div>

                {/* Dynamic Label */}
                <div className="h-6 overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={rating || 'none'}
                            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.span
                                layout
                                className="text-sm font-black uppercase tracking-widest text-foreground/50"
                            >
                                {rating ? emojis.find(e => e.id === rating)?.label : "Select a rating"}
                            </motion.span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <SplashedPushNotifications ref={notifyRef} />
        </>
    );
}
