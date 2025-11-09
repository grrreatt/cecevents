'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type GItem = {
  _id: string
  title?: string
  category?: string
  imageUrl?: string | null
  thumbUrl?: string | null
}

export default function GalleryGrid() {
  const [items, setItems] = useState<GItem[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/gallery', { next: { revalidate: 60 } })
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

  const skeleton = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="aspect-[4/3] rounded-xl bg-gray-100 animate-pulse" />
      ))}
    </div>
  )

  const emptyFallback = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-gold/10 to-gold-light/10 flex items-center justify-center border border-gold/20">
          <div className="text-gold font-semibold">Add images in Studio → Gallery Image</div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Image <span className="text-gold">Gallery</span></h1>
          <p className="text-gray-600 mt-3">Highlights from our events</p>
        </div>

        {loading ? (
          skeleton
        ) : (items && items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((g, i) => (
              <motion.a
                href={g.imageUrl || '#'}
                target={g.imageUrl ? '_blank' : undefined}
                rel={g.imageUrl ? 'noreferrer' : undefined}
                key={g._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group relative block overflow-hidden rounded-xl border border-gold/20 hover:border-gold/40"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold-light/10">
                  {g.thumbUrl ? (
                    <img src={g.thumbUrl} alt={g.title || 'Gallery'} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold font-semibold">Image</div>
                  )}
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </motion.a>
            ))}
          </div>
        ) : (
          emptyFallback
        ))}
      </div>
    </section>
  )
}
