/**
 * Segment store — selected segment shared state
 * Agent 3 — Interactive Tools
 */

'use client'

import { create } from 'zustand'
import type { SegmentId } from '@/types'

export interface SegmentStore {
  selectedSegment: SegmentId | null
  setSegment: (id: SegmentId) => void
  clearSegment: () => void
}

export const useSegmentStore = create<SegmentStore>((set) => ({
  selectedSegment: null,

  setSegment: (id: SegmentId) => {
    set({ selectedSegment: id })
  },

  clearSegment: () => {
    set({ selectedSegment: null })
  },
}))
