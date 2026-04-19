import { mockDashboardKPIs, mockMilesBalance, mockCompany } from '@/lib/api/mock-data'

interface MonthlySummaryProps {
  spend?: number
  miles?: number
  activeTravelers?: number
  bookings?: number
}

export function MonthlySummary({
  spend = mockDashboardKPIs.monthlySpend,
  miles = mockMilesBalance.earnedThisMonth,
  activeTravelers = mockDashboardKPIs.activeTravelers,
  bookings = 14,
}: MonthlySummaryProps) {
  const metrics = [
    { label: 'Monthly spend', value: `$${spend.toLocaleString()}`, icon: 'ph-fill ph-currency-dollar' },
    { label: 'Miles earned', value: miles.toLocaleString(), icon: 'ph-fill ph-airplane-takeoff' },
    { label: 'Active travelers', value: `${activeTravelers} / ${mockCompany.travelersCount}`, icon: 'ph-fill ph-users' },
    { label: 'Bookings', value: bookings.toString(), icon: 'ph-fill ph-ticket' },
  ]

  return (
    <div
      className="rounded-[var(--radius-l)] p-6"
      style={{
        background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)`,
      }}
    >
      <p
        style={{
          fontSize: 'var(--type-scale-12)',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '16px',
        }}
      >
        April 2026
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-center gap-2 mb-2">
              <i className={`${m.icon} text-base`} style={{ color: 'rgba(255,255,255,0.5)' }}></i>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.65)' }}>{m.label}</p>
            </div>
            <p
              style={{
                fontSize: 'var(--type-scale-22)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-neutral-0)',
              }}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
