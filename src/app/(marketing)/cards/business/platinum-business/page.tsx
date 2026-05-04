import type { Metadata } from 'next'
import Link from 'next/link'
import { cards } from '@/config/cards'

const card = cards['platinum-business']
const hex = '#9BA6B0'
const bg = 'rgba(155,166,176,0.10)'

export const metadata: Metadata = {
  title: 'Delta SkyMiles® Platinum Business American Express Card | Delta for Business',
  description:
    'Delta Platinum Business Amex: $350/yr, 60K miles bonus, 3x on Delta + 2x on shipping & ads. $2,500 MQD head start for Medallion status.',
  alternates: { canonical: 'https://business.delta.com/cards/business/platinum-business' },
}

export default function PlatinumBusinessCardPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #4A5760 0%, #9BA6B0 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                Business card · $350/yr
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
                Delta SkyMiles® Platinum Business American Express Card
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>{card.bestFor}</p>
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
              <img src="/assets/images/cards/delta-amex-platinum-card.png" alt="Delta SkyMiles Platinum Business Card" style={{ width: '340px', maxWidth: '100%', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome bonus bar */}
      {card.welcomeBonus && (
        <section className="py-8 px-6" style={{ background: 'rgba(155,166,176,0.08)', borderBottom: '1px solid var(--color-neutral-10)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-600)', marginBottom: '4px' }}>Welcome offer</p>
            <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: hex }}>{card.welcomeBonus.miles.toLocaleString()} bonus miles</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              After ${card.welcomeBonus.spendRequirement.toLocaleString()} in the first {card.welcomeBonus.months} months.
            </p>
          </div>
        </section>
      )}

      {/* Key stats + benefits */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Annual fee', value: '$350' },
              { label: 'On Delta', value: '3x' },
              { label: 'Shipping & ads', value: '2x' },
              { label: 'MQD head start', value: '$2,500' },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center rounded-[var(--radius-l)] p-4"
                style={{ background: bg, border: `1px solid ${hex}22` }}
              >
                <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: hex }}>{s.value}</p>
                <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '16px' }}>Card benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: 'ph-fill ph-rocket-launch',
                title: `$2,500 MQD head start`,
                body: 'Start every Medallion year $2,500 closer to Gold status. Paired with the boost rate, this card accelerates status faster than any entry-level card.',
              },
              {
                icon: 'ph-fill ph-trend-up',
                title: `MQD boost: ${card.mqdBoostRate}`,
                body: 'Every $20 in purchases earns $1 MQD. Combined with the head start, serious travelers can accelerate toward Gold Medallion on card spend.',
              },
              {
                icon: 'ph-fill ph-package',
                title: '3x on Delta + 2x on business categories',
                body: 'Triple miles on all Delta purchases plus double on US shipping, US advertising, and transit — categories that drive most business budgets.',
              },
              {
                icon: 'ph-fill ph-users',
                title: 'Domestic companion certificate',
                body: 'Annual Main Cabin companion certificate for domestic routes. Use it to bring a colleague or family member at no extra ticket cost.',
              },
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

      {/* All earning rates */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '16px' }}>Earning rates</h2>
          <div className="rounded-[var(--radius-l)] overflow-hidden" style={{ border: '1px solid var(--color-neutral-10)' }}>
            {card.earningRates.map((r, i) => (
              <div
                key={r.category}
                className="flex items-center justify-between px-5 py-3"
                style={{
                  background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)',
                  borderBottom: i < card.earningRates.length - 1 ? '1px solid var(--color-neutral-10)' : 'none',
                }}
              >
                <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-700)' }}>{r.category}</span>
                <span style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: hex }}>{r.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell / cross-sell */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Want unlimited Sky Club access?</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              Reserve Business adds unlimited Sky Club + Delta One companion cert for $650/yr.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/cards/business/reserve-business"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-0)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}
            >
              See Reserve Business <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/cards/compare"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}
            >
              Compare all cards
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
