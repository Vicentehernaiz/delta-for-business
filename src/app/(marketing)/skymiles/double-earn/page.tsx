import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Double Earn — Company + Employee SkyMiles | Delta for Business',
  description:
    'Delta SkyMiles for Business double earn: your company and every employee earn full miles on the same flight simultaneously. No other major airline offers this.',
  alternates: { canonical: 'https://business.delta.com/skymiles/double-earn' },
}

export default function DoubleEarnPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/skymiles" style={{ color: 'rgba(255,255,255,0.6)' }}>SkyMiles for Business</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Double earn</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Double earn: one flight, two accounts
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Every eligible Delta flight earns miles in your company account AND in each employee's personal SkyMiles account — at the same time, at full rates.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            A real example
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
            Acme Corp has 5 employees. Each flies NYC → LAX (non-hub, $600 fare, Main Cabin) once a month.
          </p>
          <div className="rounded-[var(--radius-l)] overflow-hidden" style={{ border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
            <div className="px-6 py-4" style={{ background: 'var(--color-delta-blue-700)' }}>
              <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>
                NYC → LAX • 5 travelers • $600 fare • Main Cabin • Non-hub route
              </p>
            </div>
            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-500)', marginBottom: '8px' }}>Company account</p>
                <p style={{ fontSize: 'var(--type-scale-36)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>15,000</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>miles (5 travelers × $600 × 5 miles/$)</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-500)', marginBottom: '8px' }}>Each employee (personal)</p>
                <p style={{ fontSize: 'var(--type-scale-36)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-300)' }}>~1,500</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>personal miles + MQDs each</p>
              </div>
            </div>
            <div className="px-6 py-4" style={{ background: 'var(--color-neutral-5)', borderTop: '1px solid var(--color-neutral-10)' }}>
              <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)' }}>
                <strong>Per month:</strong> 15,000 company miles + 7,500 personal employee miles across 5 travelers — from the same 5 flights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            How Delta compares
          </h2>
          <div className="overflow-x-auto rounded-[var(--radius-l)]" style={{ border: '1px solid var(--color-neutral-10)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-neutral-10)' }}>
                  <th className="text-left p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', fontWeight: '700' }}>Feature</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-red-400)', fontWeight: '700' }}>Delta</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', fontWeight: '700' }}>United</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', fontWeight: '700' }}>American</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Company earns miles', '✅ Full rate', '✅ Full rate', '✅ Full rate'],
                  ['Employee earns personal miles simultaneously', '✅ Full rate', '⚠️ Reduced', '⚠️ Reduced'],
                  ['Employee MQDs unaffected', '✅ Yes', '❌ Reduced', '❌ Reduced'],
                  ['Free self-serve enrollment', '✅ Yes', '❌ Sales call required', '❌ Sales call required'],
                  ['No minimum spend to start', '✅ Yes', '❌ Threshold required', '❌ Threshold required'],
                ].map(([label, delta, united, american], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
                    <td className="p-4" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', fontWeight: '600' }}>{label}</td>
                    <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-success)' }}>{delta}</td>
                    <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{united}</td>
                    <td className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{american}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <Link href="/programs/compare" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-300)', fontWeight: '600' }}>
              Full competitive comparison →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Start double-earning today
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>Free enrollment. Your next flight earns in both accounts automatically.</p>
          <Link
            href="/enroll/small-business"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Get started free <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
