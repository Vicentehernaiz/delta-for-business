import type { Metadata } from 'next'
import { Nav } from '@/components/marketing/Nav'
import { Footer } from '@/components/marketing/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Delta for Business | Corporate Travel Programs',
    template: '%s | Delta for Business',
  },
  description:
    'Find the right Delta corporate travel program for your company. Earn miles, unlock Corporate Priority, and accelerate Medallion status.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
      <Footer />
    </>
  )
}
