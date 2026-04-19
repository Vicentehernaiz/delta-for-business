'use client'

import { useState } from 'react'
import { TravelerRoster } from '@/components/dashboard/TravelerRoster'
import { mockTravelers, mockCompany } from '@/lib/api/mock-data'

type FilterStatus = 'all' | 'active' | 'invited' | 'inactive'

export default function TravelersPage() {
  const [filter, setFilter] = useState<FilterStatus>('all')
  const [search, setSearch] = useState('')

  const filtered = mockTravelers.filter((t) => {
    if (filter !== 'all' && t.status !== filter) return false
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.email.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const counts = {
    all: mockTravelers.length,
    active: mockTravelers.filter((t) => t.status === 'active').length,
    invited: mockTravelers.filter((t) => t.status === 'invited').length,
    inactive: mockTravelers.filter((t) => t.status === 'inactive').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
            Travelers
          </h1>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
            {mockCompany.travelersCount} registered · {mockCompany.activeTravelersCount} active this month
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 font-semibold"
          style={{
            height: '44px',
            padding: '0 20px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-delta-red-400)',
            color: 'var(--color-neutral-0)',
            fontSize: 'var(--type-scale-14)',
            boxShadow: 'var(--shadow-button)',
          }}
        >
          <i className="ph-bold ph-user-plus text-sm"></i>
          Add traveler
        </button>
      </div>

      {/* Filters + search */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status filters */}
        <div
          className="flex p-1 gap-1 rounded-full"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          {(['all', 'active', 'invited', 'inactive'] as FilterStatus[]).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="capitalize font-semibold transition-all"
              style={{
                height: '36px',
                padding: '0 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--type-scale-14)',
                background: filter === s ? 'var(--color-delta-blue-600)' : 'transparent',
                color: filter === s ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
              }}
            >
              {s} ({counts[s]})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1" style={{ maxWidth: '300px' }}>
          <i className="ph ph-magnifying-glass absolute top-1/2 -translate-y-1/2 left-3" style={{ color: 'var(--color-neutral-400)' }}></i>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full pl-9 pr-4 rounded-[var(--radius-l)]"
            style={{
              height: '40px',
              border: '1px solid var(--color-neutral-10)',
              background: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-14)',
              outline: 'none',
              color: 'var(--color-delta-blue-600)',
            }}
          />
        </div>
      </div>

      {/* Table */}
      <TravelerRoster travelers={filtered} />

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <i className="ph-duotone ph-users text-4xl" style={{ color: 'var(--color-neutral-400)' }}></i>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginTop: '8px' }}>
            No travelers match your filter.
          </p>
        </div>
      )}
    </div>
  )
}
