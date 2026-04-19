import type { Metadata } from 'next'
import Link from 'next/link'
import { medallionTiers, medallionOrder } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Medallion Status Overview | Delta for Business',
  description:
    'Learn how Delta Medallion status works in 2024–2025: MQD-only thresholds, Silver $5K, Gold $10K, Platinum $15K, Diamond $28K.',
  alternates: { canonical: 'https://business.delta.com/medallion/overview' },
}

const tierHex: Record<string, string> = {
  silver: '#9ca3af',
  gold: '#d97706',
  platinum: '#7c3aed',
  diamond: '#002d59',
}

export default function OverviewPage() {
  const tiers = medallionOrder.map((id) => medallionTiers[id])

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
            Delta SkyMiles Medallion
          </p>
          <h1 style={{ fontSize: 'var(--type-scale-48)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '16px' }}>
            Elite status — how it works
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 32px' }}>
            Medallion is Delta's individual frequent flyer tier — separate from your company's SkyMiles for Business tier. Earn it by spending on Delta flights.
          </p>
          <Link
            href="/medallion/mqd-calculator"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Calculate my MQD target
            <i className="ph-bold ph-calculator text-sm"></i>
          </Link>
        </div>
      </section>

      {/* Key change callout */}
      <section className="py-8 px-6" style={{ background: 'var(--color-delta-blue-50)', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <i className="ph-fill ph-info text-xl flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-blue-600)' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>
                2024 Medallion update: MQD-only qualification
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)' }}>
                Since 2024, Medallion status requires only Medallion Qualifying Dollars (MQD) — no segment or mile minimums. Silver: $5K · Gold: $10K · Platinum: $15K · Diamond: $28K. Card holders get a MQD head start of $2,500 (Platinum/Reserve cards).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier comparison */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '32px', textAlign: 'center' }}>
            Four tiers. One currency.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier) => {
              const hex = tierHex[tier.id]
              return (
                <Link
                  key={tier.id}
                  href={`/medallion/${tier.id}`}
                  className="rounded-[var(--radius-l)] p-5 flex flex-col"
                  style={{ background: 'var(--color-neutral-0)', border: `2px solid ${hex}30`, boxShadow: 'var(--shadow-card)', textDecoration: 'none' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <i className="ph-fill ph-medal text-2xl" style={{ color: hex }}></i>
                    <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: hex }}>{tier.name}</h3>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between">
                      <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>MQD needed</span>
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: hex }}>${tier.mqdThreshold.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Miles bonus</span>
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>+{tier.skymilesBonus}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Upgrade window</span>
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>{tier.upgradeWindow}hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Sky Club</span>
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: tier.skyClubAccess === 'None' ? 'var(--color-neutral-400)' : 'var(--color-success)' }}>
                        {tier.skyClubAccess === 'None' ? 'No' : tier.skyClubAccess}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Choice benefits</span>
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: tier.choiceBenefits ? 'var(--color-success)' : 'var(--color-neutral-400)' }}>
                        {tier.choiceBenefits ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                  <div
                    className="mt-4 flex items-center justify-between pt-3"
                    style={{ borderTop: '1px solid var(--color-neutral-10)' }}
                  >
                    <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: hex }}>See benefits</span>
                    <i className="ph-bold ph-arrow-right text-sm" style={{ color: hex }}></i>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to earn */}
      <section className="py-16 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '24px' }}>
            How to earn MQDs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: 'ph-fill ph-airplane',
                title: 'Flying Delta',
                body: 'Every dollar spent on Delta-marketed flights counts 1:1 toward MQDs. Base fares and most fees count; taxes do not.',
              },
              {
                icon: 'ph-fill ph-credit-card',
                title: 'Card spend',
                body: 'Delta Amex cards (Platinum and Reserve) convert card purchases into MQDs: $15–$25 spend = $1 MQD depending on your card.',
              },
              {
                icon: 'ph-fill ph-rocket',
                title: 'MQD head start',
                body: 'Platinum and Reserve cardholders receive a $2,500 MQD head start each year — credited automatically when you renew.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-l)] p-5"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
              >
                <i className={`${item.icon} text-2xl mb-3 block`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
                <h3 style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
            How many MQDs do you need?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Use our calculator to see exactly how far your spend gets you — including card boosts.
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
