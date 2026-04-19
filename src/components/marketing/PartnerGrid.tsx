/**
 * Partner grid for airline and earning partner logos
 * Displays alliance partners and benefits partners
 */

interface Partner {
  name: string
  logo: string
  category: 'airline' | 'benefits'
}

interface PartnerGridProps {
  partners: Partner[]
  title?: string
}

export function PartnerGrid({ partners, title }: PartnerGridProps) {
  return (
    <section className="py-[var(--space-16)] bg-gray-50 rounded-lg">
      {title && <h3 className="text-center text-xl font-bold mb-8">{title}</h3>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
          >
            <div className="text-center">
              <div className="h-12 mb-2 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full"
                />
              </div>
              <p className="text-xs text-gray-600">{partner.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
