'use client'

import { motion } from 'framer-motion'

interface LogoGridProps {
  items: Array<{
    name: string
    logoUrl: string
    href?: string
  }>
}

export default function LogoGrid({ items }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-xs font-bold text-neutral-600">{item.name}</span>
                </div>
                <span className="text-xs text-neutral-500">{item.name}</span>
              </div>
            </a>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-xs font-bold text-neutral-600">{item.name}</span>
              </div>
              <span className="text-xs text-neutral-500">{item.name}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
