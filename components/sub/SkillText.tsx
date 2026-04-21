"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-zinc-800 bg-zinc-900/50 flex items-center gap-2 w-fit rounded-full"
      >
        <SparklesIcon className="text-zinc-400 h-4 w-4" />
        <h1 className="Welcome-text text-[12px] text-zinc-300 font-semibold tracking-widest">
          Motivasi Hari ini
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Berhasil atau gagal, proses ini akan tetap berjalan, tidak ada kata menyerah sebelum semua impian itu tercapai.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        not trying is the same as failing
      </motion.div>
    </div>
  )
}

export default SkillText