import type { Metadata } from 'next'
import Link from 'next/link'
import { cards } from '@/config/cards'

const card = cards.gold
const hex = '#BF9B5F'
const bg = 'rgba(191,155,95,0.10)'

export const metadata: Metadata = {
  title: 'Delta SkyMiles® Gold American Express Card | Delta for Business',
  description:
    'Delta Gold Amex: $150/yr (waived first year), 40K miles bonus, companion cert, $100 Delta Stays credit. 2x on Delta, dining, and supermarkets.',
  alternates: { canonical: 'https://business.delta.com/cards/personal/gold' },
}

export default function GoldCardPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #7A5C2A 0%, #BF9B5F 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                Personal card · $150/yr (first year free)
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-32)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
                Delta SkyMiles® Gold American Express Card
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
                {card.bestFor}
              </p>
              <a
                href={card.applyUrl}
                className="inline-flex items-center gap-2 font-semibold"
                style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
              >
                Apply now <i className="ph-bold ph-arrow-right text-sm"></i>
              </a>
            </div>
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/cards/delta-amex-gold-card.png" alt="Delta SkyMiles Gold Card" style={{ width: '340px', maxWidth: '100%', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }} />
            </div>
          </div>
        </div>
      </section>

      {card.welcomeBonus && (
        <section className="py-8 px-6" style={{ background: 'rgba(217,119,6,0.06)', borderBottom: '1px solid var(--color-neutral-10)' }}>
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
              { label: 'Annual fee', value: '$150' },
              { label: 'On Delta', value: '2x' },
              { label: 'Dining & groceries', value: '2x' },
              { label: 'Delta Stays credit', value: '$100' },
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
              { icon: 'ph-fill ph-users', title: 'Companion certificate', body: 'Earn a companion certificate each year for a round-trip Main Cabin ticket — valid on domestic flights and select international routes.' },
              { icon: 'ph-fill ph-buildings', title: '$100 Delta Stays credit', body: 'Annual statement credit for hotels booked through the Delta Stays platform.' },
              { icon: 'ph-fill ph-check-square', title: 'Free first checked bag', body: 'First checked bag free for you and up to 8 companions on Delta-operated flights.' },
              { icon: 'ph-fill ph-ticket', title: '20% in-flight savings', body: 'Statement credit for eligible in-flight purchases (food, beverages, and headsets).' },
              { icon: 'ph-fill ph-trend-up', title: 'MQD boost', body: `${card.mqdBoostRate} — spend on this card converts to MQDs toward Medallion status.` },
              { icon: 'ph-fill ph-shield', title: 'No foreign transaction fees', body: 'No extra fees on international purchases.' },
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
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Chasing Medallion? Consider Platinum.</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Platinum adds a $2,500 MQD head start and 3x on Delta for $350/year.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/cards/personal/platinum" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-0)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}>
              See Platinum <i className="ph-bold ph-arrow-right text-sm"></i>
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
