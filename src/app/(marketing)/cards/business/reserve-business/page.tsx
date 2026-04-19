import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delta SkyMiles Reserve Business Card',
  description:
    'Premium business rewards: Delta SkyMiles Reserve Business Card offers $695 annual fee, unlimited earning, and exclusive perks.',
  alternates: { canonical: 'https://business.delta.com/cards/business/reserve-business' },
}

export default function ReserveBusinessCardPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Delta SkyMiles Reserve Business Card</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
