import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GalleryGrid from '@/components/GalleryGrid'

export const revalidate = 60

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bgLight pt-20">
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}
