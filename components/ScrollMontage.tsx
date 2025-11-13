'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Item = { coverUrl?: string | null; title: string; _id: string }

export default function ScrollMontage() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const imgA = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 1, 0, 0])
  const imgB = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 1, 0])
  const imgC = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 1])
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/portfolio', { next: { revalidate: 60 } })
        const json = await res.json()
        const data: Item[] = (json?.data || []).slice(0, 3)
        setItems(data)
      } catch { setItems([]) } finally { setLoading(false) }
    }
    run()
  }, [])

  const imgs = useMemo(() => items.map(i => i.coverUrl).filter(Boolean) as string[], [items])

  return (
    <section ref={ref} className="relative py-32 px-6 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">Experience the <span className="text-gold">Flow</span></h2>
          <p className="text-gray-300">Scroll to reveal a story</p>
        </div>
      </div>

      <div className="sticky top-24 h-[60vh] max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
        {loading ? (
          <div className="w-full h-full bg-white/5 animate-pulse" />
        ) : reduced ? (
          <img src={imgs[0] || ''} alt="montage" className="w-full h-full object-cover" />
        ) : (
          <>
            <motion.img style={{ opacity: imgA }} src={imgs[0] || ''} alt="A" className="absolute inset-0 w-full h-full object-cover" />
            <motion.img style={{ opacity: imgB }} src={imgs[1] || imgs[0] || ''} alt="B" className="absolute inset-0 w-full h-full object-cover" />
            <motion.img style={{ opacity: imgC }} src={imgs[2] || imgs[1] || imgs[0] || ''} alt="C" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-white/20">
              <motion.div style={{ width: line }} className="h-full bg-gold" />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
