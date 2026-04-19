'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Nav } from '@/components/marketing/Nav'
import { Footer } from '@/components/marketing/Footer'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ── Form state ────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1: Company info
  companyName: string
  industry: string
  website: string
  // Step 2: Admin contact
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  // Step 3: Travel profile
  travelersCount: string
  annualSpend: string
  primaryRoutes: string
  // Step 4: SkyMiles setup
  companyMilesNumber: string
  // Step 5: Confirm
}

const defaultForm: FormData = {
  companyName: '',
  industry: '',
  website: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  jobTitle: '',
  travelersCount: '',
  annualSpend: '',
  primaryRoutes: '',
  companyMilesNumber: '',
}

const STEPS = [
  { label: 'Company', icon: 'ph-fill ph-buildings' },
  { label: 'Contact', icon: 'ph-fill ph-user' },
  { label: 'Travel', icon: 'ph-fill ph-airplane' },
  { label: 'SkyMiles', icon: 'ph-fill ph-trend-up' },
  { label: 'Confirm', icon: 'ph-fill ph-check-circle' },
]

const INDUSTRIES = ['Technology', 'Finance', 'Healthcare', 'Consulting', 'Manufacturing', 'Media', 'Retail', 'Education', 'Other']
const SPEND_RANGES = ['Under $5,000', '$5,000–$25,000', '$25,000–$50,000', '$50,000–$150,000', '$150,000–$300,000']
const TRAVELER_RANGES = ['1–5', '6–15', '16–30', '31–50']

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEPS.map((s, i) => {
        const active = i + 1 === step
        const done = i + 1 < step
        return (
          <div key={s.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
                style={{
                  background: done
                    ? 'var(--color-delta-blue-600)'
                    : active
                    ? 'var(--color-delta-red-400)'
                    : 'var(--color-neutral-10)',
                  boxShadow: active ? '0 0 0 4px rgba(192,25,51,0.12)' : 'none',
                }}
              >
                <i
                  className={`${done ? 'ph-fill ph-check' : s.icon} text-base`}
                  style={{ color: done || active ? 'var(--color-neutral-0)' : 'var(--color-neutral-400)' }}
                ></i>
              </div>
              <p
                style={{
                  fontSize: 'var(--type-scale-12)',
                  fontWeight: active || done ? '700' : '400',
                  color: active
                    ? 'var(--color-delta-red-400)'
                    : done
                    ? 'var(--color-delta-blue-600)'
                    : 'var(--color-neutral-400)',
                  marginTop: '4px',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.label}
              </p>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="flex-1 mx-2"
                style={{
                  height: '2px',
                  background: done ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-10)',
                  marginBottom: '20px',
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '6px' }}>
        {label}{required && <span style={{ color: 'var(--color-delta-red-400)' }}> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-[var(--radius-l)] px-4 transition-colors"
        style={{
          height: '44px',
          border: '1px solid var(--color-neutral-10)',
          background: 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-16)',
          color: 'var(--color-delta-blue-600)',
          outline: 'none',
        }}
      />
    </div>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  required?: boolean
}) {
  return (
    <div>
      <label style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '6px' }}>
        {label}{required && <span style={{ color: 'var(--color-delta-red-400)' }}> *</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-[var(--radius-l)] px-4"
        style={{
          height: '44px',
          border: '1px solid var(--color-neutral-10)',
          background: 'var(--color-neutral-0)',
          fontSize: 'var(--type-scale-16)',
          color: value ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-500)',
          outline: 'none',
          appearance: 'none',
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

function NavButtons({
  step,
  totalSteps,
  onBack,
  onNext,
  canNext,
}: {
  step: number
  totalSteps: number
  onBack: () => void
  onNext: () => void
  canNext: boolean
}) {
  const isLast = step === totalSteps
  return (
    <div className="flex gap-3 mt-8">
      {step > 1 && (
        <button
          onClick={onBack}
          className="flex-1 font-semibold"
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
        {isLast ? 'Create account →' : 'Continue →'}
      </button>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function EnrollSMBPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormData) => (v: string) => setForm((f) => ({ ...f, [field]: v }))

  const canNext: Record<number, boolean> = {
    1: !!form.companyName && !!form.industry,
    2: !!form.firstName && !!form.lastName && !!form.email,
    3: !!form.travelersCount && !!form.annualSpend,
    4: true,
    5: true,
  }

  const handleNext = () => {
    if (step === STEPS.length) {
      setSubmitted(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', background: 'var(--color-neutral-5)' }}>
          <div className="flex items-center justify-center py-20 px-6">
            <div
              className="rounded-[var(--radius-l)] p-12 text-center"
              style={{
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-10)',
                boxShadow: 'var(--shadow-card)',
                maxWidth: '480px',
                width: '100%',
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'var(--color-delta-red-50)' }}
              >
                <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
              </div>
              <h1
                style={{
                  fontSize: 'var(--type-scale-28)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-delta-blue-600)',
                  marginBottom: '12px',
                }}
              >
                Account created!
              </h1>
              <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '8px' }}>
                Welcome to SkyMiles for Business, <strong>{form.firstName}</strong>.
              </p>
              <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
                A confirmation email has been sent to <strong>{form.email}</strong>. Your Business ID will arrive within 24 hours.
              </p>
              <Link
                href="/account/dashboard"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold"
                style={{
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                Go to dashboard
                <i className="ph-bold ph-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', background: 'var(--color-neutral-5)' }}>
        {/* Hero strip */}
        <section
          className="py-10"
          style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
        >
          <div className="mx-auto px-6 lg:px-8 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-28))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-neutral-0)',
                marginBottom: '6px',
              }}
            >
              Enroll in SkyMiles for Business
            </h1>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)' }}>
              Free to join. Takes 3 minutes. Company and employee miles start with your next flight.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '640px' }}>
            <ProgressBar step={step} />

            <div
              className="rounded-[var(--radius-l)] p-8"
              style={{
                background: 'var(--color-neutral-0)',
                border: '1px solid var(--color-neutral-10)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 1 && (
                    <div>
                      <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        Your company
                      </h2>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
                        This is how your account will be registered with Delta.
                      </p>
                      <div className="space-y-5">
                        <InputField label="Company name" value={form.companyName} onChange={set('companyName')} placeholder="Acme Corp" required />
                        <SelectField label="Industry" value={form.industry} onChange={set('industry')} options={INDUSTRIES} required />
                        <InputField label="Company website" type="url" value={form.website} onChange={set('website')} placeholder="https://yourcompany.com" />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        Primary admin contact
                      </h2>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
                        This person will manage the account and receive billing notifications.
                      </p>
                      <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <InputField label="First name" value={form.firstName} onChange={set('firstName')} required />
                          <InputField label="Last name" value={form.lastName} onChange={set('lastName')} required />
                        </div>
                        <InputField label="Work email" type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" required />
                        <InputField label="Phone (optional)" type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" />
                        <InputField label="Job title" value={form.jobTitle} onChange={set('jobTitle')} placeholder="Director of Operations" />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        Travel profile
                      </h2>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
                        This helps us calculate your earning rate and tier qualification.
                      </p>
                      <div className="space-y-5">
                        <SelectField label="Number of travelers" value={form.travelersCount} onChange={set('travelersCount')} options={TRAVELER_RANGES} required />
                        <SelectField label="Annual airfare spend" value={form.annualSpend} onChange={set('annualSpend')} options={SPEND_RANGES} required />
                        <InputField label="Primary routes (optional)" value={form.primaryRoutes} onChange={set('primaryRoutes')} placeholder="e.g. NYC-LAX, ATL-ORD" />
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        Existing SkyMiles account
                      </h2>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
                        Link an existing SkyMiles number for your company account, or we'll create one.
                      </p>
                      <div className="space-y-5">
                        <InputField
                          label="SkyMiles number (optional)"
                          value={form.companyMilesNumber}
                          onChange={set('companyMilesNumber')}
                          placeholder="Leave blank to create a new one"
                        />
                        <div
                          className="rounded-[var(--radius-l)] p-4 flex items-start gap-3"
                          style={{ background: 'var(--color-delta-blue-50)', border: '1px solid rgba(0,51,102,0.12)' }}
                        >
                          <i className="ph-fill ph-info text-xl flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-blue-600)' }}></i>
                          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)' }}>
                            Company miles are earned in a <strong>separate pool</strong> from your personal SkyMiles account. Both earn on every flight.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div>
                      <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '6px' }}>
                        Review and confirm
                      </h2>
                      <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '24px' }}>
                        Everything looks correct? Hit "Create account" to get started.
                      </p>

                      {/* Summary */}
                      <div className="space-y-3 mb-6">
                        {[
                          { label: 'Company', value: form.companyName || '—' },
                          { label: 'Industry', value: form.industry || '—' },
                          { label: 'Admin', value: `${form.firstName} ${form.lastName}` || '—' },
                          { label: 'Email', value: form.email || '—' },
                          { label: 'Travelers', value: form.travelersCount || '—' },
                          { label: 'Annual spend', value: form.annualSpend || '—' },
                        ].map((row) => (
                          <div
                            key={row.label}
                            className="flex justify-between py-2"
                            style={{ borderBottom: '1px solid var(--color-neutral-5)' }}
                          >
                            <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>{row.label}</span>
                            <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{row.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Terms */}
                      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
                        By creating an account you agree to the{' '}
                        <Link href="/resources/program-terms" style={{ color: 'var(--color-delta-blue-300)', textDecoration: 'underline' }}>
                          SkyMiles for Business terms
                        </Link>.
                        Free to join, no minimum spend.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <NavButtons
                step={step}
                totalSteps={STEPS.length}
                onBack={() => setStep((s) => s - 1)}
                onNext={handleNext}
                canNext={canNext[step] ?? true}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
