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
  perks: string[]
  mqdNote: string
  eligibility: string
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
    perks: [
      'Hertz Five Star (free)',
      'CLEAR Plus discount (~30% off $189/yr)',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount + targeted bonus offers',
      'Personal SkyMiles + Comfort+ promotions',
      'Delta Business Tool — limited access (view-only)',
    ],
    mqdNote:
      'You earn standard MQDs on every Delta flight, fully credited to your personal SkyMiles account — Medallion progression unaffected.',
    eligibility: '1 traveler · Any annual Delta spend',
    accent: 'var(--color-segment-individual)',
  },
  'smb-flex': {
    key: 'smb-flex',
    name: 'Gold business plan',
    badge: '1–49 travelers OR up to $50K spend · Free',
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
    learnHref: '/programs/business-traveler',
    perks: [
      'Up to 10 company miles per dollar',
      'Simultaneous dual earn (company + personal)',
      'Free management dashboard',
      'Hertz · CLEAR · LinkedIn Premium perks',
      'Self-serve enrollment in 90 seconds',
    ],
    mqdNote:
      'Personal MQDs are unaffected — travelers keep full Medallion progression. Company miles accrue separately and convert to eCredits.',
    eligibility: '1–49 travelers · Up to $50K annual Delta spend',
    accent: 'var(--color-segment-smb)',
  },
  'corporate-pro': {
    key: 'corporate-pro',
    name: 'Platinum business plan',
    badge: '50–499 travelers OR $50K–$300K spend',
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/enterprise',
    perks: [
      'Negotiated dynamic fare discounts',
      'Full Corporate Priority benefits suite',
      'Dedicated Delta account manager',
      'Concur / TMC integration',
      'Delta Business Tool basic access',
    ],
    mqdNote:
      'Personal MQDs remain personal. Negotiated agreements may include 6-month Medallion status matching at onboarding for designated travelers.',
    eligibility: '50–499 travelers · $50K–$300K annual Delta spend',
    accent: 'var(--color-segment-mid)',
  },
  'enterprise-elite': {
    key: 'enterprise-elite',
    name: 'Diamond business plan',
    badge: '500+ travelers OR $300K+ spend',
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/large-enterprise',
    perks: [
      'Custom pricing + global Corporate Priority',
      'Partner airlines: AF, KLM, LATAM, Virgin Atlantic',
      'Unused ticket transfer',
      '24/7 Corporate Solutions support',
      'Full Delta Business Tool platform access',
    ],
    mqdNote:
      'Personal MQDs unaffected. Eligible for Business Medallion — pool MQDs across employees toward Business Gold ($10K), Platinum ($30K) or Diamond ($50K) tiers.',
    eligibility: '500+ travelers · $300K+ annual Delta spend',
    accent: 'var(--color-segment-enterprise)',
  },
}

function recommendPlan(travelers: number, annualSpend: number): PlanKey {
  if (travelers <= 1 && annualSpend < 5000) return 'individual'
  if (travelers >= 500 || annualSpend >= 300000) return 'enterprise-elite'
  if (travelers >= 50 || annualSpend >= 50000) return 'corporate-pro'
  return 'smb-flex'
}

// ── Live plan-match panel (injected into ROICalculator's right column) ──────

function PlanMatchPanel() {
  const { inputs, outputs } = useCalculatorStore()
  const recommendedKey = recommendPlan(inputs.travelers, outputs.annualSpend)
  const plan = PLAN_CATALOG[recommendedKey]

  return (
    <div
      className="rounded-[var(--radius-l)] overflow-hidden"
      style={{
        background: 'var(--color-neutral-0)',
        border: `2px solid ${plan.accent}`,
        boxShadow: '0 8px 28px rgba(0,45,89,0.10)',
      }}
    >
      {/* Accent bar */}
      <div style={{ height: '4px', background: plan.accent }} />

      <div style={{ padding: '20px' }}>
        {/* Eyebrow + name */}
        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-delta-red-400)',
            marginBottom: '6px',
          }}
        >
          Your plan match
        </p>
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <h3
            style={{
              fontSize: 'var(--type-scale-22)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: plan.accent,
              lineHeight: 1.1,
            }}
          >
            {plan.name}
          </h3>
          <Link
            href={plan.learnHref}
            style={{
              fontSize: 'var(--type-scale-12)',
              color: 'var(--color-delta-blue-600)',
              fontWeight: '600',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            Plan details →
          </Link>
        </div>

        {/* Eligibility line */}
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            color: 'var(--color-neutral-600)',
            marginBottom: '14px',
          }}
        >
          <i className="ph-fill ph-target text-xs" style={{ color: plan.accent, marginRight: '6px' }} />
          {plan.eligibility}
        </p>

        {/* Perks */}
        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: 'var(--color-neutral-500)',
            marginBottom: '8px',
          }}
        >
          What you get
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          {plan.perks.map((p) => (
            <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <i
                className="ph-bold ph-check text-xs flex-shrink-0 mt-1"
                style={{ color: 'var(--color-success)' }}
              />
              <span
                style={{
                  fontSize: 'var(--type-scale-13)',
                  color: 'var(--color-delta-blue-700)',
                  lineHeight: 1.5,
                }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>

        {/* MQD condition */}
        <div
          style={{
            background: 'var(--color-delta-blue-50)',
            border: '1px solid var(--color-delta-blue-300)',
            borderRadius: 'var(--radius-l)',
            padding: '12px 14px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
          }}
        >
          <i className="ph-fill ph-medal text-base flex-shrink-0" style={{ color: 'var(--color-delta-blue-600)', marginTop: '2px' }} />
          <div>
            <p
              style={{
                fontSize: 'var(--type-scale-11)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: 'var(--color-delta-blue-600)',
                marginBottom: '4px',
              }}
            >
              MQD conditions
            </p>
            <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-delta-blue-700)', lineHeight: 1.5 }}>
              {plan.mqdNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Live CTA wrapper that mirrors the matched plan ──────────────────────────

function useMatchedCta() {
  const { inputs, outputs } = useCalculatorStore()
  const recommendedKey = recommendPlan(inputs.travelers, outputs.annualSpend)
  return PLAN_CATALOG[recommendedKey]
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlanCalculatorPage() {
  const matched = useMatchedCta()

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
            annual savings — and show the plan you&apos;d join with its perks and MQD conditions, all live.
          </p>
        </div>
      </section>

      {/* ── Calculator with live plan-match panel injected ──── */}
      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <ROICalculator
            outputExtras={<PlanMatchPanel />}
            ctaHref={matched.enrollHref}
            ctaLabel={matched.enrollLabel}
          />

          {/* Other plans hint */}
          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-l)] p-5"
            style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
          >
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-700)', lineHeight: 1.55 }}>
              Want to explore a different plan?{' '}
              <strong style={{ color: 'var(--color-delta-blue-700)' }}>You can switch tiers any time after enrolling.</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PLAN_CATALOG) as PlanKey[])
                .filter((k) => k !== matched.key)
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
                        background: 'var(--color-neutral-5)',
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
              href={matched.enrollHref}
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
              {matched.enrollLabel}
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
