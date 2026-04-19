const LOGO_DELOITTE  = 'https://www.figma.com/api/mcp/asset/19ef3445-4883-4d28-831c-3a7497c2491d'
const LOGO_COCACOLA  = 'https://www.figma.com/api/mcp/asset/e6349eeb-6779-486d-8889-7dbda0d9cce9'
const LOGO_AMEX      = 'https://www.figma.com/api/mcp/asset/59940406-ae6b-433f-95e2-2ead74d426d8'
const LOGO_MICROSOFT = 'https://www.figma.com/api/mcp/asset/1f8472cc-7dec-437a-b0a3-d61ad752931e'
const LOGO_IBM       = 'https://www.figma.com/api/mcp/asset/26f22e3d-6105-4c86-a4ec-426757b5705d'

const stats = [
  { value: '1st',   desc: 'in business travel survey for 13 consecutive years.' },
  { value: '+275',  desc: 'We connect your company with over 275 destinations across 6 continents.' },
  { value: '83.2%', desc: 'of flights arrived on time. Leader in Punctuality' },
]

const logos = [
  { src: LOGO_DELOITTE,  alt: 'Deloitte',          w: 118, h: 23 },
  { src: LOGO_COCACOLA,  alt: 'Coca-Cola',          w: 130, h: 39 },
  { src: LOGO_AMEX,      alt: 'American Express',   w: 131, h: 37 },
  { src: LOGO_MICROSOFT, alt: 'Microsoft',          w: 41,  h: 55 },
  { src: LOGO_IBM,       alt: 'IBM',                w: 95,  h: 39 },
]

export function AuthorityBar() {
  return (
    <section
      className="flex flex-col items-center pb-24 gap-18"
      style={{
        background: 'linear-gradient(to bottom, var(--color-neutral-0), var(--color-neutral-2))',
        paddingBottom: '96px',
        gap: '72px',
      }}
    >
      {/* Top: heading + 3 stat cards */}
      <div className="flex flex-col items-center w-full" style={{ gap: '48px', paddingTop: '64px' }}>
        <h2
          className="text-center"
          style={{
            fontSize: 'clamp(2rem, 5vw, var(--type-scale-64))',
            lineHeight: 'var(--line-height-heading-xxxl)',
            letterSpacing: 'var(--letter-spacing-heading-xxxl)',
            color: 'var(--color-delta-blue-700)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
          }}
        >
          The best company<br />for business
        </h2>

        <div
          className="flex flex-wrap justify-center w-full"
          style={{ gap: '32px', maxWidth: '1200px', padding: '0 32px' }}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col justify-center rounded-[var(--radius-l)]"
              style={{
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-5)',
                boxShadow: 'var(--shadow-card)',
                padding: '24px 32px',
                width: '320px',
                minWidth: '260px',
                gap: '16px',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--type-scale-64)',
                  lineHeight: 'var(--line-height-heading-xxxl)',
                  letterSpacing: 'var(--letter-spacing-heading-xxxl)',
                  color: 'var(--color-delta-blue-500)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                }}
              >
                {s.value}
              </p>
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-neutral-10)', margin: 0 }} />
              <p
                style={{
                  fontSize: 'var(--type-scale-18)',
                  lineHeight: 'var(--line-height-body-medium)',
                  letterSpacing: 'var(--letter-spacing-marketing-small)',
                  color: 'var(--color-delta-blue-700)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: "trust" headline + logos */}
      <div className="flex flex-col items-center w-full" style={{ gap: '32px', padding: '0 48px' }}>
        <h3
          className="text-center"
          style={{
            fontSize: 'var(--type-scale-28)',
            lineHeight: 'var(--line-height-heading-m)',
            letterSpacing: 'var(--letter-spacing-heading-xxs)',
            color: 'var(--color-delta-blue-700)',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
          }}
        >
          The best companies<br />trust Delta
        </h3>

        <div
          className="flex flex-wrap items-center justify-between w-full"
          style={{ maxWidth: '1200px', gap: '32px' }}
        >
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              style={{ objectFit: 'contain', opacity: 0.75 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
