import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MEDALLION_BENEFITS_TABLE,
  SEAT_UPGRADE_LIKELIHOOD,
  MEDALLION_XERS_TABLE,
  medallionOrder,
} from '@/config/medallion'
import type { BenefitRow, SeatUpgradeRow, MedallionXerRow } from '@/config/medallion'

export const metadata: Metadata = {
  title: 'Medallion Status for Business Travelers | Delta for Business',
  description:
    'Medallion elite status and how corporate travel earns it faster. Gold $10K · Platinum $15K · Diamond $28K. MQD-only since 2024.',
  alternates: { canonical: 'https://business.delta.com/medallion' },
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

const tierLabel: Record<string, string> = {
  gold: 'Gold',
  platinum: 'Platinum',
  diamond: 'Diamond',
}

const faqs: Array<{ q: string; a: string }> = [
  {
    q: '¿Es Medallion lo mismo que SkyMiles for Business?',
    a: 'No. Medallion es el tier de estatus personal del viajero — determina boarding zone, upgrades y servicios de prioridad. SkyMiles for Business es el programa corporativo de la empresa que acumula millas en nombre de la compañía. Son sistemas independientes y paralelos.',
  },
  {
    q: '¿Cuenta el gasto en tarjetas Amex hacia MQD?',
    a: 'Sí. Los titulares de Delta Amex Platinum reciben un MQD Headstart de $2,500 al inicio de cada año Medallion; los de Reserve reciben $3,000. Además, ambas tarjetas generan MQD Boost con compras elegibles — $1 MQD por cada $25 (Platinum) o $10 (Reserve) gastados en cualquier categoría.',
  },
  {
    q: '¿Puede la empresa ganar estatus Medallion?',
    a: 'No. Medallion es estrictamente un programa personal — ninguna empresa puede alcanzar un tier Medallion. Sin embargo, las empresas inscritas en SkyMiles for Business pueden canjear millas corporativas para transferirlas a empleados específicos o adquirir membresías Sky Club.',
  },
  {
    q: '¿Se acumula Medallion con Corporate Priority?',
    a: 'Sí. Un Diamond Medallion cuya empresa tiene un acuerdo corporativo con Delta recibe ambos stacks de beneficios simultáneamente — los personales de Medallion y los corporativos de Corporate Priority. Ninguno reemplaza al otro.',
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
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-delta-blue-700)', fontSize: 'inherit' }}>
        <i className="ph-bold ph-check" style={{ color: '#16a34a', fontSize: '0.875rem' }} />
        {extra && <span style={{ fontSize: 'inherit' }}>{extra}</span>}
      </span>
    )
  }
  return <span style={{ color: 'var(--color-delta-blue-700)' }}>{value}</span>
}

export default function MedallionPage() {
  return (
    <main>
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.82)',
              marginBottom: '12px',
            }}
          >
            Individual Elite Status
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.75rem,3vw,var(--type-scale-48))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              marginBottom: '16px',
            }}
          >
            Medallion Status
            <br />
            for Business
          </h1>
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '560px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            Elite status earned by individual travelers from Delta flight spend. Three tiers, one
            metric: Medallion Qualifying Dollars. Corporate Priority and Medallion stack — both
            benefit your travelers simultaneously.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/medallion/mqd-calculator"
              style={{
                height: '48px',
                padding: '0 24px',
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
              Calculate MQD target <i className="ph-bold ph-calculator" />
            </Link>
            <Link
              href="/enroll/individual"
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.12)',
                color: 'var(--color-neutral-0)',
                fontSize: 'var(--type-scale-15)',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              Get started free <i className="ph-bold ph-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEW · MEDALLION TIERS FOR BUSINESS
          Pooled MQDs · Provisional Initiation · 3 tiers · Why this works
          ═══════════════════════════════════════════════════════════ */}
      <BusinessMedallionTiersSection />

      <section style={{ background: 'var(--color-neutral-0)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'var(--type-scale-28)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-delta-blue-700)',
                marginBottom: '8px',
              }}
            >
              Comparación de beneficios por tier
            </h2>
            <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-500)' }}>
              Estatus válido por año calendario (enero–diciembre). Los MQD se reinician cada enero.
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
                          alt={`${tierLabel[tier]} Medallion`}
                          style={{ width: '26px', height: '23px' }}
                        />
                        <span
                          style={{
                            fontWeight: '700',
                            color: tierColorVar[tier],
                          }}
                        >
                          {tierLabel[tier]}
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
                {MEDALLION_BENEFITS_TABLE.map((row: BenefitRow, i: number) => (
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
              La probabilidad real varía según ruta, ocupación y antelación de reserva.
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
              Millas ganadas por dólar gastado en vuelos Delta operados y comercializados.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--type-scale-13)',
                maxWidth: '400px',
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
                  const color =
                    tierColorVar[tierKey] ?? 'var(--color-delta-blue-700)'
                  const isStatus = tierKey !== 'no status'
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
                          color: isStatus ? color : 'var(--color-neutral-600)',
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
                          color: isStatus ? color : 'var(--color-neutral-600)',
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

      <section style={{ background: 'var(--color-delta-blue-50)', padding: '64px 24px', borderTop: '1px solid var(--color-neutral-10)', borderBottom: '1px solid var(--color-neutral-10)' }}>
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
            Medallion + programas corporativos trabajan juntos
          </h2>

          <div
            style={{
              borderRadius: 'var(--radius-l)',
              padding: '20px 24px',
              background: 'var(--color-neutral-0)',
              border: '1px solid var(--color-neutral-10)',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <i
                className="ph-fill ph-info"
                style={{ color: 'var(--color-delta-blue-600)', fontSize: '1.25rem', flexShrink: 0 }}
              />
              <p
                style={{
                  fontSize: 'var(--type-scale-14)',
                  color: 'var(--color-delta-blue-700)',
                  lineHeight: 1.7,
                }}
              >
                <strong>Medallion es individual; SkyMiles for Business es de la empresa.</strong>{' '}
                Ambos se acumulan de forma paralela e independiente en el mismo viaje. Un viajero
                con Diamond Medallion cuya empresa tiene un acuerdo corporativo recibe beneficios
                de ambos sistemas al mismo tiempo.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: 'ph-fill ph-stack',
                title: 'Dual earn simultáneo',
                desc: 'El viajero acumula millas personales SkyMiles y la empresa acumula millas corporativas en el mismo vuelo. No hay elección entre uno u otro.',
              },
              {
                icon: 'ph-fill ph-arrow-up',
                title: 'Corporate Priority + Medallion = stacking',
                desc: 'Si la empresa tiene un acuerdo con Corporate Priority, los beneficios se suman a los de Medallion personal. Un Platinum Medallion con acuerdo corporativo recibe ambos stacks.',
              },
              {
                icon: 'ph-fill ph-buildings',
                title: 'Independencia de programas',
                desc: 'Un empleado puede tener Diamond Medallion mientras su empresa está en el tier Member de SkyMiles for Business — y al revés. Los tiers son completamente independientes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 'var(--radius-l)',
                  padding: '20px',
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <i
                  className={item.icon}
                  style={{
                    color: 'var(--color-delta-red-400)',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 'var(--type-scale-14)',
                      fontWeight: '700',
                      color: 'var(--color-delta-blue-700)',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--type-scale-13)',
                      color: 'var(--color-neutral-600)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  borderRadius: 'var(--radius-l)',
                  padding: '20px 24px',
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--type-scale-15)',
                    fontWeight: '700',
                    color: 'var(--color-delta-blue-700)',
                    marginBottom: '8px',
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: 'var(--type-scale-14)',
                    color: 'var(--color-neutral-600)',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-neutral-0)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                label: 'Overview completo',
                desc: 'Las tres tablas del Figma: beneficios, upgrades y multiplicadores',
                href: '/medallion/overview',
                icon: 'ph-fill ph-medal',
              },
              {
                label: 'MQD Calculator',
                desc: 'Estima cuántos vuelos necesitas para tu tier objetivo',
                href: '/medallion/mqd-calculator',
                icon: 'ph-fill ph-calculator',
              },
              {
                label: 'Delta Amex Cards',
                desc: 'Tarjetas con MQD Headstart y Boost incorporados',
                href: '/cards',
                icon: 'ph-fill ph-credit-card',
              },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  borderRadius: 'var(--radius-l)',
                  padding: '20px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  background: 'var(--color-neutral-5)',
                  border: '1px solid var(--color-neutral-10)',
                  textDecoration: 'none',
                }}
              >
                <i
                  className={link.icon}
                  style={{
                    color: 'var(--color-delta-red-400)',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 'var(--type-scale-14)',
                      fontWeight: '700',
                      color: 'var(--color-delta-blue-700)',
                      marginBottom: '4px',
                    }}
                  >
                    {link.label}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-500)' }}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// ═════════════════════════════════════════════════════════════════════════════
// Business Medallion Tiers — pooled MQDs, provisional initiation, why it works
// ═════════════════════════════════════════════════════════════════════════════

const BUSINESS_TIERS = [
  {
    id: 'gold',
    name: 'Business Gold',
    img: '/assets/images/medallion/gold.svg',
    mqd: 10000,
    initiationFee: 5000,
    yearOneGoal: 5000,
    pairedCard: 'Delta SkyMiles® Gold Business Card',
    accent: 'var(--color-medallion-gold)',
  },
  {
    id: 'platinum',
    name: 'Business Platinum',
    img: '/assets/images/medallion/platinum.svg',
    mqd: 30000,
    initiationFee: 15000,
    yearOneGoal: 15000,
    pairedCard: 'Delta SkyMiles® Platinum Business Card',
    accent: 'var(--color-medallion-platinum)',
  },
  {
    id: 'diamond',
    name: 'Business Diamond',
    img: '/assets/images/medallion/diamond.svg',
    mqd: 50000,
    initiationFee: 25000,
    yearOneGoal: 25000,
    pairedCard: 'Delta SkyMiles® Reserve Business Card',
    accent: 'var(--color-medallion-diamond)',
  },
] as const

function BusinessMedallionTiersSection() {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, var(--color-neutral-5) 0%, var(--color-neutral-0) 60%, var(--color-neutral-5) 100%)',
        borderTop: '1px solid var(--color-neutral-10)',
        borderBottom: '1px solid var(--color-neutral-10)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
        {/* Section header */}
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 font-semibold"
            style={{
              background: 'var(--color-delta-red-50)',
              color: 'var(--color-delta-red-400)',
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className="ph-fill ph-sparkle text-xs"></i>
            New · For companies
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '12px',
            }}
          >
            Introducing <span style={{ color: 'var(--color-delta-red-400)', fontStyle: 'italic' }}>Medallion Tiers for Business</span>
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            A new <strong>company-side</strong> Medallion program. Pool MQDs across employees, pair
            with a Delta SkyMiles Business Amex, and earn a tier the entire organization unlocks.
            Independent of personal Medallion — both stack.
          </p>
        </div>

        {/* Three tier cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '80px',
          }}
        >
          {BUSINESS_TIERS.map((t) => (
            <div
              key={t.id}
              className="text-center flex flex-col items-center"
              style={{
                padding: '32px 24px',
                borderRadius: 'var(--radius-l)',
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-10)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.img}
                alt={`${t.name} icon`}
                style={{ width: '88px', height: '78px', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.12))', marginBottom: '20px' }}
              />
              <p
                style={{
                  fontSize: 'var(--type-scale-22)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-700)',
                  marginBottom: '4px',
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontSize: 'var(--type-scale-15)',
                  color: t.accent,
                  fontWeight: '700',
                  marginBottom: '20px',
                }}
              >
                ${t.mqd.toLocaleString()} MQDs
              </p>
              <p
                style={{
                  fontSize: 'var(--type-scale-11)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-delta-red-400)',
                  marginBottom: '4px',
                }}
              >
                Best paired with
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.5 }}>
                {t.pairedCard}
              </p>
            </div>
          ))}
        </div>

        {/* ── Business Medallion Tier Capabilities table ──────────── */}
        <BusinessTierCapabilitiesTable />

        {/* ── How It Works header ─────────────────────────────────── */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontSize: 'var(--type-scale-12)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-delta-red-400)',
              marginBottom: '8px',
            }}
          >
            How it works
          </p>
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
            }}
          >
            Two mechanics power the program
          </h3>
        </div>

        {/* ── Pooled MQDs + Provisional Initiation (two-column) ──── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {/* Pooled MQDs card */}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--radius-l)',
              background: 'var(--color-neutral-0)',
              border: '1px solid var(--color-neutral-10)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--type-scale-12)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-delta-red-400)',
                marginBottom: '6px',
              }}
            >
              Pooled MQDs
            </p>
            <p
              style={{
                fontSize: 'var(--type-scale-15)',
                color: 'var(--color-neutral-700)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              MQDs earned by employees on business travel flights aggregate under one company
              account and contribute to the tier threshold — no individual employee needs to hit
              Diamond on their own.
            </p>
            <PooledMqdsDiagram />
          </div>

          {/* Provisional Initiation card */}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--radius-l)',
              background: 'var(--color-neutral-0)',
              border: '1px solid var(--color-neutral-10)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--type-scale-12)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-delta-red-400)',
                marginBottom: '6px',
              }}
            >
              Provisional Initiation
            </p>
            <p
              style={{
                fontSize: 'var(--type-scale-15)',
                color: 'var(--color-neutral-700)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Companies pay a 50% initiation fee to join the program. The fee counts toward the
              selected tier&apos;s MQD threshold <em>and</em> waives the Amex SkyMiles Business
              annual fees for the year.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Fee counts as 50% of MQD threshold', icon: 'ph-fill ph-check-circle' },
                { label: 'Amex SkyMiles annual fees waived', icon: 'ph-fill ph-check-circle' },
                { label: 'Earn the remaining 50% in MQDs over Year 1', icon: 'ph-fill ph-check-circle' },
              ].map((it) => (
                <li key={it.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <i className={`${it.icon} text-base`} style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-700)', lineHeight: 1.55 }}>{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Initiation flow diagram ──────────────────────────────── */}
        <InitiationFlow />

        {/* ── Why this works ───────────────────────────────────────── */}
        <WhyThisWorks />
      </div>
    </section>
  )
}

// ── Business Medallion Tier Capabilities table ──────────────────────────────

type CapabilityCell =
  | { kind: 'level'; level: 0 | 1 | 2 | 3; note?: string }
  | { kind: 'text'; value: string }

interface CapabilityRow {
  feature: string
  gold: CapabilityCell
  platinum: CapabilityCell
  diamond: CapabilityCell
}

const CAPABILITY_ROWS: readonly CapabilityRow[] = [
  {
    feature: 'MQD Threshold',
    gold: { kind: 'text', value: '$10,000 MQDs' },
    platinum: { kind: 'text', value: '$30,000 MQDs' },
    diamond: { kind: 'text', value: '$50,000 MQDs' },
  },
  {
    feature: 'Disruption / Rebooking Priority',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Miles Per Dollar',
    gold: { kind: 'level', level: 1, note: '12 SkyMiles / Dollar (when paired with card)' },
    platinum: { kind: 'level', level: 2, note: '14 SkyMiles / Dollar (when paired with card)' },
    diamond: { kind: 'level', level: 3, note: '16 SkyMiles / Dollar (when paired with card)' },
  },
  {
    feature: 'Pooled SkyMiles Wallet',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Pooled MQDs for Medallion Status',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Reduced Fair Rates',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 2 },
    diamond: { kind: 'level', level: 3 },
  },
  {
    feature: 'Max Seat Reserves',
    gold: { kind: 'level', level: 1, note: '(2 seats up to 24 hours)' },
    platinum: { kind: 'level', level: 2, note: '(3 seats up to 24 hours)' },
    diamond: { kind: 'level', level: 3, note: '(5 seats up to 24 hours)' },
  },
  {
    feature: 'Travel Management Dashboard',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 2, note: '(AI Insights)' },
    diamond: { kind: 'level', level: 2, note: '(AI Insights)' },
  },
  {
    feature: 'American Express Pairing',
    gold: { kind: 'text', value: 'AMEX SkyMiles Gold (Annual Fee Waived)' },
    platinum: { kind: 'text', value: 'AMEX SkyMiles Platinum (Annual Fee Waived)' },
    diamond: { kind: 'text', value: 'AMEX SkyMiles Reserve (Annual Fee Waived)' },
  },
  {
    feature: 'Account Linking (Delta Business)',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: '24/7 Priority Support Line',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Dedicated Account Support Concierge',
    gold: { kind: 'level', level: 0 },
    platinum: { kind: 'level', level: 0 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Universal Comfort+ Seating',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Keep / Maintain Personal SkyMiles + Medallion Status',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'Account Link Bonus Miles (Initial Incentive)',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 2 },
    diamond: { kind: 'level', level: 3 },
  },
  {
    feature: 'Complimentary Seat Upgrade Priority',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 2 },
  },
  {
    feature: 'Share of Miles on Business Travel',
    gold: { kind: 'level', level: 1, note: '(10% of miles added to personal wallet)' },
    platinum: { kind: 'level', level: 2, note: '(15% of miles added to personal wallet)' },
    diamond: { kind: 'level', level: 3, note: '(20% of miles added to personal wallet)' },
  },
  {
    feature: 'Matched MQDs on Business Travel',
    gold: { kind: 'level', level: 1 },
    platinum: { kind: 'level', level: 1 },
    diamond: { kind: 'level', level: 1 },
  },
  {
    feature: 'SkyClub Lounge Access',
    gold: { kind: 'level', level: 1, note: '(Entry with fee)' },
    platinum: { kind: 'level', level: 2, note: '(Reduced entry fee)' },
    diamond: { kind: 'level', level: 3, note: '(Waived entry fee)' },
  },
  {
    feature: 'Priority Boarding',
    gold: { kind: 'level', level: 1, note: '(Zone 4)' },
    platinum: { kind: 'level', level: 2, note: '(Zone 3)' },
    diamond: { kind: 'level', level: 3, note: '(Zone 2)' },
  },
] as const

function TierCellValue({ cell }: { cell: CapabilityCell }) {
  if (cell.kind === 'text') {
    return (
      <span
        style={{
          fontSize: 'var(--type-scale-13)',
          color: 'var(--color-neutral-700)',
          fontWeight: '600',
          lineHeight: 1.5,
        }}
      >
        {cell.value}
      </span>
    )
  }

  if (cell.level === 0) {
    return (
      <i
        className="ph-bold ph-x"
        style={{
          color: 'var(--color-error)',
          fontSize: '18px',
        }}
        aria-label="Not included"
      />
    )
  }

  return (
    <div className="flex flex-col items-center" style={{ gap: '2px' }}>
      <span
        className="inline-flex items-center"
        style={{ gap: '2px' }}
        aria-label={
          cell.level === 1
            ? 'Included'
            : cell.level === 2
              ? 'Strong capability'
              : 'Premium capability'
        }
      >
        {Array.from({ length: cell.level }).map((_, i) => (
          <i
            key={i}
            className="ph-bold ph-check"
            style={{
              color: 'var(--color-success)',
              fontSize: '16px',
            }}
            aria-hidden="true"
          />
        ))}
      </span>
      {cell.note ? (
        <span
          style={{
            fontSize: '12px',
            color: 'var(--color-neutral-600)',
            lineHeight: 1.4,
            textAlign: 'center',
            marginTop: '2px',
          }}
        >
          {cell.note}
        </span>
      ) : null}
    </div>
  )
}

function BusinessTierCapabilitiesTable() {
  const tiers = [
    {
      id: 'gold',
      name: 'Business Gold',
      mqd: '$10,000 MQDs',
      img: '/assets/images/medallion/gold.svg',
      accent: 'var(--color-medallion-gold)',
    },
    {
      id: 'platinum',
      name: 'Business Platinum',
      mqd: '$30,000 MQDs',
      img: '/assets/images/medallion/platinum.svg',
      accent: 'var(--color-medallion-platinum)',
    },
    {
      id: 'diamond',
      name: 'Business Diamond',
      mqd: '$50,000 MQDs',
      img: '/assets/images/medallion/diamond.svg',
      accent: 'var(--color-medallion-diamond)',
    },
  ] as const

  return (
    <div style={{ marginBottom: '80px' }}>
      {/* Section header */}
      <div className="text-center" style={{ marginBottom: '20px' }}>
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-delta-red-400)',
            marginBottom: '8px',
          }}
        >
          Capabilities by tier
        </p>
        <h3
          style={{
            fontSize: 'clamp(1.5rem, 2.4vw, var(--type-scale-32))',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-700)',
            marginBottom: '12px',
          }}
        >
          Business Medallion Tier Capabilities
        </h3>
        <p
          style={{
            fontSize: 'var(--type-scale-14)',
            color: 'var(--color-neutral-600)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Every benefit, side by side. Strength scales with tier — three checks means premium,
          optimized capability.
        </p>
      </div>

      {/* Symbol legend */}
      <div
        className="flex flex-wrap items-center justify-center"
        style={{
          gap: '14px',
          marginBottom: '20px',
          fontSize: 'var(--type-scale-13)',
          color: 'var(--color-neutral-600)',
        }}
      >
        <span className="inline-flex items-center" style={{ gap: '6px' }}>
          <i
            className="ph-bold ph-check"
            style={{ color: 'var(--color-success)', fontSize: '14px' }}
          />
          Included
        </span>
        <span style={{ color: 'var(--color-neutral-50)' }} aria-hidden="true">
          ·
        </span>
        <span className="inline-flex items-center" style={{ gap: '6px' }}>
          <span className="inline-flex" style={{ gap: '2px' }}>
            <i
              className="ph-bold ph-check"
              style={{ color: 'var(--color-success)', fontSize: '14px' }}
            />
            <i
              className="ph-bold ph-check"
              style={{ color: 'var(--color-success)', fontSize: '14px' }}
            />
          </span>
          Strong capability
        </span>
        <span style={{ color: 'var(--color-neutral-50)' }} aria-hidden="true">
          ·
        </span>
        <span className="inline-flex items-center" style={{ gap: '6px' }}>
          <span className="inline-flex" style={{ gap: '2px' }}>
            <i
              className="ph-bold ph-check"
              style={{ color: 'var(--color-success)', fontSize: '14px' }}
            />
            <i
              className="ph-bold ph-check"
              style={{ color: 'var(--color-success)', fontSize: '14px' }}
            />
            <i
              className="ph-bold ph-check"
              style={{ color: 'var(--color-success)', fontSize: '14px' }}
            />
          </span>
          Premium capability
        </span>
        <span style={{ color: 'var(--color-neutral-50)' }} aria-hidden="true">
          ·
        </span>
        <span className="inline-flex items-center" style={{ gap: '6px' }}>
          <i className="ph-bold ph-x" style={{ color: 'var(--color-error)', fontSize: '14px' }} />
          Not included
        </span>
      </div>

      {/* Table card */}
      <div
        style={{
          background: 'var(--color-neutral-0)',
          border: '1px solid var(--color-neutral-10)',
          borderRadius: 'var(--radius-l)',
          boxShadow: 'var(--shadow-card)',
          overflow: 'hidden',
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              minWidth: '720px',
              borderCollapse: 'collapse',
              tableLayout: 'fixed',
            }}
          >
            <colgroup>
              <col style={{ width: '34%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <thead>
              <tr
                style={{
                  background: 'var(--color-neutral-5)',
                  borderBottom: '1px solid var(--color-neutral-10)',
                }}
              >
                <th
                  scope="col"
                  style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    fontSize: 'var(--type-scale-12)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-neutral-600)',
                  }}
                >
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    style={{
                      padding: '18px 16px',
                      textAlign: 'center',
                      borderTop: `3px solid ${tier.accent}`,
                    }}
                  >
                    <div className="flex flex-col items-center" style={{ gap: '6px' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tier.img}
                        alt=""
                        style={{ width: '24px', height: '21px' }}
                      />
                      <span
                        style={{
                          fontSize: 'var(--type-scale-14)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: '700',
                          color: 'var(--color-delta-blue-700)',
                          lineHeight: 1.2,
                        }}
                      >
                        {tier.name}
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--type-scale-12)',
                          fontWeight: '700',
                          color: tier.accent,
                        }}
                      >
                        {tier.mqd}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAPABILITY_ROWS.map((row, idx) => (
                <tr
                  key={row.feature}
                  style={{
                    borderBottom:
                      idx === CAPABILITY_ROWS.length - 1
                        ? 'none'
                        : '1px solid var(--color-neutral-10)',
                    background:
                      idx % 2 === 0 ? 'var(--color-neutral-0)' : 'var(--color-neutral-5)',
                  }}
                >
                  <th
                    scope="row"
                    style={{
                      padding: '14px 20px',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      fontSize: 'var(--type-scale-13)',
                      fontWeight: '600',
                      color: 'var(--color-delta-blue-700)',
                      lineHeight: 1.45,
                    }}
                  >
                    {row.feature}
                  </th>
                  {(['gold', 'platinum', 'diamond'] as const).map((tierKey) => (
                    <td
                      key={tierKey}
                      style={{
                        padding: '14px 16px',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}
                    >
                      <TierCellValue cell={row[tierKey]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Pooled MQDs visual: company building with 5 employees feeding it ────────

function PooledMqdsDiagram() {
  return (
    <div
      style={{
        background: 'var(--color-neutral-5)',
        borderRadius: 'var(--radius-l)',
        padding: '24px 16px',
        position: 'relative',
      }}
    >
      {/* Company building */}
      <div className="flex justify-center" style={{ marginBottom: '16px' }}>
        <div
          className="flex items-center gap-2"
          style={{
            background: 'var(--color-delta-blue-700)',
            color: 'var(--color-neutral-0)',
            padding: '10px 16px',
            borderRadius: 'var(--radius-l)',
            fontSize: 'var(--type-scale-13)',
            fontWeight: '700',
          }}
        >
          <i className="ph-fill ph-buildings text-base" />
          Company MQD pool
          <i className="ph-fill ph-arrow-fat-up text-base" style={{ color: 'var(--color-delta-red-400)' }} />
        </div>
      </div>

      {/* Connector lines (simple visual) */}
      <div
        aria-hidden="true"
        style={{
          height: '24px',
          margin: '0 auto',
          width: '80%',
          borderLeft: '1px solid var(--color-neutral-50)',
          borderRight: '1px solid var(--color-neutral-50)',
          borderBottom: '1px solid var(--color-neutral-50)',
          borderTop: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopRightRadius: '0',
        }}
      />

      {/* Employees row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '6px',
          marginTop: '8px',
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center" style={{ gap: '4px' }}>
            <i className="ph-fill ph-user text-xl" style={{ color: 'var(--color-delta-red-400)' }} />
            <i className="ph-fill ph-coins text-sm" style={{ color: 'var(--color-delta-blue-600)' }} />
          </div>
        ))}
      </div>
      <p style={{ fontSize: 'var(--type-scale-11)', color: 'var(--color-neutral-600)', textAlign: 'center', marginTop: '12px', lineHeight: 1.5 }}>
        Each employee&apos;s business-flight MQDs flow up to the company pool.
      </p>
    </div>
  )
}

// ── Initiation flow diagram: 3 horizontal flows (Gold / Platinum / Diamond) ──

function InitiationFlow() {
  return (
    <div style={{ marginBottom: '64px' }}>
      <div className="text-center" style={{ marginBottom: '24px' }}>
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-delta-red-400)',
            marginBottom: '6px',
          }}
        >
          Year-one path
        </p>
        <h3
          style={{
            fontSize: 'clamp(1.4rem, 2.2vw, var(--type-scale-28))',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-700)',
          }}
        >
          Initiation fee → Provisional tier → Confirmed
        </h3>
      </div>

      <div
        style={{
          background: 'var(--color-neutral-0)',
          borderRadius: 'var(--radius-l)',
          border: '1px solid var(--color-neutral-10)',
          padding: '24px',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {BUSINESS_TIERS.map((t) => (
          <div
            key={t.id}
            className="flex flex-wrap items-center"
            style={{
              gap: '8px',
              padding: '14px',
              borderRadius: 'var(--radius-l)',
              background: 'var(--color-neutral-5)',
              border: '1px solid var(--color-neutral-10)',
            }}
          >
            {/* Step 1: Initiation Fee */}
            <FlowChip
              label={`$${t.initiationFee.toLocaleString()} fee`}
              sub="Initiation"
              accent="var(--color-delta-red-400)"
            />
            <FlowArrow />
            {/* Step 2: Provisional tier */}
            <FlowChip
              label={`Provisional ${t.name.replace('Business ', '')}`}
              sub="Year 1 status active"
              accent={t.accent}
              img={t.img}
            />
            <FlowArrow />
            {/* Step 3: MQD goal */}
            <FlowChip
              label={`$${t.yearOneGoal.toLocaleString()} MQD goal`}
              sub="Earned during Y1"
              accent="var(--color-delta-blue-600)"
            />
            <FlowArrow />
            {/* Step 4: Outcome */}
            <div className="flex flex-col" style={{ gap: '6px', minWidth: '160px' }}>
              <span
                style={{
                  fontSize: 'var(--type-scale-12)',
                  fontWeight: '700',
                  color: 'var(--color-success)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <i className="ph-bold ph-check-circle" />
                Met → Confirmed {t.name.replace('Business ', '')}
              </span>
              <span
                style={{
                  fontSize: 'var(--type-scale-12)',
                  fontWeight: '700',
                  color: 'var(--color-delta-red-400)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <i className="ph-bold ph-x-circle" />
                Unmet → Halted benefits
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowChip({
  label,
  sub,
  accent,
  img,
}: {
  label: string
  sub: string
  accent: string
  img?: string
}) {
  return (
    <div
      className="flex items-center gap-3"
      style={{
        background: 'var(--color-neutral-0)',
        border: `1px solid var(--color-neutral-10)`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: 'var(--radius-l)',
        padding: '10px 14px',
        minWidth: '160px',
        flex: '1 1 160px',
      }}
    >
      {img && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt="" style={{ width: '22px', height: '20px', flexShrink: 0 }} />
      )}
      <div className="min-w-0">
        <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-delta-blue-700)', lineHeight: 1.2 }}>{label}</p>
        <p style={{ fontSize: 'var(--type-scale-11)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>{sub}</p>
      </div>
    </div>
  )
}

function FlowArrow() {
  return (
    <i
      className="ph-bold ph-arrow-right text-lg"
      style={{ color: 'var(--color-neutral-500)', flexShrink: 0 }}
      aria-hidden="true"
    />
  )
}

// ── Why this works ──────────────────────────────────────────────────────────

function WhyThisWorks() {
  return (
    <div>
      <div className="text-center" style={{ marginBottom: '24px' }}>
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-delta-red-400)',
            marginBottom: '6px',
          }}
        >
          Why this works
        </p>
        <h3
          style={{
            fontSize: 'clamp(1.4rem, 2.2vw, var(--type-scale-28))',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-700)',
          }}
        >
          Aligned incentives across Delta and Amex
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {[
          {
            heading: 'Delta',
            badgeIcon: 'ph-fill ph-airplane',
            points: [
              'Captures enterprise loyalty for airline travel',
              'Comfort baseline locks in cabin revenue',
            ],
          },
          {
            heading: 'Amex',
            badgeIcon: 'ph-fill ph-credit-card',
            points: [
              'Pooled-miles wallet incentivizes the card as primary payment',
              'Corporate statement credits drive consolidated billing',
            ],
          },
        ].map((col) => (
          <div
            key={col.heading}
            style={{
              padding: '28px',
              borderRadius: 'var(--radius-l)',
              background: 'var(--color-neutral-0)',
              border: '1px solid var(--color-neutral-10)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: '16px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-50)',
                }}
              >
                <i className={`${col.badgeIcon} text-lg`} style={{ color: 'var(--color-delta-red-400)' }} />
              </div>
              <p
                style={{
                  fontSize: 'var(--type-scale-22)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-delta-red-400)',
                  letterSpacing: '0.04em',
                }}
              >
                {col.heading}
              </p>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <i className="ph-fill ph-check-circle text-base" style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-700)', lineHeight: 1.55 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
