import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Delta Business Plans | Individual, Gold, Platinum & Diamond business plans',
  description:
    'Side-by-side comparison of all four Delta for Business plans — pick the right one for solo travelers, small teams, mid-market companies, or global enterprises.',
  openGraph: {
    title: 'Compare Delta Business Plans',
    description: 'Individual vs Gold vs Platinum vs Diamond business plans — every feature, eligibility, and benefit in one table.',
  },
  alternates: { canonical: 'https://business.delta.com/programs/compare' },
}

// ── Plan column data ─────────────────────────────────────────────────────────

type ColKey = 'individual' | 'smb-flex' | 'corporate-pro' | 'enterprise-elite'

const PLANS: { key: ColKey; name: string; sub: string; href: string; enrollHref: string; enrollLabel: string; accent: string }[] = [
  {
    key: 'individual',
    name: 'Individual',
    sub: 'Solo · Free · No employer needed',
    href: '/programs/individual',
    enrollHref: '/enroll/individual',
    enrollLabel: 'Get started free',
    accent: 'var(--color-segment-individual)',
  },
  {
    key: 'smb-flex',
    name: 'Gold business plan',
    sub: '$5K–$50K spend · Free self-serve',
    href: '/programs/business-traveler',
    enrollHref: '/enroll/gold',
    enrollLabel: 'Get started free',
    accent: '#8f6c32',
  },
  {
    key: 'corporate-pro',
    name: 'Platinum business plan',
    sub: '$50K–$300K spend · Negotiated',
    href: '/programs/enterprise',
    enrollHref: '/enroll/platinum',
    enrollLabel: 'Contact sales',
    accent: '#6f7f8d',
  },
  {
    key: 'enterprise-elite',
    name: 'Diamond business plan',
    sub: '$300K+ spend · Enterprise',
    href: '/programs/large-enterprise',
    enrollHref: '/enroll/diamond',
    enrollLabel: 'Contact sales',
    accent: '#726394',
  },
]

// ── Comparison rows ──────────────────────────────────────────────────────────

interface CellValue {
  text: string
  positive?: boolean
}

interface Row {
  feature: string
  individual: CellValue
  'smb-flex': CellValue
  'corporate-pro': CellValue
  'enterprise-elite': CellValue
}

const ROWS: { category: string; items: Row[] }[] = [
  {
    category: 'Eligibility & cost',
    items: [
      {
        feature: 'Cost to enroll',
        individual: { text: 'Free', positive: true },
        'smb-flex': { text: 'Free', positive: true },
        'corporate-pro': { text: 'Free · negotiated', positive: true },
        'enterprise-elite': { text: 'Free · negotiated', positive: true },
      },
      {
        feature: 'Travelers',
        individual: { text: '1 (solo)' },
        'smb-flex': { text: '1–49' },
        'corporate-pro': { text: '50–499' },
        'enterprise-elite': { text: '500+' },
      },
      {
        feature: 'Annual Delta spend',
        individual: { text: 'Any' },
        'smb-flex': { text: 'Up to $50K' },
        'corporate-pro': { text: '$50K–$300K' },
        'enterprise-elite': { text: '$300K+' },
      },
      {
        feature: 'Enrollment path',
        individual: { text: 'Self-serve · 90s', positive: true },
        'smb-flex': { text: 'Self-serve · 90s', positive: true },
        'corporate-pro': { text: 'Sales contact · 2–4 weeks' },
        'enterprise-elite': { text: 'Sales contact · 2–4 weeks' },
      },
      {
        feature: 'No employer required',
        individual: { text: '✅', positive: true },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '—' },
        'enterprise-elite': { text: '—' },
      },
    ],
  },
  {
    category: 'Earning',
    items: [
      {
        feature: 'Personal SkyMiles for travelers',
        individual: { text: '✅ Standard rate', positive: true },
        'smb-flex': { text: '✅ Standard rate', positive: true },
        'corporate-pro': { text: '✅ Standard rate', positive: true },
        'enterprise-elite': { text: '✅ Standard rate', positive: true },
      },
      {
        feature: 'Company miles pool',
        individual: { text: '—' },
        'smb-flex': { text: '✅ Up to 10 / $', positive: true },
        'corporate-pro': { text: '✅ Up to 10 / $', positive: true },
        'enterprise-elite': { text: '✅ Up to 10 / $', positive: true },
      },
      {
        feature: 'Simultaneous dual earn',
        individual: { text: '—' },
        'smb-flex': { text: '✅', positive: true },
        'corporate-pro': { text: '✅', positive: true },
        'enterprise-elite': { text: '✅', positive: true },
      },
      {
        feature: 'MQDs toward personal Medallion',
        individual: { text: '✅', positive: true },
        'smb-flex': { text: '✅', positive: true },
        'corporate-pro': { text: '✅', positive: true },
        'enterprise-elite': { text: '✅', positive: true },
      },
      {
        feature: 'Negotiated fare discounts',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '✅ Dynamic', positive: true },
        'enterprise-elite': { text: '✅ Custom', positive: true },
      },
    ],
  },
  {
    category: 'Travel benefits',
    items: [
      {
        feature: 'Hertz Business Rewards / CLEAR / LinkedIn perks',
        individual: { text: '✅', positive: true },
        'smb-flex': { text: '✅', positive: true },
        'corporate-pro': { text: '✅', positive: true },
        'enterprise-elite': { text: '✅', positive: true },
      },
      {
        feature: 'Corporate Priority benefits',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '✅ Full suite', positive: true },
        'enterprise-elite': { text: '✅ Global', positive: true },
      },
      {
        feature: 'Sky Club access pathway',
        individual: { text: 'Via Amex card' },
        'smb-flex': { text: 'Via Amex card' },
        'corporate-pro': { text: '✅ Pool credits', positive: true },
        'enterprise-elite': { text: '✅ Expanded pool', positive: true },
      },
      {
        feature: 'Partner airline coverage',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '—' },
        'enterprise-elite': { text: '✅ AF, KLM, LATAM, VA', positive: true },
      },
      {
        feature: 'Unused ticket transfer',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '—' },
        'enterprise-elite': { text: '✅', positive: true },
      },
    ],
  },
  {
    category: 'Service & technology',
    items: [
      {
        feature: 'Management dashboard',
        individual: { text: 'Personal account' },
        'smb-flex': { text: '✅ Free dashboard', positive: true },
        'corporate-pro': { text: '✅ Advanced analytics', positive: true },
        'enterprise-elite': { text: '✅ Full reporting', positive: true },
      },
      {
        feature: 'Delta Business Tool platform',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '✅ Basic', positive: true },
        'enterprise-elite': { text: '✅ Full access', positive: true },
      },
      {
        feature: 'Account manager',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '✅ Dedicated', positive: true },
        'enterprise-elite': { text: '✅ Dedicated team', positive: true },
      },
      {
        feature: 'Concur / TMC integration',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '✅', positive: true },
        'enterprise-elite': { text: '✅', positive: true },
      },
      {
        feature: '24/7 Corporate Solutions',
        individual: { text: '—' },
        'smb-flex': { text: '—' },
        'corporate-pro': { text: '—' },
        'enterprise-elite': { text: '✅', positive: true },
      },
    ],
  },
  {
    category: 'Best for',
    items: [
      {
        feature: 'Profile',
        individual: { text: 'Freelancers · solo travelers · employees with no corporate program' },
        'smb-flex': { text: 'Small teams · 1–49 travelers · zero-friction self-serve' },
        'corporate-pro': { text: 'Mid-market · negotiated rates · dedicated account manager' },
        'enterprise-elite': { text: 'Global enterprises · custom pricing · full managed travel' },
      },
    ],
  },
]

function Cell({ value, accent }: { value: CellValue; accent: string }) {
  if (value.text === '—') {
    return <span style={{ color: 'var(--color-neutral-400)' }}>—</span>
  }
  if (value.text.startsWith('✅')) {
    const rest = value.text.slice(1).trim()
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>
        <i className="ph-bold ph-check" style={{ color: '#16a34a', fontSize: '0.9em' }} />
        {rest && <span>{rest}</span>}
      </span>
    )
  }
  return (
    <span style={{ color: value.positive ? accent : 'var(--color-neutral-700)', fontWeight: value.positive ? '600' : '400' }}>
      {value.text}
    </span>
  )
}

export default function CompareBusinessPlansPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}>
        <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <nav
            className="mb-6 flex items-center justify-center gap-2"
            style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.78)' }}
          >
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.78)' }}>Programs</Link>
            <i className="ph ph-caret-right text-xs"></i>
            <span style={{ color: 'var(--color-neutral-0)' }}>Compare plans</span>
          </nav>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '16px',
            }}
          >
            Compare every Delta business plan
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '560px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            Four paths, one airline. Pick by traveler count, annual Delta spend, or the benefits that
            matter most. Switch tiers any time after enrolling.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/program-selector"
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
              Take the 60-second quiz
              <i className="ph-bold ph-arrow-right text-sm"></i>
            </Link>
            <Link
              href="/enroll/individual"
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
              Skip to enrollment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick stat strip ───────────────────────────────────── */}
      <section style={{ background: 'var(--color-neutral-0)', padding: '24px 24px', borderBottom: '1px solid var(--color-neutral-10)' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 'var(--container-wide)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {PLANS.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group flex items-center gap-3 rounded-[var(--radius-l)] p-3 transition-colors"
              style={{
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-10)',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: '6px',
                  alignSelf: 'stretch',
                  borderRadius: '999px',
                  background: p.accent,
                  flexShrink: 0,
                }}
              />
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
                  {p.sub}
                </p>
              </div>
              <i className="ph-bold ph-arrow-right text-sm group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--color-neutral-500)' }}></i>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Comparison table ───────────────────────────────────── */}
      <section className="py-16" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="overflow-x-auto">
            <table
              className="w-full"
              style={{ borderCollapse: 'collapse', minWidth: '900px', fontSize: 'var(--type-scale-13)' }}
            >
              <thead>
                <tr>
                  <th
                    className="text-left p-4 sticky left-0 z-10"
                    style={{
                      fontSize: 'var(--type-scale-13)',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                      background: 'var(--color-neutral-0)',
                      minWidth: '220px',
                      borderBottom: '2px solid var(--color-neutral-10)',
                    }}
                  >
                    Feature
                  </th>
                  {PLANS.map((p) => (
                    <th
                      key={p.key}
                      className="p-4 text-left"
                      style={{
                        minWidth: '180px',
                        background: 'var(--color-neutral-5)',
                        borderBottom: `3px solid ${p.accent}`,
                      }}
                    >
                      <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: p.accent }}>
                        {p.name}
                      </p>
                      <p style={{ fontSize: 'var(--type-scale-11)', color: 'var(--color-neutral-600)', fontWeight: '400', marginTop: '4px', lineHeight: 1.4 }}>
                        {p.sub}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((group) => (
                  <CategoryRows key={group.category} category={group.category} items={group.items} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA row per plan ───────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-10"
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
            }}
          >
            Pick your plan
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {PLANS.map((p) => (
              <div
                key={p.key}
                className="flex flex-col rounded-[var(--radius-l)] p-6"
                style={{
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <span
                  className="inline-block mb-2"
                  style={{
                    width: '36px',
                    height: '4px',
                    borderRadius: '999px',
                    background: p.accent,
                  }}
                />
                <p style={{ fontSize: 'var(--type-scale-18)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '20px', lineHeight: 1.5, flex: 1 }}>
                  {p.sub}
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={p.enrollHref}
                    className="flex items-center justify-center gap-2 font-semibold"
                    style={{
                      height: '40px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-delta-red-400)',
                      color: 'var(--color-neutral-0)',
                      fontSize: 'var(--type-scale-14)',
                      boxShadow: 'var(--shadow-button)',
                      textDecoration: 'none',
                    }}
                  >
                    {p.enrollLabel}
                  </Link>
                  <Link
                    href={p.href}
                    className="flex items-center justify-center gap-2 font-semibold"
                    style={{
                      height: '40px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-neutral-0)',
                      color: 'var(--color-delta-blue-700)',
                      border: '1px solid var(--color-neutral-10)',
                      fontSize: 'var(--type-scale-14)',
                      textDecoration: 'none',
                    }}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────── */}
      <section className="py-12 text-center" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Switch plans whenever — your earnings, traveler list, and Delta Amex perks travel with you.{' '}
            <Link href="/tools/program-selector" style={{ color: 'var(--color-nav-section-title)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: '600' }}>
              Take the quiz to get a recommendation →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

// ── Subcomponent: a category header + its rows ───────────────────────────────

function CategoryRows({ category, items }: { category: string; items: Row[] }) {
  return (
    <>
      <tr>
        <td
          colSpan={1 + PLANS.length}
          className="px-4 py-3"
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-neutral-500)',
            background: 'var(--color-neutral-5)',
            borderTop: '1px solid var(--color-neutral-10)',
          }}
        >
          {category}
        </td>
      </tr>
      {items.map((row, i) => (
        <tr
          key={row.feature}
          style={{
            borderBottom: '1px solid var(--color-neutral-10)',
            background: i % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)',
          }}
        >
          <td
            className="p-4 sticky left-0 z-[5]"
            style={{
              fontSize: 'var(--type-scale-13)',
              color: 'var(--color-delta-blue-600)',
              fontWeight: '600',
              background: 'inherit',
            }}
          >
            {row.feature}
          </td>
          {PLANS.map((p) => (
            <td key={p.key} className="p-4 align-top" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.5 }}>
              <Cell value={row[p.key]} accent={p.accent} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
