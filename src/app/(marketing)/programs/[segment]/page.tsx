import type { Metadata } from 'next'
import { segments } from '@/config/segments'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/marketing/Nav'
import { Footer } from '@/components/marketing/Footer'
import { ProgramFinder } from '@/components/marketing/ProgramFinder'
import Link from 'next/link'

const validSegments = ['business-traveler', 'enterprise', 'large-enterprise']

const programDetails: Record<string, {
  tagline: string
  heroDesc: string
  benefits: { icon: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  enrollHref: string
  enrollLabel: string
  syncNote?: string
}> = {
  'business-traveler': {
    tagline: 'Personal travel perks and company-mile earning — zero employer friction.',
    heroDesc: 'Business Traveler is free for individuals and small teams. Free self-serve enrollment, dual SkyMiles earning, and partner perks from day one. No minimum spend, no negotiation.',
    benefits: [
      { icon: 'ph-fill ph-arrows-split', title: 'True dual earning', desc: 'Company miles and personal employee SkyMiles are credited simultaneously on every eligible Delta flight. Link traveler SkyMiles numbers once — then every flight earns in both accounts.' },
      { icon: 'ph-fill ph-trend-up', title: 'Up to 10 miles per dollar', desc: 'Non-hub, premium cabin routes earn 10 miles/$. Hub routes earn 5 miles/$. Earning scales automatically as your team grows.' },
      { icon: 'ph-fill ph-wallet', title: 'eCredit redemptions', desc: 'Convert company miles to eCredits at ~1.5–2¢/mile — usable on any future Delta booking for your team.' },
      { icon: 'ph-fill ph-chart-bar', title: 'Management dashboard', desc: 'Track spend, miles balance, and traveler activity. Dashboard is included free from day one.' },
    ],
    faqs: [
      { q: 'Does my employer need to sign up too?', a: 'No. You enroll with your business email. If you have a team, you add them to your company account — no employer IT involvement required.' },
      { q: 'Do employees lose personal SkyMiles?', a: 'No. Employee personal miles (including MQDs toward Medallion status) are completely unaffected. Both earning streams are independent.' },
      { q: 'Is there a fee?', a: 'No. Business Traveler is always free to enroll.' },
      { q: 'Can I upgrade to Enterprise later?', a: 'Yes. If your company grows and you cross $50K annual Delta spend with 50+ travelers, you can contact sales to negotiate an Enterprise program (MSA).' },
    ],
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
  },
  enterprise: {
    tagline: 'Negotiated fares, Corporate Priority, and a dedicated account manager.',
    heroDesc: 'The Enterprise program (Mid-Market Sales Agreement) is Delta\'s negotiated program for companies with 50–500 travelers spending $50K+/year. Volume earns access to discounts and priority services that self-serve programs can\'t match.',
    benefits: [
      { icon: 'ph-fill ph-tag', title: 'Negotiated fares', desc: 'Custom discount percentages off published fares on your most-traveled routes. Typically 5–15% off depending on volume and market.' },
      { icon: 'ph-fill ph-crown', title: 'Full Corporate Priority suite', desc: 'All Corporate Priority benefits: preferred seating, Zone 1 boarding, complimentary upgrades, service recovery priority, waived change fees, and priority rebooking during IROPS.' },
      { icon: 'ph-fill ph-user-gear', title: 'Dedicated account manager', desc: 'One Delta contact for everything — fare adjustments, traveler issues, reporting, and expansion requests.' },
      { icon: 'ph-fill ph-link', title: 'TMC & Concur integration', desc: 'Direct integration with Amex GBT, BCD Travel, CWT, Navan, and Concur for automated reporting and booking policy enforcement.' },
    ],
    faqs: [
      { q: 'What is the minimum spend to qualify?', a: 'Approximately $50,000/year in Delta airfare. Your account manager will confirm during the sales call based on your route mix.' },
      { q: 'How long does the negotiation take?', a: 'Typically 2–4 weeks from initial contact to signed agreement.' },
      { q: 'Do company miles still apply?', a: 'Yes — the Enterprise program runs on top of SkyMiles for Business. You keep dual earning while also receiving negotiated fares.' },
      { q: 'Is Delta SYNC included?', a: 'Enterprise accounts get access to Delta SYNC for travel management — spend reporting, policy controls, and traveler visibility.' },
    ],
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    syncNote: 'Enterprise accounts include Delta SYNC access for spend reporting, traveler management, and travel policy controls.',
  },
  'large-enterprise': {
    tagline: 'Full managed travel with global Corporate Priority and Delta SYNC access.',
    heroDesc: 'The Large-Enterprise program (Corporate Sales Agreement) is Delta\'s full managed travel program for 500+ traveler companies. Includes global priority on all partner airlines, Delta SYNC, unused ticket transfer, and 24/7 Corporate Solutions support.',
    benefits: [
      { icon: 'ph-fill ph-globe-hemisphere-west', title: 'Global Corporate Priority', desc: 'Corporate Priority extends across Air France, KLM, LATAM, and Virgin Atlantic — covering your international routes at the same priority level as Delta domestic.' },
      { icon: 'ph-fill ph-lightning', title: 'Delta SYNC — full access', desc: 'Full access to Delta\'s travel management platform: spend dashboards, traveler tracking, policy automation, and real-time itinerary visibility.' },
      { icon: 'ph-fill ph-arrows-left-right', title: 'Unused ticket transfer', desc: 'Transfer unused tickets between employees without forfeiting value. One of Delta\'s most requested enterprise-only features.' },
      { icon: 'ph-fill ph-headset', title: '24/7 Corporate Solutions', desc: 'Dedicated support line for any traveler emergency — rebooking, medical disruptions, last-minute changes — available around the clock.' },
    ],
    faqs: [
      { q: 'What is the minimum traveler count?', a: 'Typically 500 active travelers per year, though exceptions apply for high-spend companies with fewer travelers.' },
      { q: 'Which partner airlines are included?', a: 'Air France, KLM, LATAM, and Virgin Atlantic. Benefits on partner airlines are subject to each carrier\'s operational policies.' },
      { q: 'How does unused ticket transfer work?', a: 'Through the corporate portal, an admin can reassign an unused ticket to any enrolled traveler. The new traveler pays only the fare difference, if any.' },
      { q: 'What does Delta SYNC include?', a: 'Full Delta SYNC access covers spend reporting, real-time traveler location, policy controls, GDS integration, and dedicated onboarding support.' },
    ],
    enrollHref: '/enroll/enterprise',
    enrollLabel: 'Contact sales',
    syncNote: 'Large-Enterprise accounts include full Delta SYNC access — the complete travel management platform for global teams.',
  },
}

export function generateStaticParams() {
  return validSegments.map((segment) => ({ segment }))
}

export function generateMetadata({ params }: { params: { segment: string } }): Metadata {
  const data = segments[params.segment]
  if (!data) return { title: 'Program Not Found' }

  return {
    title: `${data.name} | Delta for Business`,
    description: data.description,
    alternates: { canonical: `https://business.delta.com/programs/${params.segment}` },
  }
}

export default function SegmentPage({ params }: { params: { segment: string } }) {
  if (!validSegments.includes(params.segment)) notFound()
  const data = segments[params.segment]
  const details = programDetails[params.segment]

  if (!data || !details) notFound()

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Hero */}
        <section
          className="py-20"
          style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
        >
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full mb-4 font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 'var(--type-scale-14)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  }}
                >
                  {data.programType === 'negotiated' ? 'Negotiated agreement' : 'Self-serve · Free'}
                </span>
                <h1
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: 'var(--color-neutral-0)',
                    lineHeight: 'var(--line-height-heading-xl)',
                    marginBottom: '8px',
                  }}
                >
                  {data.name}
                </h1>
                <p style={{ fontSize: 'var(--type-scale-20)', color: 'rgba(255,255,255,0.75)', marginBottom: '12px', fontWeight: '600' }}>
                  {details.tagline}
                </p>
                <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.6 }}>
                  {details.heroDesc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={details.enrollHref}
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{
                      height: '48px',
                      padding: '0 24px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-delta-red-400)',
                      color: 'var(--color-neutral-0)',
                      fontSize: 'var(--type-scale-16)',
                      boxShadow: 'var(--shadow-button)',
                    }}
                  >
                    {details.enrollLabel}
                    <i className="ph-bold ph-arrow-right text-sm"></i>
                  </Link>
                  <Link
                    href="/tools/roi-calculator"
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{
                      height: '48px',
                      padding: '0 24px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255,255,255,0.12)',
                      color: 'var(--color-neutral-0)',
                      fontSize: 'var(--type-scale-16)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    Calculate ROI
                  </Link>
                </div>
              </div>

              {/* Key benefits panel */}
              <div
                className="rounded-[var(--radius-l)] p-8"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                  Key benefits
                </p>
                <ul className="space-y-4">
                  {data.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <i className="ph-fill ph-check-circle text-xl flex-shrink-0" style={{ color: 'var(--color-delta-red-400)' }}></i>
                      <span style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.9)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Delta SYNC note (enterprise / large-enterprise only) */}
        {details.syncNote && (
          <section className="py-5" style={{ background: 'var(--color-delta-blue-50)', borderBottom: '1px solid var(--color-delta-blue-300)' }}>
            <div className="mx-auto px-6 lg:px-8 flex items-center gap-3" style={{ maxWidth: 'var(--container-wide)' }}>
              <i className="ph-fill ph-lightning text-xl flex-shrink-0" style={{ color: 'var(--color-delta-blue-600)' }}></i>
              <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-700)' }}>
                <strong>Delta SYNC included:</strong> {details.syncNote}{' '}
                <Link href="/delta-sync" style={{ color: 'var(--color-delta-blue-600)', textDecoration: 'underline', fontWeight: '600' }}>
                  Learn about Delta SYNC →
                </Link>
              </p>
            </div>
          </section>
        )}

        {/* Benefits detail */}
        <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-40))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-600)',
                textAlign: 'center',
                marginBottom: '48px',
              }}
            >
              What you get
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-[var(--radius-l)] p-6"
                  style={{
                    background: 'var(--color-neutral-0)',
                    border: '1px solid var(--color-neutral-10)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                      style={{ background: 'var(--color-delta-red-50)' }}
                    >
                      <i className={`${b.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'var(--type-scale-18)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        {b.title}
                      </h3>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-body-small)' }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-28))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-600)',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Common questions
            </h2>

            <div className="space-y-3">
              {details.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius-l)] p-6"
                  style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
                >
                  <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)', marginBottom: '8px' }}>
                    {faq.q}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-body-small)' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href={details.enrollHref}
                className="inline-flex items-center gap-2 font-semibold"
                style={{
                  height: '52px',
                  padding: '0 32px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                {details.enrollLabel}
                <i className="ph-bold ph-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Compare all programs */}
        <ProgramFinder activeSegment={params.segment} />
      </main>
      <Footer />
    </>
  )
}
