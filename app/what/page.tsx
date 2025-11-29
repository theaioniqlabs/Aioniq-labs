import DomeGallery from '@/components/ui/DomeGallery'
import { AboutSection } from '@/components/about/AboutSection'

export default function What() {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full relative overflow-hidden" style={{ height: '800px', minHeight: '800px' }}>
        <DomeGallery overlayBlurColor="transparent" />
      </div>
      <AboutSection />
    </main>
  )
}

