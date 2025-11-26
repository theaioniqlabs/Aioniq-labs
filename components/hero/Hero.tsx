'use client'

import React from 'react'
import { AvatarGroup, Avatar } from '@/components/ui/AvatarGroup'
import { Button } from '@/components/ui/Button'
import { Banner } from '@/components/ui/Banner'
import { AuroraBackground } from '@/components/ui/aurora-background'
import MagicBento from '@/components/ui/MagicBento'
import { tokens } from '@/design/tokens'

export interface HeroCTA {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroProps {
  bannerImages?: string[]
  bannerAlt?: string
  badge?: string
  headline: string
  highlightedWord: string
  subtext?: string
  avatars?: Avatar[]
  ctas: HeroCTA[]
  screenshotRef?: string
}

/**
 * Hero component matching screenshot pixel-for-pixel
 * Uses design tokens for all spacing, typography, colors, and radii
 */
export const Hero: React.FC<HeroProps> = ({
  bannerImages,
  bannerAlt = 'Hero banner',
  badge = 'Creative Technology Studio',
  headline,
  highlightedWord,
  subtext = 'with 40000000+ reach and start getting feedbacks right now',
  avatars = [],
  ctas,
  screenshotRef,
}) => {
  // Split headline to highlight the specified word
  const headlineParts = headline.split(new RegExp(`(${highlightedWord})`, 'gi'))

  return (
    <section
      className="w-full relative overflow-x-hidden"
      style={{
        paddingTop: `var(--spacing-section-vertical-desktop)`, // 80px
        paddingBottom: `var(--spacing-section-vertical-desktop)`, // 80px
        width: '100vw', // Explicit full viewport width
      }}
      aria-label="Hero section"
    >
      {/* Aurora Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-screen">
        <AuroraBackground
          className="absolute inset-0 w-full"
          showRadialGradient={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
      {/* Container 1: Banner */}
      {bannerImages && bannerImages.length > 0 && (
          <div
            style={{
              marginTop: 'var(--spacing-banner-gap-top)',
              marginBottom: 'var(--spacing-banner-gap-bottom)',
            }}
          >
            <Banner
            images={bannerImages}
            alt={bannerAlt}
              priority={true}
            />
          </div>
        )}

      {/* Magic Bento Grid - Below Banner */}
      <div
        style={{
          marginTop: 'var(--spacing-banner-gap-bottom)',
          marginBottom: 'var(--spacing-section-vertical-desktop)',
        }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="155, 123, 255"
        />
      </div>

       {/* Container 2: Content and Buttons - Full Width */}
       <div className="w-full flex flex-col items-start">
            {/* Badge */}
            {badge && (
              <div
                className="inline-flex items-center"
                style={{
                  height: 'var(--spacing-badge-height)', // 32px
                  paddingLeft: 'var(--spacing-badge-padding-x)', // 16px
                  paddingRight: 'var(--spacing-badge-padding-x)', // 16px
                  paddingTop: 'var(--spacing-badge-padding-y)', // 8px
                  paddingBottom: 'var(--spacing-badge-padding-y)', // 8px
                  marginBottom: 'var(--spacing-stack-gap-sm)', // 16px gap to H1
                  backgroundColor: 'var(--color-badge-bg)',
                  color: 'var(--color-badge-text)',
                  borderRadius: 'var(--radii-badge-default)',
                  fontSize: 'var(--typography-badge-size-desktop)',
                  lineHeight: 'var(--typography-badge-line-height)',
                  fontWeight: 'var(--typography-badge-weight)',
                }}
                role="status"
                aria-label="Studio tagline"
              >
                {badge}
              </div>
            )}

            {/* Headline */}
            <h1
            className="font-bold text-4xl md:text-6xl leading-tight tracking-tighter"
              style={{
                marginBottom: 'var(--spacing-stack-gap-sm)', // 16px gap to subtext
                color: 'var(--color-text-primary)',
              }}
            >
              {headlineParts.map((part, index) => {
                const isHighlighted =
                  part.toLowerCase() === highlightedWord.toLowerCase()
                return (
                  <span
                    key={index}
                    style={
                      isHighlighted
                        ? {
                            color: 'var(--color-brand-primary)', // #9B7BFF
                          }
                        : {}
                    }
                  >
                    {part}
                  </span>
                )
              })}
            </h1>

            {/* Subtext */}
            {subtext && (
              <p
                className="text-gray-600"
                style={{
                  marginBottom: 'var(--spacing-stack-gap-lg)', // 32px gap to avatar row
                  fontSize: 'var(--typography-body-subtle-size-desktop)', // 15px (subtle scale)
                  lineHeight: 'var(--typography-body-subtle-line-height-desktop)', // 22px (subtle scale)
                  fontWeight: 'var(--typography-body-subtle-weight)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {subtext}
              </p>
            )}

            {/* Avatar Group */}
            {avatars.length > 0 && (
              <div
                style={{
                  marginBottom: 'var(--spacing-stack-gap-xl)', // 48px gap to CTAs
                }}
              >
                <AvatarGroup
                  avatars={avatars}
                  size="default"
                  className="flex-shrink-0"
                />
              </div>
            )}

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap"
              style={{
                gap: 'var(--spacing-stack-gap-sm)', // 16px horizontal gap between buttons
              }}
              role="group"
              aria-label="Call to action buttons"
            >
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.variant}
                  href={cta.href}
                  as="a"
                  aria-label={cta.label}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

      {/* Hidden reference to screenshot for documentation */}
      {screenshotRef && (
        <meta
          name="hero-screenshot-ref"
          content={screenshotRef}
          hidden
        />
      )}
      </div>
    </section>
  )
}

