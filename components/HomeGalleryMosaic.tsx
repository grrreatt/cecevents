'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type GItem = {
  _id: string
  title?: string
  imageUrl?: string | null
  thumbUrl?: string | null
}

export default function HomeGalleryMosaic() {
  const [items, setItems] = useState<GItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/gallery', { next: { revalidate: 60 } })
        const json = await res.json()
        const data: GItem[] = json?.data || []
        setItems(data.slice(0, 18))
      } catch {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section className="relative py-24 px-6 bg-gold-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Visual <span className="text-gold">Highlights</span>
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-gold/20 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {items.map((g, i) => (
              <motion.a
                key={g._id}
                href={g.imageUrl || '#'}
                target={g.imageUrl ? '_blank' : undefined}
                rel={g.imageUrl ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="group relative block overflow-hidden rounded-lg border border-gold/20 bg-white neon-hover tilt-3d"
                aria-label={g.title || 'Gallery image'}
              >
                <div className="aspect-square">
                  {g.thumbUrl ? (
                    <img src={g.thumbUrl} alt={g.title || 'Gallery'} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold font-semibold">Image</div>
                  )}
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
