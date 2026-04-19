import Link from 'next/link'
import type { Segment } from '@/types'

interface SegmentCardProps {
  segment: Segment
  isActive?: boolean
}

const segmentIcons: Record<string, string> = {
  'business-traveler': 'ph-user',
  enterprise: 'ph-briefcase',
  'large-enterprise': 'ph-globe-hemisphere-west',
}

const segmentTags: Record<string, string> = {
  'business-traveler': 'Free · No employer needed',
  enterprise: '$50k–$300k annual travel',
  'large-enterprise': '$300k+ annual travel',
}

export function SegmentCard({ segment, isActive = false }: SegmentCardProps) {
  const icon = segmentIcons[segment.id] ?? 'ph-briefcase'
  const tag = segmentTags[segment.id] ?? ''

  return (
    <div
      className="flex flex-col h-full rounded-[var(--radius-l)] transition-all duration-200"
      style={{
        background: 'var(--color-neutral-0)',
        border: isActive
          ? '2px solid var(--color-delta-red-400)'
          : '1px solid var(--color-neutral-10)',
        boxShadow: isActive
          ? '0px 8px 32px rgba(192,25,51,0.12)'
          : 'var(--shadow-card)',
        padding: '24px',
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
        style={{ background: `${segment.color}18` }}
      >
        <i className={`ph-duotone ${icon} text-2xl`} style={{ color: segment.color }}></i>
      </div>

      {/* Tag */}
      {tag && (
        <span
          className="inline-block rounded-full mb-3 font-semibold"
          style={{
            fontSize: 'var(--type-scale-14)',
            color: segment.color,
            background: `${segment.color}14`,
            padding: '3px 10px',
            letterSpacing: 'var(--letter-spacing-marketing-small)',
          }}
        >
          {tag}
        </span>
      )}

      {/* Name & Tagline */}
      <h3
        style={{
          fontSize: 'var(--type-scale-18)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          lineHeight: 'var(--line-height-heading-xs)',
          marginBottom: '8px',
        }}
      >
        {segment.shortName}
      </h3>
      <p
        style={{
          fontSize: 'var(--type-scale-14)',
          color: 'var(--color-neutral-600)',
          lineHeight: 'var(--line-height-body-small)',
          marginBottom: '16px',
        }}
      >
        {segment.tagline}
      </p>

      {/* Benefits */}
      <ul className="flex-1 space-y-2 mb-6">
        {segment.keyBenefits.slice(0, 4).map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <i
              className="ph-bold ph-check-circle flex-shrink-0 mt-0.5"
              style={{ color: 'var(--color-delta-red-400)', fontSize: '14px' }}
            ></i>
            <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-500)', lineHeight: '20px' }}>
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex flex-col gap-2 mt-auto">
        <Link
          href={segment.ctaPrimary.href}
          className="w-full text-center font-semibold transition-colors"
          style={{
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-delta-red-400)',
            color: 'var(--color-neutral-0)',
            fontSize: 'var(--type-scale-16)',
            boxShadow: 'var(--shadow-button)',
            letterSpacing: 'var(--letter-spacing-marketing-x-large)',
          }}
        >
          {segment.ctaPrimary.label}
        </Link>
        <Link
          href={segment.ctaSecondary.href}
          className="w-full text-center font-semibold transition-colors"
          style={{
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-delta-blue-300)',
            fontSize: 'var(--type-scale-14)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          {segment.ctaSecondary.label} →
        </Link>
      </div>
    </div>
  )
}
