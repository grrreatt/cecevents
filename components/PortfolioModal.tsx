'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Users, Stethoscope, Building2, GraduationCap, Heart, Rocket, Store } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    location: string
    attendees: string
    desc: string
    icon: string
    category: string
  } | null
}

export default function PortfolioModal({ isOpen, onClose, project }: PortfolioModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Icon Header */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                {(() => {
                  const IconComponent = {
                    Stethoscope,
                    Building2,
                    GraduationCap,
                    Heart,
                    Rocket,
                    Store
                  }[project.icon] || Building2

                  return (
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="w-48 h-48 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <IconComponent className="w-32 h-32 text-gold" />
                    </motion.div>
                  )
                })()}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gold/90 backdrop-blur-sm text-primary font-semibold rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-primary mb-4"
                >
                  {project.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-6 mb-6"
                >
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-gold" />
                    <span>{project.attendees} Attendees</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {project.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex gap-4"
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/30 transition-all">
                    Start Your Event
                  </button>
                  <button className="px-6 py-3 border-2 border-gold/30 text-gold font-semibold rounded-xl hover:bg-gold/5 transition-all">
                    View More
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

