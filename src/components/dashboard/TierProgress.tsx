'use client'

import { motion } from 'framer-motion'
import { mockTierProgress } from '@/lib/api/mock-data'

interface TierProgressProps {
  currentSpend?: number
  nextTierThreshold?: number
  currentTier?: string
  projectedReachDate?: string
}

export function TierProgress({
  currentSpend = mockTierProgress.currentSpend,
  nextTierThreshold = mockTierProgress.nextTierThreshold,
  currentTier = mockTierProgress.currentTier,
  projectedReachDate = mockTierProgress.projectedReachDate,
}: TierProgressProps) {
  const percent = Math.min((currentSpend / nextTierThreshold) * 100, 100)
  const remaining = nextTierThreshold - currentSpend

  return (
    <div
      className="rounded-[var(--radius-l)] p-6"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3
          style={{
            fontSize: 'var(--type-scale-16)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-600)',
          }}
        >
          Tier Progress
        </h3>
        <span
          className="inline-block px-3 py-1 rounded-full font-semibold"
          style={{
            background: 'var(--color-delta-red-50)',
            color: 'var(--color-delta-red-400)',
            fontSize: 'var(--type-scale-12)',
          }}
        >
          {currentTier}
        </span>
      </div>

      {/* Tier ladder */}
      <div className="flex justify-between mb-3">
        {mockTierProgress.tiers.map((tier) => (
          <span
            key={tier.name}
            style={{
              fontSize: 'var(--type-scale-12)',
              fontWeight: '600',
              color: tier.name === currentTier ? 'var(--color-delta-red-400)' : 'var(--color-neutral-400)',
            }}
          >
            {tier.name}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="rounded-full overflow-hidden mb-3"
        style={{ height: '8px', background: 'var(--color-neutral-10)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--color-delta-blue-600), var(--color-delta-red-400))`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <div className="flex justify-between">
        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
          <strong style={{ color: 'var(--color-delta-blue-600)' }}>${currentSpend.toLocaleString()}</strong> of ${nextTierThreshold.toLocaleString()}
        </p>
        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
          ${remaining.toLocaleString()} to go · {projectedReachDate}
        </p>
      </div>
    </div>
  )
}
