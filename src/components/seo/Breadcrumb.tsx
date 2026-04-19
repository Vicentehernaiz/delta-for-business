/**
 * Breadcrumb navigation with BreadcrumbList schema
 */

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `https://business.delta.com${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <a href={item.href} className="hover:text-[var(--color-delta-red)]">
              {item.name}
            </a>
            {idx < items.length - 1 && <span>/</span>}
          </div>
        ))}
      </nav>
    </>
  )
}
