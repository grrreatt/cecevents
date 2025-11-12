import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { portfolioLimitedQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import { portfolioData } from '@/lib/portfolio-data'

export const revalidate = 60

export async function GET() {
  try {
    const limit = 6
    const query = portfolioLimitedQuery(limit)
    const data = await client.fetch(query)
    const mapped = (data || []).map((p: any) => ({
      _id: p._id,
      title: p.title,
      category: p.category,
      location: p.location,
      attendees: p.attendees,
      description: p.description,
      icon: p.icon,
      coverUrl: p.coverImage ? urlFor(p.coverImage).width(800).height(450).fit('crop').url() : null,
    }))

    const result = [...mapped]
    if (result.length < limit) {
      const needed = limit - result.length
      const fallbacks = portfolioData.slice(0, needed).map((f) => ({
        _id: `fallback-${f.id}`,
        title: f.title,
        category: f.category,
        location: f.location,
        attendees: f.attendees,
        description: f.desc,
        icon: f.icon,
        coverUrl: null,
      }))
      result.push(...fallbacks)
    }

    return NextResponse.json({ ok: true, data: result })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch portfolio' }, { status: 500 })
  }
}
