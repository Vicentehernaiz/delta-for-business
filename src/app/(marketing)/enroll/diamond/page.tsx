import type { Metadata } from 'next'
import { ENROLL_PLANS } from '@/config/enroll-plans'
import { PlanEnrollPage } from '@/components/marketing/enroll/PlanEnrollPage'

const plan = ENROLL_PLANS.diamond

export const metadata: Metadata = {
  title: 'Enroll in the Diamond business plan | Delta for Business',
  description:
    'Talk to a Delta corporate specialist about the Diamond business plan: custom pricing, global Corporate Priority, dedicated concierge, full Delta Business Tool platform access.',
  alternates: { canonical: 'https://business.delta.com/enroll/diamond' },
}

export default function EnrollDiamondPage() {
  return <PlanEnrollPage plan={plan} />
}
