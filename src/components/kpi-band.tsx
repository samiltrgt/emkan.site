'use client'

import { motion } from 'framer-motion'

interface KPIBandProps {
  items: Array<{
    label: string
    value: string
    suffix?: string
  }>
}

export default function KPIBand({ items }: KPIBandProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {item.value}
                {item.suffix && <span className="text-lg">{item.suffix}</span>}
              </div>
              <div className="text-sm md:text-base opacity-90">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
