import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { cards, cardOrder, businessCardOrder } from '@/config/cards'

export const metadata: Metadata = {
  title: 'Delta SkyMiles Credit Cards | Delta for Business',
  description:
    'Compare Delta SkyMiles American Express cards: Blue ($0), Gold ($150), Platinum ($350), Reserve ($650). Find the best card for your travel goals.',
  alternates: { canonical: 'https://business.delta.com/cards' },
}

// Brand palette per Amex card tier — matches CSS tokens in tokens.css
// Blue = #5970c2 · Gold = #8f6c32 · Platinum = #6f7f8d silver-grey · Reserve = #726394 purple
const tierColors: Record<string, string> = {
  blue: '#5970c2',
  gold: '#8f6c32',
  platinum: '#6f7f8d',
  reserve: '#726394',
}

const tierBg: Record<string, string> = {
  blue: 'rgba(89,112,194,0.10)',
  gold: 'rgba(143,108,50,0.10)',
  platinum: 'rgba(111,127,141,0.10)',
  reserve: 'rgba(114,99,148,0.10)',
}

export default function CardsPage() {
  const personalCards = cardOrder.map((id) => cards[id])
  const businessCards = businessCardOrder.map((id) => cards[id])

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-6"
        style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p style={{ fontSize: 'var(--type-scale-13)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
            Delta SkyMiles × American Express
          </p>
          <h1 style={{ fontSize: 'var(--type-scale-48)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '16px' }}>
            Earn miles on every purchase
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 32px' }}>
            Seven cards across personal and business. Pick by annual fee, earning rate, and the perks that match how you fly.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/cards/compare"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
            >
              Compare all 7 cards
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/tools/program-selector"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.1)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Find my program
            </Link>
          </div>
        </div>
      </section>

      {/* Key facts bar */}
      <section style={{ background: 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'No annual fee option', value: '$0', desc: 'Delta Blue card' },
            { label: 'Top welcome bonus', value: '80K miles', desc: 'Reserve card' },
            { label: 'Max earning rate', value: '3x miles', desc: 'On Delta purchases' },
            { label: 'MQD head start', value: '$2,500', desc: 'Platinum & Reserve' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <p style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{f.value}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>{f.label}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              Personal cards
            </h2>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)' }}>
              For individual travelers. Miles go to your personal SkyMiles account.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalCards.map((card) => {
              const color = tierColors[card.tier]
              const bg = tierBg[card.tier]
              return (
                <div
                  key={card.id}
                  className="rounded-[var(--radius-l)] overflow-hidden flex flex-col"
                  style={{ background: 'var(--color-neutral-0)', border: `1px solid ${color}22`, boxShadow: 'var(--shadow-card)' }}
                >
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: bg }}
                  >
                    <Image src={card.image} alt={card.name} width={220} height={139} className="object-contain drop-shadow-lg" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="capitalize font-bold px-2 py-0.5 rounded-full"
                        style={{ background: bg, color, fontSize: 'var(--type-scale-11)' }}
                      >
                        {card.tier}
                      </span>
                      <span style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                        {card.annualFee === 0 ? 'No fee' : `$${card.annualFee}/yr`}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {card.name}
                    </h3>
                    <div className="space-y-1.5 mb-4 flex-1">
                      {card.earningRates.slice(0, 3).map((r) => (
                        <div key={r.category} className="flex justify-between">
                          <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{r.category}</span>
                          <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color }}>{r.rate}</span>
                        </div>
                      ))}
                    </div>
                    {card.welcomeBonus && (
                      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginBottom: '12px' }}>
                        Earn <strong>{card.welcomeBonus.miles.toLocaleString()} miles</strong> after ${card.welcomeBonus.spendRequirement.toLocaleString()} spend
                      </p>
                    )}
                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/cards/personal/${card.slug}`}
                        className="flex-1 text-center font-semibold"
                        style={{ height: '36px', lineHeight: '36px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-13)', border: '1px solid var(--color-neutral-10)' }}
                      >
                        Details
                      </Link>
                      <a
                        href={card.applyUrl}
                        className="flex-1 text-center font-semibold"
                        style={{ height: '36px', lineHeight: '36px', borderRadius: 'var(--radius-full)', background: bg, color, fontSize: 'var(--type-scale-13)' }}
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business cards */}
      <section className="py-16 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              Business cards
            </h2>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)' }}>
              For businesses. Earn miles on business purchases — shipping, advertising, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {businessCards.map((card) => {
              const color = tierColors[card.tier]
              const bg = tierBg[card.tier]
              return (
                <div
                  key={card.id}
                  className="rounded-[var(--radius-l)] overflow-hidden flex flex-col"
                  style={{ background: 'var(--color-neutral-0)', border: `1px solid ${color}22`, boxShadow: 'var(--shadow-card)' }}
                >
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: bg }}
                  >
                    <Image src={card.image} alt={card.name} width={220} height={139} className="object-contain drop-shadow-lg" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="capitalize font-bold px-2 py-0.5 rounded-full"
                        style={{ background: bg, color, fontSize: 'var(--type-scale-11)' }}
                      >
                        Business {card.tier}
                      </span>
                      <span style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                        {card.annualFee === 0 ? 'No fee' : `$${card.annualFee}/yr`}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {card.name}
                    </h3>
                    <div className="space-y-1.5 mb-4 flex-1">
                      {card.earningRates.slice(0, 3).map((r) => (
                        <div key={r.category} className="flex justify-between">
                          <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{r.category}</span>
                          <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color }}>{r.rate}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginBottom: '12px' }}>
                      {card.bestFor}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/cards/business/${card.slug}`}
                        className="flex-1 text-center font-semibold"
                        style={{ height: '36px', lineHeight: '36px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-13)', border: '1px solid var(--color-neutral-10)' }}
                      >
                        Details
                      </Link>
                      <a
                        href={card.applyUrl}
                        className="flex-1 text-center font-semibold"
                        style={{ height: '36px', lineHeight: '36px', borderRadius: 'var(--radius-full)', background: bg, color, fontSize: 'var(--type-scale-13)' }}
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
            Not sure which card to pick?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
            Compare all 7 cards side-by-side or take a 60-second quiz to find the right fit.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/cards/compare"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
            >
              Side-by-side comparison
            </Link>
            <Link
              href="/tools/program-selector"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-16)', border: '1px solid var(--color-neutral-10)' }}
            >
              Take the quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
