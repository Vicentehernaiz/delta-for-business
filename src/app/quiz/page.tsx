import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/marketing/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Plan quiz',
  description: 'The Delta for Business plan quiz is coming soon.',
  robots: { index: false, follow: false },
}

// CLARITY EVENT: quiz_placeholder_view — fires on mount of /quiz — measures intent
// to take the plan-customizer quiz before the real experience ships.
export default function QuizPlaceholderPage() {
  return (
    <PlaceholderPage
      heading="The plan quiz is not available yet"
      subtext="We're still building this experience. Check back soon."
      eventName="quiz_placeholder_view"
    />
  )
}
