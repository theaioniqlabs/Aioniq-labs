import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import Design4Hero from '@/components/ui/Design4Hero'
import ProductFeatures from '@/components/ui/ProductFeatures'
import QuoteSection from '@/components/ui/QuoteSection'
import ExploreSection from '@/components/ui/ExploreSection'
import { DestinationCard } from '@/components/ui/card-21'
import { PageContainer } from '@/components/ui/PageContainer'

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
            href: '#',
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
      {/* Destination Cards Section */}
      <section
        className="w-full"
        style={{
          paddingTop: 'var(--spacing-section-vertical-mobile)',
          paddingBottom: 'var(--spacing-section-vertical-mobile)',
        }}
      >
        <PageContainer>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="w-full max-w-[320px] h-[450px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1887"
                location="Indonesia"
                flag="🇮🇩"
                stats="1,345 Hotels • 24 Packages"
                href="#"
                themeColor="150 50% 25%"
              />
            </div>
            <div className="w-full max-w-[320px] h-[450px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1887"
                location="Dubai"
                flag="🇦🇪"
                stats="2,345 Hotels • 54 Packages"
                href="#"
                themeColor="250 50% 30%"
              />
            </div>
          </div>
        </PageContainer>
      </section>
      <LandingAccordionItem />
      <QuoteSection />
      <ExploreSection />
    </main>
  )
}

