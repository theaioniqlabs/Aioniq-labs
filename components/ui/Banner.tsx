'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export interface BannerProps {
  images: string[]
  alt: string
  className?: string
  priority?: boolean
  autoPlayInterval?: number // in milliseconds, default 5000
}

/**
 * Sliding Banner component - Auto-playing carousel with horizontal slide transitions
 * Used above hero section, cycles through multiple images
 * Respects prefers-reduced-motion (disables auto-play if reduced motion is preferred)
 */
export const Banner: React.FC<BannerProps> = ({
  images,
  alt,
  className = '',
  priority = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval, prefersReducedMotion])

  const renderImage = useCallback(
    (imageSrc: string, index: number) => {
      // Handle placeholder (gray solid color)
      if (imageSrc === 'placeholder') {
        return (
          <div
            key={`placeholder-${index}`}
            className="relative flex-shrink-0 w-full h-full"
            style={{
              backgroundColor: '#9CA3AF', // gray-400
              minWidth: '100%',
            }}
            aria-hidden={index !== currentIndex}
          />
        )
      }

      return (
        <div
          key={imageSrc}
          className="relative flex-shrink-0 w-full h-full"
          style={{ minWidth: '100%' }}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={imageSrc}
            alt={`${alt} - Slide ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1120px"
            className="object-cover"
            priority={priority && index === 0}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )
    },
    [alt, currentIndex, priority]
  )

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
      aria-label={`${alt} - Carousel with ${images.length} images`}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: prefersReducedMotion
            ? 'none'
            : 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((imageSrc, index) => renderImage(imageSrc, index))}
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10"
          role="tablist"
          aria-label="Banner navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              style={{
                transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

