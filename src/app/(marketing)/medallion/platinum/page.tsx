import type { Metadata } from 'next'
import Link from 'next/link'
import { medallionTiers } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Delta Platinum Medallion for Business | $15,000 MQD | Delta for Business',
  description: 'Platinum Medallion for business travelers: $15K MQDs, Sky Club access, Choice Benefits, 120-hour upgrade window, 80% bonus miles.',
  alternates: { canonical: 'https://business.delta.com/medallion/platinum' },
}

const tier = medallionTiers.platinum

export default function PlatinumPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #3b1f6b 0%, var(--color-medallion-platinum) 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <i className="ph-fill ph-medal" style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.85)' }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>
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
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.55)' }}>MQD required</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.skymilesMult}×</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.55)' }}>miles per $</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.upgradeWindow}hr</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.55)' }}>upgrade window</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-28)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>{tier.freeBags}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.55)' }}>free bags</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>Platinum benefits for business travelers</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '28px', lineHeight: 1.6 }}>Sky Club access, 5-day upgrade windows, and the first Choice Benefit — the high-volume traveler's tier.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { icon: 'ph-airplane-takeoff', title: 'Sky Priority boarding (top 2 priority)', body: 'Board among the first passengers — position #2 in the Sky Priority queue, ahead of Gold and Silver.' },
              { icon: 'ph-trend-up', title: '+80% SkyMiles bonus', body: `Earn ${tier.skymilesMult}× miles per dollar. An employee spending $15K on Delta generates far more personal SkyMiles than at lower tiers.` },
              { icon: 'ph-clock', title: '120-hour upgrade window', body: '5 full days of advance notice — upgrades routinely clear before the day of departure for domestic routes.' },
              { icon: 'ph-bag-simple', title: '3 free checked bags', body: 'Three bags fly free for the traveler and up to 8 companions — ideal for longer international business trips.' },
              { icon: 'ph-door-open', title: 'Sky Club access at $50/visit', body: 'Pay-per-visit Sky Club access at every domestic and international Delta terminal location.' },
              { icon: 'ph-gift', title: 'Choice Benefits (1 per year)', body: 'Choose one annual benefit: a companion certificate, upgrade certificates, or a bonus SkyMiles deposit.' },
            ].map((b) => (
              <div
                key={b.title}
                style={{ display: 'flex', gap: '16px', padding: '16px', borderRadius: 'var(--radius-l)', background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
              >
                <i className={`ph ph-${b.icon}`} style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px', color: 'var(--color-medallion-platinum)' }}></i>
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
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>How to reach Platinum</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '28px' }}>Three realistic paths to $15,000 MQD for your business travelers.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { v: '~30 flights', s: 'At ~$500 avg fare, 30 one-way trips reach $15K MQD — typical for weekly domestic fliers.' },
              { v: 'Regular road warrior', s: 'An employee flying 2–3 times per month on Delta domestically reaches Platinum naturally.' },
              { v: '6 transatlantic biz', s: '6 transatlantic business class tickets at ~$2,500 each cover the full $15K threshold.' },
            ].map((s) => (
              <div key={s.v} style={{ borderRadius: 'var(--radius-l)', padding: '20px', background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
                <p style={{ fontSize: 'var(--type-scale-20)', fontWeight: '700', color: 'var(--color-medallion-platinum)', marginBottom: '6px' }}>{s.v}</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>Upgrade likelihood at Platinum</h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)', marginBottom: '24px' }}>Platinum is queue position #2 — upgrades are a reliable part of most domestic trips.</p>
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
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-medallion-platinum)' }}>{tier.mainCabinPlusUpgrade}</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--color-neutral-10)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)' }}>→ First Class</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-medallion-platinum)' }}>{tier.firstClassUpgrade}</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--color-neutral-10)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)' }}>→ Delta One</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-neutral-500)' }}>{tier.deltaOneUpgrade}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '56px 24px', borderTop: '1px solid var(--color-neutral-10)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>Compare tiers or calculate your path</p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Diamond adds unlimited Sky Club, a second Choice Benefit, and top upgrade queue position.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/medallion/gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', fontWeight: '600', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
            >
              <i className="ph-bold ph-arrow-left" style={{ fontSize: '0.875rem' }}></i>
              Gold
            </Link>
            <Link
              href="/medallion/diamond"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', fontWeight: '600', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
            >
              Diamond
              <i className="ph-bold ph-arrow-right" style={{ fontSize: '0.875rem' }}></i>
            </Link>
            <Link
              href="/medallion/mqd-calculator"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', fontWeight: '600', boxShadow: 'var(--shadow-button)', textDecoration: 'none' }}
            >
              MQD calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
