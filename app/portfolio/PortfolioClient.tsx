'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function PortfolioClient({ items }: { items: any[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      {/* Portfolio Grid */}
      <section ref={ref} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item._id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl 
                         hover:shadow-gold/20 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gold-light/30 to-gold/20">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold text-4xl font-bold">
                      {item.title?.[0] || '?'}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                  
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex flex-col gap-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="text-gold">📍</span>
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gold">👥</span>
                      {item.attendees} delegates
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gold/90 text-primary px-6 py-3 rounded-lg font-semibold">
                    View Details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Our India <span className="text-gold">Footprint</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Events Pan-India" },
              { number: "50K+", label: "Total Registrations" },
              { number: "25+", label: "Indian Cities" },
              { number: "98%", label: "Client Retention" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
