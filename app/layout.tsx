import type { Metadata } from 'next'
import '@/styles/globals.css'
import { MainNav } from '@/components/navigation/MainNav'

export const metadata: Metadata = {
  title: 'AiONIQ Labs - A Human-first Intelligent Design Systems',
  description: 'Creative Technology Studio with 40000000+ reach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Inter variable font for headings (per BEST_FONT_SYSTEM.md) */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  )
}

