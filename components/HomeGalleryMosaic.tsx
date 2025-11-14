'use client'

import { useEffect, useState } from 'react'

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
        setItems(data)
      } catch {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section className="relative py-[var(--space-128)] px-[var(--space-24)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-[var(--space-32)]">
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Gallery</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">
            Visual <span className="text-[color:var(--color-brand)]">highlights</span>
          </h2>
        </header>

        {loading ? (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[var(--space-8)]">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="aspect-square rounded-[8px] bg-[var(--color-accent)] border border-[var(--color-border)]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[var(--space-8)]">
            {items.map((g) => (
              <a
                key={g._id}
                href={g.imageUrl || '#'}
                target={g.imageUrl ? '_blank' : undefined}
                rel={g.imageUrl ? 'noreferrer' : undefined}
                className="relative block overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)]"
                aria-label={g.title || 'Gallery image'}
              >
                <div className="aspect-square">
                  {g.thumbUrl ? (
                    <img src={g.thumbUrl} alt={g.title || 'Gallery'} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[color:var(--color-brand)] font-semibold">Image</div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
