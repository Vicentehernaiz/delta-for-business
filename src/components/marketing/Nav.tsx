'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { mainNav, authNav } from '@/config/navigation'
import type { NavItem } from '@/types'

// ── Mega-menu content (descriptions per child link) ──────────────────────────

const megaDescriptions: Record<string, string> = {
  '/programs/business-traveler':   'Free self-serve · 1–49 travelers · Dual SkyMiles earning',
  '/programs/enterprise':          'Negotiated fares · 50–499 travelers · Corporate Priority',
  '/programs/large-enterprise':    'Full managed travel · 500+ travelers · Global coverage',
  '/programs/compare':             'Side-by-side comparison of all three programs',
  '/benefits/corporate-priority':  'Preferred seating, priority boarding & upgrade queue',
  '/benefits/sky-club':            'Lounge access across 50+ domestic & international airports',
  '/benefits/meetings-groups':     'Discounted fares for group travel and events',
  '/cards/personal':               'Blue · Gold · Platinum · Reserve — earn on every purchase',
  '/cards/business':               'Gold · Platinum · Reserve Business — 99 employee cards free',
  '/cards/compare':                'Compare all 7 Delta-Amex cards side by side',
}

// ── Mega panel ────────────────────────────────────────────────────────────────

function MegaPanel({ item }: { item: NavItem }) {
  const children = item.children ?? []
  const isPrograms = item.label === 'Programs'

  return (
    <div
      style={{
        background: 'var(--color-delta-blue-700)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
        padding: '32px 0',
      }}
    >
      <div
        className="mx-auto px-10"
        style={{ maxWidth: '1200px' }}
      >
        {/* Category label */}
        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-delta-red-400)',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}
        >
          {item.label}
        </p>

        {/* Link grid — 2 cols for Programs (4 items), else single row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isPrograms ? 'repeat(2, 1fr)' : `repeat(${children.length}, 1fr)`,
            gap: '8px',
            maxWidth: isPrograms ? '760px' : '900px',
          }}
        >
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group flex flex-col rounded-[var(--radius-l)] transition-colors"
              style={{
                padding: '16px 20px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--type-scale-15)',
                  fontWeight: '700',
                  color: 'var(--color-neutral-0)',
                  fontFamily: 'var(--font-display)',
                  marginBottom: '4px',
                  display: 'block',
                }}
              >
                {child.label}
              </span>
              {megaDescriptions[child.href] && (
                <span
                  style={{
                    fontSize: 'var(--type-scale-13)',
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '400',
                    lineHeight: '1.4',
                  }}
                >
                  {megaDescriptions[child.href]}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Desktop nav item ──────────────────────────────────────────────────────────

function NavLink({
  item,
  isActive,
  onEnter,
  onLeave,
}: {
  item: NavItem
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  const hasChildren = (item.children?.length ?? 0) > 0

  if (hasChildren) {
    return (
      <div
        className="relative h-full flex items-center"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 font-semibold transition-colors whitespace-nowrap relative"
          style={{
            fontSize: 'var(--type-scale-14)',
            color: isActive ? 'var(--color-neutral-0)' : 'rgba(255,255,255,0.85)',
            fontFamily: 'var(--font-display)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-expanded={isActive}
        >
          {item.label}
          <i
            className={`ph-bold ph-caret-down text-xs transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
          ></i>
          {/* Red underline indicator */}
          <span
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: '12px',
              right: '12px',
              height: '2px',
              background: 'var(--color-delta-red-400)',
              borderRadius: '1px',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 150ms ease',
            }}
          />
        </button>
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className="px-3 py-2 font-semibold transition-colors whitespace-nowrap"
      style={{
        fontSize: 'var(--type-scale-14)',
        color: 'rgba(255,255,255,0.85)',
        fontFamily: 'var(--font-display)',
      }}
      onMouseEnter={onLeave}
    >
      {item.label}
    </Link>
  )
}

// ── Main Nav ──────────────────────────────────────────────────────────────────

export function Nav() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveLabel(label)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveLabel(null), 80)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close mega menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveLabel(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const activeItem = mainNav.find((i) => i.label === activeLabel && (i.children?.length ?? 0) > 0) ?? null

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────────── */}
      <header
        className="fixed top-0 w-full z-[var(--z-nav)]"
        style={{ background: 'var(--color-delta-blue-700)' }}
      >
        <nav
          className="flex items-center justify-between px-10"
          style={{ height: 'var(--nav-height)', maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onMouseEnter={scheduleClose}
          >
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M14 0L28 24H0L14 0Z" fill="#C01933" />
            </svg>
            <div className="flex items-baseline gap-1">
              <span style={{ fontSize: '16px', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--color-neutral-0)', letterSpacing: '-0.01em' }}>
                Delta
              </span>
              <span style={{ fontSize: '14px', fontWeight: '400', fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)' }}>
                for Business
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center h-full">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={activeLabel === item.label}
                onEnter={() => {
                  if ((item.children?.length ?? 0) > 0) {
                    openMenu(item.label)
                  } else {
                    scheduleClose()
                  }
                }}
                onLeave={scheduleClose}
              />
            ))}
          </div>

          {/* Desktop CTAs */}
          <div
            className="hidden lg:flex items-center gap-2 shrink-0"
            onMouseEnter={scheduleClose}
          >
            <Link
              href={authNav.login.href}
              className="inline-flex items-center gap-2 font-semibold transition-colors whitespace-nowrap"
              style={{
                height: '38px',
                padding: '0 18px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-14)',
                fontFamily: 'var(--font-display)',
              }}
            >
              {authNav.login.label}
            </Link>
            <Link
              href={authNav.cta.href}
              className="inline-flex items-center gap-2 font-semibold transition-colors whitespace-nowrap"
              style={{
                height: '38px',
                padding: '0 18px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-14)',
                fontFamily: 'var(--font-display)',
                boxShadow: 'var(--shadow-button)',
              }}
            >
              {authNav.cta.label}
              <i className="ph-bold ph-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center"
            style={{ width: '48px', height: '48px', color: 'var(--color-neutral-0)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <i className={`ph-bold ${mobileOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
          </button>
        </nav>

        {/* ── Mega panel (full-width, anchored to bottom of header) ── */}
        {activeItem && (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <MegaPanel item={activeItem} />
          </div>
        )}
      </header>

      {/* ── Mobile overlay ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[calc(var(--z-nav)-1)] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      <div
        className="fixed top-0 right-0 h-full w-[320px] max-w-[90vw] z-[var(--z-nav)] transform transition-transform duration-300 lg:hidden overflow-y-auto"
        style={{
          background: 'var(--color-delta-blue-700)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between p-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="flex items-center gap-2">
            <svg width="22" height="19" viewBox="0 0 28 24" fill="none">
              <path d="M14 0L28 24H0L14 0Z" fill="#C01933" />
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--color-neutral-0)' }}>
              Delta for Business
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ width: '36px', height: '36px', color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close menu"
          >
            <i className="ph-bold ph-x text-xl"></i>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="pb-6">
          {mainNav.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-6 py-4 font-semibold"
                    style={{
                      fontSize: 'var(--type-scale-15)',
                      color: 'var(--color-neutral-0)',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-display)',
                      width: '100%',
                      textAlign: 'left',
                    }}
                  >
                    {item.label}
                    <i className={`ph-bold ph-caret-down text-sm transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileExpanded === item.label && (
                    <div style={{ background: 'rgba(0,0,0,0.2)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-10 py-3"
                          style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-4 font-semibold"
                  style={{
                    fontSize: 'var(--type-scale-15)',
                    color: 'var(--color-neutral-0)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="px-6 pt-6 space-y-3">
            <Link
              href={authNav.login.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full font-semibold"
              style={{
                height: '48px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
              }}
            >
              {authNav.login.label}
            </Link>
            <Link
              href={authNav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full font-semibold"
              style={{
                height: '48px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
              }}
            >
              {authNav.cta.label}
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
