'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ProgramFinderProps {
  activeSegment?: string
}

// ── Plan data ─────────────────────────────────────────────────────────────────

const plans = [
  {
    id: 'business-traveler',
    name: 'Gold business plan',
    nameColor: '#8f6c32',
    subtitle: '$5K–$50K annual Delta spend · Free enroll\nTypically accommodates 2 to 49 travelers\nSelf-serve · Enroll in 60 seconds via SkyMiles login',
    companyLabel: 'Company gets',
    companyBenefits: [
      'Business rewards pool',
      'Threshold-based discounts',
      'Basic analytics',
      'Flexibility credits',
    ],
    employeeLabel: 'Employee gets',
    employeeBenefits: [
      'Link bonus miles',
      'Faster early status progress',
      'Better Comfort+ access',
      'Occasional lounge/day passes',
    ],
    included: [
      'Hertz Five Star status (free)',
      'CLEAR Plus discount (~30% off $189/yr)',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount',
      'Targeted bonus mile offers',
      'Personal SkyMiles earned normally',
    ],
    excluded: [
      'No Corporate Priority benefits',
      'No Medallion acceleration',
    ],
    ctaKnow: '/programs/business-traveler',
    ctaEnroll: '/enroll/gold',
    ctaEnrollLabel: 'Get in',
  },
  {
    id: 'enterprise',
    name: 'Platinum business plan',
    nameColor: '#6f7f8d',
    subtitle: '$50K–$300K annual Delta spend\nTypically accommodates 50 to 499 travelers\nNegotiated agreement · Managed travel tool\nAccount manager + Corporate Priority',
    companyLabel: 'Company gets',
    companyBenefits: [
      'Dynamic fare discounts',
      'Seat access pools',
      'Advanced analytics',
      'Reduced change fees',
    ],
    employeeLabel: 'Employee gets',
    employeeBenefits: [
      'Stronger upgrade priority',
      'Better seat outcomes',
      'Faster Medallion progression',
      'Premium perks unlock',
    ],
    included: [
      'Corporate status matching (6 months)',
      'Account manager assigned',
      'Up to 99 free SkyMiles Gold Business Cards',
      'Concur / TMC integration',
      'Employees still earn personal SkyMiles + MQDs',
      'Corporate Priority: preferred seating, priority boarding, re-booking & service recovery',
    ],
    excluded: [],
    ctaKnow: '/programs/enterprise',
    ctaEnroll: '/enroll/platinum',
    ctaEnrollLabel: 'Contact Sales',
  },
  {
    id: 'large-enterprise',
    name: 'Diamond business plan',
    nameColor: '#726394',
    subtitle: '$300K+ annual Delta spend\nTypically accommodates 500+ travelers\nFull managed travel · Negotiated agreement\nFull Corporate Priority suite globally',
    companyLabel: 'Company gets',
    companyBenefits: [
      'Custom pricing',
      'Seat inventory control',
      'Full reporting + forecasting',
      'Dedicated support',
      'Amex integration',
    ],
    employeeLabel: 'Employee gets',
    employeeBenefits: [
      'Highest upgrade priority boosts',
      'Premium seat consistency',
      'Lounge access pathways',
      'Priority rebooking + support',
    ],
    included: [
      'All Platinum business plan benefits, plus:',
      'Full Corporate Priority suite globally',
      'Global partner airlines (AF, KLM, LATAM, Virgin Atlantic)',
      'Unused ticket transfer program',
      'Employees still earn personal SkyMiles + MQDs',
    ],
    excluded: [],
    ctaKnow: '/programs/large-enterprise',
    ctaEnroll: '/enroll/diamond',
    ctaEnrollLabel: 'Contact Sales',
  },
]

type Plan = (typeof plans)[number]

// ── Plan card (collapsible perks) ────────────────────────────────────────────

function PlanCard({ plan, active }: { plan: Plan; active: boolean }) {
  const [showAll, setShowAll] = useState(false)
  const hiddenCount =
    plan.employeeBenefits.length + plan.included.length + plan.excluded.length

  return (
    <div
      className="flex flex-col rounded-[var(--radius-l)]"
      style={{
        background: 'var(--color-neutral-0)',
        border: `1px solid ${active ? 'var(--color-delta-red-400)' : 'var(--color-neutral-5)'}`,
        boxShadow: 'var(--shadow-card)',
        padding: '32px',
        flex: '1 0 340px',
        minWidth: '340px',
        gap: '24px',
      }}
    >
      {/* Header */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        <p
          style={{
            fontSize: 'var(--type-scale-28)',
            lineHeight: 'var(--line-height-heading-m)',
            letterSpacing: 'var(--letter-spacing-heading-xxs)',
            color: plan.nameColor,
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
          }}
        >
          {plan.name}
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-neutral-10)', margin: 0 }} />
        <div
          style={{
            fontSize: 'var(--type-scale-18)',
            lineHeight: 'var(--line-height-body-medium)',
            letterSpacing: 'var(--letter-spacing-marketing-small)',
            color: 'var(--color-delta-blue-500)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            whiteSpace: 'pre-line',
          }}
        >
          {plan.subtitle}
        </div>
      </div>

      {/* Benefits — always-visible "Company gets" */}
      <div className="flex flex-col flex-1" style={{ gap: '20px' }}>
        <div className="flex flex-col" style={{ gap: '10px' }}>
          <p style={{
            fontSize: 'var(--type-scale-12)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-neutral-600)',
            fontFamily: 'var(--font-display)',
          }}>
            {plan.companyLabel}
          </p>
          {plan.companyBenefits.map((item) => (
            <p key={item} style={{
              color: 'var(--color-delta-blue-500)',
              fontSize: 'var(--type-scale-15)',
              lineHeight: 'var(--line-height-body-medium)',
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <i className="ph-bold ph-check text-sm flex-shrink-0" style={{ color: 'var(--color-success)' }} />
              {item}
            </p>
          ))}
        </div>

        {/* Collapsible: Employee + included + excluded */}
        {showAll && (
          <>
            {/* Employee gets */}
            <div className="flex flex-col" style={{ gap: '10px' }}>
              <p style={{
                fontSize: 'var(--type-scale-12)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-neutral-600)',
                fontFamily: 'var(--font-display)',
              }}>
                {plan.employeeLabel}
              </p>
              {plan.employeeBenefits.map((item) => (
                <p key={item} style={{
                  color: 'var(--color-delta-blue-500)',
                  fontSize: 'var(--type-scale-15)',
                  lineHeight: 'var(--line-height-body-medium)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <i className="ph-bold ph-check text-sm flex-shrink-0" style={{ color: 'var(--color-success)' }} />
                  {item}
                </p>
              ))}
            </div>

            {/* Also included */}
            {plan.included.length > 0 && (
              <div className="flex flex-col" style={{ gap: '10px' }}>
                <p style={{
                  fontSize: 'var(--type-scale-12)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-neutral-600)',
                  fontFamily: 'var(--font-display)',
                }}>
                  Also included
                </p>
                {plan.included.map((item) => (
                  <p key={item} style={{
                    color: 'var(--color-delta-blue-500)',
                    fontSize: 'var(--type-scale-15)',
                    lineHeight: 'var(--line-height-body-medium)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '500',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    <i className="ph-bold ph-check text-sm flex-shrink-0" style={{ color: 'var(--color-success)' }} />
                    <span>{item}</span>
                    {item.startsWith('Hertz') && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src="/assets/images/logos/logo-hetz-png.png" alt="Hertz" style={{ height: '14px', width: 'auto', opacity: 0.8, flexShrink: 0 }} />
                    )}
                  </p>
                ))}
              </div>
            )}

            {/* Not included */}
            {plan.excluded.length > 0 && (
              <div className="flex flex-col" style={{ gap: '10px' }}>
                {plan.excluded.map((item) => (
                  <p key={item} style={{
                    color: 'var(--color-neutral-500)',
                    fontSize: 'var(--type-scale-15)',
                    lineHeight: 'var(--line-height-body-medium)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '500',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    <i className="ph-bold ph-x text-sm flex-shrink-0" style={{ color: 'var(--color-neutral-400)' }} />
                    {item}
                  </p>
                ))}
              </div>
            )}
          </>
        )}

        {/* Toggle */}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="self-start inline-flex items-center gap-2 transition-colors"
            style={{
              fontSize: 'var(--type-scale-13)',
              fontWeight: '700',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-delta-blue-700)',
              background: 'transparent',
              border: 'none',
              padding: '4px 0',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            {showAll ? 'Hide perks' : `Show all perks (${hiddenCount} more)`}
            <i
              className={`ph-bold ph-caret-down text-xs transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {/* CTAs — always pinned at the bottom */}
      <div className="flex items-end justify-between" style={{ paddingTop: '16px', marginTop: 'auto' }}>
        <Link
          href={plan.ctaKnow}
          style={{
            fontSize: 'var(--type-scale-16)',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            letterSpacing: 'var(--letter-spacing-marketing-x-large)',
            color: 'var(--color-delta-blue-700)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--color-delta-blue-700)',
            textUnderlineOffset: '3px',
          }}
        >
          Know more
        </Link>
        <Link
          href={plan.ctaEnroll}
          style={{
            fontSize: 'var(--type-scale-16)',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            letterSpacing: 'var(--letter-spacing-marketing-x-large)',
            color: 'var(--color-delta-red-400)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--color-delta-red-400)',
            textUnderlineOffset: '3px',
          }}
        >
          {plan.ctaEnrollLabel}
        </Link>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ProgramFinder({ activeSegment }: ProgramFinderProps) {
  return (
    <section
      id="programs"
      className="flex flex-col items-center w-full"
      style={{
        background: 'var(--color-neutral-2)',
        padding: '0 32px 56px',
        gap: '48px',
      }}
    >
      {/* Heading */}
      <h2
        className="text-center w-full"
        style={{
          fontSize: 'clamp(2rem, 5vw, var(--type-scale-64))',
          lineHeight: 'var(--line-height-heading-xxxl)',
          letterSpacing: 'var(--letter-spacing-heading-xxxl)',
          color: 'var(--color-delta-blue-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          paddingTop: '48px',
        }}
      >
        Delta for Business Plans
      </h2>

      {/* Cards + footer */}
      <div
        className="flex flex-col items-center w-full"
        style={{ maxWidth: '1200px', gap: '24px' }}
      >
        {/* 3 plan cards */}
        <div className="flex flex-wrap items-stretch w-full" style={{ gap: '32px' }}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} active={activeSegment === plan.id} />
          ))}
        </div>

        {/* Compatibility note */}
        <p
          className="text-center"
          style={{
            fontSize: 'var(--type-scale-16)',
            lineHeight: 'var(--line-height-body-medium)',
            letterSpacing: 'var(--letter-spacing-marketing-small)',
            color: 'var(--color-delta-blue-500)',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
            maxWidth: '480px',
          }}
        >
          All these plans are compatible with Delta-Amex cards for business and personal use.
        </p>

        {/* Bottom CTAs */}
        <div className="flex items-center justify-center w-full" style={{ padding: '32px 0' }}>
          <div className="flex items-center" style={{ gap: '8px', width: '808px', maxWidth: '100%' }}>
            <Link
              href="/tools/program-selector"
              className="flex items-center justify-center font-semibold"
              style={{
                flex: '1 0 0',
                maxWidth: '400px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-neutral-50)',
                color: 'var(--color-delta-blue-700)',
                fontSize: 'var(--type-scale-16)',
                letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                boxShadow: 'var(--shadow-button)',
              }}
            >
              Plan Calculator
            </Link>
            <Link
              href="/enroll/individual"
              className="flex items-center justify-center font-semibold"
              style={{
                flex: '1 0 0',
                maxWidth: '400px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-16)',
                letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                boxShadow: 'var(--shadow-button)',
              }}
            >
              Get in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
