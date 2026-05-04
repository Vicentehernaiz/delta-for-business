/**
 * Quiz store — Program Eligibility Quiz state management
 * Agent 3 — Interactive Tools
 */

'use client'

import { create } from 'zustand'
import type { SegmentId } from '@/types'

export type QuizContext = 'personal' | 'company'
export type QuizCompanySize = 'just-me' | '2-50' | '50-500' | '500+'
export type QuizSpend =
  // Individual
  | 'under-2k' | '2k-5k' | '5k-15k' | 'over-15k'
  // Company
  | 'under-5k' | '5k-50k' | '50k-300k' | 'over-300k'

export type QuizGoal =
  | 'company-miles'
  | 'personal-miles'
  | 'discounted-fares'
  | 'priority-service'
  | 'medallion-status'
  | 'card-rewards'

export interface QuizAnswers {
  context: QuizContext | null
  companySize: QuizCompanySize | null
  spend: QuizSpend | null
  goals: QuizGoal[]
}

export interface QuizResult {
  program: SegmentId
  programTier: string | null
  cardId: string
  cardTier: 'blue' | 'gold' | 'platinum' | 'reserve'
  medallionTier: 'gold' | 'platinum' | 'diamond' | null
  medallionMonths: number | null
  annualSpendEstimate: number
  travelersEstimate: number
}

export interface QuizStore {
  currentStep: number
  totalSteps: number
  answers: QuizAnswers
  result: QuizResult | null
  isComplete: boolean

  setContext: (context: QuizContext) => void
  setCompanySize: (size: QuizCompanySize) => void
  setSpend: (spend: QuizSpend) => void
  toggleGoal: (goal: QuizGoal) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  computeResult: () => void
  reset: () => void
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function spendToNumber(spend: QuizSpend | null, context: QuizContext | null): number {
  if (!spend) return 0
  const map: Record<QuizSpend, number> = {
    // individual
    'under-2k': 1000,
    '2k-5k': 3500,
    '5k-15k': 10000,
    'over-15k': 20000,
    // company
    'under-5k': 2500,
    '5k-50k': 25000,
    '50k-300k': 175000,
    'over-300k': 500000,
  }
  return map[spend] ?? 0
}

function sizeTravelers(size: QuizCompanySize | null): number {
  if (!size) return 1
  const map: Record<QuizCompanySize, number> = {
    'just-me': 1,
    '2-50': 25,
    '50-500': 200,
    '500+': 750,
  }
  return map[size]
}

function computeProgram(answers: QuizAnswers): {
  program: SegmentId
  programTier: string | null
  travelersEstimate: number
  annualSpendEstimate: number
} {
  const { context, companySize, spend } = answers
  const travelers = sizeTravelers(companySize)
  const annualSpend = spendToNumber(spend, context)

  // Individual / small team path → Business Traveler
  if (context === 'personal' || companySize === 'just-me' || companySize === '2-50') {
    return { program: 'business-traveler', programTier: null, travelersEstimate: travelers, annualSpendEstimate: annualSpend }
  }

  // 50–500 travelers → Enterprise program (MSA)
  if (companySize === '50-500') {
    return { program: 'enterprise', programTier: null, travelersEstimate: travelers, annualSpendEstimate: annualSpend }
  }

  // 500+ travelers → Large-Enterprise program (CSA)
  if (companySize === '500+') {
    return { program: 'large-enterprise', programTier: null, travelersEstimate: travelers, annualSpendEstimate: annualSpend }
  }

  return { program: 'business-traveler', programTier: null, travelersEstimate: travelers, annualSpendEstimate: annualSpend }
}

function computeCard(
  spend: number,
  context: QuizContext | null,
  travelers: number,
  goals: QuizGoal[]
): { cardId: string; cardTier: 'blue' | 'gold' | 'platinum' | 'reserve' } {
  const wantsCardRewards = goals.includes('card-rewards')
  const wantsPriority = goals.includes('priority-service') || goals.includes('medallion-status')
  const isCompany = context === 'company' && travelers > 5

  let tier: 'blue' | 'gold' | 'platinum' | 'reserve' = 'blue'

  if (spend >= 50000 || wantsCardRewards && spend >= 15000) {
    tier = 'reserve'
  } else if (spend >= 15000 || wantsPriority && spend >= 5000) {
    tier = 'platinum'
  } else if (spend >= 5000) {
    tier = 'gold'
  }

  const cardId = isCompany && tier !== 'blue' ? `${tier}-business` : tier
  return { cardId, cardTier: tier }
}

function computeMedallion(
  spend: number,
  cardTier: 'blue' | 'gold' | 'platinum' | 'reserve'
): { medallionTier: 'gold' | 'platinum' | 'diamond' | null; medallionMonths: number | null } {
  // Card headstart
  const cardHeadstart =
    cardTier === 'platinum' || cardTier === 'reserve' ? 2500 : 0

  // MQD ~ spend (simplified: flights = ~1:1 MQD ratio)
  const monthlySpend = spend / 12
  const annualMqd = spend + cardHeadstart

  let medallionTier: 'gold' | 'platinum' | 'diamond' | null = null
  let threshold = 0

  if (annualMqd >= 28000) {
    medallionTier = 'diamond'
    threshold = 28000
  } else if (annualMqd >= 15000) {
    medallionTier = 'platinum'
    threshold = 15000
  } else if (annualMqd >= 10000) {
    medallionTier = 'gold'
    threshold = 10000
  }

  if (!medallionTier) return { medallionTier: null, medallionMonths: null }

  const mqdsNeeded = Math.max(0, threshold - cardHeadstart)
  const medallionMonths = mqdsNeeded > 0 ? Math.ceil(mqdsNeeded / monthlySpend) : 1

  return { medallionTier, medallionMonths: Math.min(medallionMonths, 24) }
}

// ── Store ─────────────────────────────────────────────────────────────────────

const defaultAnswers: QuizAnswers = {
  context: null,
  companySize: null,
  spend: null,
  goals: [],
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentStep: 1,
  totalSteps: 4,
  answers: defaultAnswers,
  result: null,
  isComplete: false,

  setContext: (context) => {
    set((state) => ({
      answers: { ...state.answers, context },
    }))
  },

  setCompanySize: (companySize) => {
    set((state) => ({
      answers: { ...state.answers, companySize },
    }))
  },

  setSpend: (spend) => {
    set((state) => ({
      answers: { ...state.answers, spend },
    }))
  },

  toggleGoal: (goal) => {
    set((state) => {
      const goals = state.answers.goals.includes(goal)
        ? state.answers.goals.filter((g) => g !== goal)
        : state.answers.goals.length < 2
        ? [...state.answers.goals, goal]
        : state.answers.goals
      return { answers: { ...state.answers, goals } }
    })
  },

  nextStep: () => {
    set((state) => {
      const next = Math.min(state.currentStep + 1, state.totalSteps + 1)
      return { currentStep: next }
    })
  },

  prevStep: () => {
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    }))
  },

  goToStep: (step) => {
    set({ currentStep: step })
  },

  computeResult: () => {
    const { answers } = get()
    const { program, programTier, travelersEstimate, annualSpendEstimate } = computeProgram(answers)
    const { cardId, cardTier } = computeCard(
      annualSpendEstimate,
      answers.context,
      travelersEstimate,
      answers.goals
    )
    const { medallionTier, medallionMonths } = computeMedallion(annualSpendEstimate, cardTier)

    set({
      result: {
        program,
        programTier,
        cardId,
        cardTier,
        medallionTier,
        medallionMonths,
        annualSpendEstimate,
        travelersEstimate,
      },
      isComplete: true,
    })
  },

  reset: () => {
    set({
      currentStep: 1,
      answers: defaultAnswers,
      result: null,
      isComplete: false,
    })
  },
}))
