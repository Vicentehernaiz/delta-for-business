import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Corporate Priority | Delta for Business',
  description:
    'Delta Corporate Priority: preferred seating, priority upgrade queue, priority boarding, service recovery, and global partner coverage for mid-market and enterprise customers.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority' },
}

export default function CorporatePriorityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
            Benefits hub · Corporate Priority
          </p>
          <h1 style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1, marginBottom: '12px' }}>
            Corporate Priority
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', marginBottom: '24px' }}>
            A suite of travel management tools, upgrade positioning, and seat inventory advantages available to mid-market and enterprise customers.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full font-semibold" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}>
              Mid-Market program
            </span>
            <span className="px-3 py-1 rounded-full font-semibold" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}>
              Corporate Pro
            </span>
          </div>
        </div>
      </section>

      {/* Corporate Priority sub-benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
            What's included
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
            Corporate Priority is a bundled benefit — all components below are included for qualifying customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                href: '/benefits/corporate-priority/seating',
                icon: 'ph-fill ph-seat',
                title: 'Preferred seating',
                body: 'Access to Comfort+ and preferred Main Cabin seats for ticketed travelers, even before check-in. Ensures your road warriors get better seats on every flight.',
              },
              {
                href: '/benefits/corporate-priority/boarding',
                icon: 'ph-fill ph-airplane-takeoff',
                title: 'Priority boarding',
                body: 'Corporate Priority travelers board ahead of general boarding — reducing time in the aisle and ensuring overhead bin space.',
              },
              {
                href: '/benefits/corporate-priority/upgrades',
                icon: 'ph-fill ph-arrow-fat-up',
                title: 'Upgrade queue priority',
                body: 'Negotiated customers receive preferred positioning in the upgrade queue — ahead of non-priority travelers at the same Medallion tier.',
              },
              {
                href: '/benefits/corporate-priority/service-recovery',
                icon: 'ph-fill ph-lifebuoy',
                title: 'Service recovery',
                body: 'Dedicated service recovery tools: priority rebooking during irregular operations, proactive compensation, and corporate-specific support pathways.',
              },
              {
                href: '/benefits/corporate-priority/global',
                icon: 'ph-fill ph-globe',
                title: 'Global partner coverage',
                body: 'Corporate Priority extends across Delta\'s partner airlines including Air France, KLM, Virgin Atlantic, and LATAM — covering your international routes.',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex gap-4 p-5 rounded-[var(--radius-l)]"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)', textDecoration: 'none' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--color-delta-blue-50)' }}
                >
                  <i className={`${item.icon} text-lg`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{item.body}</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginTop: '8px' }}>
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who gets it */}
      <section className="py-16 px-6" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Eligibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                tier: 'Mid-Market',
                desc: 'Companies with a Delta Mid-Market Sales Agreement (MSA). Typically 50–500 travelers and $50K–$300K annual Delta spend.',
                cta: 'Learn about Mid-Market',
                href: '/programs/mid-market',
              },
              {
                tier: 'Enterprise',
                desc: 'Companies with a Delta Corporate Sales Agreement (CSA). Typically 500+ travelers and $300K+ annual Delta spend.',
                cta: 'Learn about Enterprise',
                href: '/programs/enterprise',
              },
            ].map((item) => (
              <div
                key={item.tier}
                className="rounded-[var(--radius-l)] p-6"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <i className="ph-fill ph-buildings text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
                  <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>{item.tier} program</h3>
                </div>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '16px', lineHeight: 1.5 }}>{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ height: '36px', padding: '0 16px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}
                >
                  {item.cta} <i className="ph-bold ph-arrow-right text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
            Ready to qualify for Corporate Priority?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Talk to our sales team to understand your eligibility and negotiate your agreement.
          </p>
          <Link
            href="/enroll/enterprise"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '48px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
          >
            Contact sales
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
