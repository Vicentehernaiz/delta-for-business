/**
 * Comparison table component
 * Used for segment comparison and card comparison pages
 */

interface ComparisonTableProps {
  headers: string[]
  rows: (string | boolean | number)[][]
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200"
                >
                  {typeof cell === 'boolean' ? (
                    cell ? (
                      <i className="ph ph-check-circle text-[var(--color-delta-red)] text-lg"></i>
                    ) : (
                      <i className="ph ph-x-circle text-gray-300 text-lg"></i>
                    )
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
