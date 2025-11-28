import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Design5Nav } from '@/components/navigation/Design5Nav'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { TextBanner } from '@/components/ui/TextBanner'

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
    <html lang="en" suppressHydrationWarning>
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
        <ThemeProvider>
          <section className="relative w-full">
            <TextBanner />
            <Design5Nav />
          </section>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

