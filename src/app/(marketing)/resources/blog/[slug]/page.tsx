import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Article | Delta for Business',
  description: 'Read insights about corporate travel, business tips, and Delta for Business news.',
  alternates: { canonical: 'https://business.delta.com/resources/blog' },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">Blog: {params.slug}</h1>
      <p className="mt-4 text-lg text-gray-600">
        Agent 2 will implement dynamic blog post from MDX — see docs/02-sitemap-page-structure.md
      </p>
    </section>
  )
}
