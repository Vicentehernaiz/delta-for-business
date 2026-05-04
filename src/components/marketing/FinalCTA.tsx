import Link from 'next/link'

const paths = [
  {
    icon: 'ph-duotone ph-rocket-launch',
    iconColor: 'var(--color-delta-red-400)',
    iconBg: 'var(--color-delta-red-50)',
    title: 'Quick start',
    desc: 'Gold business plan — free for any team. Get set up in minutes, no employer needed.',
    cta: 'Enroll now',
    href: '/enroll/gold',
  },
  {
    icon: 'ph-duotone ph-handshake',
    iconColor: 'var(--color-delta-blue-600)',
    iconBg: 'var(--color-delta-blue-50)',
    title: 'Talk to sales',
    desc: 'Enterprise or Large-Enterprise? Connect with our corporate team.',
    cta: 'Contact sales',
    href: '/enroll/platinum',
  },
  {
    icon: 'ph-duotone ph-chart-bar',
    iconColor: 'var(--color-delta-blue-600)',
    iconBg: 'var(--color-delta-blue-50)',
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
      style={{ background: 'var(--color-neutral-5)' }}
    >
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              lineHeight: 'var(--line-height-heading-xl)',
              letterSpacing: 'var(--letter-spacing-heading-xl)',
              marginBottom: '12px',
            }}
          >
            Ready to get started?
          </h2>
          <p style={{ fontSize: 'var(--type-scale-18)', color: 'var(--color-delta-blue-500)' }}>
            Choose your path to Delta for Business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.href}
              className="flex flex-col rounded-[var(--radius-l)] p-8 text-center"
              style={{
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-10)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: path.iconBg }}
              >
                <i
                  className={`${path.icon} text-3xl`}
                  style={{ color: path.iconColor }}
                ></i>
              </div>
              <h3
                style={{
                  fontSize: 'var(--type-scale-20)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-700)',
                  marginBottom: '8px',
                }}
              >
                {path.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--type-scale-14)',
                  color: 'var(--color-delta-blue-500)',
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
