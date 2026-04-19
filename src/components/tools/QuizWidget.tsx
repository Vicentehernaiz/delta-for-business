'use client'

import Link from 'next/link'

export function QuizWidget() {
  return (
    <div
      className="rounded-[var(--radius-l)] p-8"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
        style={{ background: 'var(--color-delta-red-50)' }}
      >
        <i className="ph-fill ph-magic-wand text-2xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
      </div>

      <h3
        style={{
          fontSize: 'var(--type-scale-20)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '8px',
        }}
      >
        Not sure which program fits?
      </h3>
      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px', lineHeight: 'var(--line-height-body-small)' }}>
        Answer 4 quick questions — get a personalized program, card, and Medallion recommendation.
      </p>

      {/* Mini progress preview */}
      <div className="flex gap-1.5 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-full"
            style={{
              height: '5px',
              background: i === 1 ? 'var(--color-delta-red-400)' : 'var(--color-neutral-10)',
            }}
          />
        ))}
      </div>

      <Link
        href="/tools/program-selector"
        className="w-full inline-flex items-center justify-center gap-2 font-semibold transition-opacity hover:opacity-90"
        style={{
          height: '48px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-delta-red-400)',
          color: 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-16)',
          boxShadow: 'var(--shadow-button)',
        }}
      >
        <i className="ph-bold ph-arrow-right text-sm"></i>
        Start the 60-second quiz
      </Link>
    </div>
  )
}
