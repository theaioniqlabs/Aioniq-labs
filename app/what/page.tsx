import { AboutSection } from '@/components/about/AboutSection'
import Design7Hero from '@/components/ui/Design7Hero'

export default function What() {
  return (
    <main className="w-full min-h-screen">
      <Design7Hero
        badge="Version 2.0 is here"
        headline="AI-Powered Financial Solution"
        ctaLabel="Get Started"
        ctaHref="#"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        features={[
          'Funds are safe by your data security',
          'Privacy of the most transaction',
        ]}
        metricTitle="AI Growth Rate"
        metricValue="90x"
        metricDescription="faster"
      />
      <AboutSection />
    </main>
  )
}

