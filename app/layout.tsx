import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

