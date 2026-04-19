import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Priority Preferred Seating | Delta for Business',
  description:
    'Delta Corporate Priority preferred seating gives mid-market and enterprise business accounts access to the best available seats at the time of booking.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority/seating' },
}

export default function SeatingPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <Link href="/benefits/corporate-priority" style={{ color: 'rgba(255,255,255,0.6)' }}>Corporate Priority</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Preferred Seating</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Corporate Priority — Preferred Seating
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Your corporate travelers get access to preferred and premium seats at booking — no upgrade lottery, no waiting at the gate.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            What preferred seating includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'ph-fill ph-seat', title: 'Main Cabin preferred seats', desc: 'Access to exit rows, bulkhead seats, and preferred zones at the time of booking — before seats open to general public.' },
              { icon: 'ph-fill ph-arrow-fat-up', title: 'Automatic Comfort+ selection', desc: 'Corporate Priority accounts are automatically assigned Comfort+ seating when available on eligible fares.' },
              { icon: 'ph-fill ph-star', title: 'First Class upgrade priority', desc: 'Corporate Priority travelers are prioritized in the upgrade queue ahead of non-corporate travelers with equivalent Medallion status.' },
              { icon: 'ph-fill ph-globe', title: 'Partner airline coverage', desc: 'For enterprise accounts, preferred seating benefits extend to Air France, KLM, LATAM, and Virgin Atlantic where applicable.' },
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

      <section className="py-12" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>
              <i className="ph-fill ph-info mr-2" style={{ color: 'var(--color-delta-blue-300)' }}></i>
              Availability
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', lineHeight: 1.6 }}>
              Preferred seating benefits are included in Mid-Market (MSA) and Enterprise (CSA) agreements. They are not available in the self-serve SkyMiles for Business program.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Get preferred seating for your team
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}>Contact Delta sales to discuss a Mid-Market or Enterprise agreement.</p>
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
