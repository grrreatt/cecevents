'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: '🎪',
      title: "Event Production",
      description: "Full-scale event production from concept to execution. Stage design, lighting, sound, and everything that makes your event spectacular.",
      features: ["Stage Design", "Audio/Visual", "Lighting Design", "Production Management"],
      color: 'gold'
    },
    {
      icon: '📋',
      title: "Conference Management",
      description: "End-to-end conference solutions including registration, attendee management, and seamless on-site coordination.",
      features: ["Registration System", "Attendee Tracking", "Badge Printing", "Live Support"],
      color: 'gold-dark'
    },
    {
      icon: '🎯',
      title: "Corporate Events",
      description: "Professional corporate event planning for meetings, product launches, team building, and company celebrations.",
      features: ["Team Building", "Product Launches", "Annual Meetings", "Networking Events"],
      color: 'gold-light'
    },
    {
      icon: '✨',
      title: "Venue Sourcing",
      description: "Perfect venue selection and setup tailored to your event needs, capacity, and budget requirements.",
      features: ["Venue Selection", "Site Inspections", "Contract Negotiation", "Setup Coordination"],
      color: 'gold'
    },
    {
      icon: '🎤',
      title: "Hybrid & Virtual Events",
      description: "Cutting-edge hybrid and virtual event solutions connecting in-person and remote attendees seamlessly.",
      features: ["Live Streaming", "Virtual Platforms", "Interactive Sessions", "Global Reach"],
      color: 'gold-dark'
    },
    {
      icon: '💎',
      title: "VIP Services",
      description: "Premium concierge services, exclusive experiences, and personalized attention for your most important guests.",
      features: ["Concierge Service", "Exclusive Access", "Travel Coordination", "Personal Assistance"],
      color: 'gold-light'
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
              <span className="text-gold font-semibold">Our Services</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Comprehensive Event <span className="text-gold">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Everything you need to host successful conferences, from registration to execution
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={ref} className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-gold/30 
                           transition-all duration-300 border border-transparent hover:border-gold/50 
                           group cursor-pointer relative overflow-hidden"
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-sm">
                      <motion.div
                        className="text-4xl md:text-5xl"
                        animate={{
                          y: [0, -6, 0],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-gold rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
          {/* Animated background particles */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Create Your <motion.span 
                className="text-gold inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Dream Event?
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Let's bring your vision to life with cecevents
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-gold-dark text-primary 
                         font-bold text-lg rounded-xl shadow-xl shadow-gold/30 hover:shadow-2xl 
                         hover:shadow-gold/50 transition-all duration-300"
              >
                🎯 Start Planning Now
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

