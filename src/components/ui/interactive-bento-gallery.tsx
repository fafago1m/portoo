import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { createPortal } from "react-dom";

type MediaType = "image" | "video";

interface MediaItemType {
    id: number;
    type: MediaType;
    title: string;
    desc: string;
    url: string;
}

const mediaItems: MediaItemType[] = [
    {
        id: 1, type: "image", title: "2nd Place LKS Web Technology", desc: "Awarded 2nd Place in the LKS Web Technology Competition at the provincial level, demonstrating strong full-stack development skills",
        url: "/certificates/diy1.jpg",
    },
    {
        id: 2, type: "image", title: "1nd Place UKK", desc: "Awarded 1st Place in the Software Engineering Competency Exam (UKK), demonstrating strong skills in web development and database management",
        url: "/certificates/ukk.jpg",
    },
    {
        id: 11, type: "image", title: "AI & Machine Learning", desc: "Intelligent Systems design",
        url: "/certificates/c9.jpg",
    },
    {
        id: 3, type: "image", title: "GIT GITHUB", desc: "Advanced algorithmic proficiency",
        url: "/certificates/c1.jpg",
    },
    {
        id: 4, type: "image", title: "Program BUMN", desc: "Participated in the MEA competition",
        url: "/certificates/c2.jpg",
    },
    {
        id: 5, type: "image", title: "Full Stack Next JS & Laravel 11", desc: "Developed a full-stack catering website using Next.js and Laravel 11, including frontend development, backend API integration, and database management",
        url: "/certificates/c3.jpg",
    },
    {
        id: 6, type: "image", title: "UI/UX Figma", desc: "Created wireframes and mockups using Figma",
        url: "/certificates/c4.jpg",
    },
    {
        id: 7, type: "image", title: "Python Web Developer", desc: "Optimized Query architecture",
        url: "/certificates/c5.jpg",
    },

    {
        id: 9, type: "image", title: "Full Stack Development", desc: "Skilled in full-stack web development, including building responsive frontends with HTML, CSS, and React, as well as developing backend systems and RESTful APIs using Node.js and SQL databases",
        url: "/certificates/c7.jpg",
    },
    {
        id: 10, type: "image", title: "JavaScript", desc: "Learned and applied JavaScript in web development projects",
        url: "/certificates/c8.jpg",
    },

    {
        id: 8, type: "image", title: "HTML", desc: "Learned and applied HTML in web development projects",
        url: "/certificates/c6.jpg",
    },

];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

function MediaItem({ item, onClick }: { item: MediaItemType; onClick?: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            layoutId={`media-${item.id}`}
            className="break-inside-avoid mb-6 relative rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-sm bg-muted border border-white/5"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {item.type === "image" ? (
                <img src={item.url} alt={item.title} className="w-full h-auto block" />
            ) : (
                <video ref={videoRef} src={item.url} muted loop playsInline className="w-full h-auto block" />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="font-black text-lg mb-1 leading-tight">{item.title}</h3>
                <p className="opacity-80 text-[10px] font-semibold uppercase tracking-wider">{item.desc}</p>
            </div>
        </motion.div>
    );
}

function GalleryModal({
    selectedId,
    onClose,
    items,
    onSelect
}: {
    selectedId: number;
    onClose: () => void;
    items: MediaItemType[];
    onSelect: (id: number) => void;
}) {
    const selectedItem = items.find((i) => i.id === selectedId);
    if (!selectedItem) return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                <motion.div
                    layoutId={`media-${selectedItem.id}`}
                    className="relative w-full max-w-6xl h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl border flex flex-col"
                    style={{ background: 'var(--clr-bg)', borderColor: 'var(--clr-primary)' }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all text-lg"
                    >
                        ✕
                    </button>

                    {/* Main Content */}
                    <div className="w-full h-full relative bg-black/20 flex items-center justify-center">
                        {selectedItem.type === "image" ? (
                            <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-full object-contain p-4" />
                        ) : (
                            <video src={selectedItem.url} autoPlay muted loop playsInline className="max-w-full max-h-full object-contain p-4" />
                        )}

                        <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md rounded-xl px-5 py-3 shadow-xl text-white pointer-events-none">
                            <h2 className="text-xl font-black mb-0.5">{selectedItem.title}</h2>
                            <p className="text-xs font-semibold opacity-70 tracking-tight uppercase">{selectedItem.desc}</p>
                        </div>
                    </div>

                    {/* Thumbnail Dock */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-2xl">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => onSelect(item.id)}
                                    className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition-all ${item.id === selectedId ? 'ring-2 ring-white scale-105' : 'opacity-40 hover:opacity-100'}`}
                                >
                                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export function InteractiveBentoGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        if (selectedId !== null) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
        return () => { document.documentElement.style.overflow = ""; };
    }, [selectedId]);

    return (
        <div className="px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto"
            >
                {mediaItems.map((item) => (
                    <MediaItem
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedId(item.id)}
                    />
                ))}
            </motion.div>

            {selectedId && (
                <GalleryModal
                    selectedId={selectedId}
                    onClose={() => setSelectedId(null)}
                    items={mediaItems}
                    onSelect={setSelectedId}
                />
            )}
        </div>
    );
}
