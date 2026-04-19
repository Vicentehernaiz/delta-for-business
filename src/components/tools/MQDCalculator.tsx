'use client'

import { useState } from 'react'
import { medallionTiers, medallionOrder } from '@/config/medallion'
import { motion } from 'framer-motion'

const CARD_HEADSTART: Record<string, number> = {
  none: 0,
  gold: 0,
  platinum: 2500,
  reserve: 2500,
}

export function MQDCalculator() {
  const [annualSpend, setAnnualSpend] = useState(8000)
  const [cardHeadstartKey, setCardHeadstartKey] = useState<keyof typeof CARD_HEADSTART>('none')

  const headstart = CARD_HEADSTART[cardHeadstartKey]
  const effectiveMQD = annualSpend + headstart

  const currentTierId = (() => {
    for (let i = medallionOrder.length - 1; i >= 0; i--) {
      const id = medallionOrder[i]
      const tier = medallionTiers[id]
      if (tier && effectiveMQD >= tier.mqdThreshold) return id
    }
    return null
  })()

  const nextTierId = (() => {
    for (const id of medallionOrder) {
      const tier = medallionTiers[id]
      if (tier && effectiveMQD < tier.mqdThreshold) return id
    }
    return null
  })()

  const nextTier = nextTierId ? medallionTiers[nextTierId] : null
  const progressPercent = nextTier
    ? Math.min((effectiveMQD / nextTier.mqdThreshold) * 100, 100)
    : 100

  return (
    <div
      className="rounded-[var(--radius-l)] p-8"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
        maxWidth: '640px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: 'var(--type-scale-22)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '6px',
        }}
      >
        MQD Calculator
      </h2>
      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '28px' }}>
        Since 2024, Medallion status is based entirely on Medallion Qualifying Dollars (MQD). No flight count required.
      </p>

      <div className="space-y-6 mb-8">
        {/* Annual spend slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
              Annual airfare spend
            </label>
            <span style={{ fontSize: 'var(--type-scale-18)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-red-400)' }}>
              ${annualSpend.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={35000}
            step={500}
            value={annualSpend}
            onChange={(e) => setAnnualSpend(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: 'var(--color-delta-red-400)' }}
          />
          <div className="flex justify-between mt-1">
            <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}>$0</span>
            <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}>$35K+</span>
          </div>
        </div>

        {/* Card headstart */}
        <div>
          <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', marginBottom: '8px' }}>
            Amex card MQD headstart
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { key: 'none', label: 'No card', sub: '$0' },
              { key: 'gold', label: 'Gold', sub: '$0' },
              { key: 'platinum', label: 'Platinum', sub: '+$2,500' },
              { key: 'reserve', label: 'Reserve', sub: '+$2,500' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setCardHeadstartKey(opt.key as keyof typeof CARD_HEADSTART)}
                className="p-3 rounded-[var(--radius-l)] text-center transition-all"
                style={{
                  background: cardHeadstartKey === opt.key ? 'var(--color-delta-red-50)' : 'var(--color-neutral-5)',
                  border: cardHeadstartKey === opt.key
                    ? '2px solid var(--color-delta-red-400)'
                    : '2px solid var(--color-neutral-10)',
                }}
              >
                <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: cardHeadstartKey === opt.key ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)' }}>
                  {opt.label}
                </p>
                <p style={{ fontSize: 'var(--type-scale-11)', color: 'var(--color-neutral-600)' }}>{opt.sub}</p>
              </button>
            ))}
          </div>
          {headstart > 0 && (
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginTop: '6px' }}>
              Effective MQD: <strong style={{ color: 'var(--color-delta-blue-600)' }}>${effectiveMQD.toLocaleString()}</strong> (${annualSpend.toLocaleString()} + ${headstart.toLocaleString()} headstart)
            </p>
          )}
        </div>
      </div>

      {/* Current status */}
      <div
        className="rounded-[var(--radius-l)] p-5 mb-4"
        style={{ background: 'var(--color-delta-blue-700)' }}
      >
        <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
          {currentTierId ? 'Current tier' : 'No tier yet'}
        </p>
        <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>
          {currentTierId
            ? medallionTiers[currentTierId]?.name ?? 'Medallion'
            : 'Not yet qualifying'}
        </p>
        {nextTier && (
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
            ${(nextTier.mqdThreshold - effectiveMQD).toLocaleString()} more MQD to {nextTier.name}
          </p>
        )}
      </div>

      {/* Progress to next tier */}
      {nextTier && (
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              Progress to {nextTier.name}
            </span>
            <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
              {progressPercent.toFixed(0)}%
            </span>
          </div>
          <div
            className="rounded-full overflow-hidden"
            style={{ height: '8px', background: 'var(--color-neutral-10)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--color-delta-red-400)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}

      {/* Tier ladder */}
      <div className="grid grid-cols-2 gap-3">
        {medallionOrder.map((id) => {
          const tier = medallionTiers[id]
          if (!tier) return null
          const achieved = effectiveMQD >= tier.mqdThreshold
          return (
            <div
              key={id}
              className="rounded-[var(--radius-l)] p-4 flex items-center gap-3"
              style={{
                background: achieved ? `${tier.color}14` : 'var(--color-neutral-5)',
                border: achieved ? `2px solid ${tier.color}` : '2px solid var(--color-neutral-10)',
              }}
            >
              <i
                className="ph-fill ph-medal text-xl flex-shrink-0"
                style={{ color: achieved ? tier.color : 'var(--color-neutral-300)' }}
              ></i>
              <div>
                <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: achieved ? tier.color : 'var(--color-neutral-400)' }}>
                  {tier.name}
                </p>
                <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
                  ${(tier.mqdThreshold / 1000).toFixed(0)}K MQD
                </p>
              </div>
              {achieved && (
                <i className="ph-fill ph-check-circle ml-auto text-lg" style={{ color: tier.color }}></i>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
