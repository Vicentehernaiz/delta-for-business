import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Program Terms & Conditions | Delta for Business',
  description:
    'Legal terms and conditions for Delta for Business programs: SkyMiles for Business, Corporate Priority, Medallion status, eCredits, and Corporate Sales Agreements.',
  alternates: { canonical: 'https://business.delta.com/resources/program-terms' },
}

const sections = [
  {
    id: 'skymiles-for-business',
    title: 'SkyMiles for Business Program',
    items: [
      'Enrollment is free and requires a valid U.S. business entity. Delta reserves the right to verify business status.',
      'Company miles are earned on eligible Delta-operated and Delta-marketed flights booked after enrollment with a valid Business ID attached.',
      'Dual Earn (simultaneous company and employee earning) requires each employee to link their personal SkyMiles number in the company portal. Miles for unlinked travelers will not post retroactively.',
      'Hub routes (ATL–DTW, ATL–MSP, ATL–SLC, DTW–MSP, DTW–SLC, MSP–SLC) earn company miles at approximately 50% of the standard non-hub rate.',
      'Basic Economy (fare class E) tickets are excluded from company mile earning. All other revenue fare classes are eligible.',
      'Company mile balances do not expire provided the account remains active (at least one eligible transaction per 24 months).',
      'SMB tier advancement (Member → Plus → Elite) is calculated on a rolling 12-month basis based on eligible Delta spend. Downgrades occur 90 days after the spend threshold is no longer met.',
      'Delta reserves the right to audit and adjust company mile balances if fraudulent activity or non-eligible transactions are detected.',
    ],
  },
  {
    id: 'ecredits',
    title: 'eCredits',
    items: [
      'Company miles may be converted to eCredits through the Delta for Business portal by a designated account administrator.',
      'eCredits are valued at approximately 1.5–2¢ per mile; the exact rate varies based on the fare applied.',
      'One eCredit may be applied per ticket. eCredits cannot be combined or stacked on a single booking.',
      'eCredits cannot be applied to Basic Economy fares or fees such as baggage or seat upgrades purchased separately.',
      'eCredits expire 12 months from the date of issuance. Expired eCredits are forfeited and cannot be reinstated.',
      'eCredits belong to the company account and cannot be transferred to individual employees. Company administrators may apply eCredits to specific employee bookings.',
      'As of June 2025, eCredits may be redeemed through GDS-connected travel agencies and TMCs, not only at delta.com.',
    ],
  },
  {
    id: 'corporate-priority',
    title: 'Corporate Priority Benefits',
    items: [
      'Corporate Priority is available exclusively to companies with an active Mid-Market Sales Agreement (MSA) or Corporate Sales Agreement (CSA). It is not available in the self-serve SkyMiles for Business program.',
      'Corporate Priority benefits are tied to the company\'s Business ID. Travelers must book flights with the Business ID attached to receive priority recognition.',
      'Zone 1 boarding, preferred seating, and upgrade priority are subject to availability and may be limited by aircraft configuration or operational constraints.',
      'Waived change fees apply to tickets issued under the corporate agreement on eligible fare classes. Fees for downgraded fares or Basic Economy tickets are excluded.',
      'Service recovery priority does not guarantee re-accommodation on the original flight or day of travel. Delta will make commercially reasonable efforts to re-accommodate corporate travelers ahead of non-priority passengers.',
      'Global Corporate Priority recognition on partner airlines (Air France, KLM, LATAM, Virgin Atlantic) is available for Enterprise (CSA) accounts only and is subject to each partner airline\'s operational policies.',
      'Corporate Priority benefits may be suspended or revoked if the company\'s corporate agreement lapses, is terminated, or falls below the contracted minimum spend threshold.',
    ],
  },
  {
    id: 'corporate-agreements',
    title: 'Corporate Sales Agreements (CSA/MSA)',
    items: [
      'Mid-Market Sales Agreements (MSA) require a minimum annual Delta spend of $50,000. Corporate Sales Agreements (CSA) require a minimum annual spend of $300,000.',
      'Agreement terms, discounted fares, and performance incentives are negotiated individually and are confidential between Delta and the company.',
      'Annual performance reviews may result in fare adjustments, benefit tier changes, or agreement non-renewal based on actual vs. contracted spend.',
      'Unused ticket transfer provisions (where available) allow a company to transfer the value of an unused ticket to another traveler within the same company. Subject to fare rules and agreement terms.',
      'All CSA/MSA agreements are governed by U.S. law and subject to Delta\'s standard conditions of carriage.',
    ],
  },
  {
    id: 'medallion',
    title: 'Medallion Status (Individual)',
    items: [
      'Medallion status is earned by individual travelers based on personal Medallion Qualifying Dollars (MQDs) spent on eligible Delta flights in a calendar year.',
      'MQD thresholds: Silver Medallion $5,000 · Gold Medallion $10,000 · Platinum Medallion $15,000 · Diamond Medallion $28,000.',
      'Medallion status is strictly personal and cannot be transferred, purchased, assigned by a company, or shared.',
      'Delta Amex Platinum and Reserve cardholders (personal and business) earn MQD Headstart at the start of each Medallion year and ongoing MQD Boosts from card spending. See card terms for current amounts.',
      'Company Silver Medallion certificates redeemed from company miles grant 90-day Silver Medallion status to a named employee. They do not confer Gold, Platinum, or Diamond status.',
      'Medallion status qualifications, thresholds, and benefits are subject to change at Delta\'s discretion with reasonable notice.',
    ],
  },
  {
    id: 'meetings-groups',
    title: 'Meetings & Groups',
    items: [
      'Group pricing is available for parties of 10 or more travelers on the same origin-destination itinerary booked at least 14 days in advance.',
      'Group fares are negotiated based on travel dates, route, demand, and number of passengers. Quoted fares are valid for the acceptance period stated in the proposal.',
      'Seat blocks are held until the deposit deadline specified in the group contract. Unclaimed seats revert to general availability after the deadline.',
      'Name changes are permitted at no charge up to 72 hours before the scheduled departure, subject to availability of the same fare class.',
      'Group bookings do not qualify for same-day change or standby options available to individual travelers.',
      'Travelers in group bookings earn personal SkyMiles and MQDs. Company miles earn simultaneously if a Business ID is attached and the company is enrolled in SkyMiles for Business.',
    ],
  },
  {
    id: 'general',
    title: 'General Terms',
    items: [
      'Delta for Business programs are available to companies operating lawfully within their jurisdiction. Delta reserves the right to refuse or revoke enrollment.',
      'Program terms, earning rates, redemption values, and benefits are subject to change at Delta\'s discretion. Material changes will be communicated with reasonable advance notice.',
      'All Delta for Business programs are subject to Delta\'s General Conditions of Carriage and SkyMiles Program Terms, which take precedence in case of conflict.',
      'These program terms are governed by the laws of the State of Georgia, United States, without regard to conflict of law provisions.',
      'Questions about program terms should be directed to Delta Business Support at business.delta.com/contact or via the portal help center.',
    ],
  },
]

export default function ProgramTermsPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/resources" style={{ color: 'rgba(255,255,255,0.6)' }}>Resources</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Program Terms</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Program Terms & Conditions
          </h1>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.78)', maxWidth: '540px', lineHeight: 1.6 }}>
            Key terms governing Delta for Business programs. Last updated April 2026.
          </p>
        </div>
      </section>

      <section className="py-8" style={{ background: 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)', background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', borderRadius: 'var(--radius-full)', padding: '6px 14px', textDecoration: 'none' }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8 space-y-14" style={{ maxWidth: 'var(--container-narrow)' }}>
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '16px', paddingBottom: '10px', borderBottom: '2px solid var(--color-neutral-10)' }}>
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-700)', lineHeight: 1.7 }}>
                    <i className="ph-fill ph-dot-outline flex-shrink-0 mt-1" style={{ color: 'var(--color-delta-red-400)', fontSize: '1rem' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)', lineHeight: 1.7 }}>
              This page provides a plain-English summary of key program terms for informational purposes. It does not constitute a legal contract. The full SkyMiles Program Terms, General Conditions of Carriage, and any signed corporate agreement govern in the event of any conflict. Delta Air Lines, Inc. reserves the right to modify or terminate any program at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            Questions about program terms?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Contact Delta Business Support or browse the FAQ for quick answers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/resources/faq"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', boxShadow: 'var(--shadow-button)' }}
            >
              Browse FAQ <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/enroll/enterprise"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--color-delta-blue-700)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-15)' }}
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
