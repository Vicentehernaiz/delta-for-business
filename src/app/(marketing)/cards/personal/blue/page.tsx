import type { Metadata } from 'next'
import Link from 'next/link'
import { cards } from '@/config/cards'

const card = cards.blue
const hex = '#4660BC'
const bg = 'rgba(70,96,188,0.08)'

export const metadata: Metadata = {
  title: 'Delta SkyMiles® Blue American Express Card | Delta for Business',
  description:
    'Delta Blue Amex: No annual fee, 10K mile welcome bonus, 2x on Delta and dining. Best entry card for Delta flyers.',
  alternates: { canonical: 'https://business.delta.com/cards/personal/blue' },
}

export default function BlueCardPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #1A2B6B 0%, #4660BC 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                Personal card · No annual fee
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-32)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
                Delta SkyMiles® Blue American Express Card
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
                {card.bestFor}
              </p>
              <a
                href={card.applyUrl}
                className="inline-flex items-center gap-2 font-semibold"
                style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
              >
                Apply now
                <i className="ph-bold ph-arrow-right text-sm"></i>
              </a>
            </div>
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/cards/delta-amex-blue-card.png" alt="Delta SkyMiles Blue Card" style={{ width: '340px', maxWidth: '100%', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome bonus */}
      {card.welcomeBonus && (
        <section className="py-8 px-6" style={{ background: 'var(--color-delta-blue-50)', borderBottom: '1px solid var(--color-neutral-10)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-600)', marginBottom: '4px' }}>Welcome offer</p>
            <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
              {card.welcomeBonus.miles.toLocaleString()} bonus miles
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              After spending ${card.welcomeBonus.spendRequirement.toLocaleString()} on purchases in your first {card.welcomeBonus.months} months.
            </p>
          </div>
        </section>
      )}

      {/* Key stats */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Annual fee', value: '$0' },
              { label: 'Miles on Delta', value: '2x' },
              { label: 'Miles on dining', value: '2x' },
              { label: 'All other spend', value: '1x' },
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
              { icon: 'ph-fill ph-check-square', title: 'No annual fee', body: 'Keep this card long-term without paying an annual fee — useful for building Delta loyalty history.' },
              { icon: 'ph-fill ph-airplane', title: '2x on Delta & dining', body: 'Double miles on all Delta-operated flights and at restaurants worldwide.' },
              { icon: 'ph-fill ph-ticket', title: '20% in-flight savings', body: 'Get a 20% statement credit on eligible in-flight purchases (food, drinks, and headsets).' },
              { icon: 'ph-fill ph-check-square', title: 'Free first checked bag', body: 'When you pay for your ticket with this card on Delta-operated flights.' },
              { icon: 'ph-fill ph-shield', title: 'No foreign transaction fees', body: 'Use abroad without incurring additional fees on international purchases.' },
              { icon: 'ph-fill ph-lock', title: 'Amex purchase protection', body: 'Eligible purchases backed by purchase protection and extended warranty coverage.' },
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

      {/* Compare up */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Want more perks?</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Gold adds a companion cert and $100 Delta Stays credit for $150/year.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/cards/personal/gold" className="inline-flex items-center gap-2 font-semibold" style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-0)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}>
              See Gold card <i className="ph-bold ph-arrow-right text-sm"></i>
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
