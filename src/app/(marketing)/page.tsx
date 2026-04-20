import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { AuthorityBar } from '@/components/marketing/AuthorityBar'
import { ProgramFinder } from '@/components/marketing/ProgramFinder'
import { PainPointSection } from '@/components/marketing/PainPointSection'
import { DeltaSyncSection } from '@/components/marketing/DeltaSyncSection'
import { SkyMilesTeaser } from '@/components/marketing/SkyMilesTeaser'
import { CardsTeaser } from '@/components/marketing/CardsTeaser'
import { MedallionTeaser } from '@/components/marketing/MedallionTeaser'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Delta for Business | Corporate Travel Programs, SkyMiles & Amex Cards',
  description: 'Find the right Delta corporate travel program in 60 seconds. Earn miles for your company, unlock Corporate Priority, and accelerate Medallion status. Free enrollment for small businesses.',
  openGraph: {
    title: 'Delta for Business | Corporate Travel Programs',
    description: 'One program for every size. Free to join. Instant ROI.',
    images: ['/og/home.png'],
  },
  alternates: { canonical: 'https://business.delta.com/' },
}

export default function HomePage({ searchParams }: { searchParams: { for?: string } }) {
  const segment = searchParams.for ?? 'business-traveler'
  return (
    <>
      <Hero />
      <FadeIn y={16} duration={0.5}><AuthorityBar /></FadeIn>
      <FadeIn y={24} duration={0.55}><ProgramFinder activeSegment={segment} /></FadeIn>
      <FadeIn y={24} duration={0.55}><PainPointSection segmentId={segment as import('@/types').SegmentId} /></FadeIn>
      <FadeIn y={24} duration={0.5}><DeltaSyncSection /></FadeIn>
      <FadeIn y={24} duration={0.5}><SkyMilesTeaser /></FadeIn>
      <FadeIn y={24} duration={0.5}><CardsTeaser /></FadeIn>
      <FadeIn y={24} duration={0.5}><MedallionTeaser /></FadeIn>
      <FadeIn y={16} duration={0.45}><FinalCTA /></FadeIn>
    </>
  )
}
