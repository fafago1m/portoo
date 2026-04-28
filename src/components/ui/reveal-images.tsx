import { motion } from "motion/react";

interface RevealImageListItemProps {
    title: string;
    index: number;
    image1: string;
    image2: string;
}

const variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

function RevealImageListItem({ title, index, image1, image2 }: RevealImageListItemProps) {
    return (
        <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative flex items-center justify-between py-6 border-b border-black/10 cursor-pointer"
        >
            <h4 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground/20 group-hover:text-foreground transition-colors duration-500 uppercase">
                {title}
            </h4>

            {/* Floating Images Container */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-10">
                <div className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden shadow-2xl rotate-[-6deg] group-hover:rotate-[-12deg] transition-transform duration-700">
                    <img src={image1} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden shadow-2xl rotate-[6deg] group-hover:rotate-[12deg] transition-transform duration-700 mt-8">
                    <img src={image2} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>
        </motion.div>
    );
}

export function RevealImageList() {
    const services = [
        {
            title: "Branding",
            image1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
            image2: "https://images.unsplash.com/photo-1628102491629-77858ab5721d?w=400&q=80"
        },
        {
            title: "Web design",
            image1: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80",
            image2: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80"
        },
        {
            title: "Illustration",
            image1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
            image2: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80"
        }
    ];

    return (
        <div className="w-full">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="text-xs font-black tracking-widest uppercase mb-12 text-foreground/40"
            >
                Core Services
            </motion.h3>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col"
            >
                {services.map((s, i) => (
                    <RevealImageListItem key={s.title} title={s.title} index={i} image1={s.image1} image2={s.image2} />
                ))}
            </motion.div>
        </div>
    );
}
