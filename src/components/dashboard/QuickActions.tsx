import Link from 'next/link'

const actions = [
  { icon: 'ph-duotone ph-airplane-takeoff', label: 'Book flight', href: 'https://www.delta.com/us/en/booking/book-a-flight', external: true },
  { icon: 'ph-duotone ph-user-plus', label: 'Add traveler', href: '/account/travelers' },
  { icon: 'ph-duotone ph-wallet', label: 'Redeem miles', href: '/account/miles' },
  { icon: 'ph-duotone ph-download-simple', label: 'Download report', href: '/account/reports' },
]

export function QuickActions() {
  return (
    <div
      className="rounded-[var(--radius-l)] p-6"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <h3
        style={{
          fontSize: 'var(--type-scale-16)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '16px',
        }}
      >
        Quick actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) =>
          action.external ? (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-[var(--radius-l)] transition-all"
              style={{
                background: 'var(--color-neutral-5)',
                border: '1px solid var(--color-neutral-10)',
                textDecoration: 'none',
              }}
            >
              <i className={`${action.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
              <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
                {action.label}
              </p>
            </a>
          ) : (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 rounded-[var(--radius-l)] transition-all"
              style={{
                background: 'var(--color-neutral-5)',
                border: '1px solid var(--color-neutral-10)',
              }}
            >
              <i className={`${action.icon} text-2xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
              <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
                {action.label}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
