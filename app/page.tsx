import { Hero } from '@/components/hero/Hero'
import type { Avatar } from '@/components/ui/AvatarGroup'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'

// Mock avatars - replace with actual avatar images when available
const mockAvatars: Avatar[] = [
  {
    alt: 'Team member 1',
    name: 'John Doe',
  },
  {
    alt: 'Team member 2',
    name: 'Jane Smith',
  },
  {
    alt: 'Team member 3',
    name: 'Alex Johnson',
  },
]

export default function Home() {
  return (
    <main>
      <Hero
        bannerImages={[
          '/assets/banners/Sliding-banner-1.png',
          '/assets/banners/Sliding-banner-2.png',
          'placeholder',
        ]}
        bannerAlt="Hero banner"
        badge="Creative Technology Studio"
        headline="A Human-first Intelligent Design Systems"
        highlightedWord="Intelligent"
        subtext="with 40000000+ reach and start getting feedbacks right now"
        avatars={mockAvatars}
        ctas={[
          {
            label: 'Start Project',
            href: '#',
            variant: 'primary',
          },
          {
            label: 'View Our Work',
            href: '#',
            variant: 'secondary',
          },
        ]}
        screenshotRef="/mnt/data/9309a2b0-3a7c-4372-8cbc-3030a29cc646.png"
      />
      <LandingAccordionItem />
    </main>
  )
}

