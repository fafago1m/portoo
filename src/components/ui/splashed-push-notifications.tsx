import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { createPortal } from 'react-dom';

export type NotificationType = 'success' | 'error' | 'warning' | 'help';

interface NotificationConfig {
    id: string;
    title: string;
    content: string;
    type: NotificationType;
}

const ICONS = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    help: <Info className="w-5 h-5" />
};

const TYPE_COLORS = {
    help: '#0070e0',
    success: '#03a65a',
    warning: '#fc8621',
    error: '#db3056'
};

export const SplashedPushNotifications = forwardRef((_, ref) => {
    const [notifications, setNotifications] = useState<NotificationConfig[]>([]);

    useImperativeHandle(ref, () => ({
        createNotification: (title: string, content: string, type: NotificationType = 'help') => {
            const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
            setNotifications(prev => [...prev, { id, title, content, type }]);

            const style = document.createElement('style');
            style.innerHTML = `
        @keyframes timerShrink-${id} {
          0% { width: 100%; }
          100% { width: 0%; }
        }
      `;
            document.head.appendChild(style);

            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
                document.head.removeChild(style);
            }, 5000);
        }
    }));

    const removeNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const portalContent = (
        <div className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 p-4 md:p-6 w-full max-w-[420px] pointer-events-none">
            <AnimatePresence>
                {notifications.map((notif) => (
                    <motion.div
                        key={notif.id}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="group pointer-events-auto relative w-full overflow-hidden rounded-xl bg-background shadow-2xl ring-1 ring-border"
                    >
                        <div className="flex p-4">
                            <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                                style={{ backgroundColor: TYPE_COLORS[notif.type] }}
                            >
                                {ICONS[notif.type]}
                            </div>
                            <div className="ml-4 mr-6 flex-1">
                                <h3 className="text-sm font-semibold text-gray-900">{notif.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{notif.content}</p>
                            </div>
                            <button
                                onClick={() => removeNotification(notif.id)}
                                className="absolute right-4 top-4 rounded-md text-gray-400 hover:text-gray-900 focus:outline-none"
                            >
                                <XCircle className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Timer bar */}
                        <div className="h-1 w-full bg-gray-100">
                            <div
                                className="h-full group-hover:[animation-play-state:paused]"
                                style={{
                                    backgroundColor: TYPE_COLORS[notif.type],
                                    animation: `timerShrink-${notif.id} 5s linear forwards`
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    return typeof document !== 'undefined' ? createPortal(portalContent, document.body) : null;
});

SplashedPushNotifications.displayName = 'SplashedPushNotifications';
