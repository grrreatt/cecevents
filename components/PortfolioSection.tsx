import { client } from '@/lib/sanity.client'
import { portfolioItemsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export default async function PortfolioSection() {
  const items = await client.fetch(portfolioItemsQuery).catch(() => []) as Array<{
    _id: string
    title: string
    category?: string
    location?: string
    attendees?: number
    coverImage?: any
  }>

  return (
    <section className="py-[var(--space-128)] border-b border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
        <header className="mb-[var(--space-32)]">
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Portfolio</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">Selected projects</h2>
          <p className="mt-[var(--space-12)] text-[16px] leading-[26px] max-w-[72ch] text-[color:var(--color-text-muted)]">A snapshot of our work across India.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
          {items.map((p) => {
            const img = p.coverImage ? urlFor(p.coverImage).width(800).height(600).fit('crop').url() : ''
            return (
              <article key={p._id} className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="aspect-[4/3] bg-[var(--color-surface)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {img ? <img src={img} alt={p.title} className="w-full h-full object-cover" /> : null}
                </div>
                <div className="p-[var(--space-20)]">
                  <h3 className="text-[22px] leading-[30px] font-semibold text-[color:var(--color-text)] mb-[var(--space-8)]">{p.title}</h3>
                  <div className="text-[12px] leading-[18px] text-[color:var(--color-text-muted)]">
                    {[p.category, p.location].filter(Boolean).join(' • ')}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
