"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props) => {
    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.05

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            custom={index}
            transition={{delay: index * animationDelay}}
            style={{ width: width, height: height }} // Explicitly set dimensions to reserve space
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    )
}

export default SkillDataProvider