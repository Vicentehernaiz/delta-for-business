interface KPICardProps {
  title: string
  value: string
  sub?: string
  icon: string
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
}

export function KPICard({ title, value, sub, icon, trend }: KPICardProps) {
  return (
    <div
      className="rounded-[var(--radius-l)] p-6"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-neutral-600)',
          }}
        >
          {title}
        </p>
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full"
          style={{ background: 'var(--color-delta-red-50)' }}
        >
          <i className={`${icon} text-lg`} style={{ color: 'var(--color-delta-red-400)' }}></i>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <p
          style={{
            fontSize: 'var(--type-scale-28)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-700)',
          }}
        >
          {value}
        </p>
        {trend && (
          <span
            style={{
              fontSize: 'var(--type-scale-13)',
              fontWeight: '600',
              color: trend.direction === 'up' ? '#16a34a' : '#dc2626',
            }}
          >
            <i className={`ph-bold ph-trend-${trend.direction} inline-block mr-0.5`}></i>
            {trend.value}%
          </span>
        )}
      </div>

      {sub && (
        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginTop: '4px' }}>
          {sub}
        </p>
      )}
    </div>
  )
}
