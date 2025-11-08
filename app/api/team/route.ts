import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { teamMembersQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export const revalidate = 60

export async function GET() {
  try {
    const data = await client.fetch(teamMembersQuery)
    const mapped = (data || []).map((m: any) => ({
      ...m,
      photoUrl: m.photo ? urlFor(m.photo).width(400).height(400).fit('crop').url() : null,
    }))
    return NextResponse.json({ ok: true, data: mapped })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Failed to fetch team' }, { status: 500 })
  }
}
