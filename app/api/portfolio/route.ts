import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { portfolioLimitedQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export async function GET() {
  try {
    const query = portfolioLimitedQuery(6)
    const data = await client.fetch(query)
    const mapped = (data || []).map((p: any) => ({
      ...p,
      coverUrl: p.coverImage ? urlFor(p.coverImage).width(800).height(450).fit('crop').url() : null,
    }))
    return NextResponse.json({ ok: true, data: mapped })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch portfolio' }, { status: 500 })
  }
}
