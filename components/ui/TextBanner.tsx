'use client'

import React from 'react'
import GradientText from '@/components/ui/GradientText'

export interface TextBannerProps {
  text?: string
  className?: string
}

/**
 * TextBanner component - Simple banner with center-aligned text
 * Matches Design5Nav height (h-16 = 64px) and container constraints
 * Uses AiONIQ design tokens for styling
 */
export const TextBanner: React.FC<TextBannerProps> = ({
  text = 'Hiiiiiiiiii',
  className = '',
}) => {
  return (
    <section
      className={`w-full ${className}`}
      style={{
        height: '64px', // h-16 - matches Design5Nav
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000', // Black background
      }}
      role="banner"
      aria-label="Text banner"
    >
      <div
        className="max-w-[1440px] mx-auto px-20 w-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={3}
          showBorder={false}
          className="font-body text-center"
          style={{
            fontSize: 'var(--typography-body-size-desktop)',
            lineHeight: 'var(--typography-body-line-height-desktop)',
            fontWeight: 'var(--typography-body-weight)',
          }}
        >
          {text}
        </GradientText>
      </div>
    </section>
  )
}

export default TextBanner

