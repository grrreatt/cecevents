"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

type SiteSettings = { siteTitle?: string; logoUrl?: string | null }

export default function Logo() {
  const [data, setData] = useState<SiteSettings | null>(null)

  useEffect(() => {
    let mounted = true
    const run = async () => {
      try {
        const res = await fetch('/api/site-settings', { next: { revalidate: 60 } })
        const json = await res.json()
        if (mounted) setData(json?.data || null)
      } catch {
        if (mounted) setData(null)
      }
    }
    run()
    return () => { mounted = false }
  }, [])

  const title = data?.siteTitle || 'cecevents'
  const src = data?.logoUrl || undefined

  const radius = 18
  const diameter = radius * 2

  return (
    <Link href="/" aria-label={title} className="inline-flex items-center gap-[var(--space-12)] no-underline">
      <svg
        width={80}
        height={80}
        viewBox="0 0 80 80"
        role="img"
        aria-label={title}
      >
        <defs>
          <clipPath id="logoClip">
            <circle cx="40" cy="40" r="24" />
          </clipPath>
          <path id="circlePath" d="M40,40 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" />
        </defs>

        <circle cx="40" cy="40" r="28" fill="none" stroke="var(--color-border)" strokeWidth="1" />
        <g clipPath="url(#logoClip)">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <image href={src} x={40 - diameter/2} y={40 - diameter/2} width={diameter} height={diameter} preserveAspectRatio="xMidYMid slice" />
          ) : (
            <rect x={40 - diameter/2} y={40 - diameter/2} width={diameter} height={diameter} fill="var(--color-surface)" />
          )}
        </g>
        <text fill="var(--color-text)" fontSize="10" letterSpacing="0.12em">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Cecevents
          </textPath>
        </text>
      </svg>

      <span
        className="text-[18px] leading-[1] tracking-[-0.02em] text-[color:var(--color-text)]"
        style={{ fontFamily: 'Inter Tight, var(--font-display)' }}
      >
        {title}
      </span>
    </Link>
  )
}
