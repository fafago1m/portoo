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
        setBurst({ id, key: Date.now() });

        if (notifyRef.current && RATING_TOASTS[id]) {
            const toast = RATING_TOASTS[id];
            notifyRef.current.createNotification(toast.title, toast.content, toast.type);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <div className="flex justify-center bg-black/5 p-2 rounded-[2rem] gap-1 relative z-10 w-fit max-w-full mx-auto overflow-x-auto sm:overflow-visible no-scrollbar">
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
                                    onClick={() => handleRate(item.id)}
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    whileTap={{ scale: 0.8 }}
                                    animate={isActive ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }}
                                    className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 text-3xl sm:text-4xl flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-background shadow-xl' : 'hover:bg-foreground/5'
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
