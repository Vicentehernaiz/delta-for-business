import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Priority Upgrade Certificates | Delta for Business',
  description:
    'Delta Corporate Priority upgrade certificates for mid-market and enterprise corporate accounts. Complimentary upgrades to First Class and Comfort+ for your business travelers.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority/upgrades' },
}

const items = [
  {
    icon: 'ph-fill ph-certificate',
    title: 'Annual upgrade certificates',
    desc: 'Corporate Priority accounts receive a set of confirmed upgrade certificates per year, allocatable to travelers at the administrator\'s discretion.',
  },
  {
    icon: 'ph-fill ph-airplane-takeoff',
    title: 'Confirmed upgrades — not waitlist',
    desc: 'Unlike standard Medallion upgrade requests, Corporate Priority certificates confirm at time of redemption, subject to cabin availability at booking.',
  },
  {
    icon: 'ph-fill ph-star',
    title: 'Priority in the upgrade queue',
    desc: 'Even without using a certificate, Corporate Priority travelers are placed ahead of non-corporate travelers with equivalent Medallion status in the same-day upgrade queue.',
  },
  {
    icon: 'ph-fill ph-users',
    title: 'Certificates usable by any employee',
    desc: 'Administrators can allocate upgrade certificates to any enrolled employee — reward top travelers, incentivize bookings, or cover client-facing trips.',
  },
]

const comparison = [
  { label: 'Upgrade type', corporate: 'Confirmed at booking', standard: 'Waitlist — confirmed at gate' },
  { label: 'Queue position', corporate: 'Above non-corporate travelers', standard: 'Medallion status-based order' },
  { label: 'Certificate allocation', corporate: 'Admin controls distribution', standard: 'Personal to cardholder' },
  { label: 'Applicable to', corporate: 'First Class & Comfort+', standard: 'Varies by card / status tier' },
  { label: 'Availability', corporate: 'MSA & CSA accounts only', standard: 'Medallion / Amex cardholders' },
]

export default function UpgradesPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <Link href="/benefits/corporate-priority" style={{ color: 'rgba(255,255,255,0.6)' }}>Corporate Priority</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Upgrade Priority</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Corporate Priority — Upgrade Certificates
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Corporate Priority gives your company confirmed upgrade certificates and priority queue placement — not just a longer waitlist.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            How upgrade priority works
          </h2>
          <div className="space-y-4">
            {items.map((item) => (
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
            Corporate upgrade vs. standard upgrade
          </h2>
          <div className="rounded-[var(--radius-l)] overflow-hidden" style={{ border: '1px solid var(--color-neutral-10)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-delta-blue-700)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-neutral-0)' }}></th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Corporate Priority</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'rgba(255,255,255,0.6)' }}>Standard / Medallion</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-neutral-700)' }}>{row.label}</td>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>{row.corporate}</td>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)' }}>{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)', lineHeight: 1.6 }}>
              <strong>Availability:</strong> Upgrade certificates and priority queue placement are included in Mid-Market (MSA) and Enterprise (CSA) agreements. Not available in self-serve SkyMiles for Business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Get confirmed upgrades for your team
          </h2>
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
