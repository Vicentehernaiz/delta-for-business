import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/marketing/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'The Delta for Business dashboard is coming soon.',
  robots: { index: false, follow: false },
}

// CLARITY EVENT: dashboard_placeholder_view — fires on mount of /dashboard — measures
// how many users land on the placeholder while the real dashboard is being built.
export default function DashboardPlaceholderPage() {
  return (
    <PlaceholderPage
      heading="The dashboard is not available yet"
      subtext="We're still building this experience. Check back soon."
      eventName="dashboard_placeholder_view"
    />
  )
}
