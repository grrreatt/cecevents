import { client } from '@/lib/sanity.client'
import { portfolioItemsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'

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
    <main>
      <section className="py-[var(--space-128)] border-b border-[var(--border-color)]">
        <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
          <header className="mb-[var(--space-32)]">
            <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Portfolio</div>
            <h1 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">Successful events</h1>
            <p className="mt-[var(--space-12)] text-[16px] leading-[26px] max-w-[72ch] text-[color:var(--color-text-muted)]">Explore a selection of our work across India.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
            {items.map((p, idx) => (
              <article key={(p as any)._id ?? `fallback-${idx}`} className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="aspect-[4/3] bg-[var(--color-surface)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {p.avatar ? <img src={p.avatar} alt={p.title} className="w-full h-full object-cover" /> : null}
                </div>
                <div className="p-[var(--space-20)]">
                  <h2 className="text-[18px] leading-[26px] font-semibold text-[color:var(--color-text)] mb-[var(--space-4)]">{p.title}</h2>
                  <div className="text-[12px] leading-[18px] text-[color:var(--color-text-muted)]">{[p.location, p.attendees].filter(Boolean).join(' • ')}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
