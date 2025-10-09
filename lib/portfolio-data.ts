export interface PortfolioItem {
  id: number
  title: string
  location: string
  attendees: string
  desc: string
  category: string
  icon: string
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "AIIMS National Medical Conference 2024",
    location: "New Delhi",
    attendees: "3,500+",
    desc: "Seamless registration for India's largest medical conference with real-time badge printing and QR check-in system.",
    category: "Medical",
    icon: "Stethoscope"
  },
  {
    id: 2,
    title: "TCS Annual Leadership Summit",
    location: "Mumbai",
    attendees: "2,800+",
    desc: "End-to-end event management including venue setup, AV production, and delegate coordination.",
    category: "Corporate",
    icon: "Building2"
  },
  {
    id: 3,
    title: "IIT Bombay Tech Fest",
    location: "Mumbai",
    attendees: "5,000+",
    desc: "Complete on-site registration management for multi-day technical festival with live analytics dashboard.",
    category: "Academic",
    icon: "GraduationCap"
  },
  {
    id: 4,
    title: "Cardiology Society of India Conference",
    location: "Bangalore",
    attendees: "2,200+",
    desc: "Hybrid event management with virtual platform integration and physical registration kiosks.",
    category: "Medical",
    icon: "Heart"
  },
  {
    id: 5,
    title: "Infosys Product Launch Event",
    location: "Hyderabad",
    attendees: "1,500+",
    desc: "Premium event production with branded registration experience and VIP guest management.",
    category: "Corporate",
    icon: "Rocket"
  },
  {
    id: 6,
    title: "Indian Pharma Expo 2024",
    location: "Ahmedabad",
    attendees: "4,200+",
    desc: "Exhibition management with exhibitor registration, booth allocation, and visitor tracking system.",
    category: "Exhibition",
    icon: "Store"
  }
]

