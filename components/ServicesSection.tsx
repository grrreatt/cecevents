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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Signature <span className="text-gold">Services</span></h2>
          <p className="text-gray-600 mt-3">End-to-end on-site registration and event operations across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s._id} className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden shadow-sm hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">{s.title}</h3>
                {s.description ? (
                  <p className="text-gray-600 mb-4">{s.description}</p>
                ) : null}
                {Array.isArray(s.features) && s.features.length ? (
                  <ul className="mt-2 space-y-2">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold translate-y-2" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
