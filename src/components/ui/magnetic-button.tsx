import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface MagneticButtonProps {
    children: React.ReactNode;
    distance?: number;
    strength?: number;
}

export function MagneticButton({ children, distance = 100, strength = 0.4 }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 15, stiffness: 150 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (dist < distance) {
            mouseX.set(deltaX * strength);
            mouseY.set(deltaY * strength);
        } else {
            mouseX.set(0);
            mouseY.set(0);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}
