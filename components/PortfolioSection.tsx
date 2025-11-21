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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Our <span className="text-gold">Work</span></h2>
          <p className="text-gray-600 mt-3">A selection of recent events</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => {
            const img = p.coverImage ? urlFor(p.coverImage).width(1200).height(800).fit('crop').url() : ''
            return (
              <article key={p._id} className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden shadow-sm hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold-light/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {img ? <img src={img} alt={p.title} className="w-full h-full object-cover" /> : null}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">{p.title}</h3>
                  <div className="text-sm text-gray-600">{[p.category, p.location].filter(Boolean).join(' • ')}</div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
