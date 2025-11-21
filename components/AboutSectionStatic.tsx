export default function AboutSectionStatic() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">India's most trusted event registration partner</h2>
          <p className="text-gray-700 text-lg">Since 2014, we’ve transformed how conferences handle registrations. From AIIMS medical conferences to IIT tech fests, our technology and team have powered hundreds of events across 25+ Indian cities.</p>
          <p className="text-gray-700 text-lg mt-4">We bring trained professionals, equipment, and a proven system that scales from 100 to 10,000+ attendees seamlessly.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gold/10 to-gold-light/10 p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold">500+</div>
              <div className="text-gray-600 mt-1">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold">50K+</div>
              <div className="text-gray-600 mt-1">Registrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold">25+</div>
              <div className="text-gray-600 mt-1">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold">98%</div>
              <div className="text-gray-600 mt-1">Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
