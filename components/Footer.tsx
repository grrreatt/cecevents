'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * FOOTER
 * 
 * EDITABLE CONTENT:
 * - companyName: Your company name
 * - tagline: Company tagline/slogan
 * - socialLinks: Social media URLs
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ✏️ EDIT THIS CONTENT
  const companyName = "cecevents"
  const tagline = "Creating Unforgettable Event Experiences Worldwide"
  const socialLinks = {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative bg-[color:var(--color-bg)] text-[color:var(--color-text)] border-t border-[color:var(--color-brand)]/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-[color:var(--color-brand)]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-[color:var(--color-brand)]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-[color:var(--color-brand)]"
              >
                <span className="text-[color:var(--color-bg)] font-bold text-xl relative z-10">C</span>
                <div className="absolute inset-0 shimmer" />
              </motion.div>
              <h3 className="text-2xl font-bold group-hover:text-[color:var(--color-brand)] transition-colors">{companyName}</h3>
            </div>
            <p className="text-[color:var(--color-text-muted)] mb-4 max-w-md leading-relaxed">{tagline}</p>
            <p className="text-sm text-[color:var(--color-text-muted)]/80">
              Trusted by organizations across India for professional event management since 2014.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-[color:var(--color-brand)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-brand)] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[color:var(--color-brand)] group-hover:w-4 transition-all duration-300" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-[color:var(--color-brand)] mb-4">Contact</h4>
            <ul className="space-y-3 text-[color:var(--color-text-muted)]">
              <motion.li whileHover={{ x: 5 }}>
                <a href="tel:+919876543210" className="hover:text-[color:var(--color-brand)] transition-colors flex items-center gap-2">
                  <span className="text-[color:var(--color-brand)]">📞</span>
                  +91 98765 43210
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="mailto:info@cecevents.com" className="hover:text-[color:var(--color-brand)] transition-colors flex items-center gap-2">
                  <span className="text-[color:var(--color-brand)]">✉️</span>
                  info@cecevents.com
                </a>
              </motion.li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-[color:var(--color-brand)]">📍</span>
                <span>
                  Mumbai | Delhi | Bangalore<br />
                  Serving All India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[color:var(--color-brand)]/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              {Object.entries(socialLinks).map(([platform, url], i) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center 
                           transition-all duration-300 border 
                           bg-[color:var(--color-brand)]/10 hover:bg-[color:var(--color-brand)] 
                           text-[color:var(--color-text)] hover:text-[color:var(--color-bg)]
                           border-[color:var(--color-brand)]/20 hover:border-[color:var(--color-brand)] 
                           hover:shadow-lg"
                  aria-label={platform}
                >
                  <span className="font-bold">{platform[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[color:var(--color-text-muted)] text-sm">
              © {currentYear} <span className="text-[color:var(--color-brand)] font-semibold">{companyName}</span>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center 
                 shadow-lg transition-all bg-[color:var(--color-brand)] text-[color:var(--color-bg)]"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}
