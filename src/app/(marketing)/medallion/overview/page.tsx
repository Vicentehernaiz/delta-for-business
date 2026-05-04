import type { Metadata } from 'next'
import Link from 'next/link'
import {
  medallionTiers,
  medallionOrder,
  MEDALLION_BENEFITS_TABLE,
  SEAT_UPGRADE_LIKELIHOOD,
  MEDALLION_XERS_TABLE,
} from '@/config/medallion'
import type { BenefitRow, SeatUpgradeRow, MedallionXerRow } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Medallion Benefits Overview | Delta for Business',
  description:
    'Complete Medallion tier comparison for business travelers: benefits, upgrade likelihood, miles multipliers. Gold, Platinum, Diamond.',
  alternates: { canonical: 'https://business.delta.com/medallion/overview' },
}

const tierColorVar: Record<string, string> = {
  gold: 'var(--color-medallion-gold)',
  platinum: 'var(--color-medallion-platinum)',
  diamond: 'var(--color-medallion-diamond)',
}

const tierMqd: Record<string, string> = {
  gold: '$10,000',
  platinum: '$15,000',
  diamond: '$28,000',
}

interface CategoryGroup {
  label: string
  rows: BenefitRow[]
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    label: 'Qualifying',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) => r.feature === 'MQD to qualify'),
  },
  {
    label: 'Miles & Earning',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      ['Miles multiplier', 'SkyMiles bonus'].includes(r.feature)
    ),
  },
  {
    label: 'Boarding',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      ['Boarding zone', 'Sky Priority service'].includes(r.feature)
    ),
  },
  {
    label: 'Upgrades',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      [
        'Upgrade priority',
        'Upgrade window',
        'Complimentary upgrades',
        'First Class upgrades',
        'Comfort+ upgrades',
      ].includes(r.feature)
    ),
  },
  {
    label: 'Bags & Fees',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      ['Free checked bags', 'Same-day changes', 'Waived fees'].includes(r.feature)
    ),
  },
  {
    label: 'Lounge',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      ['Sky Club access', 'International lounges'].includes(r.feature)
    ),
  },
  {
    label: 'Benefits',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) => r.feature === 'Choice Benefits'),
  },
  {
    label: 'Business',
    rows: MEDALLION_BENEFITS_TABLE.filter((r) =>
      ['Corporate Priority stacks'].includes(r.feature)
    ),
  },
]

function CellValue({ value }: { value: string }) {
  if (value === 'No' || value === '—') {
    return (
      <i
        className="ph-bold ph-x"
        style={{ color: 'var(--color-delta-red-400)', fontSize: '0.875rem' }}
      />
    )
  }
  if (value.startsWith('Yes') || value === 'Complimentary' || value === 'Free') {
    const extra = value.startsWith('Yes') && value.length > 3 ? value.slice(3).trim() : ''
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--color-delta-blue-700)',
          fontSize: 'inherit',
        }}
      >
        <i className="ph-bold ph-check" style={{ color: '#16a34a', fontSize: '0.875rem' }} />
        {extra && <span style={{ fontSize: 'inherit' }}>{extra}</span>}
      </span>
    )
  }
  return <span style={{ color: 'var(--color-delta-blue-700)' }}>{value}</span>
}

export default function OverviewPage() {
  const tiers = medallionOrder.map((id) => medallionTiers[id])

  return (
    <main>
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
          padding: '56px 24px',
        }}
      >
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'var(--type-scale-13)',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '24px',
            }}
          >
            <Link
              href="/"
              style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
            >
              Home
            </Link>
            <i className="ph ph-caret-right" style={{ fontSize: '0.75rem' }} />
            <Link
              href="/medallion"
              style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
            >
              Medallion
            </Link>
            <i className="ph ph-caret-right" style={{ fontSize: '0.75rem' }} />
            <span style={{ color: 'var(--color-neutral-0)' }}>Overview</span>
          </nav>

          <p
            style={{
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '12px',
            }}
          >
            Medallion Status for Business
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.5rem,2.5vw,var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '16px',
            }}
          >
            Overview completo de beneficios
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-16)',
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '540px',
              lineHeight: 1.6,
            }}
          >
            Comparación exhaustiva de los tres tiers Medallion: beneficios por categoría,
            probabilidad de upgrade y multiplicadores de millas.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: 'var(--type-scale-24)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-700)',
                marginBottom: '8px',
              }}
            >
              Tabla de beneficios por categoría
            </h2>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)' }}>
              MQD-only desde 2024. Sin mínimos de segmentos ni millas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--type-scale-13)',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-neutral-10)' }}>
                  <th
                    style={{
                      width: '200px',
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Feature
                  </th>
                  {medallionOrder.map((tier) => (
                    <th key={tier} style={{ textAlign: 'center', padding: '12px 16px' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/assets/images/medallion/${tier}.svg`}
                          alt={`${tier.charAt(0).toUpperCase() + tier.slice(1)} Medallion`}
                          style={{ width: '24px', height: '21px' }}
                        />
                        <span
                          style={{
                            fontWeight: '700',
                            color: tierColorVar[tier],
                          }}
                        >
                          {tier.charAt(0).toUpperCase() + tier.slice(1)}
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--type-scale-11)',
                            color: 'var(--color-neutral-500)',
                          }}
                        >
                          {tierMqd[tier]} MQD
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATEGORY_GROUPS.map(({ label, rows }) => (
                  <>
                    <tr
                      key={`cat-${label}`}
                      style={{ background: 'var(--color-delta-blue-700)' }}
                    >
                      <td
                        colSpan={4}
                        style={{
                          padding: '6px 16px',
                          fontSize: 'var(--type-scale-11)',
                          fontWeight: '700',
                          color: 'rgba(255,255,255,0.7)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {label}
                      </td>
                    </tr>
                    {rows.map((row: BenefitRow, i: number) => (
                      <tr
                        key={row.feature}
                        style={{
                          background:
                            i % 2 === 0
                              ? 'var(--color-neutral-0)'
                              : 'var(--color-neutral-5)',
                          borderBottom: '1px solid var(--color-neutral-10)',
                        }}
                      >
                        <td
                          style={{
                            padding: '10px 16px',
                            color: 'var(--color-neutral-600)',
                            fontWeight: '500',
                          }}
                        >
                          {row.feature}
                        </td>
                        <td style={{ textAlign: 'center', padding: '10px 16px' }}>
                          <CellValue value={row.gold} />
                        </td>
                        <td style={{ textAlign: 'center', padding: '10px 16px' }}>
                          <CellValue value={row.platinum} />
                        </td>
                        <td style={{ textAlign: 'center', padding: '10px 16px' }}>
                          <CellValue value={row.diamond} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-5)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'var(--type-scale-24)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-700)',
                marginBottom: '8px',
              }}
            >
              Probabilidad de upgrade de asiento
            </h2>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)' }}>
              Indicativa. La probabilidad real varía con ruta, load factor y anticipación de reserva.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--type-scale-13)',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-neutral-10)' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Main Cabin+
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    First Class
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Delta One
                  </th>
                </tr>
              </thead>
              <tbody>
                {SEAT_UPGRADE_LIKELIHOOD.map((row: SeatUpgradeRow, i: number) => {
                  const tierKey = row.tier.toLowerCase()
                  const color = tierColorVar[tierKey] ?? 'var(--color-delta-blue-700)'
                  return (
                    <tr
                      key={row.tier}
                      style={{
                        background:
                          i % 2 === 0
                            ? 'var(--color-neutral-0)'
                            : 'var(--color-neutral-5)',
                        borderBottom: '1px solid var(--color-neutral-10)',
                      }}
                    >
                      <td
                        style={{
                          padding: '10px 16px',
                          fontWeight: '700',
                          color,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/assets/images/medallion/${tierKey}.svg`}
                          alt={`${row.tier} Medallion`}
                          style={{ width: '18px', height: '16px' }}
                        />
                        {row.tier}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '10px 16px',
                          color: 'var(--color-delta-blue-700)',
                        }}
                      >
                        {row.mainCabinPlus}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '10px 16px',
                          color: 'var(--color-delta-blue-700)',
                        }}
                      >
                        {row.firstClass}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '10px 16px',
                          color:
                            row.deltaOne === '—'
                              ? 'var(--color-neutral-500)'
                              : 'var(--color-delta-blue-700)',
                        }}
                      >
                        {row.deltaOne}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'var(--type-scale-24)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-700)',
                marginBottom: '8px',
              }}
            >
              Medallion Xers — multiplicadores de millas
            </h2>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-500)' }}>
              Millas SkyMiles por dólar gastado en vuelos Delta operados y comercializados.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--type-scale-13)',
                maxWidth: '420px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-neutral-10)' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--color-neutral-500)',
                      fontWeight: '600',
                    }}
                  >
                    Miles Multiplier
                  </th>
                </tr>
              </thead>
              <tbody>
                {MEDALLION_XERS_TABLE.map((row: MedallionXerRow, i: number) => {
                  const tierKey = row.status.toLowerCase()
                  const isStatus = tierKey !== 'no status'
                  const color = isStatus
                    ? tierColorVar[tierKey] ?? 'var(--color-delta-blue-700)'
                    : 'var(--color-neutral-600)'
                  return (
                    <tr
                      key={row.status}
                      style={{
                        background:
                          i % 2 === 0
                            ? 'var(--color-neutral-0)'
                            : 'var(--color-neutral-5)',
                        borderBottom: '1px solid var(--color-neutral-10)',
                      }}
                    >
                      <td
                        style={{
                          padding: '10px 16px',
                          fontWeight: isStatus ? '700' : '400',
                          color,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        {isStatus && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={`/assets/images/medallion/${tierKey}.svg`}
                            alt={`${row.status} Medallion`}
                            style={{ width: '18px', height: '16px' }}
                          />
                        )}
                        {row.status}
                      </td>
                      <td
                        style={{
                          textAlign: 'center',
                          padding: '10px 16px',
                          fontWeight: '700',
                          color,
                        }}
                      >
                        {row.multiplier}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-5)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'var(--type-scale-24)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '24px',
            }}
          >
            Los tres tiers en detalle
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {tiers.map((tier) => {
              const color = tierColorVar[tier.id]
              return (
                <Link
                  key={tier.id}
                  href={`/medallion/${tier.id}`}
                  style={{
                    borderRadius: 'var(--radius-l)',
                    padding: '24px 20px',
                    background: 'var(--color-neutral-0)',
                    border: `1px solid var(--color-neutral-10)`,
                    boxShadow: 'var(--shadow-card)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/images/medallion/${tier.id}.svg`}
                      alt={`${tier.name} Medallion`}
                      style={{ width: '28px', height: '24px' }}
                    />
                    <span
                      style={{
                        fontSize: 'var(--type-scale-16)',
                        fontWeight: '700',
                        color,
                      }}
                    >
                      {tier.name}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--type-scale-13)',
                      color: 'var(--color-neutral-600)',
                      lineHeight: 1.5,
                    }}
                  >
                    {tier.businessTagline}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      borderTop: '1px solid var(--color-neutral-10)',
                      paddingTop: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          color: 'var(--color-neutral-500)',
                        }}
                      >
                        MQD to qualify
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          fontWeight: '700',
                          color,
                        }}
                      >
                        ${tier.mqdThreshold.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          color: 'var(--color-neutral-500)',
                        }}
                      >
                        Miles multiplier
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          fontWeight: '700',
                          color: 'var(--color-delta-blue-600)',
                        }}
                      >
                        {tier.skymilesMult}× per $
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          color: 'var(--color-neutral-500)',
                        }}
                      >
                        Upgrade window
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          fontWeight: '700',
                          color: 'var(--color-delta-blue-600)',
                        }}
                      >
                        {tier.upgradeWindow}hr
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span
                      style={{
                        fontSize: 'var(--type-scale-13)',
                        fontWeight: '600',
                        color,
                      }}
                    >
                      Ver beneficios completos
                    </span>
                    <i
                      className="ph-bold ph-arrow-right"
                      style={{ color, fontSize: '0.8rem' }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <i
            className="ph-fill ph-calculator"
            style={{
              color: 'var(--color-delta-red-400)',
              fontSize: '2rem',
              marginBottom: '16px',
              display: 'block',
            }}
          />
          <h2
            style={{
              fontSize: 'var(--type-scale-24)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '12px',
            }}
          >
            ¿Cuántos MQD necesitas?
          </h2>
          <p
            style={{
              fontSize: 'var(--type-scale-15)',
              color: 'var(--color-neutral-600)',
              marginBottom: '28px',
              lineHeight: 1.6,
            }}
          >
            Calcula tu distancia al siguiente tier incluyendo el Headstart de tarjeta y los Boosts
            por gasto.
          </p>
          <Link
            href="/medallion/mqd-calculator"
            style={{
              height: '48px',
              padding: '0 28px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-15)',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Abrir MQD Calculator <i className="ph-bold ph-arrow-right" />
          </Link>
        </div>
      </section>
    </main>
  )
}
