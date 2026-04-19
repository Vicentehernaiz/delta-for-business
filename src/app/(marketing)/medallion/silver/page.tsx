import type { Metadata } from 'next'
import Link from 'next/link'
import { medallionTiers } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Delta Silver Medallion Status | Delta for Business',
  description:
    'Delta Silver Medallion: $5,000 MQDs. Priority boarding Zone 6, 40% SkyMiles bonus, 24-hour upgrade window. How to qualify in 2025.',
  alternates: { canonical: 'https://business.delta.com/medallion/silver' },
}

const tier = medallionTiers.silver
const hex = '#9ca3af'

export default function SilverPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <i className="ph-fill ph-medal text-4xl" style={{ color: '#e5e7eb' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Delta Medallion</p>
              <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1 }}>
                Silver Medallion
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '520px', marginBottom: '32px' }}>
            The entry tier. Priority boarding, a 40% miles bonus, and preferential upgrade positioning.
          </p>
          <div className="flex gap-6 flex-wrap">
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>$5,000</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>MQDs required</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>+40%</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>SkyMiles bonus</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>24hr</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>Upgrade window</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>Silver benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-airplane-takeoff', title: 'Priority boarding Zone 6', body: 'Board before the general public — find overhead bin space more easily.' },
              { icon: 'ph-fill ph-trend-up', title: '+40% SkyMiles bonus', body: 'Earn 40% more SkyMiles on every qualifying Delta flight vs. standard.' },
              { icon: 'ph-fill ph-clock', title: '24-hour upgrade window', body: 'Complimentary upgrades clear starting 24 hours before departure, ahead of non-elite travelers.' },
              { icon: 'ph-fill ph-check-square', title: 'Free checked bags', body: 'First checked bag free on Delta-operated flights for you and up to 8 companions.' },
              { icon: 'ph-fill ph-headset', title: 'Dedicated phone line', body: 'Access to a dedicated Medallion phone line with shorter wait times.' },
              { icon: 'ph-fill ph-map-pin', title: 'SkyTeam Elite status', body: 'Recognized at SkyTeam partner airlines worldwide with elite benefits.' },
            ].map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-4 rounded-[var(--radius-l)]"
                style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
              >
                <i className={`${b.icon} text-2xl flex-shrink-0`} style={{ color: hex }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '3px' }}>{b.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to qualify */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>How to reach Silver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: hex, marginBottom: '4px' }}>~10 flights</p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>At ~$500 avg fare → $5,000 MQD</p>
            </div>
            <div className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: hex, marginBottom: '4px' }}>$5,000 spend</p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>Minimum MQD for Silver — no segments required</p>
            </div>
            <div className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: hex, marginBottom: '4px' }}>+ Card boost</p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>Platinum/Reserve card spend counts toward MQDs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nav to next tier + calculator */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Ready for more?</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Gold Medallion unlocks a 60% miles bonus and 72-hour upgrade window.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/medallion/gold"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}
            >
              Gold Medallion
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/medallion/mqd-calculator"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}
            >
              MQD calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
