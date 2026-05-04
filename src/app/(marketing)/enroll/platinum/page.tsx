import type { Metadata } from 'next'
import { ENROLL_PLANS } from '@/config/enroll-plans'
import { PlanEnrollPage } from '@/components/marketing/enroll/PlanEnrollPage'

const plan = ENROLL_PLANS.platinum

export const metadata: Metadata = {
  title: 'Enroll in the Platinum business plan | Delta for Business',
  description:
    'Talk to a Delta corporate specialist about the Platinum business plan: negotiated fares, full Corporate Priority, AI-powered Travel Management Dashboard, dedicated account manager.',
  alternates: { canonical: 'https://business.delta.com/enroll/platinum' },
}

export default function EnrollPlatinumPage() {
  return <PlanEnrollPage plan={plan} />
}
