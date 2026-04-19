'use client'

import { useQuizStore } from '@/stores/quiz'
import type { QuizContext, QuizCompanySize, QuizSpend, QuizGoal } from '@/stores/quiz'
import { segments } from '@/config/segments'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ── Step config ───────────────────────────────────────────────────────────────

const CONTEXT_OPTIONS: { value: QuizContext; label: string; desc: string; icon: string }[] = [
  { value: 'personal', label: 'Just me', desc: 'I travel for work on my own', icon: 'ph-fill ph-user' },
  { value: 'company', label: 'My company', desc: 'I manage travel for a team', icon: 'ph-fill ph-buildings' },
]

const SIZE_OPTIONS: { value: QuizCompanySize; label: string; sub: string }[] = [
  { value: 'just-me', label: 'Solo', sub: 'Just me traveling' },
  { value: '2-50', label: '2–50 travelers', sub: 'Business Traveler program' },
  { value: '50-500', label: '50–500 travelers', sub: 'Enterprise program' },
  { value: '500+', label: '500+ travelers', sub: 'Large-Enterprise program' },
]

const SPEND_OPTIONS_INDIVIDUAL: { value: QuizSpend; label: string }[] = [
  { value: 'under-2k', label: 'Under $2,000' },
  { value: '2k-5k', label: '$2,000–$5,000' },
  { value: '5k-15k', label: '$5,000–$15,000' },
  { value: 'over-15k', label: 'Over $15,000' },
]

const SPEND_OPTIONS_COMPANY: { value: QuizSpend; label: string }[] = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-50k', label: '$5,000–$50,000' },
  { value: '50k-300k', label: '$50,000–$300,000' },
  { value: 'over-300k', label: 'Over $300,000' },
]

const GOAL_OPTIONS: { value: QuizGoal; label: string; icon: string }[] = [
  { value: 'company-miles', label: 'Earn company miles', icon: 'ph-fill ph-buildings' },
  { value: 'personal-miles', label: 'Earn personal miles', icon: 'ph-fill ph-star' },
  { value: 'discounted-fares', label: 'Get lower fares', icon: 'ph-fill ph-tag' },
  { value: 'priority-service', label: 'Priority boarding & upgrades', icon: 'ph-fill ph-crown' },
  { value: 'medallion-status', label: 'Reach Medallion status', icon: 'ph-fill ph-medal' },
  { value: 'card-rewards', label: 'Maximize card rewards', icon: 'ph-fill ph-credit-card' },
]

const PROGRAM_NAMES: Record<string, string> = {
  'business-traveler': 'Business Traveler',
  enterprise: 'Enterprise program',
  'large-enterprise': 'Large-Enterprise program',
}

const SYNC_ELIGIBLE = ['enterprise', 'large-enterprise']

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', fontWeight: '600' }}>
          Step {current} of {total}
        </span>
        <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-400)' }}>
          ~{total - current + 1} min left
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: '6px', background: 'var(--color-neutral-10)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--color-delta-red-400)' }}
          initial={{ width: 0 }}
          animate={{ width: `${((current - 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function NavButtons({
  onBack,
  onNext,
  canNext,
  isLast,
}: {
  onBack?: () => void
  onNext: () => void
  canNext: boolean
  isLast?: boolean
}) {
  return (
    <div className="flex gap-3 mt-8">
      {onBack && (
        <button
          onClick={onBack}
          className="flex-1 font-semibold transition-colors"
          style={{
            height: '48px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-neutral-5)',
            color: 'var(--color-delta-blue-700)',
            fontSize: 'var(--type-scale-16)',
            border: '1px solid var(--color-neutral-10)',
          }}
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex-[2] font-semibold transition-all"
        style={{
          height: '48px',
          borderRadius: 'var(--radius-full)',
          background: canNext ? 'var(--color-delta-red-400)' : 'var(--color-neutral-50)',
          color: canNext ? 'var(--color-neutral-0)' : 'var(--color-neutral-400)',
          fontSize: 'var(--type-scale-16)',
          boxShadow: canNext ? 'var(--shadow-button)' : 'none',
          cursor: canNext ? 'pointer' : 'not-allowed',
        }}
      >
        {isLast ? 'See my match →' : 'Continue →'}
      </button>
    </div>
  )
}

// ── Steps ─────────────────────────────────────────────────────────────────────

function Step1() {
  const { answers, setContext, nextStep } = useQuizStore()

  return (
    <div>
      <h2
        style={{
          fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '8px',
        }}
      >
        Who are you finding a program for?
      </h2>
      <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
        This helps us route you to the right Delta program.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {CONTEXT_OPTIONS.map((opt) => {
          const selected = answers.context === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => {
                setContext(opt.value)
                nextStep()
              }}
              className="flex flex-col items-center gap-3 p-6 rounded-[var(--radius-l)] transition-all"
              style={{
                background: selected ? 'var(--color-delta-red-50)' : 'var(--color-neutral-0)',
                border: selected
                  ? '2px solid var(--color-delta-red-400)'
                  : '2px solid var(--color-neutral-10)',
                boxShadow: selected ? '0 0 0 3px rgba(192,25,51,0.08)' : 'var(--shadow-card)',
              }}
            >
              <i
                className={`${opt.icon} text-3xl`}
                style={{ color: selected ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)' }}
              ></i>
              <div className="text-center">
                <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
                  {opt.label}
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
                  {opt.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Step2() {
  const { answers, setCompanySize, nextStep, prevStep } = useQuizStore()

  return (
    <div>
      <h2
        style={{
          fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '8px',
        }}
      >
        How many people travel for your company?
      </h2>
      <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
        Include anyone whose flights you want to track or manage.
      </p>

      <div className="space-y-3">
        {SIZE_OPTIONS.map((opt) => {
          const selected = answers.companySize === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => setCompanySize(opt.value)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-[var(--radius-l)] transition-all"
              style={{
                background: selected ? 'var(--color-delta-red-50)' : 'var(--color-neutral-0)',
                border: selected
                  ? '2px solid var(--color-delta-red-400)'
                  : '2px solid var(--color-neutral-10)',
                textAlign: 'left',
              }}
            >
              <div>
                <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
                  {opt.label}
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
                  {opt.sub}
                </p>
              </div>
              {selected && (
                <i className="ph-fill ph-check-circle text-xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
              )}
            </button>
          )
        })}
      </div>

      <NavButtons
        onBack={prevStep}
        onNext={nextStep}
        canNext={!!answers.companySize}
      />
    </div>
  )
}

function Step3() {
  const { answers, setSpend, nextStep, prevStep } = useQuizStore()
  const isCompany = answers.context === 'company'
  const spendOptions = isCompany ? SPEND_OPTIONS_COMPANY : SPEND_OPTIONS_INDIVIDUAL

  return (
    <div>
      <h2
        style={{
          fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '8px',
        }}
      >
        Approximate {isCompany ? 'annual company' : 'personal annual'} travel spend?
      </h2>
      <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
        Total airfare only — hotels and ground transport don't count here.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {spendOptions.map((opt) => {
          const selected = answers.spend === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => setSpend(opt.value)}
              className="px-4 py-4 rounded-[var(--radius-l)] font-semibold transition-all"
              style={{
                background: selected ? 'var(--color-delta-red-50)' : 'var(--color-neutral-0)',
                border: selected
                  ? '2px solid var(--color-delta-red-400)'
                  : '2px solid var(--color-neutral-10)',
                color: selected ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)',
                fontSize: 'var(--type-scale-16)',
                textAlign: 'center',
              }}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      <NavButtons
        onBack={prevStep}
        onNext={nextStep}
        canNext={!!answers.spend}
      />
    </div>
  )
}

function Step4() {
  const { answers, toggleGoal, computeResult, prevStep } = useQuizStore()

  return (
    <div>
      <h2
        style={{
          fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '8px',
        }}
      >
        What matters most to you?
      </h2>
      <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
        Pick up to 2 priorities — we'll tailor the card and Medallion recommendation.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {GOAL_OPTIONS.map((opt) => {
          const selected = answers.goals.includes(opt.value)
          const maxReached = answers.goals.length >= 2 && !selected
          return (
            <button
              key={opt.value}
              onClick={() => toggleGoal(opt.value)}
              disabled={maxReached}
              className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-l)] transition-all text-left"
              style={{
                background: selected ? 'var(--color-delta-red-50)' : 'var(--color-neutral-0)',
                border: selected
                  ? '2px solid var(--color-delta-red-400)'
                  : '2px solid var(--color-neutral-10)',
                opacity: maxReached ? 0.4 : 1,
                cursor: maxReached ? 'not-allowed' : 'pointer',
              }}
            >
              <i
                className={`${opt.icon} text-xl flex-shrink-0`}
                style={{ color: selected ? 'var(--color-delta-red-400)' : 'var(--color-neutral-400)' }}
              ></i>
              <span
                style={{
                  fontSize: 'var(--type-scale-14)',
                  fontWeight: '600',
                  color: selected ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)',
                }}
              >
                {opt.label}
              </span>
            </button>
          )
        })}
      </div>

      <NavButtons
        onBack={prevStep}
        onNext={computeResult}
        canNext={answers.goals.length > 0}
        isLast
      />
    </div>
  )
}

function ResultScreen() {
  const { result, reset } = useQuizStore()
  if (!result) return null

  const segment = segments[result.program]
  const programName = PROGRAM_NAMES[result.program] ?? result.program

  return (
    <div>
      <div className="text-center mb-8">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
          style={{ background: 'var(--color-delta-red-50)' }}
        >
          <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-600)',
            marginBottom: '6px',
          }}
        >
          Your match
        </h2>
        <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)' }}>
          Based on your profile, here's our recommendation.
        </p>
      </div>

      {/* Program match */}
      <div
        className="rounded-[var(--radius-l)] p-6 mb-4"
        style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
      >
        <p
          style={{
            fontSize: 'var(--type-scale-12)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-neutral-600)',
            fontWeight: '600',
            marginBottom: '4px',
          }}
        >
          Recommended program
        </p>
        <p
          style={{
            fontSize: 'var(--type-scale-22)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-red-400)',
            marginBottom: '4px',
          }}
        >
          {programName}
          {result.programTier && <span style={{ color: 'var(--color-neutral-600)', fontWeight: '400', fontSize: 'var(--type-scale-18)' }}> · {result.programTier} tier</span>}
        </p>
        {segment && (
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
            {segment.tagline}
          </p>
        )}
      </div>

      {/* Secondary recommendations */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div
          className="rounded-[var(--radius-l)] p-4"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
        >
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
            Recommended card
          </p>
          <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
            Delta SkyMiles® {result.cardTier.charAt(0).toUpperCase() + result.cardTier.slice(1)}
            {result.cardId.includes('business') ? ' Business' : ''}
          </p>
        </div>
        {result.medallionTier && (
          <div
            className="rounded-[var(--radius-l)] p-4"
            style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
          >
            <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
              Medallion projection
            </p>
            <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
              {result.medallionTier.charAt(0).toUpperCase() + result.medallionTier.slice(1)} in ~{result.medallionMonths}mo
            </p>
          </div>
        )}
      </div>

      {/* Delta SYNC reminder for Enterprise / Large-Enterprise */}
      {result && SYNC_ELIGIBLE.includes(result.program) && (
        <div
          className="rounded-[var(--radius-l)] p-4 mb-4 flex gap-3"
          style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}
        >
          <i className="ph-fill ph-lightning flex-shrink-0 mt-0.5 text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
          <div>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '2px' }}>
              Delta SYNC included
            </p>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)', lineHeight: 1.5 }}>
              {result.program === 'large-enterprise'
                ? 'Large-Enterprise accounts get full access to Delta SYNC — the travel management platform for spend reporting, traveler management, and policy controls.'
                : 'Enterprise accounts unlock Delta SYNC, Delta\'s travel management platform to track spend, manage travelers, and apply company travel policies.'}
              {' '}<Link href="/delta-sync" style={{ color: 'var(--color-delta-blue-600)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: '600' }}>Learn about Delta SYNC →</Link>
            </p>
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        {segment && (
          <Link
            href={segment.ctaPrimary.href}
            className="w-full text-center font-semibold transition-opacity hover:opacity-90"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            {segment.ctaPrimary.label}
          </Link>
        )}
        <button
          onClick={reset}
          className="font-semibold"
          style={{
            fontSize: 'var(--type-scale-14)',
            color: 'var(--color-delta-blue-300)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          Retake the quiz
        </button>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function ProgramQuiz() {
  const { currentStep, totalSteps, isComplete } = useQuizStore()

  return (
    <div
      className="mx-auto rounded-[var(--radius-l)]"
      style={{
        maxWidth: '560px',
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
        padding: '32px',
      }}
    >
      {!isComplete && <ProgressBar current={currentStep} total={totalSteps} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={isComplete ? 'result' : currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {isComplete ? (
            <ResultScreen />
          ) : currentStep === 1 ? (
            <Step1 />
          ) : currentStep === 2 ? (
            <Step2 />
          ) : currentStep === 3 ? (
            <Step3 />
          ) : (
            <Step4 />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
