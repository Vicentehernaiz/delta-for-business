import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delta Personal Credit Cards',
  description:
    'Explore Delta SkyMiles American Express personal credit cards: Blue, Gold, Platinum, and Reserve. Earn miles on personal travel.',
  alternates: { canonical: 'https://business.delta.com/cards/personal' },
}

export default function PersonalCardsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Delta Personal Credit Cards</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
