import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Individual Business Traveler | Delta for Business',
  description:
    'For solo business travelers — freelancers, consultants, and employees without a corporate program. Free Delta SkyMiles, Hertz Business Rewards, CLEAR Plus discount and LinkedIn Premium.',
  alternates: { canonical: 'https://business.delta.com/programs/individual' },
}

const benefits = [
  {
    icon: 'ph-fill ph-car',
    title: 'Hertz Five Star status (free)',
    desc: 'Complimentary Hertz Five Star — guaranteed car-class upgrades when available, expedited returns, and accelerated Gold Plus Rewards earning. No spend threshold required.',
  },
  {
    icon: 'ph-fill ph-fingerprint',
    title: 'CLEAR Plus discount (~30% off $189/yr)',
    desc: 'Skip the line with CLEAR Plus at 50+ U.S. airports — Delta-for-Business members save approximately 30% off the $189/year retail price.',
  },
  {
    icon: 'ph-fill ph-buildings',
    title: 'Industrious coworking at $99/month',
    desc: 'Access Industrious coworking spaces nationwide at a flat $99/month — useful for solo travelers, consultants, and remote workdays between flights.',
  },
  {
    icon: 'ph-fill ph-linkedin-logo',
    title: 'LinkedIn Premium discount',
    desc: 'Targeted Premium Career or Business offer for SkyMiles for Business members — built for the way solo travelers actually win business.',
  },
  {
    icon: 'ph-fill ph-sparkle',
    title: 'Targeted bonus mile offers',
    desc: 'Personalized bonus-mile promotions on routes and dates that match your travel pattern — pushed only to enrolled members.',
  },
  {
    icon: 'ph-fill ph-airplane-tilt',
    title: 'Personal SkyMiles earned normally',
    desc: 'Standard SkyMiles + MQDs on every Delta flight, fully credited to your personal account — independent of the program.',
  },
  {
    icon: 'ph-fill ph-trend-up',
    title: 'Promotions for Comfort+',
    desc: 'Member-only fares and upgrade promotions on Comfort+ — the cabin where business travelers typically get the best value-to-comfort ratio.',
  },
  {
    icon: 'ph-fill ph-armchair',
    title: 'Occasional lounge / day passes',
    desc: 'Periodic Sky Club day-pass offers and lounge access promotions — surfaced through your member account when available.',
  },
]

const exclusions: { icon: string; title: string; desc: string }[] = [
  {
    icon: 'ph-bold ph-x-circle',
    title: 'No company mile account',
    desc: 'Individual is personal-only — there is no company-side SkyMiles pool. If you want pooled company miles, upgrade to SMB Flex (still free) or a corporate program.',
  },
  {
    icon: 'ph-bold ph-x-circle',
    title: 'No Corporate Priority benefits',
    desc: 'Preferred seating, priority boarding, upgrade certificates and service-recovery priority require Corporate Pro or Enterprise Elite — not part of Individual.',
  },
  {
    icon: 'ph-bold ph-x-circle',
    title: 'No Medallion acceleration',
    desc: 'You earn MQDs at the standard rate. Negotiated MQD bonuses and corporate-status matching are reserved for Corporate Pro and Enterprise Elite agreements.',
  },
]

const faqs: { q: string; a: string }[] = [
  {
    q: 'How is this different from SMB Flex?',
    a: 'Individual is for one person — you, no team. There is no company SkyMiles pool, no traveler roster, no company miles. SMB Flex adds a company-side rewards pool that earns alongside your personal miles, and a dashboard to manage other travelers if you have a team.',
  },
  {
    q: 'Do I need a business email?',
    a: 'No. Any email works — personal Gmail, your own domain, or work email. Delta does not verify employer status for the Individual path.',
  },
  {
    q: 'What if I get hired by a company with Corporate Pro?',
    a: 'Your personal SkyMiles account follows you. When the new employer adds you to their Corporate Pro program, you\'ll start earning company miles for them on the same flights — without losing personal earnings.',
  },
  {
    q: 'Is there any cost?',
    a: 'No. SkyMiles enrollment is free. The partner perks (Hertz, CLEAR, LinkedIn) follow each provider\'s terms — most are free or discounted with SkyMiles status.',
  },
  {
    q: 'Can I open a company SkyMiles pool later?',
    a: 'Yes. From your account dashboard you can open a company pool (the "SkyMiles for Business only" plan) or upgrade to SMB Flex / Corporate Pro / Enterprise Elite at any time.',
  },
]

export default function IndividualProgramPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 font-semibold"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'var(--color-nav-section-title)',
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className="ph-fill ph-user text-xs"></i>
            Solo · Free · No employer needed
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-48))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              lineHeight: 1.1,
              marginBottom: '18px',
              maxWidth: '780px',
            }}
          >
            For solo business travelers — earn without an employer.
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '640px',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Freelancers, consultants, founders, and employees whose company doesn&apos;t have a
            corporate program. Open a SkyMiles account in 90 seconds, earn personal miles on every
            Delta flight, and keep the business partner perks — Hertz, CLEAR, LinkedIn — that the
            company tiers also unlock.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/enroll/individual"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
                textDecoration: 'none',
              }}
            >
              Get started free
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.12)',
                color: 'var(--color-neutral-0)',
                border: '1px solid rgba(255,255,255,0.22)',
                fontSize: 'var(--type-scale-15)',
                textDecoration: 'none',
              }}
            >
              Not sure? Take the quiz
            </Link>
          </div>
        </div>
      </section>

      {/* ── Snapshot row ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-neutral-0)', padding: '40px 24px', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div
          style={{
            maxWidth: 'var(--container-narrow)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            { v: '$0', l: 'Cost to enroll' },
            { v: '90s', l: 'Time to sign up' },
            { v: '8', l: 'Member benefits included' },
            { v: 'Solo', l: 'No team or employer' },
          ].map((m) => (
            <div key={m.l} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--type-scale-32)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', lineHeight: 1 }}>
                {m.v}
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginTop: '6px' }}>
                {m.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits grid ────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-neutral-5)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            What you get as an individual traveler
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
            All the loyalty earning of a corporate plan, sized for one person.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '20px',
                  borderRadius: 'var(--radius-l)',
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <i className={`${b.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)', flexShrink: 0, marginTop: '2px' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>
                    {b.title}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's not included (transparency) ───────────────────── */}
      <section style={{ background: 'var(--color-neutral-0)', padding: '56px 24px', borderTop: '1px solid var(--color-neutral-10)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            What&apos;s not included
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
            Individual is purpose-built for solo travelers. If you need any of the below, jump to SMB Flex (still free) or a corporate plan.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {exclusions.map((e) => (
              <div
                key={e.title}
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-l)',
                  background: 'var(--color-neutral-5)',
                  border: '1px solid var(--color-neutral-10)',
                }}
              >
                <i className={e.icon} style={{ color: 'var(--color-neutral-500)', fontSize: '1.125rem', flexShrink: 0, marginTop: '2px' }}></i>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>
                    {e.title}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.55 }}>
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare row (Individual vs SMB Flex) ─────────────────── */}
      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
            Individual vs SMB Flex — what changes?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
            Both are free. SMB Flex adds a company-side layer; Individual keeps everything personal.
          </p>
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--type-scale-13)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-neutral-10)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--color-neutral-500)', fontWeight: '600' }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--color-delta-blue-700)', fontWeight: '700' }}>Individual</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--color-delta-blue-700)', fontWeight: '700' }}>SMB Flex</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free', 'Free'],
                  ['Personal SkyMiles', '✅', '✅'],
                  ['MQDs toward Medallion', '✅', '✅'],
                  ['Company SkyMiles pool', '—', '✅ Up to 10 / $'],
                  ['Traveler roster + dashboard', '—', '✅'],
                  ['Hertz / CLEAR / LinkedIn perks', '✅', '✅'],
                  ['Best for', 'Solo traveler', '1–49 travelers OR up to $50K spend'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--color-neutral-600)', fontWeight: '500' }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-delta-blue-700)' }}>{row[1]}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-delta-blue-700)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-neutral-5)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '20px' }}>
            FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((f) => (
              <div
                key={f.q}
                style={{
                  borderRadius: 'var(--radius-l)',
                  padding: '20px 24px',
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                }}
              >
                <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
                  {f.q}
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-neutral-0)', padding: '56px 24px' }}>
        <div
          style={{
            maxWidth: 'var(--container-narrow)',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>
              Ready in 90 seconds.
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
              You can switch to SMB Flex, Corporate Pro or Enterprise Elite any time.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/enroll/individual"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-delta-red-400)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                boxShadow: 'var(--shadow-button)',
                textDecoration: 'none',
              }}
            >
              Get started free
            </Link>
            <Link
              href="/programs/business-traveler"
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-neutral-5)',
                color: 'var(--color-delta-blue-700)',
                border: '1px solid var(--color-neutral-10)',
                fontSize: 'var(--type-scale-15)',
                textDecoration: 'none',
              }}
            >
              Compare with SMB Flex →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
