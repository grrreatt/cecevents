'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * NAVIGATION BAR
 * 
 * EDITABLE CONTENT:
 * - companyName: Your company name in the logo
 * - navigation links
 */

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  useEffect(() => {
    return scrollY.on('change', latest => {
      setScrolled(latest > 50)
    })
  }, [scrollY])

  // ✏️ EDIT THIS CONTENT
  const companyName = "cecevents"
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-primary/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-black/10" 
          : "bg-primary/80 backdrop-blur-md border-b border-gold/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/50"
            >
              <span className="text-white font-bold text-xl">C</span>
              <div className="absolute inset-0 bg-gradient-to-br from-gold-light to-gold opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white tracking-wide group-hover:text-gold transition-colors"
            >
              {companyName}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                      isActive
                        ? 'text-gold'
                        : 'text-gold-light hover:text-gold'
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gold/10 rounded-lg border border-gold/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </motion.div>
              )
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-gold to-gold-dark text-primary 
                         font-semibold rounded-lg shadow-lg shadow-gold/20 hover:shadow-gold/40 
                         transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-gold/20"
          >
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-gold text-primary'
                        : 'text-gold-light hover:bg-gold/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

