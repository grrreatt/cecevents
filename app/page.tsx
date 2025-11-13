'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, CheckCircle2, Users, Building2, Sparkles, 
  TrendingUp, Shield, Zap, Clock, Award, Star,
  ChevronDown, Play, Stethoscope, GraduationCap, Heart, Rocket, Store
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import PortfolioModal from '@/components/PortfolioModal'
import ScrollProgress from '@/components/ScrollProgress'
import { cn } from '@/lib/utils'
import TeamSection from '@/components/TeamSection'
import HomePortfolioPreview from '@/components/HomePortfolioPreview'
import QuoteBand from '@/components/QuoteBand'
import HomeGalleryMosaic from '@/components/HomeGalleryMosaic'
import CinematicLayer from '@/components/CinematicLayer'
import AmbientAudioToggle from '@/components/AmbientAudioToggle'
import ScrollMontage from '@/components/ScrollMontage'

// Motion Counter Component
function MotionCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 30 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, motionValue, target])

  useEffect(() => {
    springValue.on('change', latest => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>
  )
}

export default function HomePage() {
  const { scrollY } = useScroll()
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Parallax values for hero
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])

  const openPortfolio = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ChatBot />
      <PortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />

      <main className="min-h-screen bg-bgLight overflow-hidden">
        {/* ====== CINEMATIC HERO SECTION ====== */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ y: heroY }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary pointer-events-none" />
            {/* Cinematic particle/light layer */}
            <CinematicLayer />
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gold rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-effect border border-gold/30"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm">India's Premier Event Registration Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
            >
              Transform Every
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-shimmer">
                Event Experience
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
            >
              Seamless on-site registration, real-time analytics, and flawless execution for conferences across India
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-primary font-bold rounded-full overflow-hidden shadow-2xl shadow-gold/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Event
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 glass-effect border-2 border-gold/30 text-gold font-bold rounded-full backdrop-blur-xl hover:bg-gold/10 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Ambient sound (opt-in) */}
            <div className="mt-6 flex justify-center">
              <AmbientAudioToggle />
            </div>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { num: 500, suffix: '+', label: 'Events' },
                { num: 50000, suffix: '+', label: 'Registrations' },
                { num: 25, suffix: '+', label: 'Cities' },
                { num: 98, suffix: '%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                    <MotionCounter target={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator removed per request */}
        </section>

        {/* ====== SCROLL MONTAGE STORY ====== */}
        <ScrollMontage />

        {/* ====== BOLD QUOTE BAND ====== */}
        <QuoteBand />

        {/* ====== GOLD MOSAIC GALLERY ====== */}
        <HomeGalleryMosaic />

        {/* ====== SIGNATURE SERVICES (ENHANCED - KEEPING EXISTING) ====== */}
        <SignatureServicesSection />

        {/* ====== FEATURED PORTFOLIO FROM CMS ====== */}
        <HomePortfolioPreview />

        {/* ====== FEATURE HIGHLIGHTS ====== */}
        <FeatureHighlights />

        {/* ====== ABOUT / WHY CHOOSE US ====== */}
        <AboutSection />

        {/* ====== TEAM FROM CMS ====== */}
        <TeamSection />

        {/* ====== CONTACT FORM ====== */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

// Signature Services Section - Enhanced but keeping structure
function SignatureServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-gold/5 via-white to-gold-light/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full text-gold font-semibold text-sm">
              Our Signature Service
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Professional <span className="text-gold">On-site Registration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading registration solutions trusted by India's biggest conferences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="preserve-3d bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-7xl mb-6"
                >
                  📋
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Complete Registration Management
                </h3>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  From badge printing to real-time sync - we handle everything on-ground. 
                  Trusted across Mumbai, Delhi, Bangalore, and 22+ Indian cities.
                </p>
                <Link
                  href="/services"
                  className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-gold/30"
                >
                  Explore Full Service →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Badge Printing',
                  'Registration Desks',
                  'Trained Staff',
                  'Live Sync',
                  'QR Scanning',
                  'Help Desk',
                  'Material Distribution',
                  'Entry Management'
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    className="glass-effect p-4 rounded-xl text-center border border-gold/20 hover:border-gold/50 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="font-semibold text-sm">{feature}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Animated line dividers */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


// Feature Highlights
function FeatureHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Smart Registration',
      desc: 'AI-powered check-in system with facial recognition and QR codes'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Compliant',
      desc: 'Bank-grade encryption with full GDPR and data protection compliance'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Real-Time Analytics',
      desc: 'Live dashboards showing attendance, demographics, and engagement metrics'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      desc: 'Dedicated support team available round the clock for your events'
    }
  ]

  return (
    <section ref={ref} className="py-32 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-gold">cecevents</span>
          </h2>
          <p className="text-xl text-gray-400">Technology meets excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 text-gold mb-6 group-hover:bg-gold group-hover:text-primary transition-all group-hover:shadow-lg group-hover:shadow-gold/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-32 px-6 bg-bgLight">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold font-semibold text-sm">
                About cecevents
              </span>
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">
              India's Most Trusted Event Registration Partner
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since 2014, we've been transforming how conferences and events handle registrations. 
              From AIIMS medical conferences to IIT tech fests, our technology and team have 
              powered over 500 events across 25+ Indian cities.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We don't just provide software – we bring trained professionals, equipment, 
              and a proven system that scales from 100 to 10,000 attendees seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users />, label: 'Expert Team' },
                { icon: <Award />, label: 'ISO Certified' },
                { icon: <Building2 />, label: 'Pan-India' },
                { icon: <Star />, label: '98% Rating' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gold/20 hover:border-gold/50 transition-all"
                >
                  <div className="text-gold">{item.icon}</div>
                  <span className="font-semibold text-primary">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold/20 to-gold-light/10 p-8">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5" />
                <div className="relative z-10 text-center p-8">
                  <div className="text-7xl mb-4">🏆</div>
                  <div className="text-4xl font-bold text-gold mb-2">
                    <MotionCounter target={10} suffix="+" />
                  </div>
                  <p className="text-xl font-semibold text-primary">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Ready to <span className="text-gold">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-600">Let's create something extraordinary together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-effect border-2 border-gold/20 rounded-3xl p-10 backdrop-blur-xl"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 rounded-xl border-2 border-gold/20 focus:border-gold outline-none transition-all bg-white/50 backdrop-blur-sm"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="+91 Phone Number"
                className="px-6 py-4 rounded-xl border-2 border-gold/20 focus:border-gold outline-none transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-xl border-2 border-gold/20 focus:border-gold outline-none transition-all bg-white/50 backdrop-blur-sm"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows={5}
              placeholder="Tell us about your event..."
              className="w-full px-6 py-4 rounded-xl border-2 border-gold/20 focus:border-gold outline-none transition-all bg-white/50 backdrop-blur-sm resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-gold to-gold-dark text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gold/30 transition-all"
            >
              Send Message
            </motion.button>
          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            We'll respond within 24 hours • Call: <a href="tel:+919876543210" className="text-gold font-semibold">+91 98765 43210</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

