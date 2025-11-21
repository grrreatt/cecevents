"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import HoloBackground from '@/components/HoloBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
      <HoloBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full"
        >
          <span className="text-gold font-semibold">India's Premier Event Registration Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl"
        >
          Transform every event experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          Seamless on-site registration, clear operations, and reliable execution for conferences across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gold text-primary font-semibold shadow-lg hover:shadow-gold/30 transform hover:scale-[1.02] transition-all"
          >
            Start your event
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Explore services
          </Link>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
          {[
            { label: 'Pan-India Operations' },
            { label: 'On-site Registration' },
            { label: 'Real-time Analytics' },
            { label: 'Badge Printing & QR Check-in' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
