'use client'

import { KPICard } from '@/components/dashboard/KPICard'
import { TierProgress } from '@/components/dashboard/TierProgress'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { SpendChart } from '@/components/dashboard/SpendChart'
import { MonthlySummary } from '@/components/dashboard/MonthlySummary'
import { TravelerRoster } from '@/components/dashboard/TravelerRoster'
import { mockDashboardKPIs, mockTravelers } from '@/lib/api/mock-data'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            style={{
              fontSize: 'var(--type-scale-28)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-600)',
            }}
          >
            Good morning, Arjun
          </h1>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
            Acme Corp · Business ID: DELTA-AF7829 · <strong style={{ color: 'var(--color-delta-blue-600)' }}>Plus</strong> tier
          </p>
        </div>
        <Link
          href="https://www.delta.com/us/en/booking/book-a-flight"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-90"
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
          <i className="ph-bold ph-airplane-takeoff text-sm"></i>
          Book a flight
        </Link>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Company miles"
          value={(mockDashboardKPIs.milesBalance / 1000).toFixed(0) + 'K'}
          sub="Total accumulated balance"
          icon="ph-fill ph-trend-up"
          trend={{ value: 12, direction: 'up' }}
        />
        <KPICard
          title="Miles this month"
          value={mockDashboardKPIs.milesEarnedThisMonth.toLocaleString()}
          sub="Earned in April 2026"
          icon="ph-fill ph-airplane"
          trend={{ value: 8, direction: 'up' }}
        />
        <KPICard
          title="Monthly spend"
          value={`$${(mockDashboardKPIs.monthlySpend / 1000).toFixed(0)}K`}
          sub="vs $22.5K last month"
          icon="ph-fill ph-currency-dollar"
          trend={{ value: 5, direction: 'up' }}
        />
        <KPICard
          title="Active travelers"
          value={`${mockDashboardKPIs.activeTravelers} / ${mockDashboardKPIs.totalTravelers}`}
          sub="12 flew this month"
          icon="ph-fill ph-users"
        />
      </div>

      {/* Monthly summary banner */}
      <MonthlySummary />

      {/* Middle row: chart + tier + quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SpendChart />
        </div>
        <div className="space-y-4">
          <TierProgress />
          <QuickActions />
        </div>
      </div>

      {/* Bottom row: recent activity + traveler roster */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
              Top travelers
            </h3>
            <Link
              href="/account/travelers"
              style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-300)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              View all →
            </Link>
          </div>
          <TravelerRoster
            travelers={mockTravelers.filter((t) => t.status === 'active').slice(0, 5)}
          />
        </div>
      </div>
    </div>
  )
}
