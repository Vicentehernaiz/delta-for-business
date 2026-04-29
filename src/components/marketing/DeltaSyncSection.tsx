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
        Delta Business Tool
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
          className="group relative w-full block"
          style={{
            background: 'var(--color-neutral-0)',
            border: '1px solid var(--color-neutral-5)',
            borderRadius: 'var(--radius-l)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            color: 'var(--color-neutral-0)',
            aspectRatio: '1200 / 594',
            maxHeight: '100vh',
          }}
          aria-label="Open the Delta Business Tool dashboard"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/delta-sync/dashboard-preview.png"
            alt="Delta Business Tool dashboard preview — KPIs, miles balance, traveler roster and more"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top center' }}
            loading="lazy"
          />
          <div
            className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,45,89,0.85) 100%)',
              color: 'var(--color-neutral-0)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--type-scale-22)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                lineHeight: 1.2,
              }}
            >
              Open the Delta Business Tool dashboard
            </p>
            <span
              className="hidden sm:inline-flex items-center gap-2 font-semibold transition-transform group-hover:translate-x-1"
              style={{ fontSize: 'var(--type-scale-14)' }}
            >
              View live KPIs
              <i className="ph-bold ph-arrow-right" />
            </span>
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
          style={{ padding: '32px 16px' }}
        >
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center w-full"
            style={{ gap: '12px', maxWidth: '808px' }}
          >
            <Link
              href="/delta-sync"
              className="flex items-center justify-center font-semibold"
              style={{
                flex: '1 1 0',
                height: '48px',
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
                flex: '1 1 0',
                height: '48px',
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
