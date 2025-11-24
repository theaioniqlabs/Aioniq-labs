'use client'

import React from 'react'
import { AvatarGroup, Avatar } from '@/components/ui/AvatarGroup'
import { Button } from '@/components/ui/Button'
import { Banner } from '@/components/ui/Banner'
import { tokens } from '@/design/tokens'

export interface HeroCTA {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroProps {
  banner?: {
    src?: string
    srcSet?: {
      '1x': string
      '2x': string
    }
    alt: string
  }
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
  banner,
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
      className="relative w-full bg-white"
      style={{
        paddingTop: `var(--spacing-section-vertical-desktop)`, // 80px
        paddingBottom: `var(--spacing-section-vertical-desktop)`, // 80px
      }}
      aria-label="Hero section"
    >
      <div
        className="mx-auto px-5 md:px-10 lg:px-20"
        style={{
          maxWidth: 'var(--spacing-container-max-width-xl)',
        }}
      >
        {/* Banner - Above hero content */}
        {banner && (
          <div
            style={{
              marginTop: 'var(--spacing-banner-gap-top)',
              marginBottom: 'var(--spacing-banner-gap-bottom)',
            }}
          >
            <Banner
              src={banner.src}
              srcSet={banner.srcSet}
              alt={banner.alt}
              priority={true}
            />
          </div>
        )}

        <div className="flex flex-col items-start">
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
              className="font-bold"
              style={{
                marginBottom: 'var(--spacing-stack-gap-sm)', // 16px gap to subtext
                fontSize: 'var(--typography-h1-subtle-size-desktop)', // 28px (subtle scale)
                lineHeight: 'var(--typography-h1-subtle-line-height-desktop)', // 32px (subtle scale)
                fontWeight: 'var(--typography-h1-subtle-weight)',
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
      </div>

      {/* Hidden reference to screenshot for documentation */}
      {screenshotRef && (
        <meta
          name="hero-screenshot-ref"
          content={screenshotRef}
          hidden
        />
      )}
    </section>
  )
}

