import type { Metadata } from 'next'
import { ROICalculator } from '@/components/tools/ROICalculator'

export const metadata: Metadata = {
  title: 'Delta for Business ROI Calculator | See Your Savings',
  description:
    'Calculate your potential return on investment with Delta for Business. Estimate miles earned, eCredit value, and annual savings based on your actual travel profile.',
  alternates: { canonical: 'https://business.delta.com/tools/roi-calculator' },
}

export default function ROICalculatorPage() {
  return (
    <>
        {/* Hero */}
        <section
          className="py-16"
          style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
        >
          <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
            <span
              className="inline-block px-3 py-1 rounded-full mb-4 font-semibold"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 'var(--type-scale-14)',
                letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                textTransform: 'uppercase',
              }}
            >
              ROI calculator
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-neutral-0)',
                lineHeight: 'var(--line-height-heading-xl)',
                marginBottom: '12px',
              }}
            >
              See what your travel is worth
            </h1>
            <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.75)' }}>
              Adjust sliders to match your travel profile — see miles earned and dollar value in real time.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
            <ROICalculator />
          </div>
        </section>
    </>
  )
}
