import type { Metadata, Viewport } from 'next'
import './globals.css'
import Logo from '@/components/Logo'

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
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="min-h-screen">
          <header className="border-b border-[var(--border-color)]">
            <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)] py-[var(--space-16)] flex items-center justify-between">
              <Logo />
              <nav className="hidden md:flex gap-[var(--space-16)] text-[var(--fs-s)] text-[color:var(--color-text-muted)]">
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/team">Team</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="mt-[var(--space-96)] border-t border-[var(--border-color)]">
            <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)] py-[var(--space-24)] text-[var(--fs-s)] text-[color:var(--color-text-muted)]">
              © {new Date().getFullYear()} cecevents
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

