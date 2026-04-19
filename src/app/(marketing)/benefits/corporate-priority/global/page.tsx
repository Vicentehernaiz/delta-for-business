import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Priority Global Partner Coverage | Delta for Business',
  description:
    'Delta Corporate Priority global partner coverage for enterprise accounts. Enjoy Corporate Priority recognition on Air France, KLM, LATAM, and Virgin Atlantic flights worldwide.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority/global' },
}

const partners = [
  {
    code: 'AF',
    name: 'Air France',
    alliance: 'SkyTeam',
    region: 'Europe',
    benefits: ['Priority check-in at CDG, ORY, NTE, LYS, and other AF hubs', 'Priority boarding on AF-operated flights', 'Preferred seat access at time of booking'],
  },
  {
    code: 'KL',
    name: 'KLM',
    alliance: 'SkyTeam',
    region: 'Europe',
    benefits: ['Priority check-in at AMS Schiphol', 'Priority boarding and lounge access at AMS', 'Preferred seating on KLM-operated routes'],
  },
  {
    code: 'LA',
    name: 'LATAM',
    alliance: 'oneworld (LATAM)',
    region: 'Latin America',
    benefits: ['Priority services at GRU, SCL, BOG, LIM, and other LATAM hubs', 'Priority boarding on LATAM-operated flights', 'Preferred seating on eligible routes'],
  },
  {
    code: 'VS',
    name: 'Virgin Atlantic',
    alliance: 'Independent',
    region: 'UK & Transatlantic',
    benefits: ['Priority check-in at LHR, MAN, and other VS airports', 'Priority boarding on VS-operated flights', 'Upper Class lounge access at LHR for qualifying travelers'],
  },
]

const coverageItems = [
  {
    icon: 'ph-fill ph-globe-hemisphere-west',
    title: 'Same benefits, different airlines',
    desc: 'Enterprise accounts receive Corporate Priority recognition across SkyTeam and select partner airlines — not just on Delta metal. Your corporate agreement travels with your travelers.',
  },
  {
    icon: 'ph-fill ph-briefcase',
    title: 'Consistent experience abroad',
    desc: 'Travelers on international routes who connect onto partner carriers maintain their corporate priority status throughout the journey, not just on the Delta leg.',
  },
  {
    icon: 'ph-fill ph-handshake',
    title: 'Bilateral recognition',
    desc: 'Global coverage is part of Delta\'s SkyTeam relationships and bilateral agreements. Benefits are codified in your Corporate Sales Agreement, not dependent on individual status tiers.',
  },
  {
    icon: 'ph-fill ph-chart-line-up',
    title: 'Miles still earn on partner flights',
    desc: 'Employees earn personal SkyMiles and MQDs on eligible partner airline flights booked under your corporate agreement. Company miles apply on Delta-operated segments.',
  },
]

export default function GlobalPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <Link href="/benefits/corporate-priority" style={{ color: 'rgba(255,255,255,0.6)' }}>Corporate Priority</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Global Coverage</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Corporate Priority — Global Partner Coverage
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '540px', lineHeight: 1.6 }}>
            Enterprise accounts receive Corporate Priority recognition on Air France, KLM, LATAM, and Virgin Atlantic — not just Delta flights.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            How global coverage works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {coverageItems.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-l)] p-5 flex gap-4" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
                <i className={`${item.icon} text-2xl flex-shrink-0`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Partner airlines and benefits
          </h2>
          <div className="space-y-4">
            {partners.map((p) => (
              <div key={p.code} className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{p.name}</p>
                    <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)' }}>{p.region} · {p.alliance}</p>
                  </div>
                  <span className="rounded-full px-3 py-1 font-bold" style={{ background: 'var(--color-delta-blue-700)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}>{p.code}</span>
                </div>
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.6 }}>
                      <i className="ph-fill ph-check-circle flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-red-400)', fontSize: '1rem' }}></i>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              <i className="ph-fill ph-info mr-2" style={{ color: 'var(--color-delta-blue-300)' }}></i>
              Enterprise accounts only
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', lineHeight: 1.7 }}>
              Global Corporate Priority partner coverage is available exclusively to Enterprise accounts with an active Corporate Sales Agreement (CSA). Mid-Market (MSA) accounts receive Corporate Priority on Delta-operated flights only. Benefits on partner airlines are subject to each carrier&apos;s operational policies and may vary by route and cabin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Take Corporate Priority worldwide
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}>
            Contact Delta sales to discuss an Enterprise agreement with global partner coverage.
          </p>
          <Link
            href="/enroll/enterprise"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', boxShadow: 'var(--shadow-button)' }}
          >
            Contact sales <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
