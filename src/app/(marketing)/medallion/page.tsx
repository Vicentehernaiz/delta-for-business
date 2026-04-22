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
    'Medallion elite status and how corporate travel earns it faster. Silver $5K · Gold $10K · Platinum $15K · Diamond $28K. MQD-only since 2024.',
  alternates: { canonical: 'https://business.delta.com/medallion' },
}

const tierColorVar: Record<string, string> = {
  silver: 'var(--color-medallion-silver)',
  gold: 'var(--color-medallion-gold)',
  platinum: 'var(--color-medallion-platinum)',
  diamond: 'var(--color-medallion-diamond)',
}

const tierMqd: Record<string, string> = {
  silver: '$5,000',
  gold: '$10,000',
  platinum: '$15,000',
  diamond: '$28,000',
}

const tierLabel: Record<string, string> = {
  silver: 'Silver',
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
    a: 'No. Medallion es estrictamente un programa personal — ninguna empresa puede alcanzar un tier Medallion. Sin embargo, las empresas inscritas en SkyMiles for Business pueden canjear millas corporativas para regalar certificados de Silver Medallion de 90 días a empleados específicos.',
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
              color: 'rgba(255,255,255,0.6)',
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
            Elite status earned by individual travelers from Delta flight spend. Four tiers, one
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
                        <i
                          className="ph-fill ph-medal"
                          style={{
                            color: tierColorVar[tier],
                            fontSize: '1.25rem',
                          }}
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
                      <CellValue value={row.silver} />
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
                        <i
                          className="ph-fill ph-medal"
                          style={{ color, fontSize: '1rem' }}
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
                          <i
                            className="ph-fill ph-medal"
                            style={{ color, fontSize: '1rem' }}
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
                icon: 'ph-fill ph-certificate',
                title: 'La empresa puede regalar Silver',
                desc: 'Las empresas inscritas en SkyMiles for Business pueden canjear millas corporativas para otorgar certificados de Silver Medallion de 90 días a empleados concretos.',
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
