import React from 'react'

export interface PageContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

/**
 * PageContainer component
 * Provides consistent page layout with:
 * - Max width: 1280px
 * - Desktop padding: 80px (px-20)
 * - Mobile padding: 24px
 * - Centered with auto margins
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`page-container mx-auto w-full px-6 lg:px-20 ${className}`}
      style={{
        maxWidth: 'var(--spacing-container-max-width-xl)', // 1280px
      }}
    >
      {children}
    </Component>
  )
}

export default PageContainer

