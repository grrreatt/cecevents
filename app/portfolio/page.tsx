'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Portfolio items with placeholder avatars - Indian Events
  const portfolioItems = [
    {
      title: "AIIMS National Medical Conference 2024",
      location: "New Delhi, India",
      attendees: "3,500+",
      avatar: "https://ui-avatars.com/api/?name=AIIMS+Conference&size=400&background=D4AF37&color=1a1a1a&bold=true"
    },
    {
      title: "TCS Annual Leadership Summit",
      location: "Mumbai, Maharashtra",
      attendees: "2,800+",
      avatar: "https://ui-avatars.com/api/?name=TCS+Summit&size=400&background=B8941E&color=fff&bold=true"
    },
    {
      title: "IIT Bombay Tech Fest",
      location: "Mumbai, Maharashtra",
      attendees: "5,000+",
      avatar: "https://ui-avatars.com/api/?name=IIT+TechFest&size=400&background=F4E5C2&color=1a1a1a&bold=true"
    },
    {
      title: "Cardiology Society of India Conference",
      location: "Bangalore, Karnataka",
      attendees: "2,200+",
      avatar: "https://ui-avatars.com/api/?name=CSI+Conference&size=400&background=D4AF37&color=fff&bold=true"
    },
    {
      title: "Infosys Product Launch Event",
      location: "Hyderabad, Telangana",
      attendees: "1,500+",
      avatar: "https://ui-avatars.com/api/?name=Infosys+Launch&size=400&background=B8941E&color=1a1a1a&bold=true"
    },
    {
      title: "Indian Pharma Expo 2024",
      location: "Ahmedabad, Gujarat",
      attendees: "4,200+",
      avatar: "https://ui-avatars.com/api/?name=Pharma+Expo&size=400&background=F4E5C2&color=2c2c2c&bold=true"
    },
    {
      title: "National Education Summit",
      location: "Pune, Maharashtra",
      attendees: "1,800+",
      avatar: "https://ui-avatars.com/api/?name=Education+Summit&size=400&background=D4AF37&color=1a1a1a&bold=true"
    },
    {
      title: "Indo-German Business Forum",
      location: "Goa, India",
      attendees: "900+",
      avatar: "https://ui-avatars.com/api/?name=Business+Forum&size=400&background=B8941E&color=fff&bold=true"
    },
    {
      title: "Diabetes Association Annual Meet",
      location: "Chennai, Tamil Nadu",
      attendees: "2,600+",
      avatar: "https://ui-avatars.com/api/?name=Diabetes+Meet&size=400&background=F4E5C2&color=1a1a1a&bold=true"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bgLight pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full"
            >
              <span className="text-gold font-semibold">Our Portfolio</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Successful <span className="text-gold">Events</span> Worldwide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Explore our portfolio of international conferences and events we've successfully managed
            </motion.p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section ref={ref} className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(index)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl 
                           hover:shadow-gold/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gold-light/30 to-gold/20">
                    <img
                      src={item.avatar}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
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
      </main>
      <Footer />
    </>
  )
}

