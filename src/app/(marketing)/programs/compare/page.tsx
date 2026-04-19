import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta vs United vs American Airlines for Business | 2026 Comparison',
  description:
    'Compare Delta for Business against United for Business and AAdvantage Business. See which airline offers the best corporate travel program for your company size.',
  openGraph: {
    title: 'Delta vs United vs American: Corporate Travel Programs',
    description: 'Side-by-side comparison of the three major US airline business programs.',
    images: ['/og/programs-compare.png'],
  },
  alternates: { canonical: 'https://business.delta.com/programs/compare' },
}

const rows = [
  {
    category: 'Enrollment',
    feature: 'Self-serve online enrollment',
    delta: { value: '✅ Free, instant', positive: true },
    united: { value: '❌ Sales call required', positive: false },
    american: { value: '❌ Sales call required', positive: false },
  },
  {
    category: 'Enrollment',
    feature: 'Minimum company size',
    delta: { value: '1 traveler', positive: true },
    united: { value: 'Varies by market', positive: false },
    american: { value: 'Varies by market', positive: false },
  },
  {
    category: 'Miles earning',
    feature: 'Company earns miles on flights',
    delta: { value: '✅ Up to 10 miles/$', positive: true },
    united: { value: '✅ Up to 10 miles/$', positive: true },
    american: { value: '✅ Yes', positive: true },
  },
  {
    category: 'Miles earning',
    feature: 'Employee earns personal miles simultaneously',
    delta: { value: '✅ Full personal miles + MQDs', positive: true },
    united: { value: '⚠️ Reduced personal miles', positive: false },
    american: { value: '⚠️ Reduced personal miles', positive: false },
  },
  {
    category: 'Miles earning',
    feature: 'Employee MQD earning unaffected',
    delta: { value: '✅ MQDs unaffected', positive: true },
    united: { value: '❌ PQPs reduced', positive: false },
    american: { value: '❌ EQMs reduced', positive: false },
  },
  {
    category: 'Benefits',
    feature: 'Corporate Priority / seat access',
    delta: { value: '✅ Full suite (mid/enterprise)', positive: true },
    united: { value: '✅ Business Select perks', positive: true },
    american: { value: '✅ Corporate preferred seats', positive: true },
  },
  {
    category: 'Benefits',
    feature: 'Dedicated account manager',
    delta: { value: '✅ Mid-market & enterprise', positive: true },
    united: { value: '✅ Global accounts', positive: true },
    american: { value: '✅ Larger accounts', positive: true },
  },
  {
    category: 'Benefits',
    feature: 'Negotiated fares',
    delta: { value: '✅ Mid-market & enterprise', positive: true },
    united: { value: '✅ Mid/large accounts', positive: true },
    american: { value: '✅ Mid/large accounts', positive: true },
  },
  {
    category: 'Technology',
    feature: 'Free management dashboard',
    delta: { value: '✅ Included', positive: true },
    united: { value: '⚠️ Via TripLink partner', positive: false },
    american: { value: '⚠️ Via partner tools', positive: false },
  },
  {
    category: 'Technology',
    feature: 'TMC / Concur integration',
    delta: { value: '✅ Native integration', positive: true },
    united: { value: '✅ TripLink integration', positive: true },
    american: { value: '✅ Partners available', positive: true },
  },
  {
    category: 'Global',
    feature: 'Partner airline corporate coverage',
    delta: { value: '✅ AF, KLM, LATAM, VA (enterprise)', positive: true },
    united: { value: '✅ Star Alliance members', positive: true },
    american: { value: '✅ Oneworld members', positive: true },
  },
  {
    category: 'Global',
    feature: 'Domestic network size',
    delta: { value: '✅ #1 in on-time performance', positive: true },
    united: { value: '✅ Strong hub coverage', positive: true },
    american: { value: '✅ Large domestic network', positive: true },
  },
]

const categories = [...new Set(rows.map((r) => r.category))]

export default function ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center justify-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.6)' }}>Programs</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Compare airlines</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Delta vs United vs American for Business
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Which airline business program delivers the most value for your company? An honest side-by-side.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th className="text-left p-4 sticky left-0" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600', background: 'var(--color-neutral-0)', minWidth: '220px' }}>Feature</th>
                  <th className="p-4 text-center" style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-red-400)', background: 'var(--color-delta-blue-50)', borderBottom: '3px solid var(--color-delta-red-400)', minWidth: '160px' }}>
                    <i className="ph-fill ph-triangle block text-2xl mb-1" style={{ color: 'var(--color-delta-red-400)' }}></i>
                    Delta
                  </th>
                  <th className="p-4 text-center" style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-5)', borderBottom: '3px solid var(--color-neutral-400)', minWidth: '160px' }}>United</th>
                  <th className="p-4 text-center" style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-5)', borderBottom: '3px solid var(--color-neutral-400)', minWidth: '160px' }}>American</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <>
                    <tr key={`cat-${cat}`}>
                      <td
                        colSpan={4}
                        className="px-4 py-3"
                        style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-500)', background: 'var(--color-neutral-5)', borderTop: '1px solid var(--color-neutral-10)' }}
                      >
                        {cat}
                      </td>
                    </tr>
                    {rows.filter((r) => r.category === cat).map((row, i) => (
                      <tr key={row.feature} style={{ borderBottom: '1px solid var(--color-neutral-10)', background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}>
                        <td className="p-4 sticky left-0" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', fontWeight: '600', background: 'inherit' }}>{row.feature}</td>
                        <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: row.delta.positive ? 'var(--color-success)' : 'var(--color-neutral-600)', background: 'var(--color-delta-blue-50)' }}>
                          {row.delta.value}
                        </td>
                        <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: row.united.positive ? 'var(--color-success)' : 'var(--color-neutral-600)' }}>
                          {row.united.value}
                        </td>
                        <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: row.american.positive ? 'var(--color-success)' : 'var(--color-neutral-600)' }}>
                          {row.american.value}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Delta */}
      <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            The Delta difference
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '28px' }}>Three advantages that distinguish Delta from the competition for business travelers.</p>
          <div className="space-y-5">
            {[
              {
                icon: 'ph-fill ph-arrows-split',
                title: 'True simultaneous dual-earn',
                desc: 'Delta is the only major US airline where company and employee earn full miles on the same flight — neither reduces the other, and employee MQDs toward Medallion status are completely unaffected.',
              },
              {
                icon: 'ph-fill ph-buildings',
                title: 'Self-serve enrollment with no minimums',
                desc: 'Any company, any size, can enroll online for free in minutes. United and American both require a sales call and minimum spend thresholds before activating a corporate account.',
              },
              {
                icon: 'ph-fill ph-trend-up',
                title: '14 consecutive years as #1 in Business Travel News',
                desc: 'Consistent operational performance — Delta consistently leads major carriers in on-time performance, completion rate, and customer satisfaction among business travelers.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-l)] p-6 flex gap-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-delta-red-50)' }}>
                  <i className={`${item.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--type-scale-17)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Ready to switch or get started?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Find the right Delta program in 60 seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/program-selector"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
            >
              Find my program <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.12)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              See all programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
