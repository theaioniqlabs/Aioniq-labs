import Design4Hero from '@/components/ui/Design4Hero'
import ProductFeatures from '@/components/ui/ProductFeatures'
import QuoteSection from '@/components/ui/QuoteSection'
import ExploreSection from '@/components/ui/ExploreSection'

export default function Home() {
  return (
    <main>
      <Design4Hero
        badge="Creative Technology Studio"
        headline="A Human-first Intelligent Design Systems"
        description="We combine strategic thinking, elegant design, and advanced technology to create digital products that feel effortless and work beautifully."
        ctas={[
          {
            label: 'Start a Project',
            href: '/contact',
            variant: 'primary',
          },
          {
            label: 'View Our Work',
            href: '#',
            variant: 'secondary',
          },
        ]}
      />
      <ProductFeatures />
      <QuoteSection />
      <ExploreSection />
    </main>
  )
}

