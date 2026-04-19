import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Priority Service Recovery | Delta for Business',
  description:
    'Delta Corporate Priority service recovery gives corporate travelers priority rebooking, waived change fees, and proactive care during delays, cancellations, and irregular operations.',
  alternates: { canonical: 'https://business.delta.com/benefits/corporate-priority/service-recovery' },
}

const items = [
  {
    icon: 'ph-fill ph-clock-countdown',
    title: 'Priority rebooking during IROPS',
    desc: 'When delays or cancellations create irregular operations (IROPS), Corporate Priority travelers are rebooked ahead of non-corporate passengers — faster alternative flights, less time stranded.',
  },
  {
    icon: 'ph-fill ph-phone-call',
    title: 'Dedicated support line',
    desc: 'Corporate travelers can reach a dedicated Delta support line during disruptions — no hold time competing with the general public when flights go sideways.',
  },
  {
    icon: 'ph-fill ph-arrows-clockwise',
    title: 'Waived change and cancel fees',
    desc: 'Mid-market and enterprise accounts receive waived change and cancellation fees on eligible fare classes — no penalty when plans shift, which they always do.',
  },
  {
    icon: 'ph-fill ph-package',
    title: 'Priority baggage recovery',
    desc: 'If baggage is delayed or misrouted, Corporate Priority accounts receive priority tracing and expedited delivery. Delayed bags are tracked and resolved before standard claims.',
  },
  {
    icon: 'ph-fill ph-house-line',
    title: 'Hotel and meal accommodation',
    desc: 'When controllable delays cause overnight stays, Corporate Priority travelers receive hotel and meal accommodation before non-priority passengers, subject to availability.',
  },
]

const scenarios = [
  {
    scenario: 'Flight cancelled',
    standard: 'Rebooked in queue order — often next day',
    corporate: 'Priority rebooking — next available flight or alternate routing',
  },
  {
    scenario: 'Missed connection',
    standard: 'Standard rebooking fee may apply',
    corporate: 'Waived fees; priority seat on next departure',
  },
  {
    scenario: 'Delayed bag',
    standard: 'Standard 24–48h trace process',
    corporate: 'Priority trace; expedited delivery',
  },
  {
    scenario: 'Controllable overnight delay',
    standard: 'Hotel accommodation when available',
    corporate: 'Priority hotel and meal accommodation',
  },
  {
    scenario: 'Need to change date',
    standard: 'Change fee applies on most fares',
    corporate: 'Waived on eligible fare classes',
  },
]

export default function ServiceRecoveryPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <Link href="/benefits/corporate-priority" style={{ color: 'rgba(255,255,255,0.6)' }}>Corporate Priority</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Service Recovery</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Corporate Priority — Service Recovery
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            When things go wrong, Corporate Priority travelers get to the front of the resolution queue — not the back.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Service recovery benefits
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
            Scenario comparison
          </h2>
          <div className="rounded-[var(--radius-l)] overflow-hidden" style={{ border: '1px solid var(--color-neutral-10)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-delta-blue-700)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Scenario</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Corporate Priority</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'rgba(255,255,255,0.6)' }}>Standard</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row, i) => (
                  <tr key={row.scenario} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-neutral-700)' }}>{row.scenario}</td>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>{row.corporate}</td>
                    <td style={{ padding: '12px 16px', fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)' }}>{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)', lineHeight: 1.6 }}>
              <strong>Availability:</strong> Service recovery priority is included in Mid-Market (MSA) and Enterprise (CSA) agreements. Not available in self-serve SkyMiles for Business. Priority is subject to operational constraints — Delta makes commercially reasonable efforts but cannot guarantee specific outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Protect your team when plans change
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
