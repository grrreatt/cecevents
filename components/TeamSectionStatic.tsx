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

  const count = team.length
  const gridClass = count <= 2
    ? 'grid-cols-1 md:grid-cols-2'
    : count <= 4
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">The <span className="text-gold">People</span> Behind the Work</h2>
          <p className="text-gray-600 mt-3">Experts behind seamless events</p>
        </div>

        <div className={`grid ${gridClass} gap-8`}>
          {team.map((m) => {
            const img = m.photo ? urlFor(m.photo).width(400).height(400).fit('crop').url() : ''
            return (
              <div key={m._id} className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden shadow-sm hover:shadow-lg p-6 text-center">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-gold/10 to-gold-light/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {img ? <img src={img} alt={m.name} className="w-full h-full object-cover" /> : null}
                </div>
                <h3 className="text-lg font-semibold text-primary">{m.name}</h3>
                {m.role ? (
                  <div className="text-sm text-gray-600">{m.role}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
