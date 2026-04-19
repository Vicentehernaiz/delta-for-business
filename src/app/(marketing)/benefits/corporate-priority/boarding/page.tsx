import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Priority Boarding | Delta for Business',
  description:
    'Delta Corporate Priority Zone 1 boarding for corporate travelers. Board early, find bin space, and reduce pre-flight stress on every Delta flight.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority/boarding' },
}

export default function BoardingPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <Link href="/benefits/corporate-priority" style={{ color: 'rgba(255,255,255,0.6)' }}>Corporate Priority</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Priority Boarding</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Corporate Priority — Priority Boarding
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            Corporate travelers board in Zone 1 — right after First Class — on every eligible Delta flight.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            What Zone 1 boarding means
          </h2>
          <div className="space-y-4">
            {[
              { icon: 'ph-fill ph-number-circle-one', title: 'Board after First Class', desc: 'Zone 1 passengers board immediately after First Class and Delta One — before Comfort+, Main Cabin, and all other zones.' },
              { icon: 'ph-fill ph-bag', title: 'Guaranteed overhead space', desc: 'Early boarding means overhead bin space near your seat — no checking bags at the gate on full flights.' },
              { icon: 'ph-fill ph-clock', title: 'Less pre-flight stress', desc: 'Settle in, get organized, and start your work or rest before the cabin fills up.' },
              { icon: 'ph-fill ph-globe', title: 'Works on partner airlines', desc: 'For Enterprise accounts: priority boarding recognition extends to Air France, KLM, LATAM, and Virgin Atlantic.' },
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

          <div className="mt-8 rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)', lineHeight: 1.6 }}>
              <strong>Availability:</strong> Priority boarding is included in Mid-Market (MSA) and Enterprise (CSA) agreements. Not available in self-serve SkyMiles for Business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Upgrade your team to Zone 1
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
