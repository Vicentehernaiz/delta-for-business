import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delta Business Credit Cards',
  description:
    'Apply for Delta SkyMiles American Express business credit cards: Gold, Platinum, and Reserve. Earn miles on corporate spend.',
  alternates: { canonical: 'https://business.delta.com/cards/business' },
}

export default function BusinessCardsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Delta Business Credit Cards</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
