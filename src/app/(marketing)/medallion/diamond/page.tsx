import type { Metadata } from 'next'
import Link from 'next/link'
import { medallionTiers } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Delta Diamond Medallion for Business | $28,000 MQD | Delta for Business',
  description: 'Diamond Medallion for business travelers: $28K MQDs, unlimited Sky Club, Delta 360° concierge, top upgrade priority, 120% bonus miles.',
  alternates: { canonical: 'https://business.delta.com/medallion/diamond' },
}

const tier = medallionTiers.diamond

export default function DiamondPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #001120 0%, var(--color-medallion-diamond) 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/medallion/diamond.svg" alt="Diamond Medallion" style={{ width: '52px', height: '46px', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }} />
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.82)' }}>
                Medallion for Business
              </p>
              <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1 }}>
                {tier.name}
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', marginBottom: '32px', lineHeight: 1.6 }}>
            {tier.businessTagline}
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>${tier.mqdThreshold.toLocaleString()}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.82)' }}>MQD required</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.skymilesMult}×</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.82)' }}>miles per $</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.upgradeWindow}hr</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.82)' }}>upgrade window</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.freeBags}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.82)' }}>free bags</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>Diamond benefits for business travelers</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '28px', lineHeight: 1.6 }}>The full suite — concierge service, unlimited lounge access, and the highest upgrade priority on every flight.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { icon: 'ph-airplane-takeoff', title: 'Sky Priority boarding (queue #1)', body: 'First in line among all Medallion tiers. Board before anyone else in the Sky Priority group on every flight.' },
              { icon: 'ph-trend-up', title: '+120% SkyMiles bonus', body: `Earn ${tier.skymilesMult}× miles per dollar — more than double what a non-elite traveler earns. Every flight is a significant earn event.` },
              { icon: 'ph-clock', title: '120-hour upgrade window + top queue', body: '5 days of advance notice with priority #1 position — the highest upgrade clearance rate of any tier.' },
              { icon: 'ph-bag-simple', title: '3 free checked bags', body: 'Three bags fly free for the traveler and up to 8 companions — no baggage fees on any Delta-operated flight.' },
              { icon: 'ph-door-open', title: 'Unlimited Sky Club access + guests', body: 'Complimentary, unlimited access to every Sky Club location. Bring guests — no conditions, no spending minimums.' },
              { icon: 'ph-gift', title: 'Choice Benefits (2 per year)', body: 'Two annual Choice Benefits at Diamond level — options include Global Upgrade Certificates for Delta One cabin.' },
              { icon: 'ph-phone', title: 'Delta 360° dedicated concierge', body: 'Proactive rebooking, private check-in assistance, and a dedicated specialist team available before disruptions escalate.' },
            ].map((b) => (
              <div
                key={b.title}
                style={{ display: 'flex', gap: '16px', padding: '16px', borderRadius: 'var(--radius-l)', background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
              >
                <i className={`ph ph-${b.icon}`} style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px', color: 'var(--color-medallion-diamond)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{b.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-delta-blue-50)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'start', gap: '16px', background: 'var(--color-neutral-0)', borderRadius: 'var(--radius-l)', padding: '24px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-neutral-10)' }}>
            <i className="ph-fill ph-buildings" style={{ fontSize: '1.5rem', color: 'var(--color-delta-blue-300)', flexShrink: 0, marginTop: '2px' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
                Business context
              </p>
              <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>
                {tier.businessContext}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-5)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>How to reach Diamond</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '28px' }}>Three realistic paths to $28,000 MQD for your highest-frequency business travelers.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { v: '~56 flights', s: 'At ~$500 avg fare, 56 one-way trips — roughly one flight per week for the full year.' },
              { v: 'Weekly road warrior', s: 'An employee flying Delta 3+ times per week domestically, all year, will reach Diamond naturally.' },
              { v: '10+ transatlantic biz', s: '10+ transatlantic business class segments plus card spend boosts from Delta Reserve can clear $28K.' },
            ].map((s) => (
              <div key={s.v} style={{ borderRadius: 'var(--radius-l)', padding: '20px', background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
                <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: 'var(--color-medallion-diamond)', marginBottom: '6px' }}>{s.v}</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>Upgrade likelihood at Diamond</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '24px' }}>Diamond is queue position #1 — the highest upgrade clearance rate available. Delta One via Global Upgrade Certificates.</p>
          <div style={{ background: 'var(--color-neutral-0)', borderRadius: 'var(--radius-l)', overflow: 'hidden', border: '1px solid var(--color-neutral-10)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-neutral-5)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', fontWeight: '600' }}>Upgrade type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', fontWeight: '600' }}>Likelihood</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: '1px solid var(--color-neutral-10)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)' }}>→ Main Cabin+</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-medallion-diamond)' }}>{tier.mainCabinPlusUpgrade}</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--color-neutral-10)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)' }}>→ First Class</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-medallion-diamond)' }}>{tier.firstClassUpgrade}</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--color-neutral-10)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)' }}>→ Delta One</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{tier.deltaOneUpgrade}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '56px 24px', borderTop: '1px solid var(--color-neutral-10)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Already at Diamond? Talk to us.</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Enterprise accounts with multiple Diamond travelers may qualify for additional corporate benefits and concierge support.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/medallion/platinum"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', fontWeight: '600', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
            >
              <i className="ph-bold ph-arrow-left" style={{ fontSize: '0.875rem' }}></i>
              Platinum
            </Link>
            <Link
              href="/medallion/mqd-calculator"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', fontWeight: '600', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
            >
              MQD calculator
            </Link>
            <Link
              href="/enroll/enterprise"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', fontWeight: '600', boxShadow: 'var(--shadow-button)', textDecoration: 'none' }}
            >
              Contact sales
              <i className="ph-bold ph-arrow-right" style={{ fontSize: '0.875rem' }}></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
