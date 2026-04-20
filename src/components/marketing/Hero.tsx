import Image from 'next/image'
import Link from 'next/link'

const HERO_IMG_PERSON = '/assets/images/hero/hero-section-image-delta-for-business.png'
const HERO_IMG_PLANE  = '/assets/images/hero/delta-plane-hero-section.png'

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: 'calc(var(--nav-height) + 32px)',
        paddingBottom: '32px',
        paddingLeft: '32px',
        paddingRight: '32px',
        minHeight: 'calc(var(--nav-height) + 634px)',
      }}
    >
      {/* Sky background */}
      <Image
        src="/assets/images/hero/delta-hero-section-sky-background.jpg"
        alt=""
        fill
        className="object-cover object-center pointer-events-none"
        priority
      />

      {/* Two-column hero body */}
      <div
        className="relative flex flex-wrap items-center gap-4 w-full"
        style={{ maxWidth: '1200px' }}
      >
        {/* ── Left: text card ────────────────────────────────── */}
        <div
          className="flex flex-col justify-center rounded-[var(--radius-l)] shrink-0"
          style={{
            background: 'var(--color-neutral-0)',
            border: '1px solid var(--color-neutral-5)',
            boxShadow: 'var(--shadow-card)',
            padding: '24px 32px',
            height: '634px',
            /* desktop: fixed 618px; mobile: grow to full width */
            width: 'clamp(300px, 618px, 100%)',
            flex: '1 0 300px',
            gap: '32px',
          }}
        >
          {/* Heading + body block */}
          <div className="flex flex-col gap-6">
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 5vw, var(--type-scale-64))',
                lineHeight: 'var(--line-height-heading-xxxl)',
                letterSpacing: 'var(--letter-spacing-heading-xxxl)',
                color: 'var(--color-delta-blue-700)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
              }}
            >
              Delta for Business
            </h1>

            <div
              className="flex flex-col"
              style={{
                gap: '16px',
                fontSize: 'var(--type-scale-18)',
                lineHeight: 'var(--line-height-body-medium)',
                letterSpacing: 'var(--letter-spacing-marketing-small)',
                color: 'var(--color-delta-blue-500)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
              }}
            >
              <p>For business travellers of all types and large corporations.</p>
              <p>Plans, benefits, and management tools tailored to business needs.</p>
              <p>Cost reduction, ease of management, greater convenience and more advantages.</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/enroll/individual"
            className="inline-flex items-center justify-center font-semibold shrink-0"
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              boxShadow: 'var(--shadow-button)',
              alignSelf: 'flex-start',
            }}
          >
            Get Started
          </Link>
        </div>

        {/* ── Right: two stacked images (hidden on mobile) ─── */}
        <div
          className="hidden lg:flex flex-col gap-4 shrink-0"
          style={{ width: '566px', height: '634px', flex: '0 0 566px' }}
        >
          {/* Business person */}
          <div
            className="relative rounded-[var(--radius-l)] overflow-hidden"
            style={{ flex: '1 0 0', minHeight: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG_PERSON}
              alt="Business traveler in Delta first class cabin"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Delta plane */}
          <div
            className="relative rounded-[var(--radius-l)] overflow-hidden"
            style={{ flex: '1 0 0', minHeight: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG_PLANE}
              alt="Delta aircraft in flight"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: '119.33%', height: '158.18%', left: '-16%', top: '-33.65%', maxWidth: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
