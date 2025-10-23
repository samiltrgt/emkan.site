'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  excerpt: string
  href: string
}

// Icon mapping - gerçek uygulamada lucide-react'tan import edilecek
const iconMap: Record<string, () => JSX.Element> = {
  Ship: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Package: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Droplets: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
    </svg>
  ),
}

export default function ServiceCard({ icon, title, excerpt, href }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || iconMap.Package

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <Link href={href} className="block">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <IconComponent />
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-neutral-600 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="mt-4 text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
          Detayları Gör →
        </div>
      </Link>
    </motion.div>
  )
}
