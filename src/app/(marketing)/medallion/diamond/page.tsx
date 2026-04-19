import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Diamond Medallion Status | Delta for Business',
  description:
    'Delta Diamond Medallion: $28,000 MQDs. 120% SkyMiles bonus, unlimited Sky Club access, Delta 360° concierge, top upgrade priority.',
  alternates: { canonical: 'https://business.delta.com/medallion/diamond' },
}

const hex = '#002d59'

export default function DiamondPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #001a36 0%, #002d59 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <i className="ph-fill ph-diamond text-4xl" style={{ color: '#7dd3fc' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Delta Medallion</p>
              <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1 }}>
                Diamond Medallion
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', marginBottom: '32px' }}>
            The pinnacle of Delta Medallion. Unlimited Sky Club access, top upgrade priority, Delta 360° concierge service, and the highest miles bonus.
          </p>
          <div className="flex gap-6 flex-wrap">
            {[{ v: '$28,000', l: 'MQDs required' }, { v: '+120%', l: 'SkyMiles bonus' }, { v: '120hr', l: 'Upgrade window' }, { v: '#1', l: 'Upgrade priority' }].map((s) => (
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
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>Diamond benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-trend-up', title: '+120% SkyMiles bonus', body: 'The highest tier bonus — every mile you would have earned turns into more than double.' },
              { icon: 'ph-fill ph-armchair', title: 'Unlimited Sky Club access', body: 'Full access for the cardholder plus two guests on every trip — no conditions or spending minimums.' },
              { icon: 'ph-fill ph-clock', title: '120-hour upgrade window', body: 'Upgrades clear 5 days before departure with first priority over all other Medallion tiers.' },
              { icon: 'ph-fill ph-gift', title: 'Choice benefits', body: 'Annual Choice benefit: companion cert, Sky Club day passes, or a bonus miles award — Diamond-level options.' },
              { icon: 'ph-fill ph-star', title: 'Delta 360° membership', body: 'Invitation-only concierge service — proactive rebooking, private check-in, dedicated specialist team.' },
              { icon: 'ph-fill ph-airplane-takeoff', title: 'Priority boarding Zone 3', body: 'Board near-first on every Delta flight — behind only First Class and Comfort+.' },
              { icon: 'ph-fill ph-globe', title: 'SkyTeam Elite Plus', body: 'Full elite recognition at every SkyTeam partner globally.' },
              { icon: 'ph-fill ph-headset', title: 'Dedicated Diamond line', body: 'Dedicated phone line staffed by the most experienced Medallion specialists.' },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 p-4 rounded-[var(--radius-l)]" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
                <i className={`${b.icon} text-2xl flex-shrink-0`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
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
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>How to reach Diamond</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { v: '$28,000 MQDs', s: 'Hardest threshold — requires significant Delta loyalty' },
              { v: '$2,500 head start', s: 'Reserve card annual head start + $15 spend = $1 MQD' },
              { v: 'Multi-year path', s: 'Most Diamonds build over 3–5 years of consistent travel' },
            ].map((s) => (
              <div key={s.v} className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
                <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{s.v}</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
            See how far your spend gets you
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Use the MQD calculator to model flight spend + card spend and see which tier you can reach this year.
          </p>
          <Link
            href="/medallion/mqd-calculator"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Open MQD calculator
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
