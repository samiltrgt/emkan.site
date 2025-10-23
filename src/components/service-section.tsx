'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceSectionProps {
  title: string
  description: string
  bullets: string[]
  ctas: Array<{ label: string; href: string }>
  videoSrc: string
  posterSrc: string
  reverse?: boolean
  nextSection?: string
  previousSection?: string
}

export default function ServiceSection({ 
  title, 
  description, 
  bullets, 
  ctas, 
  videoSrc, 
  posterSrc, 
  reverse = false,
  nextSection = '#services',
  previousSection
}: ServiceSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Start video when section comes into view
          if (videoRef.current) {
            videoRef.current.play().catch(console.error)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden snap-start"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        {!isVideoLoaded && (
          <div className="absolute inset-0">
            <Image
              src={posterSrc}
              alt={`${title} background`}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white max-w-2xl px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              {title}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 leading-relaxed">
              {description}
            </p>
            
            {/* Bullets */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 md:space-x-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base md:text-lg">{bullet}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start"
            >
              {ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`px-4 md:px-6 py-2.5 md:py-3 rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 text-center ${
                    index === 0
                      ? 'bg-accent text-white hover:bg-accent/90 hover:scale-105'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary'
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Up Button - Top (navbar'ın altında) - Sadece previousSection varsa göster */}
      {previousSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-20 md:top-28 left-1/2 transform -translate-x-1/2 z-20"
        >
          <a 
            href={previousSection}
            className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 shadow-lg"
            aria-label="Önceki bölüme dön"
          >
            <motion.svg 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-accent transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </a>
        </motion.div>
      )}

      {/* Down Button - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a 
          href={nextSection}
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 shadow-lg"
          aria-label="Sonraki bölüme geç"
        >
          <motion.svg 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-accent transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  )
}
