'use client'

import React from 'react'

type ProgressiveBlurProps = {
  className?: string
  backgroundColor?: string
  position?: 'top' | 'bottom'
  height?: string
  blurAmount?: string
}

const ProgressiveBlur = ({
  className = '',
  backgroundColor = '#f5f4f3',
  position = 'top',
  height = '150px',
  blurAmount = '4px',
}: ProgressiveBlurProps) => {
  const isTop = position === 'top'

  return (
    <div
      className={`pointer-events-none absolute left-0 w-full select-none ${className}`}
      style={{
        [isTop ? 'top' : 'bottom']: 0,
        height,
        background: isTop
          ? `linear-gradient(to top, transparent, ${backgroundColor})`
          : `linear-gradient(to bottom, transparent, ${backgroundColor})`,
        maskImage: isTop
          ? `linear-gradient(to bottom, ${backgroundColor} 50%, transparent)`
          : `linear-gradient(to top, ${backgroundColor} 50%, transparent)`,
        WebkitBackdropFilter: `blur(${blurAmount})`,
        backdropFilter: `blur(${blurAmount})`,
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    />
  )
}

const Skiper41 = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[#f5f4f3] text-black/40">
      <ProgressiveBlur position="top" backgroundColor="#f5f4f3" />
      <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" />

      <div className="flex h-[calc(100vh-1rem)] w-full flex-col items-center overflow-scroll pl-[30px] pr-[30px]">
        <div className="mt-[42px] grid content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            WHAT ABOUT US!
          </span>
        </div>

        <div className="mt-24 w-full max-w-lg space-y-20 pl-[30px] pr-[30px] text-justify">
          <div>
            We are into <strong>branding & identity, user experienc design, digital experiences, advertising.</strong>
          </div>
          <div>
            Aioniq is an innovative design agency based on the fundamentals of design psychology, we always combine art with technology. We work collaboratively or independently with visionaries leaders and partners to deliver user-centred solutions across the full path of what&apos;s society need.
          </div>
          <div>
            We&apos;ve work from a long time with these clients, and have been potential to work with some great clients like you. Some clients not only stick with us, but they kindly recommend us to their next person, meaning we get 80% of our work comes through referrals.This is just great, it&apos;s a massive show of support and we really appreciate it.
          </div>
          <div>
            We are into <strong>branding & identity, user experienc design, digital experiences, advertising.</strong>
          </div>
          <div>
            We&apos;ve work from a long time with these clients, and have been potential to work with some great clients like you. Some clients not only stick with us, but they kindly recommend us to their next person, meaning we get 80% of our work comes through referrals.This is just great, it&apos;s a massive show of support and we really appreciate it.
          </div>
          <div>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProgressiveBlur, Skiper41 }

