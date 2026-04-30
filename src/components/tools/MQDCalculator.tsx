'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { medallionTiers, medallionOrder } from '@/config/medallion'
import { motion, AnimatePresence } from 'framer-motion'

const CARD_HEADSTART: Record<string, number> = {
  none: 0,
  gold: 0,
  platinum: 2500,
  reserve: 2500,
}

export function MQDCalculator() {
  const [annualSpend, setAnnualSpend] = useState(8000)
  const [cardHeadstartKey, setCardHeadstartKey] = useState<keyof typeof CARD_HEADSTART>('none')
  const [joinModalOpen, setJoinModalOpen] = useState(false)

  // Close modal on Escape
  useEffect(() => {
    if (!joinModalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setJoinModalOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [joinModalOpen])

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

      {/* ── CTAs ─────────────────────────────────────────────── */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => setJoinModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 font-semibold transition-opacity hover:opacity-95"
          style={{
            height: '52px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-delta-red-400)',
            color: 'var(--color-neutral-0)',
            fontSize: 'var(--type-scale-15)',
            boxShadow: 'var(--shadow-button)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <i className="ph-bold ph-medal text-base" />
          Join the program
        </button>
        <Link
          href="/medallion"
          className="flex-1 inline-flex items-center justify-center gap-2 font-semibold"
          style={{
            height: '52px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-neutral-5)',
            color: 'var(--color-delta-blue-700)',
            border: '1px solid var(--color-neutral-10)',
            fontSize: 'var(--type-scale-15)',
            textDecoration: 'none',
          }}
        >
          <i className="ph-bold ph-arrow-left text-sm" />
          Back to Medallion page
        </Link>
      </div>

      {/* ── Join modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {joinModalOpen && (
          <JoinProgramModal onClose={() => setJoinModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Join the program — overlay modal
// Two paths: personal (sign in to SkyMiles) and employee (talk to travel mgr)
// ─────────────────────────────────────────────────────────────────────────────

function JoinProgramModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal)' as unknown as number,
        background: 'rgba(0, 23, 45, 0.62)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--color-neutral-0)',
          borderRadius: 'var(--radius-l)',
          maxWidth: '560px',
          width: '100%',
          boxShadow: 'var(--shadow-modal)',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between"
          style={{
            background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
            padding: '24px 28px',
            color: 'var(--color-neutral-0)',
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.14)',
              }}
            >
              <i className="ph-fill ph-medal text-lg" style={{ color: 'var(--color-nav-section-title)' }} />
            </div>
            <div>
              <p
                style={{
                  fontSize: 'var(--type-scale-11)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-nav-section-title)',
                  marginBottom: '4px',
                }}
              >
                Join the Medallion program
              </p>
              <h2
                id="join-modal-title"
                style={{
                  fontSize: 'var(--type-scale-22)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  lineHeight: 1.2,
                }}
              >
                Two ways to activate your status
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.14)',
              color: 'var(--color-neutral-0)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <i className="ph-bold ph-x" />
          </button>
        </div>

        {/* Body — two paths */}
        <div style={{ overflowY: 'auto', padding: '24px 28px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Personal accounts */}
            <div
              className="rounded-[var(--radius-l)]"
              style={{
                background: 'var(--color-neutral-5)',
                border: '1px solid var(--color-neutral-10)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-delta-blue-50)',
                  }}
                >
                  <i className="ph-fill ph-user text-sm" style={{ color: 'var(--color-delta-blue-600)' }} />
                </div>
                <p
                  style={{
                    fontSize: 'var(--type-scale-11)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-delta-blue-600)',
                  }}
                >
                  Personal accounts
                </p>
              </div>
              <p
                style={{
                  fontSize: 'var(--type-scale-15)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-700)',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.3,
                }}
              >
                Sign in and request your Medallion status
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.55 }}>
                Log in to your Delta SkyMiles account and request your Medallion tier directly — your MQDs and headstart credits attach automatically.
              </p>
              <a
                href="https://www.delta.com/profile/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold mt-auto"
                style={{
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-13)',
                  boxShadow: 'var(--shadow-button)',
                  textDecoration: 'none',
                }}
              >
                Sign in to SkyMiles
                <i className="ph-bold ph-arrow-up-right text-xs" />
              </a>
            </div>

            {/* Employee accounts */}
            <div
              className="rounded-[var(--radius-l)]"
              style={{
                background: 'var(--color-neutral-5)',
                border: '1px solid var(--color-neutral-10)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-delta-red-50)',
                  }}
                >
                  <i className="ph-fill ph-buildings text-sm" style={{ color: 'var(--color-delta-red-400)' }} />
                </div>
                <p
                  style={{
                    fontSize: 'var(--type-scale-11)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-delta-red-400)',
                  }}
                >
                  Employee accounts
                </p>
              </div>
              <p
                style={{
                  fontSize: 'var(--type-scale-15)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-700)',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.3,
                }}
              >
                Talk to your company travel manager
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.55 }}>
                Status changes for company-managed travelers go through your firm&apos;s travel manager — they coordinate the tier upgrade with your Delta account team.
              </p>
              <Link
                href="/programs/compare"
                className="inline-flex items-center justify-center gap-2 font-semibold mt-auto"
                style={{
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-neutral-0)',
                  color: 'var(--color-delta-blue-700)',
                  border: '1px solid var(--color-neutral-10)',
                  fontSize: 'var(--type-scale-13)',
                  textDecoration: 'none',
                }}
                onClick={onClose}
              >
                See corporate plans
                <i className="ph-bold ph-arrow-right text-xs" />
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <p
            style={{
              fontSize: 'var(--type-scale-12)',
              color: 'var(--color-neutral-600)',
              marginTop: '20px',
              lineHeight: 1.55,
              textAlign: 'center',
            }}
          >
            Medallion is awarded annually based on MQDs earned in the calendar year. Need help?{' '}
            <Link href="/resources/faq" style={{ color: 'var(--color-delta-blue-600)', fontWeight: '600', textDecoration: 'underline' }} onClick={onClose}>
              Read the Medallion FAQ
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
