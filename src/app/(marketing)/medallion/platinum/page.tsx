import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Platinum Medallion Status | Delta for Business',
  description:
    'Delta Platinum Medallion: $15,000 MQDs. 80% SkyMiles bonus, Choice Benefits, 120-hour upgrade window, Sky Club access after $75K card spend.',
  alternates: { canonical: 'https://business.delta.com/medallion/platinum' },
}

const hex = '#7c3aed'

export default function PlatinumPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <i className="ph-fill ph-medal text-4xl" style={{ color: '#c4b5fd' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Delta Medallion</p>
              <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1 }}>
                Platinum Medallion
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', marginBottom: '32px' }}>
            Premium tier with Choice benefits, 120-hour upgrade windows, and conditional Sky Club access.
          </p>
          <div className="flex gap-6 flex-wrap">
            {[{ v: '$15,000', l: 'MQDs required' }, { v: '+80%', l: 'SkyMiles bonus' }, { v: '120hr', l: 'Upgrade window' }, { v: 'Choice', l: 'Annual benefits' }].map((s) => (
              <div key={s.l}>
                <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{s.v}</p>
                <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.6)' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>Platinum benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-gift', title: 'Choice benefits', body: 'Select one benefit annually: companion cert, SkyClub day passes, or bonus miles — at Platinum level.' },
              { icon: 'ph-fill ph-trend-up', title: '+80% SkyMiles bonus', body: 'Earn 80% more miles on qualifying Delta flights — significantly more than Gold.' },
              { icon: 'ph-fill ph-clock', title: '120-hour upgrade window', body: 'Upgrade requests clear 5 days before departure — excellent first-class availability.' },
              { icon: 'ph-fill ph-airplane-takeoff', title: 'Priority boarding Zone 4', body: 'Earlier than Gold; reliably board before the main cabin.' },
              { icon: 'ph-fill ph-armchair', title: 'Sky Club (conditional)', body: 'Access after spending $75K+ on your Delta Platinum Amex card in the calendar year.' },
              { icon: 'ph-fill ph-globe', title: 'SkyTeam Elite Plus', body: 'Global elite recognition at all SkyTeam partner airlines.' },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 p-4 rounded-[var(--radius-l)]" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
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

      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>How to reach Platinum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { v: '~30 flights', s: 'At $500 avg fare → $15,000 MQD' },
              { v: '$15,000 spend', s: 'MQD minimum — no segments required' },
              { v: '$2,500 head start', s: 'With Platinum/Reserve card renewal' },
            ].map((s) => (
              <div key={s.v} className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
                <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: hex, marginBottom: '4px' }}>{s.v}</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Highest tier: Diamond</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>+120% miles bonus, full Sky Club access, 360° Lounge access, concierge service.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/medallion/diamond" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}>
              Diamond Medallion <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link href="/medallion/mqd-calculator" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}>
              MQD calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
