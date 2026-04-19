import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Medallion Elite Status for Business Travelers | Silver Gold Platinum Diamond',
  description:
    'Understand Delta Medallion status and how business travel earns it faster. MQD-only qualification since 2024. Silver at $5K · Gold at $10K · Platinum at $15K · Diamond at $28K.',
  alternates: { canonical: 'https://business.delta.com/medallion' },
}

const tiers = [
  {
    id: 'silver',
    name: 'Silver Medallion',
    mqd: '$5,000',
    color: 'var(--color-medallion-silver)',
    accent: '#8a9bb0',
    perks: ['Zone 5 → Zone 3 boarding', 'Complimentary Comfort+ upgrades', '7x miles per dollar', 'Priority security at select airports'],
    href: '/medallion/silver',
  },
  {
    id: 'gold',
    name: 'Gold Medallion',
    mqd: '$10,000',
    color: 'var(--color-medallion-gold)',
    accent: '#b8860b',
    perks: ['Zone 2 boarding', 'Complimentary First Class upgrades', '8x miles per dollar', 'Same-day standby at no charge'],
    href: '/medallion/gold',
  },
  {
    id: 'platinum',
    name: 'Platinum Medallion',
    mqd: '$15,000',
    color: 'var(--color-medallion-platinum)',
    accent: '#6a5acd',
    perks: ['Zone 1 boarding', 'Confirmed upgrades on select flights', '9x miles per dollar', 'Sky Club access at cost of $50/visit'],
    href: '/medallion/platinum',
  },
  {
    id: 'diamond',
    name: 'Diamond Medallion',
    mqd: '$28,000',
    color: 'var(--color-medallion-diamond)',
    accent: '#1a3a5c',
    perks: ['Zone 1 boarding', 'Complimentary Sky Club access', '11x miles per dollar', 'Choice Benefit: worldwide upgrade certificates, companion certificates, or bonus miles'],
    href: '/medallion/diamond',
  },
]

const faqs = [
  {
    q: 'Is Medallion the same as SkyMiles?',
    a: 'No. SkyMiles is a currency — your balance goes up when you earn miles and down when you redeem them. Medallion is a status tier — it determines how Delta treats you (boarding zone, upgrades, priority). They are separate systems.',
  },
  {
    q: 'Do you have to apply for Medallion status?',
    a: 'No. Medallion qualification is automatic. When your MQD balance crosses the threshold for a tier, status activates immediately — no application, no enrollment, no waiting.',
  },
  {
    q: 'Does credit card spend count toward Medallion?',
    a: 'Yes. Delta Amex Platinum and Reserve cardholders receive an MQD Headstart at the start of each Medallion year and earn MQD Boosts from eligible card spending. This accelerates qualification without additional flying.',
  },
  {
    q: 'Can my company earn or grant Medallion status?',
    a: 'Companies cannot earn Medallion status — it is strictly personal. However, companies enrolled in SkyMiles for Business can redeem company miles for Silver Medallion certificates, which grant 90-day Silver status to a named employee.',
  },
]

export default function MedallionPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '12px', textTransform: 'uppercase' }}>
            Individual Elite Status
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Status That Rewards How You Actually Travel
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Medallion status is earned by individual travelers based on dollars spent on Delta flights. Four tiers, one metric: Medallion Qualifying Dollars.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full px-5 py-3" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <i className="ph-fill ph-info text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}></i>
            <span style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.85)' }}>
              Medallion ≠ SkyMiles. Medallion is your status tier. SkyMiles is your currency balance.
            </span>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="text-center mb-12">
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
              Four Medallion tiers
            </h2>
            <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-500)' }}>
              Status is earned on a calendar year (Jan–Dec). MQDs are reset each January.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tiers.map((tier) => (
              <Link
                key={tier.id}
                href={tier.href}
                className="rounded-[var(--radius-l)] p-6 block"
                style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{tier.name}</p>
                  <span className="rounded-full px-3 py-1 font-bold" style={{ background: tier.accent, color: '#fff', fontSize: 'var(--type-scale-13)' }}>
                    {tier.mqd} MQD
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>
                      <i className="ph-fill ph-check-circle flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-red-400)', fontSize: '1rem' }}></i>
                      {perk}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 font-semibold" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)' }}>
                  Full {tier.name} benefits <i className="ph-bold ph-arrow-right text-xs"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Three ways to earn MQDs
          </h2>
          <div className="space-y-4">
            {[
              { icon: 'ph-fill ph-airplane', title: 'Flight spend', desc: 'Every dollar spent on eligible Delta-operated or marketed flights counts as one MQD. Base fare + carrier-imposed surcharges qualify; taxes and fees do not.' },
              { icon: 'ph-fill ph-credit-card', title: 'Card MQD Headstart', desc: 'Delta Amex Platinum cardholders receive a $2,500 MQD Headstart at the start of each Medallion year. Reserve cardholders receive a $3,000 Headstart — already halfway to Silver before January flights.' },
              { icon: 'ph-fill ph-trend-up', title: 'Card MQD Boost', desc: 'Delta Amex Platinum and Reserve cardholders earn additional MQDs from eligible card spending. Platinum: $1 MQD per $25 spent. Reserve: $1 MQD per $10 spent. Applies to any purchase, not just Delta.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-l)] p-5 flex gap-4" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}>
                <i className={`${item.icon} text-2xl flex-shrink-0`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Medallion and your company program
          </h2>
          <div className="rounded-[var(--radius-l)] p-6 mb-6" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
              Medallion and SkyMiles for Business are parallel, independent systems
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', lineHeight: 1.7 }}>
              An employee can hold Diamond Medallion status while their company is at the Member tier — and vice versa. Corporate Priority benefits from a company agreement stack on top of individual Medallion benefits; neither replaces the other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-stack', title: 'Benefits stack', desc: 'Corporate Priority (from company agreement) and Medallion benefits (from personal flying) are additive. A Platinum Medallion traveler with a corporate agreement gets both.' },
              { icon: 'ph-fill ph-certificate', title: 'Company can gift Silver', desc: 'Companies enrolled in SkyMiles for Business can redeem company miles for Silver Medallion certificates — granting 90 days of Silver status to any named employee.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-l)] p-5 flex gap-4" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
                <i className={`${item.icon} text-2xl flex-shrink-0`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}>
                <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>{faq.q}</p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Medallion Overview', desc: 'Full tier breakdown and benefits comparison', href: '/medallion/overview', icon: 'ph-fill ph-medal' },
              { label: 'MQD Calculator', desc: 'Estimate how many flights to reach your target tier', href: '/medallion/mqd-calculator', icon: 'ph-fill ph-calculator' },
              { label: 'Delta Amex Cards', desc: 'Cards that add MQD Headstart and Boost', href: '/cards', icon: 'ph-fill ph-credit-card' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[var(--radius-l)] p-5 flex gap-3 items-start"
                style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)', textDecoration: 'none' }}
              >
                <i className={`${link.icon} text-xl flex-shrink-0 mt-0.5`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '2px' }}>{link.label}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)' }}>{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
