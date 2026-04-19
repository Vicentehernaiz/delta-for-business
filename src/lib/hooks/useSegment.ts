'use client'

import { useSearchParams } from 'next/navigation'
import type { SegmentId } from '@/types'

export function useSegment(defaultSegment: SegmentId = 'business-traveler'): SegmentId {
  const searchParams = useSearchParams()
  const param = searchParams.get('for')
  const validSegments: SegmentId[] = ['business-traveler', 'enterprise', 'large-enterprise']

  if (param && validSegments.includes(param as SegmentId)) {
    return param as SegmentId
  }

  return defaultSegment
}
