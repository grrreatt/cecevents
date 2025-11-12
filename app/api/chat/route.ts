import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import {
  servicesQuery,
  portfolioLimitedQuery,
  siteSettingsQuery,
  teamMembersQuery,
} from '@/lib/sanity.queries'
import { eventKB, systemDirectives } from '@/lib/knowledge-base'

export const runtime = 'nodejs'

async function fetchSanityContext() {
  try {
    const [services, portfolio, site, team] = await Promise.all([
      client.fetch(servicesQuery),
      client.fetch(portfolioLimitedQuery(6)),
      client.fetch(siteSettingsQuery),
      client.fetch(teamMembersQuery),
    ])
    return { services, portfolio, site, team }
  } catch {
    return { services: [], portfolio: [], site: null, team: [] }
  }
}

function localAnswer(userText: string, ctx: any) {
  const q = userText.toLowerCase()

  // simple KB match
  for (const item of eventKB) {
    if (q.includes(item.q)) return item.a
  }

  // semantic-ish heuristics over Sanity data
  if (q.includes('service') || q.includes('what can you do')) {
    const list = (ctx.services || []).map((s: any) => s.title).filter(Boolean)
    if (list.length) {
      return `We offer: ${list.join(', ')}. Each service includes trained on-ground staff, equipment, and real-time reporting.`
    }
  }

  if (q.includes('portfolio') || q.includes('past') || q.includes('clients')) {
    const items = (ctx.portfolio || []).slice(0, 3).map((p: any) => `${p.title} (${p.location})`).filter(Boolean)
    if (items.length) return `Recent work: ${items.join(' • ')}. Ask for details and we can share more examples.`
  }

  if (q.includes('contact') || q.includes('phone') || q.includes('email')) {
    const phone = ctx.site?.contactPhone || '+91 98765 43210'
    const email = ctx.site?.contactEmail || 'info@cecevents.com'
    return `You can reach us at ${phone} or ${email}. Share event city, dates, attendee volume, and on-site needs for a fast quote.`
  }

  if (q.includes('team')) {
    const names = (ctx.team || []).map((t: any) => t.name).filter(Boolean)
    if (names.length) return `Our core team includes ${names.slice(0, 4).join(', ')} and more specialists across India.`
  }

  // general fallback
  return `We specialize in on-site registration and event ops across India: badge printing, staffed desks, QR/facial check-in, help desk, materials, access control, and live analytics. Tell me your city, dates, and attendee estimate and I can advise setup.`
}

async function callPerplexity(messages: Array<{ role: 'system'|'user'|'assistant'; content: string }>) {
  const apiKey = process.env.PERPLEXITY_API_KEY
  if (!apiKey) return null
  try {
    const res = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'sonar',
        messages,
        temperature: 0.3,
      }),
    })
    if (!res.ok) return null
    const data = await res.json()
    const text = data?.choices?.[0]?.message?.content
    return typeof text === 'string' ? text : null
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  const { message, history } = await req.json().catch(() => ({ message: '', history: [] }))
  if (!message || typeof message !== 'string') {
    return NextResponse.json({ ok: false, error: 'Invalid message' }, { status: 400 })
  }

  const ctx = await fetchSanityContext()

  // Prepare messages for LLM call
  const sys = `${systemDirectives}\n\nHere is site context:\n${JSON.stringify(ctx, null, 2)}`
  const llmMessages = [
    { role: 'system', content: sys },
    ...(Array.isArray(history) ? history.slice(-6) : []).map((m: any) => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: String(m.text || '') })),
    { role: 'user', content: message },
  ] as Array<{ role: 'system'|'user'|'assistant'; content: string }>

  // Try Perplexity first if key present
  const llm = await callPerplexity(llmMessages)
  const answer = llm ?? localAnswer(message, ctx)

  return NextResponse.json({ ok: true, answer })
}
