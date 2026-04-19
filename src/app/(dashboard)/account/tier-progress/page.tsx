'use client'

import { mockTierProgress, mockMilestones } from '@/lib/api/mock-data'
import { SpendChart } from '@/components/dashboard/SpendChart'
import Link from 'next/link'

const milestoneTypeIcons: Record<string, string> = {
  enrollment: 'ph-fill ph-user-plus',
  tier: 'ph-fill ph-medal',
  spend: 'ph-fill ph-trend-up',
  alert: 'ph-fill ph-warning',
}

const milestoneTypeColors: Record<string, string> = {
  enrollment: 'var(--color-delta-blue-600)',
  tier: 'var(--color-delta-red-400)',
  spend: 'var(--color-success)',
  alert: 'var(--color-warning)',
}

export default function TierProgressPage() {
  const { currentTier, currentSpend, nextTierThreshold, percentToNextTier, projectedMonthsToNextTier, projectedReachDate, tiers } = mockTierProgress

  return (
    <div className="space-y-6">
      <div>
        <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
          Tier Progress
        </h1>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
          SkyMiles for Business company tier — separate from individual Medallion status
        </p>
      </div>

      {/* Tier progress banner */}
      <div
        className="rounded-[var(--radius-l)] p-8"
        style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              Current tier
            </p>
            <p style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '8px' }}>
              {currentTier}
            </p>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)' }}>
              ${currentSpend.toLocaleString()} of ${nextTierThreshold.toLocaleString()} cumulative spend
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
              Projected to reach Elite in ~{projectedMonthsToNextTier} months ({projectedReachDate})
            </p>
          </div>
          <div>
            {/* Progress bar */}
            <div className="flex justify-between mb-2">
              {tiers.map((t) => (
                <span key={t.name} style={{ fontSize: 'var(--type-scale-13)', fontWeight: t.name === currentTier ? '700' : '400', color: t.name === currentTier ? 'var(--color-neutral-0)' : 'rgba(255,255,255,0.5)' }}>
                  {t.name}
                </span>
              ))}
            </div>
            <div className="rounded-full overflow-hidden" style={{ height: '10px', background: 'rgba(255,255,255,0.15)' }}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${percentToNextTier}%`,
                  background: `linear-gradient(90deg, rgba(255,255,255,0.6), var(--color-delta-red-400))`,
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>$0</span>
              <span style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>${(nextTierThreshold / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tier cards */}
        <div
          className="rounded-[var(--radius-l)] p-6 space-y-3"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>
            Company tier ladder
          </h3>
          {tiers.map((tier) => {
            const achieved = tier.threshold === 0 || currentSpend >= tier.threshold
            const isCurrent = tier.name === currentTier
            return (
              <div
                key={tier.name}
                className="flex items-center justify-between p-4 rounded-[var(--radius-l)]"
                style={{
                  background: isCurrent ? 'var(--color-delta-red-50)' : achieved ? 'var(--color-neutral-5)' : 'var(--color-neutral-5)',
                  border: isCurrent ? '2px solid var(--color-delta-red-400)' : '2px solid var(--color-neutral-10)',
                }}
              >
                <div className="flex items-center gap-3">
                  <i className="ph-fill ph-medal text-2xl" style={{ color: isCurrent ? 'var(--color-delta-red-400)' : achieved ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-300)' }}></i>
                  <div>
                    <p style={{ fontWeight: '700', color: isCurrent ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
                      {tier.name}
                    </p>
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
                      {tier.threshold === 0 ? 'Free to join' : `$${(tier.threshold / 1000).toFixed(0)}K cumulative spend`}
                    </p>
                  </div>
                </div>
                {achieved && !isCurrent && <i className="ph-fill ph-check-circle text-lg" style={{ color: 'var(--color-success)' }}></i>}
                {isCurrent && <span className="px-2 py-0.5 rounded-full font-semibold" style={{ background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-12)' }}>Current</span>}
              </div>
            )
          })}
        </div>

        {/* Milestone log */}
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>
            Account milestones
          </h3>
          <div className="space-y-4">
            {mockMilestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 mt-0.5"
                  style={{ background: `${milestoneTypeColors[m.type]}18` }}
                >
                  <i className={`${milestoneTypeIcons[m.type]} text-base`} style={{ color: milestoneTypeColors[m.type] }}></i>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{m.label}</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{m.description}</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', marginTop: '2px' }}>{m.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SpendChart />
    </div>
  )
}
