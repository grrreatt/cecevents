'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Item = {
  _id: string
  title: string
  category?: string
  location?: string
  attendees?: string
  description?: string
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

  const count = items?.length || 0
  const gridClass = count <= 1
    ? 'grid-cols-1'
    : count === 2
    ? 'grid-cols-1 md:grid-cols-2'
    : count <= 4
    ? 'grid-cols-1 md:grid-cols-2'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const titleClass = count <= 2 ? 'text-2xl' : 'text-xl'
  const metaClass = count <= 2 ? 'text-sm' : 'text-xs'
  const imageClass = count <= 2 ? 'h-64 md:h-72' : 'h-52 md:h-56'

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
          <div className={`grid ${gridClass} gap-8`}>
            {(items || []).map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className={`relative w-full ${imageClass} bg-gray-100 overflow-hidden`}>
                  {p.coverUrl ? (
                    <img src={p.coverUrl} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold text-3xl font-bold">
                      {p.title?.[0] || 'P'}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className={`${titleClass} font-bold text-primary mb-1`}>{p.title}</h3>
                  <div className={`${metaClass} text-gray-600 flex items-center gap-3`}> 
                    <span>{p.location || '—'}</span>
                    {p.attendees && <span>• {p.attendees} delegates</span>}
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
