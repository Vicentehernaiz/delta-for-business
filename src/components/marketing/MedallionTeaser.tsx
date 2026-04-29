import Link from 'next/link'
import { medallionTiers, medallionOrder } from '@/config/medallion'

export function MedallionTeaser() {
  return (
    <section style={{ background: 'var(--color-neutral-5)' }} className="py-20">
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-600)',
              lineHeight: 'var(--line-height-heading-xl)',
              letterSpacing: 'var(--letter-spacing-heading-xl)',
              marginBottom: '12px',
            }}
          >
            Medallion Status — simplified to one number
          </h2>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'var(--color-neutral-600)' }}>
            Since 2024, Delta qualifies entirely on spend (MQD). No flight count. Business travel earns status fast.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {medallionOrder.map((tierId) => {
            const tier = medallionTiers[tierId]
            if (!tier) return null
            return (
              <div
                key={tierId}
                className="rounded-[var(--radius-l)] p-6 text-center"
                style={{
                  background: 'var(--color-neutral-0)',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--color-neutral-10)',
                }}
              >
                <div className="mx-auto mb-4 flex items-center justify-center" style={{ width: '56px', height: '50px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/assets/images/medallion/${tierId}.svg`}
                    alt={`${tier.name} Medallion`}
                    style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 'var(--type-scale-18)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: tier.color,
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontSize: 'var(--type-scale-28)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: 'var(--color-delta-blue-700)',
                    marginTop: '4px',
                  }}
                >
                  ${(tier.mqdThreshold / 1000).toFixed(0)}K MQD
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '8px' }}>
                  Zone {tier.boardingZone} boarding · +{tier.skymilesBonus}% miles
                </p>
              </div>
            )
          })}
        </div>

        {/* Key differentiators */}
        <div
          className="rounded-[var(--radius-l)] p-6 mb-8"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'MQD-only since 2024',
                desc: 'No flight count. Spend your way to status.',
              },
              {
                title: 'Card MQD Headstart',
                desc: 'Platinum/Reserve cards give up to $2,500 annual headstart toward status.',
              },
              {
                title: 'Corporate Priority in upgrade queue',
                desc: 'Business travelers rank above non-corporate travelers of the same tier.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <i
                  className="ph-fill ph-check-circle text-xl flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-delta-red-400)' }}
                ></i>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/medallion"
            className="inline-flex items-center gap-2 font-semibold transition-colors"
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-blue-600)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Explore Medallion Status
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
