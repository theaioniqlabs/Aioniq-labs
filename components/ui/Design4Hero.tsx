'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { PageContainer } from '@/components/ui/PageContainer'

export interface Design4HeroCTA {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface Design4HeroProps {
  badge?: string
  headline: string
  description: string
  ctas: Design4HeroCTA[]
  className?: string
}

/**
 * Design4Hero component - Hero section with badge, headline, description, and CTAs
 * Based on Design 4 from Figma archive
 * Uses AiONIQ design tokens for all styling
 */
export const Design4Hero: React.FC<Design4HeroProps> = ({
  badge = 'Creative Technology Studio',
  headline,
  description,
  ctas,
  className = '',
}) => {
  return (
    <section
      className={`w-full border-t border-border ${className}`}
      style={{
        paddingTop: '150px',
        paddingBottom: 'var(--spacing-section-vertical-desktop)',
        borderTopColor: 'var(--color-button-secondary-border)',
      }}
    >
      <PageContainer>
        <div style={{ maxWidth: '768px' }}>
          {/* Badge */}
          {badge && (
            <div
              className="inline-block rounded-full mb-6"
              style={{
                paddingLeft: 'var(--spacing-stack-gap-md)',
                paddingRight: 'var(--spacing-stack-gap-md)',
                paddingTop: '6px',
                paddingBottom: '6px',
                backgroundColor: 'rgba(155, 123, 255, 0.05)', // primary/5
                borderRadius: 'var(--radii-button-pill)',
                marginBottom: 'var(--spacing-stack-gap-md)',
              }}
            >
              <span
                className="font-body"
                style={{
                  fontSize: 'var(--typography-body-small-size-desktop)',
                  lineHeight: 'var(--typography-body-small-line-height)',
                  fontWeight: 'var(--typography-body-small-weight)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                {badge}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1
            className="mb-6 font-heading tracking-tight"
            style={{
              marginBottom: 'var(--spacing-stack-gap-md)',
              fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
              lineHeight: '1.1',
              fontWeight: 'var(--typography-h1-weight)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {headline}
          </h1>

          {/* Description */}
          <p
            className="mb-8 font-body max-w-2xl"
            style={{
              marginBottom: 'var(--spacing-stack-gap-lg)',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              fontWeight: 'var(--typography-body-weight)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row"
            style={{
              gap: 'var(--spacing-stack-gap-md)',
            }}
          >
            {ctas.map((cta, index) => (
              <Button
                key={index}
                href={cta.href}
                variant={cta.variant}
                style={{
                  borderRadius: 'var(--radii-button-default)',
                }}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Design4Hero

