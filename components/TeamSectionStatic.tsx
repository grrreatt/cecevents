import { client } from '@/lib/sanity.client'
import { teamMembersQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

export default async function TeamSectionStatic() {
  const team = await client.fetch(teamMembersQuery).catch(() => []) as Array<{
    _id: string
    name: string
    role?: string
    photo?: any
  }>

  return (
    <section className="py-[var(--space-128)] border-b border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
        <header className="mb-[var(--space-32)]">
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Team</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">The people behind the work</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
          {team.map((m) => {
            const img = m.photo ? urlFor(m.photo).width(800).height(800).fit('crop').url() : ''
            return (
              <article key={m._id} className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="aspect-[1/1] bg-[var(--color-surface)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {img ? <img src={img} alt={m.name} className="w-full h-full object-cover" /> : null}
                </div>
                <div className="p-[var(--space-20)]">
                  <h3 className="text-[18px] leading-[26px] font-semibold text-[color:var(--color-text)]">{m.name}</h3>
                  {m.role ? (
                    <div className="text-[14px] leading-[22px] text-[color:var(--color-text-muted)]">{m.role}</div>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
