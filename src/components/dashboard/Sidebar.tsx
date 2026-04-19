'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: 'ph-duotone ph-chart-bar', label: 'Overview', href: '/account/dashboard' },
  { icon: 'ph-duotone ph-currency-dollar', label: 'Miles & Rewards', href: '/account/miles' },
  { icon: 'ph-duotone ph-users', label: 'Travelers', href: '/account/travelers' },
  { icon: 'ph-duotone ph-chart-line', label: 'Reports', href: '/account/reports' },
  { icon: 'ph-duotone ph-trend-up', label: 'Tier Progress', href: '/account/tier-progress' },
  { icon: 'ph-duotone ph-wallet', label: 'Credit Wallet', href: '/account/wallet' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="flex flex-col"
      style={{
        width: '240px',
        minHeight: '100vh',
        background: 'var(--color-delta-blue-700)',
        flexShrink: 0,
      }}
    >
      {/* Brand */}
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <i className="ph-fill ph-airplane-takeoff text-2xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
        <div>
          <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-neutral-0)', fontFamily: 'var(--font-display)' }}>
            Delta for Business
          </p>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.5)' }}>
            Dashboard
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-l)] transition-all"
              style={{
                background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: isActive ? 'var(--color-neutral-0)' : 'rgba(255,255,255,0.6)',
                fontWeight: isActive ? '600' : '400',
                fontSize: 'var(--type-scale-14)',
              }}
            >
              <i className={`${item.icon} text-xl flex-shrink-0`} style={{ color: isActive ? 'var(--color-delta-red-400)' : 'rgba(255,255,255,0.4)' }}></i>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-1" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '4px' }}>
        <Link
          href="/account/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-l)] transition-all"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--type-scale-14)' }}
        >
          <i className="ph-duotone ph-gear text-xl" style={{ color: 'rgba(255,255,255,0.4)' }}></i>
          Settings
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-l)] transition-all"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--type-scale-14)' }}
        >
          <i className="ph-duotone ph-sign-out text-xl" style={{ color: 'rgba(255,255,255,0.4)' }}></i>
          Sign out
        </Link>
      </div>
    </aside>
  )
}
