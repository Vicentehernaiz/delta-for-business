import type { Metadata } from 'next'
import { MQDCalculator } from '@/components/tools/MQDCalculator'
import { Nav } from '@/components/marketing/Nav'
import { Footer } from '@/components/marketing/Footer'

export const metadata: Metadata = {
  title: 'MQD Calculator — Medallion Status Projection | Delta for Business',
  description:
    'Calculate how quickly you can reach Delta Medallion status. Input your annual airfare spend and see your Silver, Gold, Platinum, or Diamond projection.',
  alternates: { canonical: 'https://business.delta.com/medallion/mqd-calculator' },
}

export default function MQDCalculatorPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <section
          className="py-16"
          style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
        >
          <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
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
              How fast can you hit Medallion?
            </h1>
            <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.75)' }}>
              Since 2024, Delta qualifies on spend only. Enter your annual airfare and see your tier projection.
            </p>
          </div>
        </section>
        <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
            <MQDCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
