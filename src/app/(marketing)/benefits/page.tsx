import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta for Business Benefits | Delta for Business',
  description:
    'All Delta for Business benefits: Corporate Priority seating, Sky Club access, dual-earn miles, Meetings & Groups, and partner perks.',
  alternates: { canonical: 'https://business.delta.com/benefits' },
}

const benefitSections = [
  {
    slug: 'corporate-priority',
    icon: 'ph-fill ph-seat',
    title: 'Corporate Priority',
    subtitle: 'Upgrade positioning, boarding, and seating advantages for mid-market and enterprise customers.',
    tags: ['Mid-Market', 'Enterprise'],
    features: ['Priority upgrade queue', 'Priority boarding', 'Preferred seating', 'Service recovery'],
  },
  {
    slug: 'sky-club',
    icon: 'ph-fill ph-armchair',
    title: 'Delta Sky Club',
    subtitle: 'Lounge access for Diamond Medallions, Reserve cardholders, and eligible business travelers.',
    tags: ['Diamond', 'Reserve card'],
    features: ['150+ lounge locations', 'Wi-Fi & workspaces', 'Food & beverages', 'Shower suites'],
  },
  {
    slug: 'meetings-groups',
    icon: 'ph-fill ph-users',
    title: 'Meetings & Groups',
    subtitle: 'Discounted group fares and event management tools for 10+ travelers.',
    tags: ['All programs'],
    features: ['Group fares from 10 pax', 'Name changes until departure', 'Complimentary ticket', 'Dedicated coordinator'],
  },
]

export default function BenefitsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
            Delta for Business
          </p>
          <h1 style={{ fontSize: 'var(--type-scale-48)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '16px' }}>
            Benefits & perks
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 32px' }}>
            From lounge access to priority boarding, discover what comes with your program and how to unlock more.
          </p>
          <Link
            href="/tools/program-selector"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Find your program
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>

      {/* Universal benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              Available to all programs
            </h2>
            <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)' }}>
              These benefits apply whether you're an individual traveler or a Fortune 500 company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: 'ph-fill ph-airplane', title: 'Dual-earn miles', body: 'Company and employees earn SkyMiles on the same flight — simultaneously, no trade-off.' },
              { icon: 'ph-fill ph-currency-dollar', title: 'eCredit redemptions', body: 'Convert company miles to eCredits at ~1.7¢/mile for future Delta bookings.' },
              { icon: 'ph-fill ph-chart-line', title: 'Spend & miles dashboard', body: 'Real-time view of company spend, miles earned, tier progress, and team activity.' },
              { icon: 'ph-fill ph-check-square', title: 'Free first checked bag', body: 'Free first bag on Delta-operated flights for travelers linked to your account.' },
              { icon: 'ph-fill ph-user-plus', title: 'Traveler management', body: 'Add, remove, and manage travelers — invite by email, see their miles and flights.' },
              { icon: 'ph-fill ph-shield', title: 'No enrollment fee', body: 'SkyMiles for Business is free to join. You pay no monthly or annual management fee.' },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-[var(--radius-l)] p-5"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
              >
                <i className={`${b.icon} text-2xl mb-3 block`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
                <h3 style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>{b.title}</h3>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered benefits */}
      <section className="py-16 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              Premium benefits
            </h2>
            <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)' }}>
              Additional perks unlocked by program tier, Medallion status, or Amex card.
            </p>
          </div>
          <div className="space-y-5">
            {benefitSections.map((b) => (
              <Link
                key={b.slug}
                href={`/benefits/${b.slug}`}
                className="block rounded-[var(--radius-l)] p-6"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)', textDecoration: 'none' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--color-delta-blue-50)' }}
                    >
                      <i className={`${b.icon} text-xl`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>{b.title}</h3>
                        {b.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--color-delta-blue-50)', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-11)', fontWeight: '700' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '12px' }}>{b.subtitle}</p>
                      <div className="flex gap-3 flex-wrap">
                        {b.features.map((f) => (
                          <span key={f} className="flex items-center gap-1.5" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>
                            <i className="ph-fill ph-check-circle text-sm" style={{ color: 'var(--color-success)' }}></i>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <i className="ph-bold ph-arrow-right text-lg flex-shrink-0" style={{ color: 'var(--color-neutral-400)' }}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual program benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Benefits by program
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-neutral-10)' }}>
                  <th className="pb-3 pr-4 text-left" style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', minWidth: '160px' }}>Benefit</th>
                  {['Individual', 'SMB', 'Mid-Market', 'Enterprise'].map((p) => (
                    <th key={p} className="pb-3 px-3 text-center" style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', minWidth: '100px' }}>{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Dual-earn miles', values: [true, true, true, true] },
                  { label: 'eCredit redemptions', values: [false, true, true, true] },
                  { label: 'Dashboard + reporting', values: [false, true, true, true] },
                  { label: 'Traveler roster', values: [false, true, true, true] },
                  { label: 'Hertz Five Star', values: [true, false, false, false] },
                  { label: 'CLEAR Plus discount', values: [true, false, false, false] },
                  { label: 'Industrious coworking', values: [true, false, false, false] },
                  { label: 'Negotiated fares', values: [false, false, true, true] },
                  { label: 'Corporate Priority', values: [false, false, true, true] },
                  { label: 'Dedicated account manager', values: [false, false, true, true] },
                  { label: 'Unused ticket transfers', values: [false, false, false, true] },
                  { label: 'Partner airline coverage', values: [false, false, false, true] },
                ].map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-5)' }}>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', fontWeight: '600' }}>{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-3 px-3 text-center">
                        {v
                          ? <i className="ph-fill ph-check-circle text-base" style={{ color: 'var(--color-success)' }}></i>
                          : <i className="ph-bold ph-minus text-sm" style={{ color: 'var(--color-neutral-300)' }}></i>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
            Not sure which program fits?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Answer 4 questions and we'll match you to the right program and card combination.
          </p>
          <Link
            href="/tools/program-selector"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Find my program
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
