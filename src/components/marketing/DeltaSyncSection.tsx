import Link from 'next/link'

export function DeltaSyncSection() {
  return (
    <section
      className="flex flex-col items-center w-full"
      style={{
        background: 'var(--color-neutral-2)',
        padding: '0 32px 56px',
        gap: '48px',
      }}
    >
      {/* Heading */}
      <h2
        className="text-center w-full"
        style={{
          fontSize: 'clamp(2rem, 5vw, var(--type-scale-64))',
          lineHeight: 'var(--line-height-heading-xxxl)',
          letterSpacing: 'var(--letter-spacing-heading-xxxl)',
          color: 'var(--color-delta-blue-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          paddingTop: '48px',
        }}
      >
        Delta SYNC
      </h2>

      {/* Card container */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          maxWidth: '1200px',
          gap: '24px',
          borderRadius: 'var(--radius-l)',
          overflow: 'clip',
          boxShadow: '0px -6px 30px 0px rgba(0,0,0,0.2)',
        }}
      >
        {/* Dashboard preview */}
        <Link
          href="/account/dashboard"
          className="relative w-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-500) 100%)',
            border: '1px solid var(--color-neutral-5)',
            borderRadius: 'var(--radius-l)',
            boxShadow: 'var(--shadow-card)',
            height: '594px',
            overflow: 'hidden',
            color: 'var(--color-neutral-0)',
            textAlign: 'center',
            padding: '32px',
          }}
        >
          <div className="flex flex-col items-center" style={{ gap: '16px' }}>
            <i className="ph-duotone ph-chart-line-up" style={{ fontSize: '96px' }}></i>
            <p
              style={{
                fontSize: 'var(--type-scale-28)',
                lineHeight: 'var(--line-height-heading-m)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
              }}
            >
              Open the Delta SYNC dashboard
            </p>
            <p
              style={{
                fontSize: 'var(--type-scale-16)',
                lineHeight: 'var(--line-height-body-medium)',
                fontFamily: 'var(--font-body)',
                fontWeight: '500',
                opacity: 0.9,
                maxWidth: '480px',
              }}
            >
              Live KPIs, miles balance, traveler roster, tier progress and credit wallet — all in one place.
            </p>
          </div>
        </Link>

        {/* Description */}
        <p
          className="text-center"
          style={{
            fontSize: 'var(--type-scale-16)',
            lineHeight: 'var(--line-height-body-medium)',
            letterSpacing: 'var(--letter-spacing-marketing-small)',
            color: 'var(--color-delta-blue-500)',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
            maxWidth: '480px',
            padding: '0 16px',
          }}
        >
          A travel, SkyMiles, and card management tool designed for businesses plans. Link your employees&apos; profiles and accounts, request cards, and manage credit—all within a single, centralized platform.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center w-full"
          style={{ padding: '32px 0' }}
        >
          <div
            className="flex items-center"
            style={{ gap: '8px', width: '808px', maxWidth: '100%' }}
          >
            <Link
              href="/delta-sync"
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
              href="/enroll/enterprise"
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
              Get In Delta for Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
