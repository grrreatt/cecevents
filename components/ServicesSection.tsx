import { client } from '@/lib/sanity.client'
import { servicesQuery } from '@/lib/sanity.queries'

export default async function ServicesSection() {
  const services = await client.fetch(servicesQuery).catch(() => []) as Array<{
    _id: string
    title: string
    description?: string
    features?: string[]
  }>

  return (
    <section className="py-[var(--space-128)] border-b border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
        <header className="mb-[var(--space-32)]">
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Our Services</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">Comprehensive event solutions</h2>
          <p className="mt-[var(--space-12)] text-[16px] leading-[26px] max-w-[72ch] text-[color:var(--color-text-muted)]">End-to-end on-site registration and event operations across India.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
          {services.map((s) => (
            <article key={s._id} className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-24)]">
              <h3 className="text-[22px] leading-[30px] font-semibold text-[color:var(--color-text)] mb-[var(--space-8)]">{s.title}</h3>
              {s.description ? (
                <p className="text-[14px] leading-[22px] text-[color:var(--color-text-muted)] mb-[var(--space-16)]">{s.description}</p>
              ) : null}
              {Array.isArray(s.features) && s.features.length ? (
                <ul className="mt-[var(--space-8)] space-y-[var(--space-8)] text-[14px] leading-[22px] text-[color:var(--color-text)]">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-[var(--space-8)]">
                      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[color:var(--color-brand)] translate-y-[8px]" />
                      <span className="text-[color:var(--color-text-muted)]">{f}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
