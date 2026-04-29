'use client'

import Link from 'next/link'
import { ROICalculator } from '@/components/tools/ROICalculator'
import { useCalculatorStore } from '@/stores/calculator'

// ── Plan rules ───────────────────────────────────────────────────────────────

type PlanKey = 'individual' | 'smb-flex' | 'corporate-pro' | 'enterprise-elite'

interface PlanInfo {
  key: PlanKey
  name: string
  badge: string
  enrollHref: string
  enrollLabel: string
  learnHref: string
  benefits: string[]
  accent: string
}

const PLAN_CATALOG: Record<PlanKey, PlanInfo> = {
  individual: {
    key: 'individual',
    name: 'Individual',
    badge: 'Solo · Free · No employer needed',
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
    learnHref: '/programs/individual',
    benefits: [
      'Hertz Five Star status · free',
      'CLEAR Plus discount (~30% off $189/yr)',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount + targeted bonus offers',
      'Personal SkyMiles + Comfort+ promotions + occasional lounge passes',
    ],
    accent: 'var(--color-segment-individual)',
  },
  'smb-flex': {
    key: 'smb-flex',
    name: 'SMB Flex',
    badge: '1–49 travelers OR up to $50K spend · Free',
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
    learnHref: '/programs/business-traveler',
    benefits: [
      'Up to 10 company miles per dollar',
      'Simultaneous dual earn (company + personal)',
      'Free management dashboard',
      'Hertz · CLEAR · LinkedIn Premium perks',
      'Self-serve enrollment in 90 seconds',
    ],
    accent: 'var(--color-segment-smb)',
  },
  'corporate-pro': {
    key: 'corporate-pro',
    name: 'Corporate Pro',
    badge: '50–499 travelers OR $50K–$300K spend',
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/enterprise',
    benefits: [
      'Negotiated dynamic fare discounts',
      'Full Corporate Priority benefits suite',
      'Dedicated Delta account manager',
      'Concur / TMC integration',
      'Delta Business Tool basic access',
    ],
    accent: 'var(--color-segment-mid)',
  },
  'enterprise-elite': {
    key: 'enterprise-elite',
    name: 'Enterprise Elite',
    badge: '500+ travelers OR $300K+ spend',
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/large-enterprise',
    benefits: [
      'Custom pricing + global Corporate Priority',
      'Partner airlines: AF, KLM, LATAM, Virgin Atlantic',
      'Unused ticket transfer',
      '24/7 Corporate Solutions support',
      'Full Delta Business Tool platform access',
    ],
    accent: 'var(--color-segment-enterprise)',
  },
}

function recommendPlan(travelers: number, annualSpend: number): PlanKey {
  if (travelers <= 1 && annualSpend < 5000) return 'individual'
  if (travelers >= 500 || annualSpend >= 300000) return 'enterprise-elite'
  if (travelers >= 50 || annualSpend >= 50000) return 'corporate-pro'
  return 'smb-flex'
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlanCalculatorPage() {
  const { inputs, outputs } = useCalculatorStore()
  const recommendedKey = recommendPlan(inputs.travelers, outputs.annualSpend)
  const plan = PLAN_CATALOG[recommendedKey]

  const fmt$ = (v: number) => (v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v}`)

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}
      >
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
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
            <i className="ph-fill ph-calculator text-xs"></i>
            Plan Calculator
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '12px',
            }}
          >
            Pick the right Delta plan in seconds
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Drag the sliders to match your travel profile. We&apos;ll estimate miles, eCredits and
            annual savings — then recommend the plan that fits your size and spend.
          </p>
        </div>
      </section>

      {/* ── Calculator (existing component) ─────────────────── */}
      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <ROICalculator />
        </div>
      </section>

      {/* ── Recommended plan ────────────────────────────────── */}
      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <p
              style={{
                fontSize: 'var(--type-scale-12)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-delta-red-400)',
                marginBottom: '6px',
              }}
            >
              Based on your inputs
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-700)',
              }}
            >
              Your match: <span style={{ color: plan.accent }}>{plan.name}</span>
            </h2>
            <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginTop: '8px' }}>
              {inputs.travelers} traveler{inputs.travelers === 1 ? '' : 's'} · {fmt$(outputs.annualSpend)}/yr Delta spend
            </p>
          </div>

          <div
            className="rounded-[var(--radius-l)]"
            style={{
              background: 'var(--color-neutral-0)',
              border: `2px solid ${plan.accent}`,
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: '6px', background: plan.accent }} />

            <div className="p-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
              {/* Left: name + benefits */}
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 font-semibold"
                  style={{
                    background: 'var(--color-delta-blue-50)',
                    color: 'var(--color-delta-blue-600)',
                    fontSize: 'var(--type-scale-12)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {plan.badge}
                </span>
                <h3
                  style={{
                    fontSize: 'var(--type-scale-28)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: 'var(--color-delta-blue-700)',
                    marginBottom: '16px',
                  }}
                >
                  {plan.name}
                </h3>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {plan.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="ph-fill ph-check-circle text-base flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                      <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-700)', lineHeight: 1.5 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTAs */}
              <div className="flex flex-col gap-3 md:items-stretch">
                <Link
                  href={plan.enrollHref}
                  className="inline-flex items-center justify-center gap-2 font-semibold"
                  style={{
                    height: '52px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-delta-red-400)',
                    color: 'var(--color-neutral-0)',
                    fontSize: 'var(--type-scale-16)',
                    boxShadow: 'var(--shadow-button)',
                    textDecoration: 'none',
                  }}
                >
                  {plan.enrollLabel}
                  <i className="ph-bold ph-arrow-right text-sm"></i>
                </Link>
                <Link
                  href={plan.learnHref}
                  className="inline-flex items-center justify-center gap-2 font-semibold"
                  style={{
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-neutral-5)',
                    color: 'var(--color-delta-blue-700)',
                    border: '1px solid var(--color-neutral-10)',
                    fontSize: 'var(--type-scale-15)',
                    textDecoration: 'none',
                  }}
                >
                  Plan details
                </Link>
                <Link
                  href="/tools/plan-comparison"
                  style={{
                    fontSize: 'var(--type-scale-13)',
                    color: 'var(--color-delta-blue-600)',
                    textDecoration: 'underline',
                    textAlign: 'center',
                    fontWeight: '600',
                  }}
                >
                  Compare with all plans →
                </Link>
              </div>
            </div>
          </div>

          {/* Other plans hint */}
          <div
            className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-l)] p-5"
            style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
          >
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-700)', lineHeight: 1.55 }}>
              Want to explore a different plan?{' '}
              <strong style={{ color: 'var(--color-delta-blue-700)' }}>You can switch tiers any time after enrolling.</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PLAN_CATALOG) as PlanKey[])
                .filter((k) => k !== recommendedKey)
                .map((k) => {
                  const p = PLAN_CATALOG[k]
                  return (
                    <Link
                      key={k}
                      href={p.learnHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--color-neutral-0)',
                        color: 'var(--color-delta-blue-700)',
                        border: `1px solid ${p.accent}`,
                        fontSize: 'var(--type-scale-13)',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      {p.name}
                      <i className="ph-bold ph-arrow-right text-xs" style={{ color: p.accent }}></i>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA strip ─────────────────────────────────── */}
      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2
            style={{
              fontSize: 'var(--type-scale-24)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '12px',
            }}
          >
            Ready to enroll?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
            Open a Delta for Business account in 90 seconds — switch plans whenever.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/enroll/individual"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
                textDecoration: 'none',
              }}
            >
              Get started free
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/programs/compare"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.12)',
                color: 'var(--color-neutral-0)',
                border: '1px solid rgba(255,255,255,0.22)',
                fontSize: 'var(--type-scale-15)',
                textDecoration: 'none',
              }}
            >
              See full plan comparison
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
