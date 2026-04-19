import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Sky Club for Business Travelers | Lounges & Access',
  description:
    'Access Delta Sky Club lounges with the right Delta Amex card or Medallion status. Complimentary Wi-Fi, food, drinks, and a quiet workspace. 50+ locations.',
  alternates: { canonical: 'https://business.delta.com/benefits/sky-club' },
}

export default function SkyClubPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Sky Club</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Delta Sky Club — your office in the airport
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Escape the gate. Complimentary Wi-Fi, hot food, premium drinks, showers, and quiet workspaces at 50+ locations worldwide.
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '24px' }}>
            What's inside every Sky Club
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-wifi-high', title: 'Complimentary Wi-Fi', desc: 'High-speed Wi-Fi for all members — no passwords, no time limits.' },
              { icon: 'ph-fill ph-fork-knife', title: 'Hot food & snacks', desc: 'Full hot food service, fresh snacks, and a rotating menu at most locations.' },
              { icon: 'ph-fill ph-wine', title: 'Premium bar', desc: 'Beer, wine, spirits, and non-alcoholic beverages included.' },
              { icon: 'ph-fill ph-shower', title: 'Showers', desc: 'Private shower suites at most flagship locations for cleaning up between flights.' },
              { icon: 'ph-fill ph-monitor', title: 'Workspaces', desc: 'Quiet zones, charging stations, and private phone booths for calls.' },
              { icon: 'ph-fill ph-newspaper', title: 'Media & entertainment', desc: 'Newspapers, magazines, and TV throughout the club.' },
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

      {/* Access options */}
      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '24px' }}>
            How to access Sky Club
          </h2>
          <div className="space-y-4">
            {[
              {
                method: 'Delta Amex Reserve or Reserve Business card',
                access: 'Unlimited visits for cardholder + 2 guests per visit',
                color: 'var(--color-card-reserve)',
              },
              {
                method: 'Delta Amex Platinum or Platinum Business card',
                access: 'Day passes included; unlimited access at certain spend levels',
                color: 'var(--color-card-platinum)',
              },
              {
                method: 'Diamond Medallion status',
                access: 'Unlimited Sky Club access for Diamond Medallion members',
                color: 'var(--color-medallion-diamond)',
              },
              {
                method: 'SkyMiles for Business redemption',
                access: 'Purchase 12-month Sky Club membership with company miles',
                color: 'var(--color-delta-red-400)',
              },
              {
                method: 'Day pass purchase',
                access: '$50 per visit at the door, or at discounted rates with certain cards',
                color: 'var(--color-neutral-400)',
              },
            ].map((item) => (
              <div
                key={item.method}
                className="rounded-[var(--radius-l)] p-5 flex items-center gap-5"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', borderLeft: `4px solid ${item.color}` }}
              >
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{item.method}</p>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>{item.access}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Which card gets you in?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>Compare all Delta Amex cards side by side to see which Sky Club access level fits your travel pattern.</p>
          <Link
            href="/cards/compare"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 28px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Compare cards <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
