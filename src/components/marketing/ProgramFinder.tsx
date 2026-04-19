import Link from 'next/link'

interface ProgramFinderProps {
  activeSegment?: string
}

// ── Plan data ─────────────────────────────────────────────────────────────────

const plans = [
  {
    id: 'business-traveler',
    name: 'Business Traveler',
    nameColor: 'var(--color-delta-blue-300)',
    subtitle: 'Any person traveling for work · No employer needed · Free enroll\nSelf-serve · Enroll in 60 seconds via SkyMiles login',
    included: [
      'Hertz Five Star status (free)',
      'CLEAR Plus discount (~30% off $189/yr)',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount',
      'Targeted bonus mile offers',
      'Personal SkyMiles earned normally',
      'Promotions for Comfort+',
      'Occasional lounge/day passes',
    ],
    excluded: [
      'No company mile account',
      'No Corporate Priority benefits',
      'No Medallion acceleration',
    ],
    ctaKnow: '/programs/business-traveler',
    ctaEnroll: '/enroll/individual',
    ctaEnrollLabel: 'Get in',
  },
  {
    id: 'enterprise',
    name: 'Enterprise program',
    nameColor: 'var(--color-delta-red-400)',
    subtitle: '50–500 travelers · Managed travel tool\nMSA negotiated agreement\nAccount manager + Corporate Priority',
    included: [
      'Advance Analytics in Delta Sync',
      'Negotiated fares (% off published fares)',
      'Priority Medallion upgrade queue',
      'Corporate status matching (6 months)',
      'Account manager assigned',
      'Up to 99 free SkyMiles Gold Cards',
      'Concur / TMC integration',
      'Employees still earn personal SkyMiles + MQDs',
      'Corporate Priority: preferred seating, priority boarding, re-booking & service recovery',
    ],
    excluded: [],
    ctaKnow: '/programs/enterprise',
    ctaEnroll: '/enroll/enterprise',
    ctaEnrollLabel: 'Contact Sales',
  },
  {
    id: 'large-enterprise',
    name: 'Large-Enterprise program',
    nameColor: 'var(--color-delta-red-400)',
    subtitle: '500+ travelers · Full managed travel tool\nCSA negotiated agreement\nFull Corporate Priority suite + TMC',
    included: [
      'All Enterprise benefits, plus:',
      'Full Corporate Priority suite globally',
      'Global partner airlines (AF, KLM, etc)',
      'Unused ticket transfer program',
      '24/7 Corporate Solutions support',
      'Delta One Lounge access (negotiable)',
      'Custom SLA-level service agreements',
      'Auto data reporting to travel manager inbox',
      'Employees still earn personal SkyMiles + MQDs',
    ],
    excluded: [],
    ctaKnow: '/programs/large-enterprise',
    ctaEnroll: '/enroll/enterprise',
    ctaEnrollLabel: 'Contact Sales',
  },
]

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
            <div
              key={plan.id}
              className="flex flex-col rounded-[var(--radius-l)]"
              style={{
                background: 'var(--color-neutral-0)',
                border: `1px solid ${activeSegment === plan.id ? 'var(--color-delta-red-400)' : 'var(--color-neutral-5)'}`,
                boxShadow: 'var(--shadow-card)',
                padding: '32px',
                flex: '1 0 340px',
                minWidth: '340px',
                gap: '32px',
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

              {/* Benefits list */}
              <div
                className="flex flex-col flex-1"
                style={{
                  gap: '16px',
                  fontSize: 'var(--type-scale-16)',
                  lineHeight: 'var(--line-height-body-medium)',
                  letterSpacing: 'var(--letter-spacing-marketing-small)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500',
                }}
              >
                {plan.included.map((item) => (
                  <p key={item} style={{ color: 'var(--color-delta-blue-500)' }}>
                    ✓&nbsp;&nbsp;{item}
                  </p>
                ))}
                {plan.excluded.map((item) => (
                  <p key={item} style={{ color: 'var(--color-neutral-500)' }}>
                    ✗&nbsp;&nbsp;{item}
                  </p>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-end justify-between" style={{ paddingTop: '16px' }}>
                <Link
                  href={plan.ctaKnow}
                  style={{
                    height: '44px',
                    padding: '0 24px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--type-scale-16)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                    color: 'var(--color-delta-blue-700)',
                    borderBottom: '1.5px solid var(--color-delta-blue-700)',
                  }}
                >
                  Know more
                </Link>
                <Link
                  href={plan.ctaEnroll}
                  style={{
                    height: '44px',
                    padding: '0 24px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--type-scale-16)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                    color: 'var(--color-delta-red-400)',
                    borderBottom: '1.5px solid var(--color-delta-red-400)',
                  }}
                >
                  {plan.ctaEnrollLabel}
                </Link>
              </div>
            </div>
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
