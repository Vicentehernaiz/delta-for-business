import type { Metadata } from 'next'
import Link from 'next/link'
import { segments, segmentOrder } from '@/config/segments'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Delta Business Programs | Individual, Gold, Platinum & Diamond business plans',
  description:
    'Compare Delta for Business paths: Individual (solo, free), Gold business plan (free), Platinum business plan, and Diamond business plan. Find the right plan in 60 seconds.',
  openGraph: {
    title: 'Delta Business Programs',
    description: 'Four paths covering every traveler — solo, small team, mid-market, enterprise.',
    images: ['/og/programs.png'],
  },
  alternates: { canonical: 'https://business.delta.com/programs' },
}

const programIcons: Record<string, string> = {
  'business-traveler': 'ph-fill ph-user',
  enterprise: 'ph-fill ph-briefcase',
  'large-enterprise': 'ph-fill ph-globe-hemisphere-west',
}

const programSpend: Record<string, string> = {
  'business-traveler': 'Up to $50K / year',
  enterprise: '$50K – $300K / year',
  'large-enterprise': '$300K+ / year',
}

const programTravelers: Record<string, string> = {
  'business-traveler': '1 – 49 travelers',
  enterprise: '50 – 499 travelers',
  'large-enterprise': '500+ travelers',
}

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
      >
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-wide)' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, var(--type-scale-48))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '16px',
            }}
          >
            Find your Delta for Business program
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '560px',
              margin: '0 auto 32px',
              lineHeight: 'var(--line-height-body-medium)',
            }}
          >
            Four paths covering every traveler — start solo with the Individual plan, or scale up to a managed corporate program.
          </p>
          <Link
            href="/tools/program-selector"
            className="inline-flex items-center gap-2 font-semibold"
            style={{
              height: '48px',
              padding: '0 28px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Find my program — 60 seconds
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
            }}
          >
            All programs at a glance
          </h2>

          {/* Solo / Individual lead-in card */}
          <Link
            href="/programs/individual"
            className="block mb-8 group"
            style={{
              borderRadius: 'var(--radius-l)',
              padding: '20px 24px',
              background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
              border: '1px solid var(--color-delta-blue-300)',
              boxShadow: 'var(--shadow-card)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
              <i className="ph-fill ph-user text-xl" style={{ color: 'var(--color-nav-section-title)' }}></i>
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <p style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-nav-section-title)', marginBottom: '4px' }}>
                Solo · Free · No employer needed
              </p>
              <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '2px' }}>
                Individual traveler
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.82)' }}>
                For freelancers, consultants, and employees without a corporate program — earn personal SkyMiles + business partner perks.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-semibold group-hover:translate-x-1 transition-transform" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-0)' }}>
              See plan
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </span>
          </Link>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segmentOrder.map((key) => {
              const seg = segments[key]
              return (
                <StaggerItem key={key}>
                <div
                  className="rounded-[var(--radius-l)] p-6 flex flex-col card-hover"
                  style={{
                    background: 'var(--color-neutral-0)',
                    border: '1px solid var(--color-neutral-10)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: 'var(--color-delta-red-50)' }}
                  >
                    <i className={`${programIcons[key]} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                  </div>

                  <p
                    style={{
                      fontSize: 'var(--type-scale-11)',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-neutral-500)',
                      marginBottom: '4px',
                    }}
                  >
                    {seg.programType === 'negotiated' ? 'Negotiated' : 'Self-serve • Free'}
                  </p>
                  <h3
                    style={{
                      fontSize: 'var(--type-scale-20)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: '700',
                      color: 'var(--color-delta-red-400)',
                      marginBottom: '8px',
                    }}
                  >
                    {seg.name}
                  </h3>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '16px', lineHeight: 1.5 }}>
                    {seg.tagline}
                  </p>

                  <div className="mb-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <i className="ph ph-users text-sm" style={{ color: 'var(--color-neutral-500)' }}></i>
                      <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>
                        {programTravelers[key]} <span style={{ color: 'var(--color-neutral-500)' }}>OR</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ph ph-currency-dollar text-sm" style={{ color: 'var(--color-neutral-500)' }}></i>
                      <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{programSpend[key]} Delta spend</span>
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2 flex-1">
                    {seg.keyBenefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className="ph-fill ph-check-circle text-base flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }}></i>
                        <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)' }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={seg.enrollmentPath}
                      className="flex items-center justify-center gap-2 font-semibold"
                      style={{
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--color-delta-red-400)',
                        color: 'var(--color-neutral-0)',
                        fontSize: 'var(--type-scale-14)',
                        boxShadow: 'var(--shadow-button)',
                      }}
                    >
                      {seg.ctaPrimary.label}
                    </Link>
                    <Link
                      href={`/programs/${key}`}
                      className="flex items-center justify-center gap-2 font-semibold"
                      style={{
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        border: '1.5px solid var(--color-neutral-50)',
                        color: 'var(--color-delta-blue-700)',
                        fontSize: 'var(--type-scale-14)',
                      }}
                    >
                      Learn more
                      <i className="ph-bold ph-arrow-right text-xs"></i>
                    </Link>
                  </div>
                </div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-12"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
            }}
          >
            Compare programs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left p-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', fontWeight: '600', width: '220px' }}>Feature</th>
                  {(['business-traveler', 'enterprise', 'large-enterprise'] as const).map((key) => (
                    <th
                      key={key}
                      className="p-4 text-center"
                      style={{
                        fontSize: 'var(--type-scale-14)',
                        fontWeight: '700',
                        color: 'var(--color-delta-blue-700)',
                        background: 'var(--color-neutral-5)',
                        borderBottom: '2px solid var(--color-delta-red-400)',
                      }}
                    >
                      {segments[key].shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Cost to enroll', values: ['Free', 'Negotiated', 'Negotiated'] },
                  { label: 'Company miles', values: ['✅ Up to 10/dollar', '✅ Included', '✅ Included'] },
                  { label: 'Employee miles', values: ['✅ Simultaneous', '✅ Simultaneous', '✅ Simultaneous'] },
                  { label: 'Negotiated fares', values: ['—', '✅', '✅'] },
                  { label: 'Corporate Priority', values: ['—', '✅ Full suite', '✅ Global'] },
                  { label: 'Account manager', values: ['—', '✅', '✅ Dedicated'] },
                  { label: 'Delta Business Tool', values: ['—', '✅ Basic', '✅ Full access'] },
                  { label: 'Min. travelers', values: ['1', '50', '500'] },
                ].map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)' }}>
                    <td className="p-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', borderBottom: '1px solid var(--color-neutral-10)' }}>
                      {row.label}
                    </td>
                    {row.values.map((v, j) => {
                      const isCheck = v.startsWith('✅')
                      const rest = isCheck ? v.slice(1).trim() : v
                      return (
                        <td key={j} className="p-4 text-center" style={{ fontSize: 'var(--type-scale-13)', color: v === '—' ? 'var(--color-neutral-400)' : 'var(--color-delta-blue-600)', borderBottom: '1px solid var(--color-neutral-10)' }}>
                          {isCheck ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>
                              <i className="ph-bold ph-check" style={{ color: 'var(--color-success)', fontSize: '0.95em' }} />
                              {rest && <span>{rest}</span>}
                            </span>
                          ) : (
                            v
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <i className="ph-fill ph-lightning text-4xl mb-4" style={{ color: 'var(--color-delta-red-400)' }}></i>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-28))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '12px',
            }}
          >
            Not sure which program fits?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Answer 4 questions and get a personalized recommendation in 60 seconds.
          </p>
          <Link
            href="/tools/program-selector"
            className="inline-flex items-center gap-2 font-semibold"
            style={{
              height: '48px',
              padding: '0 28px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Find my program
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
