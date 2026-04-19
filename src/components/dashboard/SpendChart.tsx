'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { mockMonthlySpend } from '@/lib/api/mock-data'

interface SpendChartProps {
  data?: Array<{ month: string; spend: number }>
}

export function SpendChart({ data = mockMonthlySpend }: SpendChartProps) {
  const formatted = data.map((d) => ({
    ...d,
    label: d.month.split(' ')[0].slice(0, 3),
  }))

  return (
    <div
      className="rounded-[var(--radius-l)] p-6"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
          Monthly spend trend
        </h3>
        <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>
          Last 12 months
        </p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={formatted} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c01933" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#c01933" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#eaebee" vertical={false} />
          <XAxis
            dataKey="label"
            stroke="#aaadbd"
            tick={{ fontSize: 11, fill: '#80859c' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#aaadbd"
            tick={{ fontSize: 11, fill: '#80859c' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v / 1000}K`}
          />
          <Tooltip
            contentStyle={{
              background: '#ffffff',
              border: '1px solid #eaebee',
              borderRadius: '10px',
              fontSize: '13px',
              color: '#003366',
            }}
            formatter={(v: number) => [`$${v.toLocaleString()}`, 'Spend']}
            labelStyle={{ fontWeight: '700', color: '#003366' }}
          />
          <Area
            type="monotone"
            dataKey="spend"
            stroke="#c01933"
            strokeWidth={2.5}
            fill="url(#spendGradient)"
            dot={false}
            activeDot={{ r: 5, fill: '#c01933', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
