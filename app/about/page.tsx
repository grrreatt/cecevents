'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every event we manage"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Your success is our success - we work as one team"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge solutions for modern event challenges"
    },
    {
      icon: "🛡️",
      title: "Reliability",
      description: "Consistent, dependable service you can trust"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bgLight pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full"
            >
              <span className="text-gold font-semibold">About Us</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Your Trusted <span className="text-gold">Event Partner</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A decade of excellence in conference management and event coordination
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded in 2014, <span className="text-gold font-semibold">cecevents</span> has grown from a passionate startup to a globally 
                  recognized leader in event management and conference services.
                </p>
                <p>
                  We specialize in bringing events to life — from intimate corporate gatherings to large-scale 
                  international conferences. Our team of creative professionals combines expertise in event design, 
                  technology, logistics, and hospitality to deliver unforgettable experiences.
                </p>
                <p>
                  With over 500 successful events and 50,000+ happy attendees, we've built our reputation on innovation, 
                  attention to detail, and flawless execution. Whether it's a medical symposium, academic conference, 
                  corporate retreat, or product launch — we turn visions into reality.
                </p>
                <p>
                  Our commitment to excellence has made us the trusted partner for organizations across 35 countries. 
                  At cecevents, we don't just manage events — we create experiences that inspire, connect, and leave 
                  lasting impressions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={ref} className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-center text-gray-600 mb-12">The principles that guide everything we do</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold-light/20 to-transparent 
                           border border-gold/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section (Sanity-powered, shared with Home) */}
        <TeamSection />

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              By The <span className="text-gold">Numbers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Events Managed" },
                { number: "50,000+", label: "Happy Delegates" },
                { number: "35+", label: "Countries Served" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

