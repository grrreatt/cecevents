import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { heroSectionQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import { BarChart3, QrCode, Globe, BadgeCheck } from 'lucide-react'

type HeroDoc = {
  title?: string
  subtitle?: string
  heroImage?: any
  ctaPrimaryLabel?: string
  ctaPrimaryLink?: string
  ctaSecondaryLabel?: string
  ctaSecondaryLink?: string
  benefits?: Array<{ label?: string }>
}

function pickIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes('pan') || l.includes('india')) return Globe
  if (l.includes('check') || l.includes('qr')) return QrCode
  if (l.includes('badge')) return BadgeCheck
  if (l.includes('analytics') || l.includes('data')) return BarChart3
  return BadgeCheck
}

export default async function Hero() {
  const hero = await client.fetch<HeroDoc | null>(heroSectionQuery).catch(() => null)
  const bg = hero?.heroImage ? urlFor(hero.heroImage).width(2000).height(1200).fit('crop').url() : null

  const title = hero?.title || 'Transform Every Event Experience'
  const subtitle = hero?.subtitle || 'Conference-grade registration, data-driven execution, and flawless on-site operations.'
  const cta1Label = hero?.ctaPrimaryLabel || 'Start Your Event'
  const cta1Link = hero?.ctaPrimaryLink || '/contact'
  const cta2Label = hero?.ctaSecondaryLabel || 'Explore Services'
  const cta2Link = hero?.ctaSecondaryLink || '/services'
  const benefits = Array.isArray(hero?.benefits) ? hero!.benefits! : [
    { label: 'Pan-India Operations' },
    { label: 'Smart Check-In' },
    { label: 'Real-Time Analytics' },
    { label: 'Badge Printing' },
  ]

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        {bg ? (
          <img src={bg} alt="Hero" className="w-full h-full object-cover object-center md:object-[center_20%]" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block mb-5 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full animate-fade-in-up">
            <span className="text-gold font-semibold">India's Premier Event Registration Partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>{title}</h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link href={cta1Link} className="px-6 py-3 rounded-xl bg-gold text-primary font-semibold shadow-lg hover:shadow-gold/30 transform hover:scale-[1.02] transition-all">
              {cta1Label}
            </Link>
            <Link href={cta2Link} className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all">
              {cta2Label}
            </Link>
          </div>
        </div>

        <div className="mt-14 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
            {benefits.map((b, i) => {
              const label = b?.label || ''
              const Icon = pickIcon(label)
              return (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-sm md:text-base">{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
