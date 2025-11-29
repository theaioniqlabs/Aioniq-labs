import DomeGallery from '@/components/ui/DomeGallery'

export default function What() {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full flex flex-row" style={{ height: '800px', minHeight: '800px' }}>
        {/* 40% section */}
        <div className="relative overflow-hidden" style={{ width: '40%', height: '100%' }}>
          {/* Placeholder for future content */}
        </div>
        {/* 60% section */}
        <div className="relative overflow-hidden" style={{ width: '60%', height: '100%' }}>
          <DomeGallery overlayBlurColor="transparent" />
        </div>
      </div>
    </main>
  )
}

