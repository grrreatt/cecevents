import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { galleryImagesQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export async function GET() {
  try {
    const data = await client.fetch(galleryImagesQuery)
    const mapped = (data || []).map((g: any) => ({
      ...g,
      imageUrl: g.image ? urlFor(g.image).width(1400).height(900).fit('max').url() : null,
      thumbUrl: g.image ? urlFor(g.image).width(600).height(400).fit('crop').url() : null,
    }))
    return NextResponse.json({ ok: true, data: mapped })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch gallery' }, { status: 500 })
  }
}
