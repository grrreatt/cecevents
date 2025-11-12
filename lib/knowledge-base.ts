export type KBItem = {
  q: string
  a: string
  tags?: string[]
}

export const eventKB: KBItem[] = [
  {
    q: 'what do you do',
    a: 'We deliver end-to-end on-site registration and event operations across India – from badge printing and trained desk staff to live sync, QR check-in, and real-time analytics.'
  },
  {
    q: 'services',
    a: 'Core services include: On-site Registration, Badge Printing, QR/Facial Check-in, Help Desk, Material Distribution, Entry/Access Management, and Live Analytics Dashboards.'
  },
  {
    q: 'coverage',
    a: 'Pan-India coverage with strong presence in Mumbai, Delhi, Bangalore and 20+ cities. Scale from 100 to 10,000+ attendees.'
  },
  {
    q: 'industries',
    a: 'Healthcare/Medical conferences, Corporate summits, Education/Tech fests, NGOs, Product launches, Retail and more.'
  },
  {
    q: 'sla',
    a: 'Typical response time under 24 hours. For live events, dedicated on-ground lead available throughout the show days.'
  },
  {
    q: 'data security',
    a: 'Bank-grade encryption in transit and at rest. GDPR-minded handling and least-privilege access on production systems.'
  },
  {
    q: 'pricing',
    a: 'We scope by attendee volume, days on-site, staffing and equipment needs. Share event details for a tailored quote.'
  }
]

export const systemDirectives = `
You are the cecevents Assistant. Answer concisely and helpfully about:
- Event registration operations, logistics, and best practices
- cecevents services, coverage, team strengths, and past work
- Pull factual snippets from provided Sanity data when relevant
If a question is off-topic, briefly answer if you reasonably can; otherwise redirect to relevant services or suggest contacting the team. Do NOT force contact as the only option.
Prefer bullet points for multi-part answers. Keep tone professional and warm.
`;
