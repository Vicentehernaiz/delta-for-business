'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'delta-cookie-consent'

type Consent = 'accepted' | 'declined'

export function CookieBanner() {
  // `null` = haven't checked storage yet (avoids SSR/CSR flash)
  const [consent, setConsent] = useState<Consent | null | 'pending'>('pending')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null
      setConsent(stored ?? null)
    } catch {
      setConsent(null)
    }
  }, [])

  const decide = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore — private mode, etc.
    }
    setConsent(value)
  }

  if (consent !== null) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[var(--z-toast)] cookie-banner-in"
      style={{
        padding: '16px',
      }}
    >
      <div
        className="mx-auto flex flex-wrap items-center gap-4"
        style={{
          maxWidth: '720px',
          background: 'var(--color-delta-blue-700)',
          color: 'var(--color-neutral-0)',
          borderRadius: 'var(--radius-l)',
          padding: '16px 20px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <i
          className="ph-fill ph-cookie text-2xl flex-shrink-0"
          style={{ color: 'var(--color-nav-section-title)' }}
          aria-hidden="true"
        />
        <p
          style={{
            flex: '1 1 220px',
            fontSize: 'var(--type-scale-13)',
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          We use cookies to improve your experience and analyze traffic.{' '}
          <Link
            href="/resources/program-terms"
            style={{
              color: 'var(--color-nav-section-title)',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              fontWeight: '600',
            }}
          >
            Learn more
          </Link>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => decide('declined')}
            style={{
              height: '36px',
              padding: '0 16px',
              borderRadius: 'var(--radius-full)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'var(--type-scale-13)',
              fontWeight: '600',
              fontFamily: 'var(--font-display)',
              border: '1px solid rgba(255,255,255,0.22)',
              cursor: 'pointer',
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            style={{
              height: '36px',
              padding: '0 18px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-13)',
              fontWeight: '700',
              fontFamily: 'var(--font-display)',
              border: 'none',
              boxShadow: 'var(--shadow-button)',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes cookie-banner-slide-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .cookie-banner-in {
          animation: cookie-banner-slide-up 280ms ease-out 200ms both;
        }
      `}</style>
    </div>
  )
}
