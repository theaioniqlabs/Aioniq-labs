import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  href?: string
  as?: 'button' | 'a'
}

/**
 * Tokenized Button component with primary/secondary variants
 * Matches exact colors, spacing, and styling from screenshot
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  as = href ? 'a' : 'button',
  className = '',
  ...props
}) => {
  const isPrimary = variant === 'primary'
  const baseStyles: React.CSSProperties = {
    height: 'var(--spacing-button-height-default)',
    paddingLeft: 'var(--spacing-button-padding-x-default)',
    paddingRight: 'var(--spacing-button-padding-x-default)',
    borderRadius: 'var(--radii-button-pill)',
    fontSize: 'var(--typography-button-size-default)',
    lineHeight: 'var(--typography-button-line-height)',
    fontWeight: 'var(--typography-button-weight)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    backgroundColor: isPrimary
      ? 'var(--color-button-primary-bg)'
      : 'var(--color-button-secondary-bg)',
    color: isPrimary
      ? 'var(--color-button-primary-text)'
      : 'var(--color-button-secondary-text)',
    ...(isPrimary
      ? {}
      : {
          border: '1px solid var(--color-button-secondary-border)',
        }),
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget
    if (isPrimary) {
      element.style.setProperty('background-color', 'var(--color-button-primary-hover)', 'important')
    } else {
      element.style.setProperty('background-color', 'var(--color-button-secondary-hover)', 'important')
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget
    if (isPrimary) {
      element.style.setProperty('background-color', 'var(--color-button-primary-bg)', 'important')
    } else {
      element.style.setProperty('background-color', 'var(--color-button-secondary-bg)', 'important')
    }
  }

  // Merge custom style with base styles - ensure backgroundColor is preserved
  const mergedStyles: React.CSSProperties = {
    ...baseStyles,
    ...(props.style || {}),
    // Ensure backgroundColor is always set correctly (override any style prop that might set it)
    backgroundColor: isPrimary
      ? 'var(--color-button-primary-bg)'
      : 'var(--color-button-secondary-bg)',
  }

  const commonProps = {
    className: `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${className}`,
    style: mergedStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  if (as === 'a' && href) {
    const { disabled, form, formAction, style, ...anchorProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <a href={href} {...commonProps} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  const { style, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" {...commonProps} {...buttonProps}>
      {children}
    </button>
  )
}

