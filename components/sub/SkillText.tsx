"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="inline-flex items-center px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm mb-8"
      >
        <SparklesIcon className="text-indigo-400 mr-2 h-4 w-4" />
        <span className="text-indigo-200 text-sm font-medium">
          Skills & Technologies
        </span>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-center mb-4"
      >
        Modern Tech Stack
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-lg text-muted-foreground mb-10 text-center max-w-[600px]"
      >
        Building with the best tools in the industry to deliver robust and scalable solutions.
      </motion.div>
    </div>
  )
}

export default SkillText