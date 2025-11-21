import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'cecevents | Premium Event Management & Conference Services',
  description: 'Creating unforgettable event experiences worldwide. From conferences to corporate events, we deliver excellence at every touchpoint.',
  keywords: 'event management, conference planning, corporate events, event production, cecevents',
  authors: [{ name: 'cecevents' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'cecevents - Premium Event Management',
    description: 'Creating unforgettable event experiences worldwide.',
    siteName: 'cecevents',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffb703',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

