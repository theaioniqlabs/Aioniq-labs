import React from 'react'
import Image from 'next/image'

interface ImagePlaceholderProps {
  src?: string
  srcSet?: {
    '1x': string
    '2x': string
  }
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

/**
 * ImagePlaceholder component with WebP fallback support
 * Falls back to CSS gradient if images fail to load
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  srcSet,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) => {
  const [imageError, setImageError] = React.useState(false)

  // Determine image source - Next.js Image handles responsive images via sizes prop
  const imageSrc = srcSet?.['1x'] || src || '/assets/placeholders/hero_placeholder@1x.webp'

  // Fallback gradient style - matches hero placeholder from screenshot
  const gradientStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
    width: '100%',
    height: '100%',
    borderRadius: 'var(--radii-card-default)', // 12px
    minHeight: 'var(--spacing-hero-image-height)', // 260px
  }

  if (imageError || !imageSrc) {
    return (
      <div
        style={gradientStyle}
        className={className}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...(priority && { priority: true })}
      onError={() => setImageError(true)}
      style={{
        objectFit: 'cover',
        borderRadius: 'var(--radii-card-default)', // 12px
        minHeight: 'var(--spacing-hero-image-height)', // 260px
      }}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  )
}

