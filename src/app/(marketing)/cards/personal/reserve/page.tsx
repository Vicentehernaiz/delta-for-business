import type { Metadata } from 'next'
import Link from 'next/link'
import { cards } from '@/config/cards'

const card = cards.reserve
const hex = '#002d59'
const bg = 'rgba(0,45,89,0.07)'

export const metadata: Metadata = {
  title: 'Delta SkyMiles® Reserve American Express Card | Delta for Business',
  description:
    'Delta Reserve Amex: $650/yr, 80K miles, unlimited Sky Club + guests, Delta One companion cert, $200 Delta Stays credit. Top card for premium travelers.',
  alternates: { canonical: 'https://business.delta.com/cards/personal/reserve' },
}

export default function ReserveCardPage() {
  return (
    <main>
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #001a36 0%, #003166 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                Personal card · $650/yr · Premium tier
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-32)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
                Delta SkyMiles® Reserve American Express Card
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>{card.bestFor}</p>
              <a href={card.applyUrl} className="inline-flex items-center gap-2 font-semibold" style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}>
                Apply now <i className="ph-bold ph-arrow-right text-sm"></i>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-40 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #001a36, #004a8f)' }}>
                <i className="ph-fill ph-credit-card text-8xl" style={{ color: 'rgba(255,255,255,0.5)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {card.welcomeBonus && (
        <section className="py-8 px-6" style={{ background: 'rgba(0,45,89,0.05)', borderBottom: '1px solid var(--color-neutral-10)' }}>
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
              { label: 'Annual fee', value: '$650' },
              { label: 'On Delta', value: '3x' },
              { label: 'Sky Club', value: 'Unlimited' },
              { label: 'MQD boost', value: '$15:$1' },
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
              { icon: 'ph-fill ph-armchair', title: 'Unlimited Sky Club access', body: 'Access to 150+ Delta Sky Club locations — plus 2 guests per visit, no conditions required.' },
              { icon: 'ph-fill ph-users', title: 'Delta One® companion cert', body: 'Annual companion certificate valid in Delta One on domestic flights and select international routes. Best companion cert in the lineup.' },
              { icon: 'ph-fill ph-rocket', title: '$2,500 MQD head start', body: 'Automatically credited each renewal year — starts your Medallion qualification $2,500 ahead.' },
              { icon: 'ph-fill ph-trend-up', title: `MQD boost: ${card.mqdBoostRate}`, body: 'The fastest card-to-MQD conversion: every $15 spent = $1 MQD toward Medallion.' },
              { icon: 'ph-fill ph-buildings', title: '$200 Delta Stays credit', body: 'Annual statement credit for eligible hotel bookings through Delta Stays.' },
              { icon: 'ph-fill ph-fork-knife', title: '$120 Resy dining credit', body: '$10/month back at Resy restaurant network — partially offsets the annual fee.' },
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

          {/* Value breakdown */}
          <div className="mt-8 rounded-[var(--radius-l)] p-6" style={{ background: bg, border: `1px solid ${hex}22` }}>
            <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: hex, marginBottom: '12px' }}>
              Is the $650 annual fee worth it?
            </h3>
            <div className="space-y-2">
              {[
                { label: 'Sky Club access (6 visits/yr)', value: '$360+' },
                { label: 'Delta One companion cert', value: '$500–$2,000+' },
                { label: 'Delta Stays credit', value: '$200' },
                { label: 'Resy dining credit', value: '$120' },
                { label: 'MQD head start value', value: '≈$100+' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between">
                  <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{r.label}</span>
                  <span style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', color: hex }}>{r.value}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2" style={{ borderTop: `1px solid ${hex}22` }}>
                <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: hex }}>Total value</span>
                <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: hex }}>$1,280–$2,780+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center" style={{ background: 'var(--color-neutral-5)' }}>
        <Link href="/cards/compare" className="inline-flex items-center gap-2 font-semibold" style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}>
          Compare all 7 cards <i className="ph-bold ph-arrow-right text-sm"></i>
        </Link>
      </section>
    </main>
  )
}
