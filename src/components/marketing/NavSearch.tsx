'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: 'Compare business plans', href: '/programs/compare' },
  { label: 'Plan Calculator', href: '/tools/plan-calculator' },
  { label: 'Medallion status', href: '/medallion' },
  { label: 'Delta Amex cards', href: '/cards/compare' },
  { label: 'MQD Calculator', href: '/medallion/mqd-calculator' },
  { label: 'Sky Club access', href: '/benefits/sky-club' },
]

export function NavSearch({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input when overlay opens
  useEffect(() => {
    if (open) {
      // small delay so the input is mounted before focus fires
      const id = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(id)
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    // No backend search; route to glossary as a graceful fallback.
    window.location.href = `/resources/glossary?q=${encodeURIComponent(query.trim())}`
  }

  const filtered = query.trim()
    ? QUICK_LINKS.filter((q) => q.label.toLowerCase().includes(query.trim().toLowerCase()))
    : QUICK_LINKS

  const buttonStyle =
    variant === 'desktop'
      ? {
          width: '38px',
          height: '38px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255,255,255,0.08)',
          color: 'var(--color-neutral-0)',
          border: '1px solid rgba(255,255,255,0.12)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      : {
          width: '100%',
          height: '44px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255,255,255,0.08)',
          color: 'var(--color-neutral-0)',
          border: '1px solid rgba(255,255,255,0.16)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 18px',
          justifyContent: 'flex-start',
          fontSize: 'var(--type-scale-14)',
          fontFamily: 'var(--font-display)',
          fontWeight: '600',
        }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open search"
        style={buttonStyle}
        className="transition-colors"
      >
        <i className="ph-bold ph-magnifying-glass text-base" aria-hidden="true" />
        {variant === 'mobile' && <span>Search</span>}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-modal)' as unknown as number,
            background: 'rgba(0, 23, 45, 0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '88px 20px 20px',
          }}
          className="search-overlay-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '560px',
              background: 'var(--color-neutral-0)',
              borderRadius: 'var(--radius-l)',
              boxShadow: 'var(--shadow-modal)',
              overflow: 'hidden',
            }}
          >
            <form
              onSubmit={onSubmit}
              className="flex items-center"
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--color-neutral-10)',
                gap: '12px',
              }}
            >
              <i className="ph-bold ph-magnifying-glass text-lg" style={{ color: 'var(--color-neutral-500)' }} />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, cards, tools…"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: 'var(--type-scale-16)',
                  color: 'var(--color-delta-blue-700)',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-neutral-5)',
                  color: 'var(--color-neutral-700)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <i className="ph-bold ph-x text-sm" />
              </button>
            </form>

            <div style={{ padding: '8px 8px 12px' }}>
              <p
                style={{
                  fontSize: 'var(--type-scale-11)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-neutral-500)',
                  padding: '8px 12px 4px',
                }}
              >
                {query.trim() ? 'Suggestions' : 'Quick links'}
              </p>

              {filtered.length === 0 ? (
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', padding: '8px 12px' }}>
                  No matches. Press Enter to search the glossary.
                </p>
              ) : (
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                  {filtered.map((q) => (
                    <li key={q.href}>
                      <Link
                        href={q.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between"
                        style={{
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--type-scale-14)',
                          color: 'var(--color-delta-blue-700)',
                          fontWeight: '600',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                          ;(e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-neutral-5)'
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                        }}
                      >
                        <span>{q.label}</span>
                        <i className="ph-bold ph-arrow-right text-xs" style={{ color: 'var(--color-neutral-500)' }} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <style jsx>{`
            @keyframes search-overlay-fade {
              from {
                opacity: 0;
                transform: translateY(-8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .search-overlay-in {
              animation: search-overlay-fade 180ms ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  )
}
