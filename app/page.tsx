import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TeamSectionStatic from '@/components/TeamSectionStatic'
import AboutSectionStatic from '@/components/AboutSectionStatic'
import ContactSectionStatic from '@/components/ContactSectionStatic'
import HomeGalleryMosaic from '@/components/HomeGalleryMosaic'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <TeamSectionStatic />
      <AboutSectionStatic />
      <HomeGalleryMosaic />
      <ContactSectionStatic />
    </>
  )
}

