import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Redeeming SkyMiles for Business | eCredits, Upgrades & More',
  description:
    'Redeem company SkyMiles as eCredits (~1.5–2¢/mile), employee transfers, or Sky Club memberships. Personal miles book flights and upgrades.',
  alternates: { canonical: 'https://business.delta.com/skymiles/redeeming' },
}

export default function RedeemingPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/skymiles" style={{ color: 'rgba(255,255,255,0.6)' }}>SkyMiles for Business</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Redeeming miles</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Two types of miles, two ways to spend them
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Company miles fund your next trips via eCredits. Employee personal miles unlock upgrades, award flights, and companion tickets.
          </p>
        </div>
      </section>

      {/* Company miles redemption */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--color-delta-red-50)' }}>
              <i className="ph-fill ph-buildings text-xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
            </div>
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
              Company miles — 3 redemption options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: 'ph-fill ph-wallet',
                title: 'eCredits',
                value: '~1.5–2¢ / mile',
                desc: 'Convert company miles to Delta eCredits via the portal. Credits generate within 4 hours and can be applied to any future Delta booking at checkout. One eCredit per ticket maximum. Cannot stack. Since June 2025: also redeemable via GDS and travel agencies.',
                highlight: true,
              },
              {
                icon: 'ph-fill ph-user',
                title: 'Transfer to employees',
                value: 'Immediate',
                desc: 'Transfer company miles directly to any linked employee\'s personal SkyMiles account. The transfer is immediate and irreversible. Transferred miles are then the employee\'s personal property.',
              },
              {
                icon: 'ph-fill ph-armchair',
                title: 'Sky Club membership',
                value: '12-month membership',
                desc: 'Purchase a Delta Sky Club annual membership for a company traveler using company miles. The membership covers access to all Sky Club locations.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-l)] p-6"
                style={{
                  background: item.highlight ? 'var(--color-delta-blue-50)' : 'var(--color-neutral-5)',
                  border: item.highlight ? '1.5px solid var(--color-delta-blue-300)' : '1px solid var(--color-neutral-10)',
                }}
              >
                <div className="flex items-start gap-4">
                  <i className={`${item.icon} text-2xl flex-shrink-0`} style={{ color: item.highlight ? 'var(--color-delta-blue-300)' : 'var(--color-delta-red-400)' }}></i>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{item.title}</h3>
                      <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{item.value}</span>
                    </div>
                    <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal miles */}
      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--color-delta-blue-50)' }}>
              <i className="ph-fill ph-user text-xl" style={{ color: 'var(--color-delta-blue-300)' }}></i>
            </div>
            <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
              Personal employee miles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-airplane-takeoff', title: 'Award flights', desc: 'Redeem for flights on Delta and 30+ partner airlines. No blackout dates on Delta flights. Miles needed vary by route and availability.' },
              { icon: 'ph-fill ph-arrow-fat-up', title: 'Cabin upgrades', desc: 'Use miles to upgrade from Main Cabin to First Class or Delta One. Available as a bidding upgrade or confirmation upgrade.' },
              { icon: 'ph-fill ph-users-two', title: 'Companion certificates', desc: 'Delta Amex Platinum and Reserve cardholders receive annual companion certificates for domestic Main Cabin or First Class.' },
              { icon: 'ph-fill ph-armchair', title: 'Sky Club day passes', desc: 'Purchase individual Sky Club day passes with personal miles when you don\'t have a card that includes unlimited access.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}>
                <div className="flex gap-3">
                  <i className={`${item.icon} text-xl flex-shrink-0`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                  <div>
                    <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
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
            Start earning to redeem
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Free enrollment. Use the ROI calculator to estimate how many eCredits your travel could generate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/enroll/small-business"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
            >
              Get started free <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.12)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              ROI calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
