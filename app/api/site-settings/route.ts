import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { siteSettingsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export async function GET() {
  try {
    const data = await client.fetch(siteSettingsQuery)
    const mapped = data
      ? {
          ...data,
          logoUrl: data.logo ? urlFor(data.logo).width(200).height(200).fit('contain').url() : null,
        }
      : null
    return NextResponse.json({ ok: true, data: mapped })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch site settings' }, { status: 500 })
  }
}
