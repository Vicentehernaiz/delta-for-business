import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delta SkyMiles Platinum Business Card',
  description:
    'Maximize earning with the Delta SkyMiles Platinum Business Card: $195 annual fee, earn up to 3x miles on business spend.',
  alternates: { canonical: 'https://business.delta.com/cards/business/platinum-business' },
}

export default function PlatinumBusinessCardPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Delta SkyMiles Platinum Business Card</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
