'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── Plan catalog ─────────────────────────────────────────────────────────────

type PlanKey = 'individual' | 'smb-flex' | 'corporate-pro' | 'enterprise-elite'

interface Plan {
  key: PlanKey
  name: string
  badge: string
  travelers: string
  spend: string
  cost: string
  enrollHref: string
  enrollLabel: string
  learnHref: string
  highlights: string[]
  accent: string
}

const PLANS: Plan[] = [
  {
    key: 'individual',
    name: 'Individual',
    badge: 'Solo · Free',
    travelers: '1 (solo)',
    spend: 'Any',
    cost: 'Free',
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
    learnHref: '/programs/individual',
    highlights: ['Hertz Five Star (free)', 'CLEAR Plus ~30% off', 'Industrious $99/mo', 'Personal SkyMiles + Comfort+ promos', 'Delta Business Tool · limited'],
    accent: 'var(--color-segment-individual)',
  },
  {
    key: 'smb-flex',
    name: 'Gold business plan',
    badge: '$5K–$50K spend · Free self-serve',
    travelers: '2 – 49 (typical)',
    spend: '$5K – $50K / yr',
    cost: 'Free',
    enrollHref: '/enroll/gold',
    enrollLabel: 'Get started free',
    learnHref: '/programs/business-traveler',
    highlights: ['Up to 10 miles / $', 'Dual earn', 'Free dashboard', 'Hertz · CLEAR · LinkedIn'],
    accent: '#8f6c32',
  },
  {
    key: 'corporate-pro',
    name: 'Platinum business plan',
    badge: '$50K–$300K spend · Negotiated',
    travelers: '50 – 499 (typical)',
    spend: '$50K – $300K / yr',
    cost: 'Free · negotiated',
    enrollHref: '/enroll/platinum',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/enterprise',
    highlights: ['Negotiated fares', 'Corporate Priority', 'Account manager', 'Concur / TMC'],
    accent: '#6f7f8d',
  },
  {
    key: 'enterprise-elite',
    name: 'Diamond business plan',
    badge: '$300K+ spend · Enterprise',
    travelers: '500+ (typical)',
    spend: '$300K+ / yr',
    cost: 'Free · negotiated',
    enrollHref: '/enroll/diamond',
    enrollLabel: 'Contact sales',
    learnHref: '/programs/large-enterprise',
    highlights: ['Custom pricing', 'Global priority', 'Delta Business Tool', '24/7 support'],
    accent: '#726394',
  },
]

const SIZE_OPTIONS: { value: 'solo' | '1-49' | '50-499' | '500+'; label: string }[] = [
  { value: 'solo', label: 'Just me' },
  { value: '1-49', label: '1–49' },
  { value: '50-499', label: '50–499' },
  { value: '500+', label: '500+' },
]

const SPEND_OPTIONS: { value: 'low' | 'mid' | 'high' | 'top'; label: string }[] = [
  { value: 'low', label: 'Up to $50K' },
  { value: 'mid', label: '$50K–$300K' },
  { value: 'high', label: '$300K+' },
  { value: 'top', label: 'Not sure' },
]

function pickPlan(size: typeof SIZE_OPTIONS[number]['value'] | null, spend: typeof SPEND_OPTIONS[number]['value'] | null): PlanKey | null {
  if (!size && !spend) return null
  if (size === 'solo') return 'individual'
  if (size === '500+' || spend === 'high') return 'enterprise-elite'
  if (size === '50-499' || spend === 'mid') return 'corporate-pro'
  if (size === '1-49' || spend === 'low') return 'smb-flex'
  return null
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlanComparisonPage() {
  const [size, setSize] = useState<typeof SIZE_OPTIONS[number]['value'] | null>(null)
  const [spend, setSpend] = useState<typeof SPEND_OPTIONS[number]['value'] | null>(null)
  const recommended = pickPlan(size, spend)

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
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
            <i className="ph-fill ph-scales text-xs"></i>
            Plan Comparison Tool
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
            Side-by-side, with your match highlighted
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Pick your size and Delta spend below — we&apos;ll highlight the plan that fits.
            Switching tiers later is always free.
          </p>
        </div>
      </section>

      {/* ── Inputs strip ───────────────────────────────────── */}
      <section className="py-10" style={{ background: 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="grid gap-6 md:grid-cols-2">
            <FilterGroup
              label="Company size"
              options={SIZE_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
              value={size}
              onChange={(v) => setSize(v as typeof size)}
            />
            <FilterGroup
              label="Annual Delta spend"
              options={SPEND_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
              value={spend}
              onChange={(v) => setSpend(v as typeof spend)}
            />
          </div>
          {recommended && (
            <p
              className="mt-6 text-center"
              style={{
                fontSize: 'var(--type-scale-14)',
                color: 'var(--color-delta-blue-700)',
                fontWeight: '600',
              }}
            >
              <i className="ph-fill ph-target" style={{ color: 'var(--color-delta-red-400)', marginRight: '6px' }} />
              Best match: <strong style={{ color: 'var(--color-delta-red-400)' }}>{PLANS.find((p) => p.key === recommended)?.name}</strong>
            </p>
          )}
        </div>
      </section>

      {/* ── Plan cards (highlighted match) ─────────────────── */}
      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {PLANS.map((p) => {
              const isMatch = recommended === p.key
              return (
                <div
                  key={p.key}
                  className="flex flex-col"
                  style={{
                    background: isMatch ? 'var(--color-neutral-0)' : 'var(--color-neutral-0)',
                    border: isMatch ? `2px solid ${p.accent}` : '1px solid var(--color-neutral-10)',
                    borderRadius: 'var(--radius-l)',
                    overflow: 'hidden',
                    boxShadow: isMatch ? '0 12px 40px rgba(0,45,89,0.12)' : 'var(--shadow-card)',
                    transform: isMatch ? 'translateY(-4px)' : 'none',
                    transition: 'all 200ms ease',
                  }}
                >
                  <div style={{ height: '4px', background: p.accent }} />
                  <div className="p-6 flex-1 flex flex-col">
                    {isMatch && (
                      <span
                        className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 rounded-full"
                        style={{
                          background: 'var(--color-delta-red-50)',
                          color: 'var(--color-delta-red-400)',
                          fontSize: 'var(--type-scale-11)',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        <i className="ph-fill ph-star text-xs"></i>
                        Recommended for you
                      </span>
                    )}
                    <p style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.07em', color: p.accent, marginBottom: '4px' }}>
                      {p.badge}
                    </p>
                    <h3 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '14px' }}>
                      {p.name}
                    </h3>
                    <dl style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                      <Stat icon="ph-users" label="Travelers" value={p.travelers} />
                      <Stat icon="ph-currency-dollar" label="Spend" value={p.spend} />
                      <Stat icon="ph-tag" label="Cost" value={p.cost} />
                    </dl>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px', flex: 1 }}>
                      {p.highlights.map((h) => (
                        <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <i className="ph-bold ph-check text-xs flex-shrink-0 mt-1" style={{ color: 'var(--color-success)' }} />
                          <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', lineHeight: 1.5 }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-auto">
                      <Link
                        href={p.enrollHref}
                        className="flex items-center justify-center gap-2 font-semibold"
                        style={{
                          height: '40px',
                          borderRadius: 'var(--radius-full)',
                          background: isMatch ? 'var(--color-delta-red-400)' : 'var(--color-neutral-5)',
                          color: isMatch ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
                          border: isMatch ? 'none' : '1px solid var(--color-neutral-10)',
                          fontSize: 'var(--type-scale-14)',
                          boxShadow: isMatch ? 'var(--shadow-button)' : 'none',
                          textDecoration: 'none',
                        }}
                      >
                        {p.enrollLabel}
                        <i className="ph-bold ph-arrow-right text-xs"></i>
                      </Link>
                      <Link
                        href={p.learnHref}
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          color: 'var(--color-delta-blue-600)',
                          textDecoration: 'underline',
                          textAlign: 'center',
                          fontWeight: '600',
                        }}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Detailed comparison link ──────────────────────── */}
      <section className="py-14" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2
            style={{
              fontSize: 'var(--type-scale-24)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '8px',
            }}
          >
            Want every benefit row?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            See the full feature-by-feature table — eligibility, earning, benefits, service.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/programs/compare"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-blue-700)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
                textDecoration: 'none',
              }}
            >
              Full comparison table
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/tools/plan-calculator"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-neutral-0)',
                color: 'var(--color-delta-blue-700)',
                border: '1px solid var(--color-neutral-10)',
                fontSize: 'var(--type-scale-15)',
                textDecoration: 'none',
              }}
            >
              Run the plan calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Pick a plan, switch whenever
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
            All plans are free to enroll. Tier moves take a click — your earnings travel with you.
          </p>
          <Link
            href="/enroll/individual"
            className="inline-flex items-center gap-2 font-semibold"
            style={{
              height: '48px',
              padding: '0 28px',
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
        </div>
      </section>
    </main>
  )
}

// ── Reusable subcomponents ───────────────────────────────────────────────────

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string }[]
  value: string | null
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-600)', marginBottom: '10px' }}>
        {label}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '8px',
        }}
      >
        {options.map((o) => {
          const active = value === o.value
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              aria-pressed={active}
              style={{
                height: '44px',
                borderRadius: 'var(--radius-full)',
                background: active ? 'var(--color-delta-red-400)' : 'var(--color-neutral-0)',
                color: active ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
                border: active ? '2px solid var(--color-delta-red-400)' : '1px solid var(--color-neutral-10)',
                fontSize: 'var(--type-scale-14)',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: active ? 'var(--shadow-button)' : 'none',
                transition: 'all 150ms ease',
              }}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)' }}>
      <i className={`ph ${icon} text-sm`} style={{ color: 'var(--color-neutral-500)', flexShrink: 0 }} />
      <span style={{ color: 'var(--color-neutral-600)', minWidth: '64px' }}>{label}</span>
      <span style={{ color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>{value}</span>
    </div>
  )
}
