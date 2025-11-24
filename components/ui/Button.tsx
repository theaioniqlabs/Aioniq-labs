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
    if (isPrimary) {
      e.currentTarget.style.backgroundColor = 'var(--color-button-primary-hover)'
    } else {
      e.currentTarget.style.backgroundColor = 'var(--color-button-secondary-hover)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (isPrimary) {
      e.currentTarget.style.backgroundColor = 'var(--color-button-primary-bg)'
    } else {
      e.currentTarget.style.backgroundColor = 'var(--color-button-secondary-bg)'
    }
  }

  const commonProps = {
    className: `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${className}`,
    style: baseStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...props,
  }

  if (as === 'a' && href) {
    return (
      <a href={href} {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

