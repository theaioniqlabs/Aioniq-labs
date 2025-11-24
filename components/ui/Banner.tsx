'use client'

import React from 'react'
import Image from 'next/image'

export interface BannerProps {
  src?: string
  srcSet?: {
    '1x': string
    '2x': string
  }
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Banner component - Responsive image banner with rounded corners
 * Used above hero section, supports srcset for responsive images
 * Respects prefers-reduced-motion (no animations)
 */
export const Banner: React.FC<BannerProps> = ({
  src,
  srcSet,
  alt,
  className = '',
  priority = false,
}) => {
  // Determine image source - prefer src, fallback to srcSet, then placeholder
  const imageSrc = src || srcSet?.['1x'] || '/assets/placeholders/hero_banner_placeholder@1x.webp'
  const imageSrcSet = srcSet
    ? `${srcSet['1x']} 1x, ${srcSet['2x']} 2x`
    : '/assets/placeholders/hero_banner_placeholder@1x.webp 1x, /assets/placeholders/hero_banner_placeholder@2x.webp 2x'

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: 'var(--spacing-banner-height-desktop)',
        minHeight: '300px',
        borderRadius: 'var(--radii-banner-default)',
        boxShadow: 'var(--shadow-banner)',
        position: 'relative',
        backgroundColor: '#F3F4F6', // Fallback background while image loads
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1120px"
        className="object-cover"
        priority={priority}
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}

