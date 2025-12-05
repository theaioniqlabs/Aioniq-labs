'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  as?: 'button' | 'a'
}

/**
 * Unified Button component with variants, sizes, and states
 * Uses AiONIQ design tokens for all styling
 * Primary variant includes FlowButton animation (expanding circle, sliding arrows)
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  as = href ? 'a' : 'button',
  className = '',
  disabled,
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'w-auto',
    'flex-shrink-0',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-black',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ]

  const isPrimary = variant === 'primary'
  const isIcon = variant === 'icon'

  // Variant classes
  const variantClasses = {
    primary: [
      'group',
      'relative',
      'overflow-hidden',
      'rounded-[100px]',
      'border-[1.5px]',
      'border-[#333333]/40',
      'bg-transparent',
      'text-[#111111]',
      'cursor-pointer',
      'transition-all',
      'duration-[600ms]',
      'ease-[cubic-bezier(0.23,1,0.32,1)]',
      'hover:border-transparent',
      'hover:text-white',
      'hover:rounded-[12px]',
      'active:scale-[0.95]',
    ],
    secondary: [
      'rounded-md',
      'bg-[var(--color-button-secondary-bg)]',
      'text-[var(--color-button-secondary-text)]',
      'border',
      'border-[var(--color-button-secondary-border)]',
      'hover:bg-[var(--color-button-secondary-hover)]',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'active:scale-[0.98]',
    ],
    ghost: [
      'rounded-md',
      'bg-transparent',
      'text-[var(--color-text-primary)]',
      'hover:bg-[var(--color-background-tertiary)]',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'active:scale-[0.98]',
    ],
    destructive: [
      'rounded-md',
      'bg-destructive',
      'text-destructive-foreground',
      'hover:bg-destructive/90',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'active:scale-[0.98]',
    ],
    icon: [
      'rounded-md',
      'bg-transparent',
      'text-[var(--color-text-primary)]',
      'hover:bg-[var(--color-background-tertiary)]',
      'aspect-square',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'active:scale-[0.98]',
    ],
  }

  // Size classes
  const sizeClasses = {
    sm: [
      'h-[var(--spacing-button-height-small)]', // 48px
      'px-[var(--spacing-button-padding-x-small)]', // 24px
      'text-[var(--typography-button-size-small)]', // 14px
    ],
    md: [
      'h-[var(--spacing-button-height-default)]', // 56px
      'px-[var(--spacing-button-padding-x-default)]', // 32px
      'text-[var(--typography-button-size-default)]', // 16px
    ],
    lg: [
      'h-16', // 64px
      'px-10', // 40px
      'text-lg', // 18px
    ],
  }

  // Primary variant uses specific padding for FlowButton animation (responsive)
  const primarySizeClasses = {
    sm: ['px-4', 'py-2', 'text-xs', 'sm:px-6', 'sm:text-sm'],
    md: ['px-6', 'py-2.5', 'text-sm', 'sm:px-8', 'sm:py-3'],
    lg: ['px-8', 'py-3', 'text-sm', 'sm:px-10', 'sm:py-4', 'sm:text-base'],
  }

  // Secondary variant matches primary size but uses standard styling
  const secondarySizeClasses = {
    sm: ['px-4', 'py-2', 'text-xs', 'sm:px-6', 'sm:text-sm'],
    md: ['px-6', 'py-2.5', 'text-sm', 'sm:px-8', 'sm:py-3'],
    lg: ['px-8', 'py-3', 'text-sm', 'sm:px-10', 'sm:py-4', 'sm:text-base'],
  }

  // Icon variant uses square aspect and adjusts padding
  const iconSizeClasses = {
    sm: ['h-[var(--spacing-button-height-small)]', 'w-[var(--spacing-button-height-small)]', 'p-0'],
    md: ['h-[var(--spacing-button-height-default)]', 'w-[var(--spacing-button-height-default)]', 'p-0'],
    lg: ['h-16', 'w-16', 'p-0'],
  }

  const sizeClassList = isPrimary
    ? primarySizeClasses[size]
    : variant === 'secondary'
      ? secondarySizeClasses[size]
      : isIcon
        ? iconSizeClasses[size]
        : sizeClasses[size]

  const allClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClassList,
    className
  )

  // Typography styles via inline style (font-weight and line-height from tokens)
  const typographyStyle: React.CSSProperties = {
    fontWeight: 'var(--typography-button-weight)', // 600
    lineHeight: 'var(--typography-button-line-height)', // 1.5
    fontFamily: 'var(--typography-font-family-body)',
  }

  const commonProps = {
    className: allClasses,
    style: {
      ...typographyStyle,
      ...(props.style || {}),
    },
    ...(disabled && { 'aria-disabled': true }),
  }

  // Primary variant needs special structure with animated elements
  if (isPrimary) {
    const primaryContent = (
      <>
        {/* Left arrow (arr-2) - responsive sizing */}
        <ArrowRight 
          className="absolute w-3 h-3 sm:w-4 sm:h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-2 sm:group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
          aria-hidden="true"
        />

        {/* Text - responsive translation */}
        <span className="relative z-[1] -translate-x-2 sm:-translate-x-3 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
          {children}
        </span>

        {/* Expanding circle background - responsive size for mobile */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[150px] group-hover:h-[150px] sm:group-hover:w-[220px] sm:group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

        {/* Right arrow (arr-1) - responsive sizing */}
        <ArrowRight 
          className="absolute w-3 h-3 sm:w-4 sm:h-4 right-2 sm:right-4 stroke-[#111111] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
          aria-hidden="true"
        />
      </>
    )

    if (as === 'a' && href) {
      const { disabled: _, form, formAction, type, style, ...anchorProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
      return (
        <a
          href={disabled ? undefined : href}
          {...commonProps}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          aria-disabled={disabled}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
        >
          {primaryContent}
        </a>
      )
    }

    const { style, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button
        type="button"
        {...commonProps}
        {...buttonProps}
        disabled={disabled}
      >
        {primaryContent}
      </button>
    )
  }

  // Standard variants (non-primary)
  if (as === 'a' && href) {
    const { disabled: _, form, formAction, type, style, ...anchorProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <a
        href={disabled ? undefined : href}
        {...commonProps}
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    )
  }

  const { style, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button
      type="button"
      {...commonProps}
      {...buttonProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
