/**
 * Interactive earning rates table
 * Shows miles per dollar across programs and routes
 */

export function EarningRatesTable() {
  const rates = [
    {
      program: 'Individual',
      domestic: 5,
      international: 6,
      bonus: 'Up to 5x on cards',
    },
    {
      program: 'Small Business',
      domestic: 10,
      international: 12,
      bonus: 'Up to 10x on specific routes',
    },
    {
      program: 'Mid-Market',
      domestic: 'Negotiated',
      international: 'Negotiated',
      bonus: 'Custom tier agreements',
    },
    {
      program: 'Enterprise',
      domestic: 'Negotiated',
      international: 'Negotiated',
      bonus: 'Full suite + partner miles',
    },
  ]

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[var(--color-delta-navy)] text-white">
            <th className="px-6 py-4 text-left font-semibold">Program</th>
            <th className="px-6 py-4 text-left font-semibold">Domestic</th>
            <th className="px-6 py-4 text-left font-semibold">International</th>
            <th className="px-6 py-4 text-left font-semibold">Bonus Multipliers</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-6 py-4 font-semibold text-gray-900">{row.program}</td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
                  {row.domestic}x
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-sm font-semibold">
                  {row.international}x
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{row.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
