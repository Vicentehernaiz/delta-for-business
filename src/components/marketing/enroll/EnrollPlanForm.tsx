'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { EnrollPlan } from '@/config/enroll-plans'

// ─────────────────────────────────────────────────────────────────────────────
// Plan match card — renders the recommended plan in the funnel.
// Reused stand-alone above the form on /enroll/{gold,platinum,diamond} pages.
// ─────────────────────────────────────────────────────────────────────────────

export function PlanMatchCard({
  plan,
  showLearnMore = true,
}: {
  plan: EnrollPlan
  showLearnMore?: boolean
}) {
  return (
    <div
      className="rounded-[var(--radius-l)] overflow-hidden"
      style={{
        background: 'var(--color-neutral-0)',
        border: `2px solid ${plan.accent}`,
        boxShadow: '0 8px 28px rgba(0,45,89,0.10)',
      }}
    >
      <div style={{ height: '4px', background: plan.accent }} />
      <div style={{ padding: '24px' }}>
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-blue-50)',
            }}
          >
            <i className={`${plan.icon} text-base`} style={{ color: plan.accent }} />
          </span>
          <span
            style={{
              fontSize: 'var(--type-scale-11)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-delta-red-400)',
            }}
          >
            Your plan match
          </span>
        </div>

        <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
          <h2
            style={{
              fontSize: 'var(--type-scale-28)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: plan.accent,
              lineHeight: 1.1,
            }}
          >
            {plan.name}
          </h2>
          {showLearnMore && (
            <Link
              href={plan.learnHref}
              style={{
                fontSize: 'var(--type-scale-13)',
                color: 'var(--color-delta-blue-600)',
                fontWeight: '600',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                whiteSpace: 'nowrap',
              }}
            >
              Plan details →
            </Link>
          )}
        </div>

        <p
          style={{
            fontSize: 'var(--type-scale-14)',
            color: 'var(--color-neutral-700)',
            lineHeight: 1.6,
            marginBottom: '14px',
          }}
        >
          {plan.long}
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 rounded-[var(--radius-l)]"
          style={{
            background: 'var(--color-neutral-5)',
            border: '1px solid var(--color-neutral-10)',
            padding: '12px 14px',
          }}
        >
          <div className="flex items-center gap-2">
            <i className="ph-fill ph-currency-dollar text-base" style={{ color: plan.accent }} />
            <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', fontWeight: '600' }}>
              {plan.spend}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ph-fill ph-users-three text-base" style={{ color: 'var(--color-neutral-500)' }} />
            <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)' }}>
              {plan.travelersTypical}
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: 'var(--color-neutral-500)',
            marginBottom: '8px',
          }}
        >
          What you get
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px 16px', marginBottom: '16px' }}>
          {plan.perks.map((p) => (
            <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <i className="ph-bold ph-check text-xs flex-shrink-0 mt-1" style={{ color: 'var(--color-success)' }} />
              <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', lineHeight: 1.5 }}>
                {p}
              </span>
            </li>
          ))}
        </ul>

        <div
          style={{
            background: 'var(--color-delta-blue-50)',
            border: '1px solid var(--color-delta-blue-300)',
            borderRadius: 'var(--radius-l)',
            padding: '12px 14px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
          }}
        >
          <i className="ph-fill ph-medal text-base flex-shrink-0" style={{ color: 'var(--color-delta-blue-600)', marginTop: '2px' }} />
          <div>
            <p
              style={{
                fontSize: 'var(--type-scale-11)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: 'var(--color-delta-blue-600)',
                marginBottom: '4px',
              }}
            >
              {plan.programNote.title}
            </p>
            <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', lineHeight: 1.55 }}>
              {plan.programNote.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Form — adapts to plan.formKind. Self-serve = 2-step. Sales = single contact.
// ─────────────────────────────────────────────────────────────────────────────

interface FormState {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  travelers: string
  skymilesNumber: string
  jobTitle: string
}

const blank: FormState = {
  firstName: '', lastName: '', email: '', company: '',
  phone: '', travelers: '', skymilesNumber: '', jobTitle: '',
}

export function EnrollPlanForm({ plan }: { plan: EnrollPlan }) {
  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [form, setForm] = useState<FormState>(blank)

  const set = (k: keyof FormState) => (v: string) => setForm((p) => ({ ...p, [k]: v }))
  const canStep1 = !!form.firstName && !!form.lastName && !!form.email
  const canSalesSubmit = canStep1 && !!form.company

  if (step === 'done') {
    return <DoneState plan={plan} firstName={form.firstName} email={form.email} />
  }

  return (
    <div
      className="rounded-[var(--radius-l)]"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
        padding: '28px',
      }}
    >
      {plan.formKind === 'self-serve' ? (
        <SelfServeForm
          plan={plan}
          step={step}
          setStep={setStep}
          form={form}
          set={set}
          canStep1={canStep1}
        />
      ) : (
        <SalesForm
          plan={plan}
          setStep={setStep}
          form={form}
          set={set}
          canSubmit={canSalesSubmit}
        />
      )}
    </div>
  )
}

// ── Self-serve (Individual / Gold) ───────────────────────────────────────────

function SelfServeForm({
  plan,
  step,
  setStep,
  form,
  set,
  canStep1,
}: {
  plan: EnrollPlan
  step: 1 | 2 | 'done'
  setStep: (s: 1 | 2 | 'done') => void
  form: FormState
  set: (k: keyof FormState) => (v: string) => void
  canStep1: boolean
}) {
  const isCompanyFlow = plan.key === 'gold'
  const stepNum = step === 'done' ? 3 : step

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => (
          <div
            key={s}
            className="flex-1 rounded-full"
            style={{
              height: '4px',
              background:
                s < stepNum
                  ? 'var(--color-delta-blue-600)'
                  : s === stepNum
                  ? 'var(--color-delta-red-400)'
                  : 'var(--color-neutral-10)',
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${plan.key}-${step}`}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 ? (
            <div>
              <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>
                Create your account
              </h3>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
                Free to join · No credit card · Cancel any time
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <FormField label="First name" required value={form.firstName} onChange={set('firstName')} />
                  <FormField label="Last name" required value={form.lastName} onChange={set('lastName')} />
                </div>
                <FormField
                  label="Work email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={set('email')}
                />
              </div>
            </div>
          ) : (
            <div>
              <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>
                Almost done
              </h3>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '20px' }}>
                Optional — speeds up your dashboard setup. You can always add this later.
              </p>
              <div className="space-y-4">
                <FormField
                  label="SkyMiles number (optional)"
                  placeholder="Leave blank to create new"
                  value={form.skymilesNumber}
                  onChange={set('skymilesNumber')}
                />
                {isCompanyFlow && (
                  <FormField
                    label="Company name"
                    placeholder="Your company"
                    value={form.company}
                    onChange={set('company')}
                  />
                )}
                <FormField
                  label="Job title (optional)"
                  placeholder="e.g. Account Executive"
                  value={form.jobTitle}
                  onChange={set('jobTitle')}
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 mt-6">
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            style={{
              flex: 1,
              height: '48px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-neutral-5)',
              color: 'var(--color-delta-blue-700)',
              fontSize: 'var(--type-scale-15)',
              fontWeight: '600',
              border: '1px solid var(--color-neutral-10)',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
        )}
        <button
          onClick={() => {
            if (step === 1) setStep(2)
            else setStep('done')
          }}
          disabled={step === 1 && !canStep1}
          style={{
            flex: 2,
            height: '48px',
            borderRadius: 'var(--radius-full)',
            background: step === 1 && !canStep1 ? 'var(--color-neutral-50)' : 'var(--color-delta-red-400)',
            color: step === 1 && !canStep1 ? 'var(--color-neutral-400)' : 'var(--color-neutral-0)',
            fontSize: 'var(--type-scale-15)',
            fontWeight: '600',
            boxShadow: step === 1 && !canStep1 ? 'none' : 'var(--shadow-button)',
            border: 'none',
            cursor: step === 1 && !canStep1 ? 'not-allowed' : 'pointer',
          }}
        >
          {step === 1 ? 'Continue →' : `${plan.ctaLabel} →`}
        </button>
      </div>
    </div>
  )
}

// ── Sales (Platinum / Diamond) ───────────────────────────────────────────────

function SalesForm({
  plan,
  setStep,
  form,
  set,
  canSubmit,
}: {
  plan: EnrollPlan
  setStep: (s: 1 | 2 | 'done') => void
  form: FormState
  set: (k: keyof FormState) => (v: string) => void
  canSubmit: boolean
}) {
  return (
    <div>
      <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>
        Talk to sales — {plan.name}
      </h3>
      <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '20px', lineHeight: 1.6 }}>
        A Delta corporate account specialist will reach out within 1 business day.
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="First name" required value={form.firstName} onChange={set('firstName')} />
          <FormField label="Last name" required value={form.lastName} onChange={set('lastName')} />
        </div>
        <FormField
          label="Work email"
          required
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={set('email')}
        />
        <FormField
          label="Company name"
          required
          placeholder="Acme Corp."
          value={form.company}
          onChange={set('company')}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            label="Phone"
            type="tel"
            placeholder="+1 (555) 555-1234"
            value={form.phone}
            onChange={set('phone')}
          />
          <FormField
            label="Approx. annual Delta spend"
            placeholder={
              plan.key === 'diamond' ? '$300K+' : '$50K – $300K'
            }
            value={form.travelers}
            onChange={set('travelers')}
          />
        </div>
      </div>

      <button
        onClick={() => setStep('done')}
        disabled={!canSubmit}
        style={{
          width: '100%',
          height: '48px',
          marginTop: '24px',
          borderRadius: 'var(--radius-full)',
          background: !canSubmit ? 'var(--color-neutral-50)' : 'var(--color-delta-red-400)',
          color: !canSubmit ? 'var(--color-neutral-400)' : 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-15)',
          fontWeight: '600',
          boxShadow: !canSubmit ? 'none' : 'var(--shadow-button)',
          border: 'none',
          cursor: !canSubmit ? 'not-allowed' : 'pointer',
        }}
      >
        {plan.ctaLabel} →
      </button>

      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-500)', textAlign: 'center', marginTop: '14px' }}>
        No commitment · Negotiated agreements typically take 2–4 weeks
      </p>
    </div>
  )
}

// ── Done state ───────────────────────────────────────────────────────────────

function DoneState({ plan, firstName, email }: { plan: EnrollPlan; firstName: string; email: string }) {
  const isSales = plan.formKind === 'sales'
  return (
    <div
      className="rounded-[var(--radius-l)] text-center"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-10)',
        boxShadow: 'var(--shadow-card)',
        padding: '40px 28px',
      }}
    >
      <div
        className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
        style={{ background: 'var(--color-delta-red-50)' }}
      >
        <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }} />
      </div>
      <h3
        style={{
          fontSize: 'var(--type-scale-24)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: 'var(--color-delta-blue-600)',
          marginBottom: '10px',
        }}
      >
        {isSales ? `Thanks, ${firstName}!` : `You're in, ${firstName}!`}
      </h3>
      <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '6px' }}>
        {isSales
          ? `A ${plan.name} specialist will email you within 1 business day.`
          : `Welcome to ${plan.name}.`}
      </p>
      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '28px' }}>
        Confirmation sent to <strong>{email}</strong>.{!isSales && ' Benefits activate within 24 hours.'}
      </p>
      <Link
        href={isSales ? '/programs/compare' : '/medallion'}
        className="inline-flex items-center gap-2 font-semibold"
        style={{
          height: '48px',
          padding: '0 24px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-delta-red-400)',
          color: 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-15)',
          boxShadow: 'var(--shadow-button)',
          textDecoration: 'none',
        }}
      >
        {isSales ? 'See plan comparison' : 'Explore Medallion Status'}
        <i className="ph-bold ph-arrow-right text-sm" />
      </Link>
    </div>
  )
}

// ── Form field ───────────────────────────────────────────────────────────────

function FormField({
  label,
  required,
  type = 'text',
  placeholder,
  value,
  onChange,
}: {
  label: string
  required?: boolean
  type?: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
        {label} {required && <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[var(--radius-l)] px-4"
        style={{
          height: '44px',
          border: '1px solid var(--color-neutral-10)',
          background: 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-15)',
          outline: 'none',
          color: 'var(--color-delta-blue-700)',
        }}
      />
    </div>
  )
}
