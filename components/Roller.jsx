'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Roller({services}) {
  const words = services.map((service) => service.title)
  
  const duplicatedWords = [...words, ...words]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r bg-[#272727] py-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -50 * words.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedWords.map((word, index) => (
          <div
            key={index}
            className="inline-block mx-6 text-4xl font-bold text-white"
          >
            {word}
          </div>
        ))}
      </motion.div>
    </div>
  )
}