import { mockTransactions } from '@/lib/api/mock-data'

export interface ActivityItem {
  id: string
  icon: string
  title: string
  description: string
  date: string
}

interface RecentActivityProps {
  activities?: ActivityItem[]
  limit?: number
}

const defaultActivities: ActivityItem[] = mockTransactions.slice(0, 6).map((t) => ({
  id: t.id,
  icon: 'ph-duotone ph-airplane',
  title: `${t.route} — ${t.miles.toLocaleString()} miles`,
  description: `${t.traveler} · ${t.cabin} · ${t.fare}`,
  date: t.date,
}))

export function RecentActivity({ activities = defaultActivities, limit = 5 }: RecentActivityProps) {
  const items = activities.slice(0, limit)

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
          marginBottom: '20px',
        }}
      >
        Recent activity
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 pb-4"
            style={{ borderBottom: '1px solid var(--color-neutral-5)' }}
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
              style={{ background: 'var(--color-delta-blue-50)' }}
            >
              <i className={`${item.icon} text-base`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontSize: 'var(--type-scale-14)',
                  fontWeight: '600',
                  color: 'var(--color-delta-blue-600)',
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
                {item.description}
              </p>
            </div>
            <p
              className="flex-shrink-0"
              style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}
            >
              {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
