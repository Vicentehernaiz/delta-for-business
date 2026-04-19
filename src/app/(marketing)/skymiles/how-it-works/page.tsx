import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How SkyMiles for Business Works | Delta for Business',
  description:
    'Learn the SkyMiles for Business dual-earn setup. Your company and employees earn miles on the same flight — one setup, fully automatic after.',
  alternates: { canonical: 'https://business.delta.com/skymiles/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/skymiles" style={{ color: 'rgba(255,255,255,0.6)' }}>SkyMiles for Business</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>How it works</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            How SkyMiles for Business works
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', lineHeight: 1.6 }}>
            One-time setup. Fully automatic after. Both accounts earn on every flight without any per-trip action.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Enroll your company',
                icon: 'ph-fill ph-buildings',
                detail: [
                  'Go to delta.com/business and register with your company email.',
                  'You receive a Business ID — a unique code assigned to your company.',
                  'Enrollment is free. No minimum spend, no commitment.',
                ],
              },
              {
                step: '02',
                title: 'Link employee SkyMiles numbers',
                icon: 'ph-fill ph-users',
                detail: [
                  'Each traveler adds their SkyMiles number to the company portal once.',
                  'Travelers can also self-register by entering the Business ID in their Delta profile.',
                  'This one-time link is all that\'s needed — no action required on future trips.',
                  'Important: if an employee does not link their SkyMiles ID, the company does not earn on their flights.',
                ],
              },
              {
                step: '03',
                title: 'Book with your Business ID',
                icon: 'ph-fill ph-ticket',
                detail: [
                  'At booking on Delta.com, the Business ID field appears in the traveler profile.',
                  'TMC (Amex GBT, BCD, CWT) and Concur users can pre-load the Business ID.',
                  'Any eligible Delta-operated flight booked under the linked account qualifies.',
                ],
              },
              {
                step: '04',
                title: 'Miles post automatically',
                icon: 'ph-fill ph-check-circle',
                detail: [
                  'Within 72 hours of flight completion, miles post to both accounts.',
                  'Company miles appear in the business portal dashboard.',
                  'Employee personal miles (and MQDs) appear in their individual SkyMiles account.',
                  'Neither earning reduces the other — both are credited at full rates.',
                ],
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--color-delta-red-50)' }}>
                    <i className={`${s.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-400)', marginBottom: '4px' }}>
                    Step {s.step}
                  </p>
                  <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '12px' }}>
                    {s.title}
                  </h2>
                  <ul className="space-y-3">
                    {s.detail.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <i className="ph-fill ph-check text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }}></i>
                        <span style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            Eligibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Flight type', value: 'Delta-operated flights (DL flight numbers). Codeshare flights operated by partners may earn at reduced rates.' },
              { label: 'Fare classes', value: 'All revenue tickets except Basic Economy (E class). Award tickets do not earn company miles.' },
              { label: 'Who can enroll', value: 'Any business registered in the US. Solo freelancers and corporations both qualify.' },
              { label: 'When company miles start', value: 'Mile earning begins once company account reaches Plus tier ($5K annual spend). Member tier has portal access only.' },
            ].map((item) => (
              <div key={item.label} className="rounded-[var(--radius-l)] p-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}>
                <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Ready to start earning?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>Free enrollment. Miles start on your first flight.</p>
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
