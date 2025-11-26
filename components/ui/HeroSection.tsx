'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export interface HeroSectionAnnouncement {
  text: string
  buttonText?: string
  buttonHref?: string
}

export interface HeroSectionCTA {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroSectionProps {
  announcement?: HeroSectionAnnouncement
  headline: string
  description: string
  ctas: HeroSectionCTA[]
  backgroundImage?: string
  className?: string
}

/**
 * HeroSection component - Alternative hero section with announcement banner
 * Uses AiONIQ design tokens for all styling
 * Navigation is handled separately by MainNav component
 */
export default function HeroSection({
  announcement,
  headline,
  description,
  ctas,
  backgroundImage = 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png',
  className = ''
}: HeroSectionProps) {
  return (
    <section
      className={`w-full bg-no-repeat bg-cover bg-center relative ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        marginTop: '120px',
        padding: '50px',
      }}
    >
      {/* Announcement Banner */}
      {announcement && (
        <div
          className="flex items-center gap-2 border rounded-full w-max mx-auto px-4 py-2 transition-colors hover:border-opacity-70"
          style={{
            marginTop: 'var(--spacing-section-vertical-desktop)',
            borderColor: 'var(--color-button-secondary-border)',
            gap: 'var(--spacing-stack-gap-sm)',
            paddingLeft: 'var(--spacing-stack-gap-md)',
            paddingRight: 'var(--spacing-stack-gap-md)',
            paddingTop: 'var(--spacing-stack-gap-sm)',
            paddingBottom: 'var(--spacing-stack-gap-sm)',
            borderRadius: 'var(--radii-button-default)',
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: 'var(--typography-body-size-desktop)',
              lineHeight: 'var(--typography-body-line-height-desktop)',
              fontWeight: 'var(--typography-body-weight)',
              color: 'var(--color-text-primary)',
            }}
          >
            {announcement.text}
          </span>
          {announcement.buttonText && announcement.buttonHref && (
            <Link
              href={announcement.buttonHref}
              className="flex items-center gap-1 font-medium transition-colors hover:opacity-80"
              style={{
                gap: 'var(--spacing-stack-gap-xs)',
                fontSize: 'var(--typography-body-size-desktop)',
                lineHeight: 'var(--typography-body-line-height-desktop)',
                fontWeight: 'var(--typography-body-weight)',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
              }}
            >
              <span>{announcement.buttonText}</span>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      )}

      {/* Headline */}
      <h1
        className="font-heading max-w-[850px] text-center mx-auto"
        style={{
          marginTop: announcement ? 'var(--spacing-stack-gap-lg)' : 'var(--spacing-section-vertical-desktop)',
          fontSize: 'clamp(2.25rem, 4vw, 4.5rem)',
          lineHeight: '1.1',
          fontWeight: 'var(--typography-h1-weight)',
          color: 'var(--color-text-primary)',
        }}
      >
        {headline}
      </h1>

      {/* Description */}
      <p
        className="font-body mx-auto max-w-2xl text-center"
        style={{
          marginTop: 'var(--spacing-stack-gap-md)',
          paddingLeft: 'var(--spacing-container-padding-mobile)',
          paddingRight: 'var(--spacing-container-padding-mobile)',
          fontSize: 'var(--typography-body-size-desktop)',
          lineHeight: 'var(--typography-body-line-height-desktop)',
          fontWeight: 'var(--typography-body-weight)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {description}
      </p>

      {/* CTA Buttons */}
      <div
        className="mx-auto w-full flex items-center justify-center"
        style={{
          marginTop: 'var(--spacing-stack-gap-md)',
          gap: 'var(--spacing-stack-gap-md)',
        }}
      >
        {ctas.map((cta, index) => (
          <Button
            key={index}
            href={cta.href}
            variant={cta.variant}
          >
            {cta.label}
          </Button>
        ))}
      </div>
    </section>
  )
}

