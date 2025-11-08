import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { siteSettingsQuery } from '@/lib/sanity.queries'

export const revalidate = 60

export async function GET() {
  try {
    const data = await client.fetch(siteSettingsQuery)
    return NextResponse.json({ ok: true, data })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch site settings' }, { status: 500 })
  }
}
