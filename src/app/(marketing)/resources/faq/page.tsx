'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqSections = [
  {
    id: 'programs',
    label: 'Program Structure',
    icon: 'ph-fill ph-buildings',
    faqs: [
      { q: 'Which Delta for Business program is right for me?', a: 'It depends on your annual Delta spend. The Gold business plan covers $5K–$50K annual Delta spend (typically accommodates 2 to 49 travelers) — you get a business rewards pool, partner perks, and dual SkyMiles earning, free. The Platinum business plan covers $50K–$300K annual Delta spend (typically accommodates 50 to 499 travelers) — dynamic fare discounts, seat access pools, and Corporate Priority. The Diamond business plan covers $300K+ annual Delta spend (typically accommodates 500+ travelers) — custom pricing, full reporting, and dedicated support. Use the Business Calculator to get a personalized recommendation.' },
      { q: 'Can my company be enrolled in multiple programs?', a: 'No. Each company account is in one tier. As your spend grows, your account automatically upgrades within the SkyMiles for Business tiers (Member → Plus → Elite). If you reach mid-market or enterprise spending levels, your account manager will transition you to a negotiated agreement.' },
      { q: 'What\'s the difference between SkyMiles for Business and a Corporate Sales Agreement?', a: 'SkyMiles for Business is a self-serve program where your company earns miles — it\'s free and requires no minimum commitment. A Corporate Sales Agreement (CSA/MSA) is a negotiated contract with customized fares, dedicated support, and Corporate Priority benefits. CSAs are available for companies spending $50K+ annually.' },
      { q: 'Does Delta for Business replace SkyMiles?', a: 'No. SkyMiles for Business sits alongside each employee\'s personal SkyMiles account. The company earns separate company miles while employees continue earning their full personal SkyMiles and MQDs on every flight.' },
    ],
  },
  {
    id: 'skymiles',
    label: 'SkyMiles Earning',
    icon: 'ph-fill ph-trend-up',
    faqs: [
      { q: 'Is the double-earn automatic?', a: 'Almost. Each employee needs to link their personal SkyMiles number to your company portal once. After that, every eligible flight automatically earns in both accounts — no per-trip action needed. If an employee hasn\'t linked their SkyMiles ID, the company does not earn on their flights.' },
      { q: 'Do employees lose any personal miles when the company also earns?', a: 'No. Employee personal miles — including MQDs toward Medallion status — are completely unaffected. Both accounts earn at their full, independent rates on the same flight.' },
      { q: 'When do miles post?', a: 'Company miles and employee personal miles typically post within 72 hours of flight completion. If miles don\'t post within 7 days, contact Delta Business support with your flight details and Business ID.' },
      { q: 'Do hub routes earn at a lower rate?', a: 'Yes, for company miles only. Hub routes (flights between ATL, DTW, MSP, and SLC) earn at approximately half the rate of non-hub routes. Employee personal miles are not affected by the hub penalty.' },
      { q: 'Does Basic Economy earn company miles?', a: 'No. Basic Economy (fare class E) is excluded from company mile earning. All other revenue fare classes are eligible.' },
    ],
  },
  {
    id: 'cards',
    label: 'Delta Amex Cards',
    icon: 'ph-fill ph-credit-card',
    faqs: [
      { q: 'Who owns the miles earned on a Delta Amex business card?', a: 'The individual cardholder owns their card miles — not the company. Card miles go directly to the cardholder\'s personal SkyMiles account. They are completely separate from and stackable with the company program miles.' },
      { q: 'Do card spending miles count toward Medallion status?', a: 'Yes. Platinum and Reserve cardholders (personal and business) earn MQD Boosts from card spend. The Platinum card earns $1 MQD per $25 spent on eligible purchases. The Reserve card earns at a higher rate and also provides an MQD waiver at certain spend levels.' },
      { q: 'Can I hold both a personal and a business Delta Amex card?', a: 'Yes. You can hold one personal Delta Amex card and one business Delta Amex card simultaneously. The miles from both earn in your personal SkyMiles account.' },
      { q: 'Do Delta business cards offer Sky Club access?', a: 'The Delta SkyMiles Reserve Business card includes Sky Club access for the primary cardholder. The Platinum Business card includes a limited number of day passes annually.' },
    ],
  },
  {
    id: 'medallion',
    label: 'Medallion Status',
    icon: 'ph-fill ph-medal',
    faqs: [
      { q: 'What is Medallion status and how does it differ from SkyMiles for Business?', a: 'Medallion status is individual elite status earned by a person based on their personal flying. SkyMiles for Business is a company-level program where the business earns miles. They are parallel systems — an employee can have Diamond Medallion status while their company is at Member tier, and vice versa.' },
      { q: 'Can the company earn Medallion status?', a: 'No. Medallion status is individual. The company earns company miles, which can be transferred to employees or redeemed as eCredits and Sky Club memberships.' },
      { q: 'How does a business traveler qualify for Medallion status?', a: 'Medallion status is based on Medallion Qualifying Dollars (MQDs) — money spent on Delta flights in a calendar year. Gold requires $10,000 MQD, Platinum $15,000, Diamond $28,000. Delta Amex Platinum and Reserve cards also earn MQDs from card spend, helping qualify faster.' },
      { q: 'Do mid-market and enterprise corporate bookings count toward employee Medallion status?', a: 'Yes. Corporate bookings made under a Business ID count toward the employee\'s personal MQD total, as long as the employee\'s SkyMiles number is associated with the booking.' },
    ],
  },
  {
    id: 'ecredits',
    label: 'eCredits',
    icon: 'ph-fill ph-wallet',
    faqs: [
      { q: 'How does a company convert miles to eCredits?', a: 'A company administrator converts miles to eCredits through the Delta for Business portal. eCredits are generated within approximately 4 hours of the request. They appear in the portal as a travel credit that can be applied to future Delta bookings.' },
      { q: 'What is the value of company miles when converted to eCredits?', a: 'Approximately 1.5–2¢ per mile. The exact rate varies based on the specific booking — applying eCredits to higher-value fares generally yields closer to 2¢/mile.' },
      { q: 'Are there restrictions on eCredit use?', a: 'Yes. One eCredit per ticket maximum — they cannot be stacked. eCredits cannot be used for Basic Economy fares. They expire approximately one year from issuance. Since June 2025, eCredits are redeemable via GDS and travel agencies, not just Delta.com.' },
      { q: 'Can eCredits be transferred to an employee?', a: 'eCredits belong to the company account, not individuals. A company admin applies them to specific bookings. Separately, the company can transfer miles to an employee\'s personal SkyMiles account for them to use independently.' },
    ],
  },
  {
    id: 'enrollment',
    label: 'Enrollment',
    icon: 'ph-fill ph-user-plus',
    faqs: [
      { q: 'How do I enroll my company?', a: 'For the Gold business plan: enroll at delta.com/business — takes about 5 minutes. For the Platinum and Diamond business plans: complete the sales inquiry form and a Delta representative will contact you within 2 business days.' },
      { q: 'Is there a cost to enroll?', a: 'No. All Delta for Business programs are free to join. There is no enrollment fee, annual fee, or minimum spend requirement to create an account (though company mile earning requires reaching the Plus tier at $5K annual spend).' },
      { q: 'How quickly does the company start earning miles after enrollment?', a: 'Miles begin earning on flights booked after enrollment with your Business ID attached. Flights booked before enrollment are not retroactively credited. Allow 72 hours after each flight for miles to post.' },
      { q: 'Can a company switch programs as it grows?', a: 'Yes. Self-serve program accounts automatically upgrade tiers as spend grows. When you reach mid-market spend levels ($50K+), your Delta account manager will reach out to discuss transitioning to a negotiated agreement.' },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeSection, setActiveSection] = useState<string>('programs')

  function toggle(id: string) {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const activeFaqs = faqSections.find((s) => s.id === activeSection)?.faqs ?? []

  return (
    <main>
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Frequently asked questions
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>
            Answers to the most common questions about Delta for Business programs, SkyMiles, Medallion status, cards, and enrollment.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          {/* Section tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold transition-colors"
                style={{
                  fontSize: 'var(--type-scale-14)',
                  background: activeSection === s.id ? 'var(--color-delta-blue-700)' : 'var(--color-neutral-5)',
                  color: activeSection === s.id ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-600)',
                  border: activeSection === s.id ? 'none' : '1px solid var(--color-neutral-10)',
                }}
              >
                <i className={`${s.icon} text-sm`}></i>
                {s.label}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div className="space-y-3">
            {activeFaqs.map((faq, i) => {
              const id = `${activeSection}-${i}`
              const isOpen = openItems[id]
              return (
                <div
                  key={id}
                  className="rounded-[var(--radius-l)] overflow-hidden"
                  style={{ border: isOpen ? '1.5px solid var(--color-delta-blue-300)' : '1px solid var(--color-neutral-10)' }}
                >
                  <button
                    onClick={() => toggle(id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                    style={{ background: isOpen ? 'var(--color-delta-blue-50)' : 'var(--color-neutral-0)' }}
                  >
                    <span style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', lineHeight: 1.5 }}>
                      {faq.q}
                    </span>
                    <i
                      className={`ph-bold ${isOpen ? 'ph-minus' : 'ph-plus'} text-sm flex-shrink-0 mt-1`}
                      style={{ color: 'var(--color-delta-blue-300)' }}
                    ></i>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5" style={{ background: 'var(--color-neutral-0)' }}>
                      <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <i className="ph-fill ph-headset text-4xl mb-4 block" style={{ color: 'var(--color-delta-red-400)' }}></i>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
            Contact Delta Business support or use the program finder to get a personalized recommendation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/program-selector"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', boxShadow: 'var(--shadow-button)' }}
            >
              Find my program <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/enroll/enterprise"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--color-delta-blue-700)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-15)' }}
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
