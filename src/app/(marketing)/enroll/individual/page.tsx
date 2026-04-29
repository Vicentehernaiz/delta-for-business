'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ── Plan catalog (5 options) ──────────────────────────────────────────────────

type PlanId = 'individual' | 'skymiles-only' | 'smb-flex' | 'corporate-pro' | 'enterprise-elite'

interface Plan {
  id: PlanId
  group: 'self-serve' | 'corporate'
  badge: string
  badgeIcon: string
  name: string
  short: string
  long: string
  formKind: 'self-serve' | 'sales'
  ctaLabel: string
  learnHref: string
  perks: { icon: string; text: string }[]
  programNote: { title: string; body: string }
}

const PLANS: Record<PlanId, Plan> = {
  individual: {
    id: 'individual',
    group: 'self-serve',
    badge: 'Solo · Free · No company needed',
    badgeIcon: 'ph-fill ph-user',
    name: 'Individual traveler',
    short: 'For solo business travelers — freelancers, consultants, or employees without a corporate program.',
    long: 'Join free with just your work email. Earn personal SkyMiles on every Delta flight, plus exclusive business partner perks — no employer signup, no company account.',
    formKind: 'self-serve',
    ctaLabel: 'Create my SkyMiles account',
    learnHref: '/programs/individual',
    perks: [
      { icon: 'ph-fill ph-airplane-tilt', text: 'Personal SkyMiles earning' },
      { icon: 'ph-fill ph-car', text: 'Hertz Business Rewards' },
      { icon: 'ph-fill ph-fingerprint', text: 'CLEAR Plus discount' },
      { icon: 'ph-fill ph-linkedin-logo', text: 'LinkedIn Premium offer' },
    ],
    programNote: {
      title: 'You\'re joining SkyMiles.',
      body: 'A personal Delta SkyMiles account is created (or linked, if you have one) — earn miles on every Delta flight starting day one. No company account, no employer needed.',
    },
  },
  'skymiles-only': {
    id: 'skymiles-only',
    group: 'self-serve',
    badge: 'Company pool · Free',
    badgeIcon: 'ph-fill ph-arrows-split',
    name: 'SkyMiles for Business only',
    short: 'Just open a company SkyMiles pool — no negotiated tier, no commitment.',
    long: 'Open a company-side SkyMiles pool that earns alongside your travelers\' personal SkyMiles. Upgrade to SMB Flex, Corporate Pro, or Enterprise Elite later when you\'re ready.',
    formKind: 'self-serve',
    ctaLabel: 'Open company SkyMiles pool',
    learnHref: '/skymiles',
    perks: [
      { icon: 'ph-fill ph-arrows-split', text: 'Dual mile earning' },
      { icon: 'ph-fill ph-buildings', text: 'Company miles pool' },
      { icon: 'ph-fill ph-arrow-up', text: 'Upgrade anytime' },
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'When you register the corporate account, Delta opens a company SkyMiles pool — no separate signup needed. Travelers keep their personal SkyMiles untouched.',
    },
  },
  'smb-flex': {
    id: 'smb-flex',
    group: 'corporate',
    badge: 'Free · 1–49 travelers OR up to $50K spend',
    badgeIcon: 'ph-fill ph-buildings',
    name: 'SMB Flex',
    short: 'For 1–49 travelers OR up to $50K/yr Delta spend. Company rewards pool, dual earning, partner perks — all free.',
    long: 'SMB Flex is Delta\'s free self-serve corporate program. Earn up to 10 company miles per dollar, manage travelers from a dashboard, and unlock partner perks from day one.',
    formKind: 'self-serve',
    ctaLabel: 'Create company account',
    learnHref: '/programs/business-traveler',
    perks: [
      { icon: 'ph-fill ph-trend-up', text: 'Up to 10 miles / $' },
      { icon: 'ph-fill ph-arrows-split', text: 'Dual earning' },
      { icon: 'ph-fill ph-chart-bar', text: 'Free dashboard' },
      { icon: 'ph-fill ph-gift', text: 'Partner perks' },
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'When you register a corporate account, Delta opens a company SkyMiles pool — no separate signup needed. Travelers earn dual miles from day one.',
    },
  },
  'corporate-pro': {
    id: 'corporate-pro',
    group: 'corporate',
    badge: '50–499 travelers OR $50K–$300K spend · Negotiated',
    badgeIcon: 'ph-fill ph-briefcase',
    name: 'Corporate Pro',
    short: 'For 50–499 travelers OR $50K–$300K/yr Delta spend. Dynamic fares, full Corporate Priority, dedicated account manager.',
    long: 'Negotiated agreement with discounted fares, full Corporate Priority benefits suite, and a dedicated Delta account manager. Concur / TMC integration included.',
    formKind: 'sales',
    ctaLabel: 'Request sales contact',
    learnHref: '/programs/enterprise',
    perks: [
      { icon: 'ph-fill ph-tag', text: 'Negotiated fares' },
      { icon: 'ph-fill ph-crown', text: 'Corporate Priority' },
      { icon: 'ph-fill ph-user-gear', text: 'Account manager' },
      { icon: 'ph-fill ph-link', text: 'Concur / TMC' },
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'When the Corporate Pro agreement is signed, Delta opens a company SkyMiles pool alongside the negotiated fares — no separate signup needed.',
    },
  },
  'enterprise-elite': {
    id: 'enterprise-elite',
    group: 'corporate',
    badge: '500+ travelers OR $300K+ spend · Enterprise',
    badgeIcon: 'ph-fill ph-globe-hemisphere-west',
    name: 'Enterprise Elite',
    short: 'For 500+ travelers OR $300K+/yr Delta spend. Custom pricing, global priority, full Delta Business Tool access.',
    long: 'Delta\'s top-tier managed travel program — custom pricing, partner airline coverage (AF, KLM, LATAM, Virgin Atlantic), unused ticket transfer, 24/7 Corporate Solutions, and full Delta Business Tool platform access.',
    formKind: 'sales',
    ctaLabel: 'Request sales contact',
    learnHref: '/programs/large-enterprise',
    perks: [
      { icon: 'ph-fill ph-globe-hemisphere-west', text: 'Global priority' },
      { icon: 'ph-fill ph-lightning', text: 'Delta Business Tool' },
      { icon: 'ph-fill ph-arrows-left-right', text: 'Ticket transfer' },
      { icon: 'ph-fill ph-headset', text: '24/7 support' },
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'Enterprise Elite includes a global SkyMiles pool, full Delta Business Tool access, and dedicated onboarding — no separate signup needed.',
    },
  },
}

const PLAN_ORDER: PlanId[] = ['individual', 'skymiles-only', 'smb-flex', 'corporate-pro', 'enterprise-elite']

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EnrollIndividualPage() {
  const [planId, setPlanId] = useState<PlanId>('individual')
  const plan = PLANS[planId]

  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [form, setForm] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    travelers: '',
    skymilesNumber: '',
    jobTitle: '',
  })

  const set = (f: string) => (v: string) => setForm((p) => ({ ...p, [f]: v }))
  const canStep1 = !!form.firstName && !!form.lastName && !!form.email
  const canSalesSubmit = canStep1 && !!form.company

  const switchPlan = (id: PlanId) => {
    setPlanId(id)
    setStep(1)
  }

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,460px)_1fr]"
      style={{ minHeight: 'calc(100vh - var(--nav-height))' }}
    >
      {/* ══════════════════════════════════════════════════════════════
          LEFT — Plan picker (5 options)
          ══════════════════════════════════════════════════════════════ */}
      <aside
        className="flex flex-col py-12 px-8 lg:px-12 overflow-y-auto"
        style={{
          background: 'linear-gradient(160deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 font-semibold"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.92)',
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className="ph-fill ph-buildings text-xs"></i>
            Choose how to join — all paths free to start
          </span>

          <h1
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              lineHeight: 1.2,
              marginBottom: '10px',
            }}
          >
            Pick a plan,<br />we&apos;ll set up the rest
          </h1>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.78)', marginBottom: '22px', lineHeight: 1.6 }}>
            Switch tiers any time once you&apos;re in. The form on the right adapts to whatever you select here.
          </p>
        </div>

        {/* Solo / SkyMiles-only group */}
        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-nav-section-title)',
            marginBottom: '8px',
            marginTop: '4px',
          }}
        >
          For individuals
        </p>
        <div className="space-y-2 mb-5">
          {(['individual', 'skymiles-only'] as PlanId[]).map((id) => (
            <PlanOption key={id} plan={PLANS[id]} active={planId === id} onSelect={() => switchPlan(id)} />
          ))}
        </div>

        {/* Corporate group */}
        <p
          style={{
            fontSize: 'var(--type-scale-11)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-nav-section-title)',
            marginBottom: '8px',
          }}
        >
          For companies
        </p>
        <div className="space-y-2 mb-6">
          {(['smb-flex', 'corporate-pro', 'enterprise-elite'] as PlanId[]).map((id) => (
            <PlanOption key={id} plan={PLANS[id]} active={planId === id} onSelect={() => switchPlan(id)} />
          ))}
        </div>

        {/* Footer help */}
        <div className="mt-auto pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>
            Not sure which fits?{' '}
            <Link
              href="/quiz"
              style={{ color: 'var(--color-nav-section-title)', textDecoration: 'underline', fontWeight: '600' }}
            >
              Take the 60-second quiz →
            </Link>
          </p>
        </div>
      </aside>

      {/* ══════════════════════════════════════════════════════════════
          RIGHT — Selected plan + form
          ══════════════════════════════════════════════════════════════ */}
      <section className="flex flex-col" style={{ background: 'var(--color-neutral-0)' }}>
        {/* Plan header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${planId}-header`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="px-8 lg:px-14 py-8"
            style={{ borderBottom: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)' }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 font-semibold"
              style={{
                background: 'var(--color-delta-blue-50)',
                color: 'var(--color-delta-blue-600)',
                fontSize: 'var(--type-scale-12)',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
              }}
            >
              <i className={`${plan.badgeIcon} text-xs`}></i>
              {plan.badge}
            </span>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h2
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-24))',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-700)',
                  marginBottom: '6px',
                }}
              >
                {plan.name}
              </h2>
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
                Learn more →
              </Link>
            </div>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '14px', lineHeight: 1.6 }}>
              {plan.long}
            </p>
            <div className="flex flex-wrap gap-2">
              {plan.perks.map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontSize: 'var(--type-scale-12)',
                    fontWeight: '600',
                    color: 'var(--color-delta-blue-600)',
                    background: 'var(--color-neutral-0)',
                    border: '1px solid var(--color-neutral-10)',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 10px',
                  }}
                >
                  <i className={`${p.icon} text-xs`}></i>
                  {p.text}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Form */}
        <div className="flex-1 flex justify-center py-10 px-8 lg:px-14">
          {step === 'done' ? (
            <DoneState plan={plan} firstName={form.firstName} email={form.email} />
          ) : (
            <div style={{ maxWidth: '460px', width: '100%' }}>
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

              {/* ── Bottom notes (program-specific + switch-plan reassurance) ── */}
              <div className="mt-6 space-y-3">
                <div
                  className="flex items-start gap-3 rounded-[var(--radius-l)] p-4"
                  style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-delta-blue-300)' }}
                >
                  <i className="ph-fill ph-lightning text-lg flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-blue-600)' }}></i>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-700)', lineHeight: 1.55 }}>
                    <strong>{plan.programNote.title}</strong> {plan.programNote.body}
                  </p>
                </div>
                <div
                  className="flex items-start gap-3 rounded-[var(--radius-l)] p-4"
                  style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
                >
                  <i className="ph-fill ph-arrows-clockwise text-lg flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-blue-600)' }}></i>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-700)', lineHeight: 1.55 }}>
                    <strong style={{ color: 'var(--color-delta-blue-700)' }}>Switch plans whenever.</strong>{' '}
                    You can move between Individual, SkyMiles for Business, SMB Flex, Corporate Pro and Enterprise Elite at any time after signup — your earnings and traveler list come with you.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Plan option (left list)
// ──────────────────────────────────────────────────────────────────────────────

function PlanOption({ plan, active, onSelect }: { plan: Plan; active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className="w-full text-left flex items-start gap-3 rounded-[var(--radius-l)] p-4 transition-all"
      style={{
        background: active ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.04)',
        border: active
          ? '1px solid var(--color-nav-section-title)'
          : '1px solid rgba(255,255,255,0.10)',
        boxShadow: active ? '0 0 0 3px rgba(238,143,154,0.18)' : 'none',
        cursor: 'pointer',
      }}
    >
      <i
        className={`${plan.badgeIcon} text-base flex-shrink-0 mt-0.5`}
        style={{ color: active ? 'var(--color-nav-section-title)' : 'rgba(255,255,255,0.78)' }}
      ></i>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              fontSize: 'var(--type-scale-11)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: active ? 'var(--color-nav-section-title)' : 'rgba(255,255,255,0.78)',
            }}
          >
            {plan.badge}
          </span>
        </div>
        <p style={{ fontSize: 'var(--type-scale-15)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '2px' }}>
          {plan.name}
        </p>
        <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.5 }}>
          {plan.short}
        </p>
      </div>
      <i
        className="ph-bold ph-arrow-right text-sm flex-shrink-0 mt-1"
        style={{
          color: active ? 'var(--color-nav-section-title)' : 'rgba(255,255,255,0.45)',
          transform: active ? 'translateX(2px)' : 'none',
          transition: 'transform 150ms ease',
        }}
      ></i>
    </button>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Self-serve form (Individual / SkyMiles only / SMB Flex)
// ──────────────────────────────────────────────────────────────────────────────

function SelfServeForm({
  plan,
  step,
  setStep,
  form,
  set,
  canStep1,
}: {
  plan: Plan
  step: 1 | 2 | 'done'
  setStep: (s: 1 | 2 | 'done') => void
  form: Record<string, string>
  set: (f: string) => (v: string) => void
  canStep1: boolean
}) {
  const isCompanyFlow = plan.id === 'skymiles-only' || plan.id === 'smb-flex'

  return (
    <div>
      {/* Step indicator */}
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => {
          const stepNum = step === 'done' ? 3 : step
          return (
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
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${plan.id}-${step}`}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.22 }}
        >
          {step === 1 ? (
            <div>
              <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '18px' }}>
                Create your account
              </h3>
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
              <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '18px' }}>
                Almost done
              </h3>
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
          }}
        >
          {step === 1 ? 'Continue →' : `${plan.ctaLabel} →`}
        </button>
      </div>

      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-500)', textAlign: 'center', marginTop: '14px' }}>
        Free to join · No credit card · Cancel any time
      </p>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Sales form (Corporate Pro / Enterprise Elite)
// ──────────────────────────────────────────────────────────────────────────────

function SalesForm({
  plan,
  setStep,
  form,
  set,
  canSubmit,
}: {
  plan: Plan
  setStep: (s: 1 | 2 | 'done') => void
  form: Record<string, string>
  set: (f: string) => (v: string) => void
  canSubmit: boolean
}) {
  return (
    <div>
      <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
        Talk to sales — {plan.name}
      </h3>
      <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', marginBottom: '18px', lineHeight: 1.6 }}>
        A Delta corporate account specialist will reach out within 1 business day to scope a tailored agreement.
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
            label="Approx. travelers"
            placeholder={plan.id === 'enterprise-elite' ? '500+' : '50–499'}
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

// ──────────────────────────────────────────────────────────────────────────────
// Done state
// ──────────────────────────────────────────────────────────────────────────────

function DoneState({ plan, firstName, email }: { plan: Plan; firstName: string; email: string }) {
  const isSales = plan.formKind === 'sales'
  return (
    <div className="text-center self-center" style={{ maxWidth: '420px' }}>
      <div
        className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
        style={{ background: 'var(--color-delta-red-50)' }}
      >
        <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
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
        }}
      >
        {isSales ? 'See plan comparison' : 'Explore Medallion Status'}
        <i className="ph-bold ph-arrow-right text-sm"></i>
      </Link>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Form field
// ──────────────────────────────────────────────────────────────────────────────

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
