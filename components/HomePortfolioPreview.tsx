'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Item = {
  _id: string
  title: string
  category?: string
  location?: string
  attendees?: string
  coverUrl?: string | null
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
            {(items || []).map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gold/20 transition-all"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5">
                  {p.coverUrl ? (
                    <img src={p.coverUrl} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold text-3xl font-bold">
                      {p.title?.[0] || 'P'}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-3 inline-block">
                    {p.category || 'Project'}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-1">{p.title}</h3>
                  <div className="text-sm text-gray-600">
                    {[p.location, p.attendees && `${p.attendees} delegates`].filter(Boolean).join(' • ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
