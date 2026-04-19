/**
 * Generic JSON-LD structured data component
 * Accepts schema object and renders as script tag
 */

interface JsonLdProps {
  schema: Record<string, any>
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
