'use client'

import { motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'

type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  once?: boolean
  className?: string
}

export default function Reveal({ children, delay = 0, y = 20, once = true, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.6, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}


