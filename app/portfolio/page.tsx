import { client } from '@/lib/sanity.client'
import { portfolioItemsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioClient from './PortfolioClient'

type PortfolioItem = {
  _id?: string
  title: string
  location?: string
  attendees?: string
  coverImage?: any
  avatar?: string
}

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const items = await client.fetch<PortfolioItem[]>(portfolioItemsQuery)
    return items || []
  } catch {
    return []
  }
}

// Fallback hardcoded data
const fallbackItems = [
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
    avatar: "https://ui-avatars.com/api/?name=Infosys+Launch&size=400&background=B8941E&color=fff&bold=true"
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

export default async function Portfolio() {
  const sanityItems = await getPortfolioItems()
  const items = sanityItems.length > 0
    ? sanityItems.map((item: PortfolioItem) => ({
        ...item,
        avatar: item.coverImage ? urlFor(item.coverImage).width(400).height(300).url() : undefined
      }))
    : fallbackItems

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bgLight pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full">
              <span className="text-gold font-semibold">Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Successful <span className="text-gold">Events</span> Worldwide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of international conferences and events we've successfully managed
            </p>
          </div>
        </section>

        <PortfolioClient items={items} />
      </main>
      <Footer />
    </>
  )
}
