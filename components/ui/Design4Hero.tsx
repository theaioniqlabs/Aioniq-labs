'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { PageContainer } from '@/components/ui/PageContainer'
import { Sphere } from '@/components/ui/Sphere'

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
        paddingTop: 'var(--spacing-section-vertical-desktop)',
        paddingBottom: 'var(--spacing-section-vertical-desktop)',
        borderTopColor: 'var(--color-button-secondary-border)',
        backgroundColor: '#000000', // Pure black background
      }}
    >
      <PageContainer>
        <div
          className="grid grid-cols-1 lg:grid-cols-5"
          style={{
            gap: 'var(--spacing-stack-gap-md)',
          }}
        >
          {/* Left Column - 60% (3 columns) */}
          <div className="lg:col-span-3">
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
                    color: '#FFFFFF', // White text
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
                color: '#FFFFFF', // White text
                letterSpacing: '-0.02em',
              }}
            >
              {headline}
            </h1>

            {/* Description */}
            <p
              className="mb-8 font-body"
              style={{
                marginBottom: 'var(--spacing-stack-gap-lg)',
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                fontWeight: 'var(--typography-body-weight)',
                color: '#FFFFFF', // White text
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

          {/* Right Column - 40% (2 columns) */}
          <div className="lg:col-span-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
            <Sphere width={420} height={420} />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Design4Hero

