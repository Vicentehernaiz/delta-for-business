'use client'

import { SpendChart } from '@/components/dashboard/SpendChart'
import { mockSpendByDepartment, mockTopTravelers, mockMonthlySpend } from '@/lib/api/mock-data'

export default function ReportsPage() {
  const totalSpend = mockMonthlySpend.reduce((s, m) => s + m.spend, 0)
  const totalMiles = mockMonthlySpend.reduce((s, m) => s + m.miles, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
            Spend & Reports
          </h1>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
            May 2025 – April 2026 · 12 months
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 font-semibold"
          style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-14)', border: '1px solid var(--color-neutral-10)' }}
        >
          <i className="ph-bold ph-download-simple text-sm"></i>
          Export CSV
        </button>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total spend', value: `$${(totalSpend / 1000).toFixed(0)}K`, sub: '12-month total' },
          { label: 'Total miles earned', value: `${(totalMiles / 1000).toFixed(0)}K`, sub: 'Company pool' },
          { label: 'Avg monthly spend', value: `$${Math.round(totalSpend / 12).toLocaleString()}`, sub: 'Per month' },
        ].map((k) => (
          <div
            key={k.label}
            className="rounded-[var(--radius-l)] p-5"
            style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
          >
            <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', marginBottom: '6px' }}>{k.label}</p>
            <p style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{k.value}</p>
            <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', marginTop: '2px' }}>{k.sub}</p>
          </div>
        ))}
      </div>

      <SpendChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spend by department */}
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>
            Spend by department
          </h3>
          <div className="space-y-4">
            {mockSpendByDepartment.map((d) => {
              const pct = Math.round((d.spend / totalSpend) * 100)
              return (
                <div key={d.department}>
                  <div className="flex justify-between mb-1">
                    <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{d.department}</span>
                    <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>${(d.spend / 1000).toFixed(0)}K ({pct}%)</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: '6px', background: 'var(--color-neutral-10)' }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--color-delta-red-400)' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Top travelers */}
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>
            Top travelers by spend
          </h3>
          <div className="space-y-3">
            {mockTopTravelers.map((t, i) => (
              <div key={t.name} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid var(--color-neutral-5)' }}>
                <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-neutral-400)', width: '20px', flexShrink: 0 }}>
                  #{i + 1}
                </span>
                <div className="flex-1">
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{t.name}</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{t.department} · {t.flights} flights</p>
                </div>
                <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', flexShrink: 0 }}>
                  ${(t.spend / 1000).toFixed(0)}K
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
