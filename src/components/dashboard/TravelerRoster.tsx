import type { TravelerRoster as TravelerRow } from '@/lib/api/mock-data'
import Link from 'next/link'

interface TravelerRosterProps {
  travelers: TravelerRow[]
  limit?: number
}

const tierColors: Record<string, string> = {
  Diamond: 'var(--color-medallion-diamond)',
  Platinum: 'var(--color-medallion-platinum)',
  Gold: 'var(--color-medallion-gold)',
  Silver: 'var(--color-medallion-silver)',
  Member: 'var(--color-neutral-400)',
}

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: 'Active', color: 'var(--color-success)' },
  invited: { label: 'Invited', color: 'var(--color-info)' },
  inactive: { label: 'Inactive', color: 'var(--color-neutral-400)' },
}

export function TravelerRoster({ travelers, limit }: TravelerRosterProps) {
  const rows = limit ? travelers.slice(0, limit) : travelers

  return (
    <div
      className="rounded-[var(--radius-l)] overflow-hidden"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <table className="w-full">
        <thead>
          <tr style={{ background: 'var(--color-neutral-5)', borderBottom: '1px solid var(--color-neutral-10)' }}>
            {['Traveler', 'Medallion', 'Flights', 'Miles YTD', 'Status', ''].map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-left"
                style={{
                  fontSize: 'var(--type-scale-12)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-neutral-600)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((traveler, idx) => {
            const tierColor = tierColors[traveler.medallionTier] ?? 'var(--color-neutral-400)'
            const status = statusConfig[traveler.status]
            return (
              <tr
                key={traveler.id}
                style={{ borderBottom: '1px solid var(--color-neutral-5)' }}
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                      style={{ background: 'var(--color-delta-blue-50)' }}
                    >
                      <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
                        {traveler.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
                        {traveler.name}
                      </p>
                      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
                        {traveler.department}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      fontSize: 'var(--type-scale-12)',
                      color: tierColor,
                      background: `${tierColor}18`,
                    }}
                  >
                    {traveler.medallionTier}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-500)' }}>
                    {traveler.flightsThisYear}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-700)' }}>
                    {traveler.milesThisYear.toLocaleString()}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span style={{ fontSize: 'var(--type-scale-12)', fontWeight: '600', color: status.color }}>
                    {status.label}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <Link
                    href={`/account/travelers`}
                    style={{
                      fontSize: 'var(--type-scale-13)',
                      color: 'var(--color-delta-blue-300)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}
                  >
                    View
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
