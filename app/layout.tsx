import type { Metadata, Viewport } from 'next'
import './globals.css'
import HoloBackground from '@/components/HoloBackground'

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
  themeColor: '#D4AF37',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <div className="relative min-h-screen">
          {/* 3D reactive background */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <HoloBackground />
            <div className="absolute inset-0 mix-blend-screen opacity-20 scanlines" />
            <div className="absolute inset-0 opacity-20 holo-noise" />
          </div>

          {children}
        </div>
      </body>
    </html>
  )
}

