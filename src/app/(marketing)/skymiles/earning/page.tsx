import type { Metadata } from 'next'
import Link from 'next/link'
import { smbEarningRates } from '@/config/smb-tiers'
import { airlinePartners, earningPartners } from '@/config/partners'

export const metadata: Metadata = {
  title: 'Earning SkyMiles for Business | Rates, Partners & Tips',
  description:
    'Company miles earning rates on Delta flights by fare class and route type. Plus 23 partner airlines, hotels, rental cars and dining that earn SkyMiles.',
  alternates: { canonical: 'https://business.delta.com/skymiles/earning' },
}

export default function EarningPage() {
  const hotelPartners = earningPartners.filter((p) => p.category === 'hotel')
  const carPartners = earningPartners.filter((p) => p.category === 'car-rental')

  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/skymiles" style={{ color: 'rgba(255,255,255,0.6)' }}>SkyMiles for Business</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Earning miles</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Earning company miles
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Rates vary by route type and cabin. Non-hub routes in premium cabins earn the highest rates.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            Company miles per dollar spent
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
            Applies to Plus and Elite tier accounts. Member tier earns zero company miles.
          </p>
          <div className="overflow-x-auto rounded-[var(--radius-l)]" style={{ border: '1px solid var(--color-neutral-10)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-neutral-5)' }}>
                  <th className="text-left p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600' }}>Route type</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600' }}>Main</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600' }}>Comfort+</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600' }}>First</th>
                  <th className="text-center p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600' }}>Delta One</th>
                </tr>
              </thead>
              <tbody>
                {(['non-hub', 'hub'] as const).map((route, i) => {
                  const rates = smbEarningRates.filter((r) => r.routeType === route)
                  return (
                    <tr key={route} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
                      <td className="p-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
                        {route === 'non-hub' ? 'Non-hub routes' : 'Hub routes (ATL/DTW/MSP/SLC)'}
                      </td>
                      {(['main', 'comfort-plus', 'first', 'delta-one'] as const).map((cabin) => {
                        const r = rates.find((x) => x.cabin === cabin)
                        return (
                          <td key={cabin} className="p-4 text-center" style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                            {r ? `${r.milesPerDollar}x` : '—'}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-500)', marginTop: '12px' }}>
            Hub cities: Atlanta (ATL), Detroit (DTW), Minneapolis (MSP), Salt Lake City (SLC).
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            Partner airline earning (personal miles)
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Employee personal SkyMiles earn on 23 partner airlines. Company miles earn on Delta-operated (DL) flights only.
          </p>
          <div className="flex flex-wrap gap-2">
            {airlinePartners.map((p) => (
              <span
                key={p.code}
                className="px-3 py-2 rounded-full"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)' }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Earn beyond flying (personal miles)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-bed', title: 'Hotels', desc: hotelPartners.slice(0, 4).map((p) => p.name).join(', ') + ' and more' },
              { icon: 'ph-fill ph-car', title: 'Car rentals', desc: (carPartners.length > 0 ? carPartners.map((p) => p.name).join(', ') : 'Hertz, Avis, Budget, National, Enterprise') },
              { icon: 'ph-fill ph-credit-card', title: 'Delta Amex cards', desc: 'Earn 2x miles on Delta purchases + bonus categories on everyday spending' },
              { icon: 'ph-fill ph-fork-knife', title: 'Dining & shopping', desc: 'Delta SkyMiles Dining + SkyMiles Shopping portal partners' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-[var(--radius-l)]" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
                <i className={`${item.icon} text-2xl flex-shrink-0`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Calculate your earning potential
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Use the ROI calculator to estimate company miles based on your travel volume.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            ROI calculator <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
