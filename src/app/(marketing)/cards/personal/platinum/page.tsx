import type { Metadata } from 'next'
import Link from 'next/link'
import { cards } from '@/config/cards'

const card = cards.platinum
const hex = '#7c3aed'
const bg = 'rgba(124,58,237,0.08)'

export const metadata: Metadata = {
  title: 'Delta SkyMiles® Platinum American Express Card | Delta for Business',
  description:
    'Delta Platinum Amex: $350/yr, 60K miles, $2,500 MQD head start, 3x on Delta, $150 Delta Stays credit. Best for Medallion chasers.',
  alternates: { canonical: 'https://business.delta.com/cards/personal/platinum' },
}

export default function PlatinumCardPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                Personal card · $350/yr
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-32)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
                Delta SkyMiles® Platinum American Express Card
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>{card.bestFor}</p>
              <a href={card.applyUrl} className="inline-flex items-center gap-2 font-semibold" style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}>
                Apply now <i className="ph-bold ph-arrow-right text-sm"></i>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-40 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #6d28d9, #a78bfa)' }}>
                <i className="ph-fill ph-credit-card text-8xl" style={{ color: 'rgba(255,255,255,0.6)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {card.welcomeBonus && (
        <section className="py-8 px-6" style={{ background: 'rgba(124,58,237,0.06)', borderBottom: '1px solid var(--color-neutral-10)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-600)', marginBottom: '4px' }}>Welcome offer</p>
            <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: hex }}>{card.welcomeBonus.miles.toLocaleString()} bonus miles</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              After ${card.welcomeBonus.spendRequirement.toLocaleString()} in purchases in the first {card.welcomeBonus.months} months.
            </p>
          </div>
        </section>
      )}

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Annual fee', value: '$350' },
              { label: 'On Delta', value: '3x' },
              { label: 'MQD head start', value: '$2,500' },
              { label: 'Delta Stays credit', value: '$150' },
            ].map((s) => (
              <div key={s.label} className="text-center rounded-[var(--radius-l)] p-4" style={{ background: bg, border: `1px solid ${hex}22` }}>
                <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: hex }}>{s.value}</p>
                <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '16px' }}>Card benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-rocket', title: '$2,500 MQD head start', body: 'Credited annually — reduces the remaining MQD needed for any Medallion tier by $2,500.' },
              { icon: 'ph-fill ph-trend-up', title: `MQD boost: ${card.mqdBoostRate}`, body: 'Every $20 in card purchases earns $1 MQD toward Medallion status.' },
              { icon: 'ph-fill ph-users', title: 'Companion certificate', body: 'Annual domestic Main Cabin companion certificate — same routes as Gold.' },
              { icon: 'ph-fill ph-buildings', title: '$150 Delta Stays credit', body: 'Slightly higher hotel credit vs. Gold, applied as annual statement credit.' },
              { icon: 'ph-fill ph-armchair', title: 'Sky Club access (conditional)', body: 'Access after $75K in calendar-year purchases — a meaningful perk for high spenders.' },
              { icon: 'ph-fill ph-check-square', title: 'Free first checked bag', body: 'First bag free for you and up to 8 companions on Delta-operated flights.' },
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
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Want unlimited Sky Club?</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Reserve adds unlimited Sky Club access + a Delta One companion cert for $650/yr.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/cards/personal/reserve" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-0)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}>
              See Reserve <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link href="/cards/compare" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}>
              Compare all cards
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
