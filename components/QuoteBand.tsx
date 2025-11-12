'use client'

import { motion } from 'framer-motion'

export default function QuoteBand() {
  return (
    <section className="relative bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-gold pl-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
            IF YOU DO WHAT YOU LOVE, YOU’LL NEVER WORK A DAY IN YOUR LIFE
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            Crafting bold, efficient event experiences where only what matters stays in focus.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
