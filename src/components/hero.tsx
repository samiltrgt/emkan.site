'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
}

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  const [logoWidth, setLogoWidth] = useState('192px')

  useEffect(() => {
    const updateLogoWidth = () => {
      if (window.innerWidth >= 1024) {
        setLogoWidth('400px')
      } else if (window.innerWidth >= 768) {
        setLogoWidth('300px')
      } else {
        setLogoWidth('192px')
      }
    }

    updateLogoWidth()
    window.addEventListener('resize', updateLogoWidth)
    return () => window.removeEventListener('resize', updateLogoWidth)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          className="hidden md:block w-full h-full object-cover absolute inset-0"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/videos/emkan-poster.jpg"
        >
          <source src="/videos/emkan.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video
          className="block md:hidden w-full h-full object-contain absolute inset-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/emkan-mobile-poster.jpg"
        >
          <source src="/videos/emkan-mobile.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Animated Logo */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="/logos/emkanbeyaz2.png"
            alt="Emkan Global"
            className="mx-auto h-auto"
            style={{
              width: logoWidth
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
