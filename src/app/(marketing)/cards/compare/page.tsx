import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cards, cardOrder, businessCardOrder } from '@/config/cards'

export const metadata: Metadata = {
  title: 'Compare All Delta SkyMiles American Express Cards | Delta for Business',
  description:
    'Compare all 7 Delta SkyMiles Amex cards side-by-side: annual fees, earning rates, MQD headstarts, Sky Club access, companion certs.',
  alternates: { canonical: 'https://business.delta.com/cards/compare' },
}

// Brand palette per Amex card tier — matches CSS tokens in tokens.css
const tierColors: Record<string, string> = {
  blue: '#5970c2',
  gold: '#8f6c32',
  platinum: '#6f7f8d',
  reserve: '#726394',
}

function CheckCell({ value }: { value: string | boolean | null }) {
  if (value === null || value === 'None' || value === false) {
    return <i className="ph-bold ph-minus text-sm" style={{ color: 'var(--color-neutral-300)' }}></i>
  }
  if (value === true || value === 'Full' || value === 'Unlimited for cardholder + 2 guests') {
    return <i className="ph-fill ph-check-circle text-base" style={{ color: 'var(--color-success)' }}></i>
  }
  return <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-delta-blue-600)' }}>{value as string}</span>
}

export default function CompareCardsPage() {
  const allCards = [
    ...cardOrder.map((id) => cards[id]),
    ...businessCardOrder.map((id) => cards[id]),
  ]

  const rows: { label: string; key: (c: typeof allCards[0]) => ReactNode }[] = [
    { label: 'Annual fee', key: (c) => c.annualFee === 0 ? <span style={{ color: 'var(--color-success)', fontWeight: '700' }}>$0</span> : `$${c.annualFee}` },
    { label: 'First-year fee', key: (c) => c.firstYearFee === 0 ? <span style={{ color: 'var(--color-success)', fontWeight: '700' }}>Waived</span> : `$${c.firstYearFee}` },
    { label: 'Welcome bonus', key: (c) => c.welcomeBonus ? `${(c.welcomeBonus.miles / 1000).toFixed(0)}K miles` : '—' },
    { label: 'Spend for bonus', key: (c) => c.welcomeBonus ? `$${c.welcomeBonus.spendRequirement.toLocaleString()}` : '—' },
    { label: 'Delta purchases', key: (c) => c.earningRates.find((r) => r.category === 'Delta purchases')?.rate ?? '1x' },
    { label: 'Dining', key: (c) => c.earningRates.find((r) => r.category === 'Dining')?.rate ?? '—' },
    { label: 'Everything else', key: (c) => c.earningRates.find((r) => r.category === 'Everything else')?.rate ?? '1x' },
    { label: 'MQD head start', key: (c) => c.mqdHeadstart > 0 ? `+$${c.mqdHeadstart.toLocaleString()}` : <CheckCell value={null} /> },
    { label: 'MQD boost rate', key: (c) => c.mqdBoostRate !== 'None' ? c.mqdBoostRate : <CheckCell value={null} /> },
    { label: 'Companion cert', key: (c) => c.companionCert ? c.companionCert.cabin : <CheckCell value={null} /> },
    { label: 'Sky Club access', key: (c) => <CheckCell value={c.skyClubAccess} /> },
    { label: 'Free checked bag', key: () => <CheckCell value={true} /> },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-12 px-6" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
            Delta SkyMiles × American Express
          </p>
          <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '8px' }}>
            Compare all 7 cards
          </h1>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)' }}>
            4 personal + 3 business cards, side by side.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 0' }}>
            <thead>
              <tr>
                <th
                  className="text-left pb-3 pr-4"
                  style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', fontWeight: '600', minWidth: '140px', position: 'sticky', left: 0, background: 'var(--color-neutral-0)' }}
                ></th>
                {allCards.map((card) => {
                  const color = tierColors[card.tier]
                  return (
                    <th
                      key={card.id}
                      className="pb-3 px-3 text-center"
                      style={{ minWidth: '120px', verticalAlign: 'bottom' }}
                    >
                      <div
                        className="rounded-[var(--radius-l)] mb-2 flex items-center justify-center overflow-hidden"
                        style={{ background: `${color}10`, height: '60px' }}
                      >
                        <Image src={card.image} alt={card.name} width={96} height={60} className="object-contain" />
                      </div>
                      <div style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)', lineHeight: 1.3 }}>
                        {card.family === 'business' ? 'Business ' : ''}{card.tier.replace('-business', '').charAt(0).toUpperCase() + card.tier.replace('-business', '').slice(1)}
                      </div>
                    </th>
                  )
                })}
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-neutral-10)' }}>
                <td
                  className="pb-4 pr-4"
                  style={{ position: 'sticky', left: 0, background: 'var(--color-neutral-0)' }}
                >
                  <span style={{ fontSize: 'var(--type-scale-11)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700', color: 'var(--color-neutral-400)' }}>
                    ← Personal · Business →
                  </span>
                </td>
                {allCards.map((card) => (
                  <td key={card.id} className="pb-4 px-3 text-center">
                    <a
                      href={card.applyUrl}
                      className="inline-block font-semibold"
                      style={{ height: '32px', lineHeight: '32px', padding: '0 12px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-12)' }}
                    >
                      Apply
                    </a>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  style={{ background: rowIdx % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}
                >
                  <td
                    className="py-3 pr-4 font-semibold"
                    style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', position: 'sticky', left: 0, background: rowIdx % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}
                  >
                    {row.label}
                  </td>
                  {allCards.map((card) => (
                    <td
                      key={card.id}
                      className="py-3 px-3 text-center"
                      style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}
                    >
                      {row.key(card)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', marginTop: '16px' }}>
            ¹ Free checked bag applies on Delta-operated flights when the card is used to pay. Annual fees shown are standard rates; first-year waivers may vary by promotion.
          </p>
        </div>
      </section>

      {/* Pick guide */}
      <section className="py-12 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Which card fits you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'You rarely pay annual fees', card: 'Blue ($0/yr)', color: tierColors.blue, href: '/cards/personal/blue' },
              { title: 'You want a companion cert each year', card: 'Gold ($150/yr)', color: tierColors.gold, href: '/cards/personal/gold' },
              { title: 'You\'re chasing Medallion status', card: 'Platinum ($350/yr)', color: tierColors.platinum, href: '/cards/personal/platinum' },
              { title: 'You want unlimited Sky Club access', card: 'Reserve ($650/yr)', color: tierColors.reserve, href: '/cards/personal/reserve' },
              { title: 'You\'re a business owner with shipping / ad spend', card: 'Gold Business ($150/yr)', color: tierColors.gold, href: '/cards/business/gold-business' },
              { title: 'You want MQD acceleration for your business', card: 'Platinum Business ($350/yr)', color: tierColors.platinum, href: '/cards/business/platinum-business' },
              { title: 'You want Sky Club + Delta One companion cert', card: 'Reserve Business ($650/yr)', color: tierColors.reserve, href: '/cards/business/reserve-business' },
            ].map((pick) => (
              <Link
                key={pick.title}
                href={pick.href}
                className="flex items-center justify-between p-4 rounded-[var(--radius-l)]"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)', textDecoration: 'none' }}
              >
                <div>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '2px' }}>If…</p>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{pick.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', color: pick.color, marginTop: '2px' }}>→ {pick.card}</p>
                </div>
                <i className="ph-bold ph-arrow-right text-lg" style={{ color: pick.color, flexShrink: 0 }}></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <Link
          href="/tools/program-selector"
          className="inline-flex items-center gap-2 font-semibold"
          style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
        >
          Take the 60-second program quiz
          <i className="ph-bold ph-arrow-right text-sm"></i>
        </Link>
      </section>
    </main>
  )
}
