'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { clarityEvent } from '@/lib/clarity'

interface PlaceholderPageProps {
  heading: string
  subtext: string
  /** Clarity event fired once on mount. */
  eventName: string
  /** Primary CTA destination — defaults to home. */
  ctaHref?: string
  /** Primary CTA label — defaults to "Back to Home". */
  ctaLabel?: string
}

export function PlaceholderPage({
  heading,
  subtext,
  eventName,
  ctaHref = '/',
  ctaLabel = 'Back to Home',
}: PlaceholderPageProps) {
  useEffect(() => {
    clarityEvent(eventName)
  }, [eventName])

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
      }}
    >
      <div className="flex flex-col items-center text-center" style={{ maxWidth: '560px' }}>
        <Link href="/" className="mb-10" aria-label="Delta for Business — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
            alt="Delta for Business"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>

        <div
          className="flex items-center justify-center mb-6"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <i
            className="ph-duotone ph-wrench"
            style={{ fontSize: '28px', color: 'var(--color-neutral-0)' }}
          />
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 3.2vw, var(--type-scale-40))',
            color: 'var(--color-neutral-0)',
            lineHeight: 'var(--line-height-heading-xl)',
            marginBottom: '14px',
          }}
        >
          {heading}
        </h1>

        <p
          style={{
            fontSize: 'var(--type-scale-16)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.6,
            marginBottom: '36px',
          }}
        >
          {subtext}
        </p>

        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center gap-2 font-semibold transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{
            height: '48px',
            padding: '0 26px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-delta-red-400)',
            color: 'var(--color-neutral-0)',
            fontSize: 'var(--type-scale-15)',
            fontFamily: 'var(--font-display)',
            boxShadow: 'var(--shadow-button)',
          }}
        >
          {ctaLabel}
          <i className="ph-bold ph-arrow-right text-sm" />
        </Link>
      </div>
    </main>
  )
}
