import Link from 'next/link'

const companyPerks = [
  'Company earns SkyMiles',
  'Exchange company SkyMiles for eCredits or flight tickets',
  'eCredit redemptions (≈1.5–2¢/mile)',
  'Transfer to employee. One-way, non-refundable',
  'Grant 12-month Silver status to any employee',
  'Purchase annual individual Sky Club membership with company miles',
]

const employeePerks = [
  'Employee earns miles and MQDs for its own account',
  'Miles + cash copay to upgrade cabin on eligible flights',
  'Sky Club membership purchase with miles',
]

const partnerLogos = [
  { alt: 'KLM' },
  { alt: 'Air France' },
  { alt: 'Virgin Atlantic' },
  { alt: 'Alaska Airlines' },
  { alt: 'AeroMexico' },
]

const cardStyle: React.CSSProperties = {
  background: 'var(--color-neutral-0)',
  border: '1px solid var(--color-neutral-5)',
  borderRadius: 'var(--radius-l)',
  boxShadow: 'var(--shadow-card)',
  padding: '32px',
  gap: '32px',
}

const bodyTextStyle: React.CSSProperties = {
  fontSize: 'var(--type-scale-16)',
  lineHeight: 'var(--line-height-body-medium)',
  letterSpacing: 'var(--letter-spacing-marketing-small)',
  color: 'var(--color-delta-blue-500)',
  fontFamily: 'var(--font-body)',
  fontWeight: '500',
}

const subHeadStyle: React.CSSProperties = {
  fontSize: 'var(--type-scale-18)',
  lineHeight: 'var(--line-height-heading-xs)',
  color: 'var(--color-delta-blue-500)',
  fontFamily: 'var(--font-body)',
  fontWeight: '700',
}

export function SkyMilesTeaser() {
  return (
    <section
      className="flex flex-col items-center w-full"
      style={{
        background: 'var(--color-neutral-5)',
        padding: '96px 32px',
        gap: '48px',
      }}
    >
      {/* Heading */}
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
        SkyMiles for
        <br />
        Business
      </h2>

      {/* Content area */}
      <div
        className="flex flex-col items-center w-full"
        style={{ maxWidth: '1200px', gap: '32px' }}
      >
        {/* Two info cards */}
        <div className="flex flex-wrap items-stretch w-full" style={{ gap: '32px' }}>
          {/* Company & employee perks */}
          <div
            className="flex flex-col flex-1"
            style={{ ...cardStyle, minWidth: '340px' }}
          >
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <p style={subHeadStyle}>Company SkyMiles perks</p>
              <div className="flex flex-col" style={{ ...bodyTextStyle, gap: '16px' }}>
                {companyPerks.map((p) => (
                  <p key={p}>✓&nbsp;&nbsp;{p}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <p style={subHeadStyle}>Employee SkyMiles perks</p>
              <div className="flex flex-col" style={{ ...bodyTextStyle, gap: '16px' }}>
                {employeePerks.map((p) => (
                  <p key={p}>✓&nbsp;&nbsp;{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* How to apply */}
          <div
            className="flex flex-col flex-1"
            style={{ ...cardStyle, minWidth: '340px' }}
          >
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <p style={subHeadStyle}>How to apply</p>
              <p style={{ ...bodyTextStyle, whiteSpace: 'pre-line' }}>
                {`1–50 travellers\nUS & Canada only · Free enrollment\nSelf-serve portal tool`}
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <p style={subHeadStyle}>Membership tiers</p>
              <p style={bodyTextStyle}>Member</p>
              <p style={bodyTextStyle}>Plus (+$5,000 and +5 travelers) gets 10 mi/$ in non-hub premium cabin</p>
              <p style={bodyTextStyle}>Elite (+$300,000 and +5 travelers) gets +15% bonus on all miles</p>
            </div>
          </div>
        </div>

        {/* Partner airlines card */}
        <div
          className="flex flex-col w-full"
          style={cardStyle}
        >
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <p style={subHeadStyle}>Fly on more airlines with the same miles</p>
            <p style={bodyTextStyle}>
              Your SkyMiles work on Delta and across a global network of partner airlines. Book partner flights directly through delta.com.
            </p>
            <p style={bodyTextStyle}>
              Airline partners where you can redeem SkyMiles: Air France, KLM, Virgin Atlantic, Air Mexico, Korean Air, WestJet, Alaska Airlines, Hawaiian Airlines, GOL, LATAM, China Eastern, China Southern, and more+.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between w-full" style={{ gap: '24px' }}>
            {partnerLogos.map((logo) => (
              <span
                key={logo.alt}
                style={{
                  fontSize: 'var(--type-scale-18)',
                  lineHeight: 'var(--line-height-heading-xs)',
                  color: 'var(--color-delta-blue-700)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  opacity: 0.75,
                }}
              >
                {logo.alt}
              </span>
            ))}
          </div>
        </div>

        {/* Earn miles card */}
        <div
          className="flex flex-col w-full"
          style={cardStyle}
        >
          <div className="flex flex-col" style={{ gap: '12px' }}>
            <p style={subHeadStyle}>Earn miles</p>
            <p style={bodyTextStyle}>
              When an employee flies on a company-linked ticket, BOTH the company&apos;s SkyMiles for Business account AND the employee&apos;s personal SkyMiles account earn simultaneously — with no reduction to either.
            </p>
          </div>
          <p style={bodyTextStyle}>
            Miles accumulate from everyday business and personal spending through Delta&apos;s partner network: hotels, car rentals, credit cards, rideshare, retail & shopping, dining, vacations and financial services
          </p>
          <div
            className="flex flex-wrap items-center"
            style={{
              gap: '16px',
              fontSize: 'var(--type-scale-14)',
              lineHeight: 'var(--line-height-body-small)',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              color: 'var(--color-delta-blue-500)',
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
            }}
          >
            {['Company flight spend', 'Partners (hotels etc)', 'Amex card spend', 'Amex Membership Rwds', 'Flying Delta'].map((item, i, arr) => (
              <span key={item} className="flex items-center" style={{ gap: '16px' }}>
                {item}
                {i < arr.length - 1 && <span style={{ color: 'var(--color-neutral-400)' }}> · </span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center" style={{ gap: '8px', width: '808px', maxWidth: '100%' }}>
          <Link
            href="/skymiles"
            className="flex items-center justify-center font-semibold"
            style={{
              flex: '1 0 0',
              maxWidth: '400px',
              height: '44px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-neutral-50)',
              color: 'var(--color-delta-blue-700)',
              fontSize: 'var(--type-scale-16)',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Know more
          </Link>
          <Link
            href="/enroll/individual"
            className="flex items-center justify-center font-semibold"
            style={{
              flex: '1 0 0',
              maxWidth: '400px',
              height: '44px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Get in
          </Link>
        </div>
      </div>
    </section>
  )
}
