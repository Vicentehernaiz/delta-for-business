import Link from 'next/link'

const paths = [
  {
    icon: 'ph-duotone ph-rocket-launch',
    title: 'Quick start',
    desc: 'Business Traveler or small team? Get set up in minutes — free.',
    cta: 'Enroll now',
    href: '/enroll/individual',
  },
  {
    icon: 'ph-duotone ph-handshake',
    title: 'Talk to sales',
    desc: 'Enterprise or Large-Enterprise? Connect with our corporate team.',
    cta: 'Contact sales',
    href: '/enroll/enterprise',
  },
  {
    icon: 'ph-duotone ph-chart-bar',
    title: 'See the value',
    desc: 'Get a custom ROI estimate for your travel spend.',
    cta: 'Calculate ROI',
    href: '/tools/roi-calculator',
  },
]

export function FinalCTA() {
  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)`,
      }}
    >
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              lineHeight: 'var(--line-height-heading-xl)',
              letterSpacing: 'var(--letter-spacing-heading-xl)',
              marginBottom: '12px',
            }}
          >
            Ready to get started?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'rgba(255,255,255,0.75)' }}>
            Choose your path to Delta for Business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.href}
              className="flex flex-col rounded-[var(--radius-l)] p-8 text-center"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <i
                  className={`${path.icon} text-3xl`}
                  style={{ color: 'var(--color-neutral-0)' }}
                ></i>
              </div>
              <h3
                style={{
                  fontSize: 'var(--type-scale-20)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-neutral-0)',
                  marginBottom: '8px',
                }}
              >
                {path.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--type-scale-14)',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 'var(--line-height-body-small)',
                  marginBottom: '24px',
                  flexGrow: 1,
                }}
              >
                {path.desc}
              </p>
              <Link
                href={path.href}
                className="inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-90 mt-auto"
                style={{
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                {path.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
