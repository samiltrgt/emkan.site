'use client'

import { motion } from 'framer-motion'

interface ProcessStepsProps {
  items: Array<{
    title: string
    desc: string
  }>
}

export default function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Sürecimiz</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Müşteri memnuniyeti odaklı, şeffaf ve verimli iş süreçlerimiz
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 relative z-10">
                  {index + 1}
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
