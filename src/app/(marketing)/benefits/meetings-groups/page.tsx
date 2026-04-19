import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delta Meetings & Groups | Corporate Group Travel Solutions',
  description:
    'Delta Meetings & Groups program for corporate events, conferences, and retreats. Discounted group fares, dedicated coordinators, and flexible ticketing for 10+ travelers.',
  alternates: { canonical: 'https://business.delta.com/benefits/meetings-groups' },
}

const benefits = [
  {
    icon: 'ph-fill ph-tag',
    title: 'Discounted group fares',
    desc: 'Groups of 10+ travelers on the same itinerary receive negotiated fares below published rates — automatically applied, no per-booking negotiations required.',
  },
  {
    icon: 'ph-fill ph-user-circle-gear',
    title: 'Dedicated group coordinator',
    desc: 'A single Delta group coordinator manages your event from quote to travel day. One contact for ticketing, seat blocks, changes, and day-of issues.',
  },
  {
    icon: 'ph-fill ph-arrows-clockwise',
    title: 'Flexible name changes',
    desc: 'Group bookings allow complimentary name changes up to 72 hours before departure — essential for events where final attendee lists shift late.',
  },
  {
    icon: 'ph-fill ph-seat',
    title: 'Blocked seat inventory',
    desc: 'Delta holds a block of seats on your preferred flights, guaranteeing your group travels together on the same aircraft — not split across multiple flights.',
  },
  {
    icon: 'ph-fill ph-wallet',
    title: 'No deposit required upfront',
    desc: 'Group bookings can be held without full payment until the agreed deposit deadline — typically 60–90 days before departure.',
  },
  {
    icon: 'ph-fill ph-trend-up',
    title: 'Miles still earn',
    desc: 'Each traveler in your group earns their full personal SkyMiles and MQDs on every group-booked flight. Company miles earn simultaneously if enrolled in SkyMiles for Business.',
  },
]

const steps = [
  { n: '1', title: 'Request a quote', desc: 'Submit your group travel request at least 30 days before travel. Include your preferred dates, origin, destination, and approximate headcount.' },
  { n: '2', title: 'Receive your proposal', desc: 'Your Delta group coordinator will respond within 2 business days with fare options, seat availability, and payment terms.' },
  { n: '3', title: 'Confirm your block', desc: 'Accept the proposal and pay the deposit to lock your seats. Passenger names can be submitted closer to the travel date.' },
  { n: '4', title: 'Manage changes easily', desc: 'As your event finalizes, update names and seat assignments. Your coordinator handles day-of escalations if anything changes at the airport.' },
]

export default function MeetingsGroupsPage() {
  return (
    <main>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav className="mb-6 flex items-center gap-2" style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/benefits" style={{ color: 'rgba(255,255,255,0.6)' }}>Benefits</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Meetings & Groups</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '16px' }}>
            Delta Meetings & Groups
          </h1>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.78)', maxWidth: '560px', lineHeight: 1.6 }}>
            Dedicated group travel support for corporate events, conferences, and offsites — 10 or more travelers, one coordinator, one invoice.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            What's included
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-500)', marginBottom: '28px' }}>
            Every Delta group booking includes these benefits by default.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item) => (
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
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '28px' }}>
            How group booking works
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.n} className="rounded-[var(--radius-l)] p-5 flex gap-5" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'var(--color-delta-blue-700)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)' }}>
                  {step.n}
                </div>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>{step.title}</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
              <i className="ph-fill ph-info mr-2" style={{ color: 'var(--color-delta-blue-300)' }}></i>
              Eligibility
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', lineHeight: 1.7 }}>
              The Delta Meetings & Groups program is available to any company or organization booking 10 or more travelers on the same origin-destination itinerary. A Corporate Sales Agreement is not required — any company can request group pricing. Enterprise accounts may receive additional discounts on top of standard group fares.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '520px' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}>
            Book group travel for your next event
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}>
            Submit your request and a Delta group coordinator will respond within 2 business days.
          </p>
          <Link
            href="/enroll/enterprise"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ height: '44px', padding: '0 24px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', boxShadow: 'var(--shadow-button)' }}
          >
            Request a group quote <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
