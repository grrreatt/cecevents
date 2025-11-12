'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, GraduationCap, Heart, Rocket, Store, Stethoscope } from 'lucide-react'

type Item = {
  _id: string
  title: string
  category?: string
  location?: string
  attendees?: string
  description?: string
  icon?: string
}

export default function HomePortfolioPreview() {
  const [items, setItems] = useState<Item[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/portfolio', { next: { revalidate: 60 } })
        const json = await res.json()
        setItems(json?.data || [])
      } catch {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Featured <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600">Top recent projects</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl h-64 bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(items || []).map((project, i) => {
              const IconComponent = {
                Stethoscope,
                Building2,
                GraduationCap,
                Heart,
                Rocket,
                Store
              }[project.icon as string] || Building2

              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group cursor-pointer perspective-1000"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all preserve-3d bg-gradient-to-br from-primary to-accent h-full">
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-gold" />
                      </div>
                      <div className="absolute inset-0 bg-gold/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">View Details</span>
                      </div>
                    </div>
                    <div className="p-6 text-white">
                      <span className="px-3 py-1 bg-gold/90 text-primary text-xs font-semibold rounded-full mb-3 inline-block">
                        {project.category || 'Project'}
                      </span>
                      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{project.description || ''}</p>
                      <p className="text-sm text-gold">{project.location}{project.attendees ? ` • ${project.attendees}` : ''}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
