'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type TeamMember = {
  _id: string
  name: string
  role: string
  photoUrl?: string | null
  socials?: { platform: string; url: string }[]
}

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/team', { next: { revalidate: 60 } })
        const json = await res.json()
        setTeam(json?.data || [])
      } catch {
        setTeam([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  const placeholder = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-2xl p-6 bg-white border border-gray-200 h-56 animate-pulse" />
      ))}
    </div>
  )

  const emptyFallback = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1,2,3,4].map((i) => (
        <div key={i} className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden shadow-sm">
          <div className="aspect-square bg-white flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-2xl font-bold">{`T${i}`}</div>
          </div>
          <div className="p-5 text-center">
            <div className="text-xl font-bold text-primary">Your Name</div>
            <div className="text-sm text-gray-500 mb-3">Role / Designation</div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const count = team?.length || 0
  const gridClass = count <= 2
    ? 'grid-cols-1 md:grid-cols-2'
    : count <= 4
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

  const avatarClass = count <= 2 ? 'w-32 h-32' : count <= 4 ? 'w-28 h-28' : 'w-24 h-24'
  const nameClass = count <= 2 ? 'text-2xl' : count <= 4 ? 'text-xl' : 'text-lg'
  const roleClass = count <= 2 ? 'text-base' : count <= 4 ? 'text-sm' : 'text-xs'

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Meet Our <span className="text-gold">Team</span></h2>
          <p className="text-xl text-gray-600">Experts behind seamless events</p>
        </div>

        {loading ? (
          placeholder
        ) : (team && team.length > 0 ? (
          <div className={`grid ${gridClass} gap-8`}>
            {team.map((m) => (
              <motion.div
                key={m._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                  {m.photoUrl ? (
                    <img src={m.photoUrl} alt={m.name} className={`${avatarClass} rounded-full object-cover`} />
                  ) : (
                    <div className={`${avatarClass} rounded-full bg-gold/80 flex items-center justify-center text-white text-2xl font-bold`}>{(m.name || 'C').split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <div className={`${nameClass} font-bold text-primary`}>{m.name}</div>
                  <div className={`${roleClass} text-gray-500 mb-3`}>{m.role}</div>
                  <div className="flex items-center justify-center gap-3">
                    {(m.socials || []).map((s, idx) => (
                      <a key={idx} href={s.url} target="_blank" rel="noreferrer" className="text-primary/70 hover:text-primary text-sm font-medium underline-offset-4 hover:underline">
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          emptyFallback
        ))}
      </div>
    </section>
  )
}

