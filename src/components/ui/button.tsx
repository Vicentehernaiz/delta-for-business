/**
 * Button component — 7 variants from Figma node 223:5171
 * All colors use CSS custom properties — zero hardcoded hex values
 */

import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant =
  | 'primary'        // delta-red-400 bg, white text — primary CTA
  | 'secondary-dark' // neutral-800 bg, white text
  | 'secondary-light'// neutral-50 bg, delta-blue-700 text
  | 'active'         // delta-blue-600 bg, white text — active/selected
  | 'ghost'          // white bg, delta-blue-700 text — on dark backgrounds
  | 'link-blue'      // transparent, delta-blue-300, underline
  | 'link-red'       // transparent, delta-red-400, underline

type ButtonSize = 'sm' | 'default' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  as?: 'button'
}

interface ButtonAsAnchor extends ButtonBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  as: 'a'
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-delta-red-400)] text-[var(--color-neutral-0)] shadow-[var(--shadow-button)] hover:bg-[var(--color-delta-red-100)]',
  'secondary-dark':
    'bg-[var(--color-neutral-800)] text-[var(--color-neutral-0)] shadow-[var(--shadow-button)] hover:opacity-90',
  'secondary-light':
    'bg-[var(--color-neutral-50)] text-[var(--color-delta-blue-700)] shadow-[var(--shadow-button)] hover:bg-[var(--color-neutral-10)]',
  active:
    'bg-[var(--color-delta-blue-600)] text-[var(--color-neutral-0)] shadow-[var(--shadow-button)] hover:opacity-90',
  ghost:
    'bg-[var(--color-neutral-0)] text-[var(--color-delta-blue-700)] shadow-[var(--shadow-button)] hover:bg-[var(--color-neutral-5)]',
  'link-blue':
    'bg-transparent text-[var(--color-delta-blue-300)] underline underline-offset-2 hover:text-[var(--color-delta-blue-200)]',
  'link-red':
    'bg-transparent text-[var(--color-delta-red-400)] underline underline-offset-2 hover:text-[var(--color-delta-red-100)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm:      'px-4 py-2 text-[length:var(--type-scale-14)]',
  default: 'px-6 py-3 text-[length:var(--type-scale-16)]',
  lg:      'px-8 py-3.5 text-[length:var(--type-scale-16)]',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-full)] font-semibold tracking-[var(--letter-spacing-marketing-x-large)] transition-all duration-[var(--transition-fast)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

const linkVariants: ButtonVariant[] = ['link-blue', 'link-red']

export function Button({ variant = 'primary', size = 'default', className, children, ...props }: ButtonProps) {
  const isLink = linkVariants.includes(variant)
  const classes = cn(
    baseStyles,
    isLink ? '' : 'min-h-[44px]',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if ((props as ButtonAsAnchor).as === 'a') {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
