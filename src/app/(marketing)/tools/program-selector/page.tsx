import type { Metadata } from 'next'
import { ProgramQuiz } from '@/components/tools/ProgramQuiz'

export const metadata: Metadata = {
  title: 'Find Your Delta Business Travel Program | 60-Second Quiz',
  description:
    'Answer 4 quick questions to find the best Delta for Business program for your company. Get a personalized program, card, and Medallion recommendation.',
  alternates: { canonical: 'https://business.delta.com/tools/program-selector' },
}

export default function ProgramSelectorPage() {
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
              60-second quiz
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
              Find your Delta for Business program
            </h1>
            <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.75)' }}>
              4 questions. Personalized program, card, and Medallion recommendation — instant.
            </p>
          </div>
        </section>

        {/* Quiz */}
        <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
            <ProgramQuiz />
          </div>
        </section>
    </>
  )
}
