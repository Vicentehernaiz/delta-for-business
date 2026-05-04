import type { Metadata } from 'next'
import { ENROLL_PLANS } from '@/config/enroll-plans'
import { PlanEnrollPage } from '@/components/marketing/enroll/PlanEnrollPage'

const plan = ENROLL_PLANS.gold

export const metadata: Metadata = {
  title: 'Enroll in the Gold business plan | Delta for Business',
  description:
    'Open a free Gold business plan in 90 seconds. Pooled SkyMiles, 12 miles per dollar with the Amex Gold Business, free Travel Management Dashboard, Sky Priority boarding.',
  alternates: { canonical: 'https://business.delta.com/enroll/gold' },
}

export default function EnrollGoldPage() {
  return <PlanEnrollPage plan={plan} />
}
