'use client';

import { motion } from 'framer-motion';

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[-15%]
          left-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-500/10
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[15%]
          right-[-10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/10
          blur-[160px]
        "
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-[-15%]
          left-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />
    </div>
  );
}