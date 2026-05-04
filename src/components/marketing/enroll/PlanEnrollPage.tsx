'use client'

import Link from 'next/link'
import { EnrollPlanForm, PlanMatchCard } from './EnrollPlanForm'
import type { EnrollPlan } from '@/config/enroll-plans'

/**
 * Reusable shell for plan-specific enrollment pages (/enroll/gold|platinum|diamond).
 * Hero with plan badge → match card → form → footer note.
 */
export function PlanEnrollPage({ plan }: { plan: EnrollPlan }) {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-6"
        style={{
          background:
            'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <nav
            className="mb-6 flex items-center gap-2"
            style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.78)' }}
          >
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Programs
            </Link>
            <i className="ph ph-caret-right text-xs" />
            <Link href={plan.learnHref} style={{ color: 'rgba(255,255,255,0.78)' }}>
              {plan.name}
            </Link>
            <i className="ph ph-caret-right text-xs" />
            <span style={{ color: 'var(--color-neutral-0)' }}>Get started</span>
          </nav>

          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 font-semibold"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: plan.accent,
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className={`${plan.icon} text-xs`} />
            {plan.badge}
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
            Enroll in the{' '}
            <span style={{ color: plan.accent }}>{plan.name}</span>
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-16)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
            }}
          >
            {plan.short}
          </p>
        </div>
      </section>

      {/* Match card + form */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto flex flex-col gap-6" style={{ maxWidth: '640px' }}>
          <PlanMatchCard plan={plan} />
          <EnrollPlanForm plan={plan} />

          {/* Switch-plan reassurance */}
          <div
            className="flex items-start gap-3 rounded-[var(--radius-l)] p-4"
            style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
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
              <strong style={{ color: 'var(--color-delta-blue-700)' }}>Not sure this is the right plan?</strong>{' '}
              <Link
                href="/enroll/individual"
                style={{
                  color: 'var(--color-delta-blue-600)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                  fontWeight: '600',
                }}
              >
                Find your match in 60 seconds →
              </Link>
              . Switching plans after enrollment is always free — your earnings come with you.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
