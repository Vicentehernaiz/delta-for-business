'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { mainNav, authNav } from '@/config/navigation'
import type { NavItem } from '@/types'
import { clarityEvent } from '@/lib/clarity'

// ── Mega-menu content (descriptions per child link) ──────────────────────────

const megaDescriptions: Record<string, string> = {
  '/programs/individual':          'Solo traveler · Free · No employer needed · Personal SkyMiles + perks',
  '/programs/business-traveler':   '1–49 travelers OR up to $50K spend · Free self-serve · Rewards pool',
  '/programs/enterprise':          '50–499 travelers OR $50K–$300K spend · Dynamic fares · Seat pools',
  '/programs/large-enterprise':    '500+ travelers OR $300K+ spend · Custom pricing · Global support',
  '/programs/compare':             'Side-by-side: Individual · SMB Flex · Corporate Pro · Enterprise Elite',
  '/benefits/corporate-priority':  'Preferred seating, priority boarding & upgrade queue',
  '/benefits/sky-club':            'Lounge access across 50+ domestic & international airports',
  '/benefits/meetings-groups':     'Discounted fares for group travel and events',
  '/cards/personal':               'Blue · Gold · Platinum · Reserve — earn on every purchase',
  '/cards/business':               'Gold · Platinum · Reserve Business — 99 employee cards free',
  '/cards/compare':                'Compare all 7 Delta-Amex cards side by side',
}

// ── Mega panel ────────────────────────────────────────────────────────────────

function MegaPanel({ item, onSelect }: { item: NavItem; onSelect: () => void }) {
  const children = item.children ?? []
  // 4–5 item menus (Programs) get a 2-col layout; everything else stays single-row.
  const isTwoCol = children.length >= 4

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
            color: 'var(--color-nav-section-title)',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}
        >
          {item.label}
        </p>

        {/* Link grid — 2 cols for 4-item menus, else single row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isTwoCol ? 'repeat(2, 1fr)' : `repeat(${children.length}, 1fr)`,
            gap: '8px',
            maxWidth: isTwoCol ? '760px' : '900px',
          }}
        >
          {children.map((child) => {
            const description = child.description ?? megaDescriptions[child.href]
            const handleClick = () => {
              if (child.clarityEvent) clarityEvent(child.clarityEvent as string)
              // Close the mega-menu so the click feels like a confirmed selection
              // (page is loading) — user can re-open by hovering the trigger again.
              onSelect()
            }

            return (
              <Link
                key={`${child.label}-${child.href}`}
                href={child.href}
                target={child.isExternal ? '_blank' : undefined}
                rel={child.isExternal ? 'noopener noreferrer' : undefined}
                onClick={handleClick}
                className="group flex flex-col rounded-[var(--radius-l)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
                {description && (
                  <span
                    style={{
                      fontSize: 'var(--type-scale-13)',
                      color: 'var(--color-nav-mega-description)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: '400',
                      lineHeight: '1.4',
                    }}
                  >
                    {description}
                  </span>
                )}
              </Link>
            )
          })}
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
        onFocus={onEnter}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) onLeave()
        }}
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
          aria-haspopup="menu"
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
    <a
      href={item.href}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      className="px-3 py-2 font-semibold transition-colors whitespace-nowrap"
      style={{
        fontSize: 'var(--type-scale-14)',
        color: 'rgba(255,255,255,0.85)',
        fontFamily: 'var(--font-display)',
      }}
      onMouseEnter={onLeave}
    >
      {item.label}
    </a>
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
            className="flex items-center shrink-0"
            onMouseEnter={scheduleClose}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
              alt="Delta for Business"
              height={32}
              style={{ height: '32px', width: 'auto' }}
            />
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
                background: 'var(--color-neutral-800)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-14)',
                fontFamily: 'var(--font-display)',
                boxShadow: 'var(--shadow-button)',
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
            className="nav-mega-panel-in"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            onFocus={cancelClose}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose()
            }}
          >
            <MegaPanel item={activeItem} onSelect={() => setActiveLabel(null)} />
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
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
              alt="Delta for Business"
              style={{ height: '28px', width: 'auto' }}
            />
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
                          key={`${child.label}-${child.href}`}
                          href={child.href}
                          target={child.isExternal ? '_blank' : undefined}
                          rel={child.isExternal ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            if (child.clarityEvent) clarityEvent(child.clarityEvent)
                            setMobileOpen(false)
                          }}
                          className="block px-10 py-3"
                          style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-nav-mega-link)', fontFamily: 'var(--font-body)' }}
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
                background: 'var(--color-neutral-800)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
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
