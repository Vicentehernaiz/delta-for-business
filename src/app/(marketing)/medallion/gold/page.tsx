import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Gold Medallion Status | Delta for Business',
  description:
    'Delta Gold Medallion: $10,000 MQDs. 60% SkyMiles bonus, 72-hour upgrade window, priority boarding Zone 5. Qualify in 2025.',
  alternates: { canonical: 'https://business.delta.com/medallion/gold' },
}

const hex = '#d97706'

export default function GoldPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <i className="ph-fill ph-medal text-4xl" style={{ color: '#fbbf24' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Delta Medallion</p>
              <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1 }}>
                Gold Medallion
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', marginBottom: '32px' }}>
            The sweet spot for frequent business travelers. 72-hour upgrades and a meaningful miles boost.
          </p>
          <div className="flex gap-6 flex-wrap">
            {[{ v: '$10,000', l: 'MQDs required' }, { v: '+60%', l: 'SkyMiles bonus' }, { v: '72hr', l: 'Upgrade window' }].map((s) => (
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
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>Gold benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-airplane-takeoff', title: 'Priority boarding Zone 5', body: 'Earlier boarding than Silver — always enough overhead space.' },
              { icon: 'ph-fill ph-trend-up', title: '+60% SkyMiles bonus', body: 'Earn 60% more miles on every qualifying Delta flight.' },
              { icon: 'ph-fill ph-clock', title: '72-hour upgrade window', body: 'Upgrades clear 3 days before departure — better availability than Silver.' },
              { icon: 'ph-fill ph-check-square', title: 'Free checked bags', body: 'First checked bag free for you and up to 8 companions.' },
              { icon: 'ph-fill ph-globe', title: 'SkyTeam Elite Plus', body: 'Recognized at SkyTeam partner airlines with elite-level benefits.' },
              { icon: 'ph-fill ph-headset', title: 'Dedicated phone line', body: 'Priority routing to Medallion specialists.' },
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
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>How to reach Gold</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { v: '~20 flights', s: 'At $500 avg fare → $10,000 MQD' },
              { v: '$10,000 spend', s: 'MQD minimum — no segments required' },
              { v: '+ Card boost', s: 'Platinum card: $20 spend = $1 MQD' },
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
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Next level: Platinum</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>+80% miles bonus, Choice benefits, 120-hour upgrade window.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/medallion/platinum" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}>
              Platinum Medallion <i className="ph-bold ph-arrow-right text-sm"></i>
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
