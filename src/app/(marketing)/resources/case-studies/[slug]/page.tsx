import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study | Delta for Business',
  description: 'Real results from companies using Delta for Business: ROI, savings, and success stories.',
  alternates: { canonical: 'https://business.delta.com/resources/case-studies' },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Case Study: {params.slug}</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement dynamic case study from MDX — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
