/**
 * ROI Calculator store — Agent 3 Interactive Tools
 */

'use client'

import { create } from 'zustand'

export type RouteType = 'hub' | 'non-hub' | 'mix'
export type ProgramTier = 'member' | 'plus' | 'elite'

export interface CabinMix {
  first: number        // percentage 0–100
  comfort: number
  main: number
}

export interface CalculatorInputs {
  travelers: number
  tripsPerYear: number
  avgFare: number
  routeType: RouteType
  cabinMix: CabinMix
  programTier: ProgramTier
}

export interface CalculatorOutputs {
  annualSpend: number
  earnRate: number
  estimatedMiles: number
  eCreditValue: number
  savingsVsNoProgram: number
  savingsPercent: number
  monthsToPlus: number | null
  monthsToElite: number | null
  recommendedCard: string
  recommendedCardId: string
}

export interface CalculatorStore {
  inputs: CalculatorInputs
  outputs: CalculatorOutputs
  setTravelers: (v: number) => void
  setTripsPerYear: (v: number) => void
  setAvgFare: (v: number) => void
  setRouteType: (v: RouteType) => void
  setCabinMix: (v: Partial<CabinMix>) => void
  setProgramTier: (v: ProgramTier) => void
  calculate: () => void
  reset: () => void
}

// ── Earn rates per route type (miles per dollar of base fare) ─────────────────
const EARN_RATES: Record<RouteType, number> = {
  'non-hub': 8,
  'mix': 6.5,
  'hub': 5,
}

// Elite tier bonus: +15%
const TIER_BONUS: Record<ProgramTier, number> = {
  member: 0,
  plus: 0,
  elite: 0.15,
}

// SMB spending thresholds
const PLUS_THRESHOLD = 5000
const ELITE_THRESHOLD = 300000

function computeOutputs(inputs: CalculatorInputs): CalculatorOutputs {
  const { travelers, tripsPerYear, avgFare, routeType, programTier } = inputs
  const annualSpend = travelers * tripsPerYear * avgFare
  const baseEarnRate = EARN_RATES[routeType]
  const earnRate = baseEarnRate * (1 + TIER_BONUS[programTier])

  const estimatedMiles = Math.round(annualSpend * earnRate)
  const eCreditValue = Math.round(estimatedMiles * 0.017) // 1.7¢/mile avg
  const savingsVsNoProgram = eCreditValue
  const savingsPercent = annualSpend > 0 ? (savingsVsNoProgram / annualSpend) * 100 : 0

  const monthlySpend = annualSpend / 12

  const monthsToPlus = annualSpend < PLUS_THRESHOLD && monthlySpend > 0
    ? Math.ceil((PLUS_THRESHOLD - annualSpend) / monthlySpend)
    : annualSpend >= PLUS_THRESHOLD
    ? null
    : null

  const monthsToElite = monthlySpend > 0 && annualSpend < ELITE_THRESHOLD
    ? Math.ceil((ELITE_THRESHOLD - annualSpend) / monthlySpend)
    : annualSpend >= ELITE_THRESHOLD
    ? null
    : null

  // Card recommendation
  let recommendedCard = 'Delta SkyMiles® Blue Card'
  let recommendedCardId = 'blue'
  if (annualSpend >= 50000) {
    recommendedCard = 'Delta SkyMiles® Reserve Card ($650/yr)'
    recommendedCardId = 'reserve'
  } else if (annualSpend >= 15000) {
    recommendedCard = 'Delta SkyMiles® Platinum Card ($350/yr)'
    recommendedCardId = 'platinum'
  } else if (annualSpend >= 5000) {
    recommendedCard = 'Delta SkyMiles® Gold Card ($0 first year)'
    recommendedCardId = 'gold'
  }

  return {
    annualSpend,
    earnRate,
    estimatedMiles,
    eCreditValue,
    savingsVsNoProgram,
    savingsPercent,
    monthsToPlus,
    monthsToElite,
    recommendedCard,
    recommendedCardId,
  }
}

const defaultInputs: CalculatorInputs = {
  travelers: 5,
  tripsPerYear: 10,
  avgFare: 1500,
  routeType: 'mix',
  cabinMix: { first: 5, comfort: 20, main: 75 },
  programTier: 'plus',
}

export const useCalculatorStore = create<CalculatorStore>((set, get) => ({
  inputs: defaultInputs,
  outputs: computeOutputs(defaultInputs),

  setTravelers: (travelers) => {
    set((s) => {
      const inputs = { ...s.inputs, travelers }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  setTripsPerYear: (tripsPerYear) => {
    set((s) => {
      const inputs = { ...s.inputs, tripsPerYear }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  setAvgFare: (avgFare) => {
    set((s) => {
      const inputs = { ...s.inputs, avgFare }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  setRouteType: (routeType) => {
    set((s) => {
      const inputs = { ...s.inputs, routeType }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  setCabinMix: (partial) => {
    set((s) => {
      const cabinMix = { ...s.inputs.cabinMix, ...partial }
      const inputs = { ...s.inputs, cabinMix }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  setProgramTier: (programTier) => {
    set((s) => {
      const inputs = { ...s.inputs, programTier }
      return { inputs, outputs: computeOutputs(inputs) }
    })
  },

  calculate: () => {
    const inputs = get().inputs
    set({ outputs: computeOutputs(inputs) })
  },

  reset: () => {
    set({ inputs: defaultInputs, outputs: computeOutputs(defaultInputs) })
  },
}))
