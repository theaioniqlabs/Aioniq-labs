'use client'

import React from 'react'
import { Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PageContainer } from '@/components/ui/PageContainer'

export interface Design7HeroProps {
  badge?: string
  headline: string
  emoji?: string
  ctaLabel?: string
  ctaHref?: string
  userCount?: string
  description?: string
  features?: string[]
  metricTitle?: string
  metricValue?: string
  metricDescription?: string
  className?: string
}

/**
 * Design7Hero component - FinTech product hero section
 * Based on Design 7 from Figma archive
 * Features: version badge, headline with emoji, user avatars, feature checklist, gradient metric card
 */
export const Design7Hero: React.FC<Design7HeroProps> = ({
  badge = 'Version 2.0 is here',
  headline,
  emoji = '💰',
  ctaLabel = 'Get Started',
  ctaHref = '#',
  userCount = '5000+',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  features = [
    'Funds are safe by your data security',
    'Privacy of the most transaction',
  ],
  metricTitle = 'AI Growth Rate',
  metricValue = '90x',
  metricDescription = 'faster',
  className = '',
}) => {
  // Avatar colors matching Design 7
  const avatarColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-green-500',
  ]

  return (
    <section
      className={`w-full ${className}`}
      style={{
        paddingTop: 'var(--spacing-section-vertical-desktop)',
        paddingBottom: 'var(--spacing-section-vertical-desktop)',
      }}
    >
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div>
            {/* Version Badge */}
            {badge && (
              <div
                className="inline-flex items-center gap-2 rounded-full mb-6"
                style={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  backgroundColor: 'rgba(31, 41, 55, 0.05)',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <Sparkles
                  size={16}
                  style={{
                    color: 'var(--color-brand-primary)',
                  }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm"
                  style={{
                    color: 'var(--color-brand-primary)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  {badge}
                </span>
              </div>
            )}

            {/* Headline with Emoji */}
            <h1
              className="mb-6 font-heading tracking-tight flex items-start gap-3"
              style={{
                marginBottom: 'var(--spacing-stack-gap-md)',
                fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                lineHeight: '1.1',
                fontWeight: 'var(--typography-h1-weight)',
                color: 'var(--color-text-primary)',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  lineHeight: '1',
                }}
              >
                {emoji}
              </span>
              <span
                style={{
                  whiteSpace: 'pre-line',
                }}
              >
                {headline}
              </span>
            </h1>

            {/* CTA Button */}
            <Button
              href={ctaHref}
              variant="primary"
              style={{
                borderRadius: 'var(--radii-button-default)',
                marginBottom: '32px',
              }}
            >
              {ctaLabel}
            </Button>

            {/* User Avatars Section */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarColors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${color}`}
                    style={{
                      borderColor: 'var(--color-background-primary)',
                      zIndex: avatarColors.length - index,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div>
                <p
                  className="text-sm"
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-brand-primary)',
                      fontWeight: '500',
                    }}
                  >
                    Join {userCount} users
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Description */}
            <p
              className="font-body"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(31, 41, 55, 0.1)',
                    }}
                  >
                    <Check
                      size={12}
                      style={{
                        color: 'var(--color-brand-primary)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Gradient Metric Card */}
            <div
              className="relative overflow-hidden rounded-2xl p-8 mt-8"
              style={{
                background: 'linear-gradient(to bottom right, #f97316, #a855f7, #3b82f6)',
              }}
            >
              {/* Blur Effects */}
              <div
                className="absolute top-0 right-0 rounded-full pointer-events-none"
                style={{
                  width: '128px',
                  height: '128px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(64px)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 rounded-full pointer-events-none"
                style={{
                  width: '160px',
                  height: '160px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(96px)',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="text-white/80 text-sm mb-2"
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {metricTitle}
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <div
                    className="text-white"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 3.75rem)',
                      lineHeight: '1',
                      fontWeight: '700',
                    }}
                  >
                    {metricValue}
                  </div>
                  <div
                    className="text-white/80"
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                      lineHeight: '1',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {metricDescription}
                  </div>
                </div>
                <p
                  className="text-white/90 text-sm"
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Design7Hero

