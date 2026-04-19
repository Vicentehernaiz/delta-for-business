'use client'

import Link from 'next/link'
import { mockAdminUser } from '@/lib/api/mock-data'

export function TopBar() {
  const initials = mockAdminUser.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header
      className="flex items-center justify-between px-8"
      style={{
        height: '64px',
        background: 'var(--color-neutral-0)',
        borderBottom: '1px solid var(--color-neutral-10)',
        flexShrink: 0,
      }}
    >
      {/* Search */}
      <div className="relative" style={{ width: '320px' }}>
        <i
          className="ph ph-magnifying-glass absolute top-1/2 -translate-y-1/2 left-3 text-lg"
          style={{ color: 'var(--color-neutral-400)' }}
        ></i>
        <input
          type="text"
          placeholder="Search flights, travelers, reports..."
          className="w-full pl-9 pr-4 py-2 rounded-[var(--radius-l)] transition-colors"
          style={{
            background: 'var(--color-neutral-5)',
            border: '1px solid var(--color-neutral-10)',
            fontSize: 'var(--type-scale-14)',
            color: 'var(--color-delta-blue-600)',
            outline: 'none',
          }}
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          style={{ background: 'var(--color-neutral-5)' }}
        >
          <i className="ph ph-bell text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ background: 'var(--color-delta-red-400)' }}
          ></span>
        </button>

        {/* Help */}
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          style={{ background: 'var(--color-neutral-5)' }}
        >
          <i className="ph ph-question text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
        </button>

        {/* User */}
        <div
          className="flex items-center gap-3 pl-4"
          style={{ borderLeft: '1px solid var(--color-neutral-10)' }}
        >
          <div className="text-right">
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
              {mockAdminUser.name}
            </p>
            <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
              {mockAdminUser.role}
            </p>
          </div>
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{
              background: 'var(--color-delta-blue-600)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-13)',
              fontWeight: '700',
            }}
          >
            {initials}
          </div>
          <button>
            <i className="ph ph-caret-down text-lg" style={{ color: 'var(--color-neutral-600)' }}></i>
          </button>
        </div>
      </div>
    </header>
  )
}
