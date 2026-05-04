'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ENROLL_PLANS,
  SPEND_BRACKETS,
  planForSpend,
  type SpendBracket,
} from '@/config/enroll-plans'
import { EnrollPlanForm, PlanMatchCard } from '@/components/marketing/enroll/EnrollPlanForm'

/**
 * Vertical progressive-disclosure funnel:
 *   Step 1 — Spend selector (always visible)
 *   Step 2 — Plan match card (revealed once a bracket is picked)
 *   Step 3 — Enrollment form (revealed under the match)
 */
export default function EnrollFunnelPage() {
  const [bracket, setBracket] = useState<SpendBracket | null>(null)
  const matchRef = useRef<HTMLDivElement>(null)

  const planKey = bracket ? planForSpend(bracket) : null
  const plan = planKey ? ENROLL_PLANS[planKey] : null

  // Auto-scroll to the match card when the user selects a bracket so the
  // disclosure feels like a single continuous flow instead of a hidden second
  // page.
  useEffect(() => {
    if (!plan) return
    const id = window.setTimeout(() => {
      matchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(id)
  }, [plan])

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="py-14 px-6"
        style={{
          background:
            'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
        }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: '640px' }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 font-semibold"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'var(--color-nav-section-title)',
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className="ph-fill ph-target text-xs" />
            Find your plan in 60 seconds
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '12px',
              lineHeight: 1.15,
            }}
          >
            Get started with Delta for Business
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-16)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
            }}
          >
            Tell us your annual Delta spend and we&apos;ll route you to the right plan — Individual,
            Gold, Platinum, or Diamond. Switching tiers later is always free.
          </p>
        </div>
      </section>

      {/* ── Step 1 · Spend selector ───────────────────────────── */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <StepHeader
            number={1}
            title="What's your annual Delta spend?"
            sub="Pick the closest range — this is the only signal we use to route you."
            done={!!bracket}
          />

          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {SPEND_BRACKETS.map((b) => {
              const active = bracket === b.value
              return (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setBracket(b.value)}
                  aria-pressed={active}
                  className="text-left transition-all"
                  style={{
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-l)',
                    background: 'var(--color-neutral-0)',
                    border: active
                      ? '2px solid var(--color-delta-red-400)'
                      : '1px solid var(--color-neutral-10)',
                    boxShadow: active
                      ? '0 0 0 4px rgba(192,25,51,0.10), var(--shadow-card)'
                      : 'var(--shadow-card)',
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p
                      style={{
                        fontSize: 'var(--type-scale-16)',
                        fontWeight: '700',
                        fontFamily: 'var(--font-display)',
                        color: active ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-700)',
                      }}
                    >
                      {b.label}
                    </p>
                    {active && (
                      <i
                        className="ph-fill ph-check-circle text-lg"
                        style={{ color: 'var(--color-delta-red-400)' }}
                      />
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>
                    {b.sub}
                  </p>
                </button>
              )
            })}
          </div>

          <p
            style={{
              fontSize: 'var(--type-scale-12)',
              color: 'var(--color-neutral-600)',
              marginTop: '14px',
              textAlign: 'center',
            }}
          >
            <i className="ph-fill ph-info text-xs" style={{ color: 'var(--color-neutral-500)', marginRight: '4px' }} />
            We use spend (not traveler count) to route plans. Each plan accommodates a typical
            traveler band, but the spend is what determines tier.
          </p>
        </div>
      </section>

      {/* ── Step 2 · Match card + Step 3 · Form (revealed together) ── */}
      <AnimatePresence>
        {plan && (
          <motion.section
            ref={matchRef}
            key={plan.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="py-12 px-6"
            style={{ background: 'var(--color-neutral-0)' }}
          >
            <div className="mx-auto flex flex-col gap-8" style={{ maxWidth: '640px' }}>
              <div>
                <StepHeader
                  number={2}
                  title="Your plan match"
                  sub="Based on your spend bracket. Want to change it? Tap a different range above."
                />
                <PlanMatchCard plan={plan} />
              </div>

              <div>
                <StepHeader
                  number={3}
                  title={plan.formKind === 'sales' ? 'Talk to sales' : 'Create your account'}
                  sub={
                    plan.formKind === 'sales'
                      ? 'A Delta corporate specialist will reach out within 1 business day.'
                      : 'Free to join · No credit card · Cancel any time.'
                  }
                />
                <EnrollPlanForm plan={plan} />
              </div>

              <div
                className="flex items-start gap-3 rounded-[var(--radius-l)] p-4"
                style={{
                  background: 'var(--color-neutral-5)',
                  border: '1px solid var(--color-neutral-10)',
                }}
              >
                <i
                  className="ph-fill ph-arrows-clockwise text-lg flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-delta-blue-600)' }}
                />
                <p
                  style={{
                    fontSize: 'var(--type-scale-13)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 1.55,
                  }}
                >
                  <strong style={{ color: 'var(--color-delta-blue-700)' }}>Switch plans whenever.</strong>{' '}
                  Move between Individual, Gold, Platinum and Diamond business plans any time after
                  signup — your earnings and traveler list come with you.
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Footer · "Not sure?" quiz ─────────────────────────── */}
      <section className="py-10 px-6 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto" style={{ maxWidth: '560px' }}>
          <p
            style={{
              fontSize: 'var(--type-scale-15)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
            }}
          >
            Not sure of your annual spend?{' '}
            <Link
              href="/tools/program-selector"
              style={{
                color: 'var(--color-nav-section-title)',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                fontWeight: '600',
              }}
            >
              Take the 60-second quiz →
            </Link>{' '}
            or{' '}
            <Link
              href="/tools/plan-calculator"
              style={{
                color: 'var(--color-nav-section-title)',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                fontWeight: '600',
              }}
            >
              run the Plan Calculator
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

// ── Step header ──────────────────────────────────────────────────────────────

function StepHeader({
  number,
  title,
  sub,
  done,
}: {
  number: number
  title: string
  sub: string
  done?: boolean
}) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '36px',
          height: '36px',
          borderRadius: 'var(--radius-full)',
          background: done ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-50)',
          color: done ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-600)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          fontSize: 'var(--type-scale-14)',
        }}
      >
        {done ? <i className="ph-bold ph-check text-base" /> : number}
      </div>
      <div>
        <h2
          style={{
            fontSize: 'var(--type-scale-22)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-700)',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 'var(--type-scale-13)',
            color: 'var(--color-neutral-600)',
            marginTop: '2px',
            lineHeight: 1.55,
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  )
}
