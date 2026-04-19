/**
 * Grid layout for all 4 segment cards
 * Maps over segments config and renders SegmentCard
 */

import { SegmentCard } from './SegmentCard'
import type { Segment } from '@/types'

interface SegmentGridProps {
  segments: Segment[]
  activeSegmentId?: string
}

export function SegmentGrid({ segments, activeSegmentId }: SegmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {segments.map((segment) => (
        <SegmentCard
          key={segment.id}
          segment={segment}
          isActive={segment.id === activeSegmentId}
        />
      ))}
    </div>
  )
}
