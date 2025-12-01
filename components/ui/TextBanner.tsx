'use client'

import React from 'react'
import Image from 'next/image'

export interface TextBannerProps {
  logo?: string
  logoAlt?: string
  className?: string
}

/**
 * TextBanner component - Banner with centered logo
 * Matches Design5Nav height (h-16 = 64px) and container constraints
 * Uses white background
 */
export const TextBanner: React.FC<TextBannerProps> = ({
  logo = '/assets/aioniq-logo.svg',
  logoAlt = 'AIONIQ Labs',
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
        backgroundColor: '#FFFFFF', // White background
      }}
      role="banner"
      aria-label="Logo banner"
    >
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 w-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={logo}
          alt={logoAlt}
          width={135}
          height={38}
          className="h-[24px] sm:h-[30px] w-auto"
          priority
        />
      </div>
    </section>
  )
}

export default TextBanner

