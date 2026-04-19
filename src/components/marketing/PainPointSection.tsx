import type { SegmentId } from '@/types'

interface PainPointSectionProps {
  segmentId: SegmentId
}

const painPointsBySegment: Record<
  SegmentId,
  { eyebrow: string; title: string; subtitle: string; points: { icon: string; text: string }[] }
> = {
  'business-traveler': {
    eyebrow: 'For business travelers',
    title: 'Your travel earns more than a paycheck stub.',
    subtitle: 'No employer involvement needed — your miles, your perks, yours.',
    points: [
      { icon: 'ph-fill ph-trend-up', text: 'Earn miles on every flight and every dollar spent' },
      { icon: 'ph-fill ph-medal', text: 'Qualify for Medallion status based on spend, not seat count' },
      { icon: 'ph-fill ph-arrows-split', text: 'Company + employee miles on the same ticket, no tradeoff' },
      { icon: 'ph-fill ph-gift', text: 'Hertz Five Star, CLEAR Plus, and LinkedIn Premium discounts included' },
    ],
  },
  enterprise: {
    eyebrow: 'For mid-market companies',
    title: 'Negotiated fares. Real account support.',
    subtitle: 'Volume unlocks rates and services that self-serve programs never offer.',
    points: [
      { icon: 'ph-fill ph-tag', text: 'Negotiated fares off published rates for your route mix' },
      { icon: 'ph-fill ph-crown', text: 'Full Corporate Priority: preferred seating, boarding, upgrade queue' },
      { icon: 'ph-fill ph-user-gear', text: 'Dedicated account manager — one contact for everything' },
      { icon: 'ph-fill ph-link', text: 'Concur, Amex GBT, and major TMC integrations included' },
    ],
  },
  'large-enterprise': {
    eyebrow: 'For large enterprises',
    title: 'Global scale. Personalized at every touchpoint.',
    subtitle: 'The full Delta ecosystem — plus partner airlines that cover every route your team flies.',
    points: [
      { icon: 'ph-fill ph-globe-hemisphere-west', text: 'Corporate Priority extended to Air France, KLM, LATAM, Virgin Atlantic' },
      { icon: 'ph-fill ph-arrows-left-right', text: 'Unused ticket transfer program — no more forfeited fares' },
      { icon: 'ph-fill ph-headset', text: '24/7 Corporate Solutions support line' },
      { icon: 'ph-fill ph-shield-check', text: 'Duty of care reporting and traveler-level visibility' },
    ],
  },
}

export function PainPointSection({ segmentId }: PainPointSectionProps) {
  const content = painPointsBySegment[segmentId]

  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)`,
      }}
    >
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 mb-4 font-semibold"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 'var(--type-scale-14)',
                letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                textTransform: 'uppercase',
              }}
            >
              {content.eyebrow}
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-40))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-neutral-0)',
                lineHeight: 'var(--line-height-heading-xl)',
                letterSpacing: 'var(--letter-spacing-heading-xl)',
                marginBottom: '12px',
              }}
            >
              {content.title}
            </h2>
            <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
              {content.subtitle}
            </p>
          </div>

          {/* Right: Benefits */}
          <ul className="space-y-5">
            {content.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <i className={`${point.icon} text-xl`} style={{ color: 'var(--color-neutral-0)' }}></i>
                </div>
                <p
                  style={{
                    fontSize: 'var(--type-scale-16)',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 'var(--line-height-body-medium)',
                    paddingTop: '10px',
                  }}
                >
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
