'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnrollIndividualPage() {
  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    skymilesNumber: '',
    company: '',
    jobTitle: '',
  })

  const set = (f: keyof typeof form) => (v: string) => setForm((p) => ({ ...p, [f]: v }))
  const canStep1 = !!form.firstName && !!form.lastName && !!form.email

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ minHeight: 'calc(100vh - var(--nav-height))' }}
    >
      {/* ── LEFT: Corporate account panel ─────────────────────── */}
      <div
        className="flex flex-col justify-between py-12 px-8 lg:px-14"
        style={{
          background: 'linear-gradient(160deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-6 font-semibold"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'var(--type-scale-12)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            <i className="ph-fill ph-buildings text-xs"></i>
            Corporate · Free to start
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              lineHeight: 1.2,
              marginBottom: '10px',
            }}
          >
            Delta for Business<br />corporate account
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.72)', marginBottom: '28px', lineHeight: 1.6 }}>
            One account for your whole company. Earn company miles, manage travelers, and unlock negotiated benefits as your team grows.
          </p>

          {/* Auto SkyMiles note */}
          <div
            className="flex items-start gap-3 rounded-[var(--radius-l)] p-4 mb-8"
            style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.16)' }}
          >
            <i className="ph-fill ph-lightning text-lg flex-shrink-0 mt-0.5" style={{ color: 'var(--color-delta-red-400)' }}></i>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--color-neutral-0)' }}>SkyMiles for Business is created automatically.</strong>{' '}
              When you register a corporate account, Delta opens a company SkyMiles pool — no separate signup needed.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-3 mb-8">
            {[
              {
                badge: 'Free · Self-serve',
                name: 'SMB Flex',
                desc: 'For 1–49 travelers. Company rewards pool, dual earning, partner perks.',
                href: '/programs/business-traveler',
                highlight: true,
              },
              {
                badge: '$50K+ spend · Negotiated',
                name: 'Corporate Pro',
                desc: 'For 50–499 travelers. Dynamic fares, seat pools, account manager.',
                href: '/programs/enterprise',
                highlight: false,
              },
              {
                badge: '$300K+ spend · Enterprise',
                name: 'Enterprise Elite',
                desc: 'For 500+ travelers. Custom pricing, global priority, Delta Business Tool.',
                href: '/programs/large-enterprise',
                highlight: false,
              },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="flex items-start justify-between gap-3 rounded-[var(--radius-l)] p-4 group"
                style={{
                  background: p.highlight ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                  border: p.highlight ? '1px solid rgba(255,255,255,0.22)' : '1px solid rgba(255,255,255,0.10)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      style={{
                        fontSize: 'var(--type-scale-11)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: p.highlight ? 'var(--color-nav-section-title)' : 'rgba(255,255,255,0.78)',
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '2px' }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>
                <i className="ph-bold ph-arrow-right text-sm flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" style={{ color: 'rgba(255,255,255,0.7)' }}></i>
              </Link>
            ))}
          </div>
        </div>

        {/* Corporate CTA */}
        <div className="flex flex-col gap-3">
          <Link
            href="/enroll/small-business"
            className="flex items-center justify-center gap-2 font-semibold"
            style={{
              height: '52px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
              textDecoration: 'none',
            }}
          >
            <i className="ph-bold ph-buildings text-sm"></i>
            Create corporate account
          </Link>
          <Link
            href="/enroll/enterprise"
            className="flex items-center justify-center gap-2 font-semibold"
            style={{
              height: '44px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'var(--type-scale-14)',
              textDecoration: 'none',
            }}
          >
            Corporate Pro / Enterprise Elite — contact sales
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Individual SkyMiles for Business ───────────── */}
      <div className="flex flex-col" style={{ background: 'var(--color-neutral-0)' }}>
        {/* Top info strip */}
        <div
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
            <i className="ph-fill ph-user text-xs"></i>
            Individual · Free · No employer needed
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-24))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '6px',
            }}
          >
            SkyMiles for Business
          </h2>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '14px', lineHeight: 1.6 }}>
            For solo business travelers. Earn personal SkyMiles + access business partner perks — no company account required.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: 'ph-fill ph-arrows-split', text: 'Dual mile earning' },
              { icon: 'ph-fill ph-car', text: 'Hertz Five Star' },
              { icon: 'ph-fill ph-fingerprint', text: 'CLEAR Plus' },
              { icon: 'ph-fill ph-linkedin-logo', text: 'LinkedIn Premium' },
            ].map((b) => (
              <span
                key={b.text}
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
                <i className={`${b.icon} text-xs`}></i>
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Enrollment form */}
        <div className="flex-1 flex items-center justify-center py-10 px-8 lg:px-14">
          {step === 'done' ? (
            <div className="text-center" style={{ maxWidth: '400px' }}>
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
                You&apos;re in, {form.firstName}!
              </h3>
              <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', marginBottom: '6px' }}>
                Welcome to Delta SkyMiles for Business.
              </p>
              <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '28px' }}>
                Confirmation sent to <strong>{form.email}</strong>. Benefits activate within 24 hours.
              </p>
              <Link
                href="/medallion"
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
                Explore Medallion Status
                <i className="ph-bold ph-arrow-right text-sm"></i>
              </Link>
            </div>
          ) : (
            <div style={{ maxWidth: '400px', width: '100%' }}>
              {/* Step indicator */}
              <div className="flex gap-2 mb-6">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className="flex-1 rounded-full"
                    style={{
                      height: '4px',
                      background:
                        s < step
                          ? 'var(--color-delta-blue-600)'
                          : s === step
                          ? 'var(--color-delta-red-400)'
                          : 'var(--color-neutral-10)',
                    }}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
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
                          {[
                            { label: 'First name', key: 'firstName' as const },
                            { label: 'Last name', key: 'lastName' as const },
                          ].map(({ label, key }) => (
                            <div key={key}>
                              <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                                {label} <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>
                              </label>
                              <input
                                type="text"
                                value={form[key]}
                                onChange={(e) => set(key)(e.target.value)}
                                className="w-full rounded-[var(--radius-l)] px-4"
                                style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', outline: 'none', color: 'var(--color-delta-blue-700)' }}
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                            Work email <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => set('email')(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full rounded-[var(--radius-l)] px-4"
                            style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', outline: 'none', color: 'var(--color-delta-blue-700)' }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 style={{ fontSize: 'var(--type-scale-20)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '18px' }}>
                        Almost done
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: 'SkyMiles number (optional)', key: 'skymilesNumber' as const, placeholder: 'Leave blank to create new' },
                          { label: 'Company', key: 'company' as const, placeholder: 'Your employer' },
                          { label: 'Job title', key: 'jobTitle' as const, placeholder: 'e.g. Account Executive' },
                        ].map(({ label, key, placeholder }) => (
                          <div key={key}>
                            <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                              {label}
                            </label>
                            <input
                              type="text"
                              value={form[key]}
                              onChange={(e) => set(key)(e.target.value)}
                              placeholder={placeholder}
                              className="w-full rounded-[var(--radius-l)] px-4"
                              style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-15)', outline: 'none', color: 'var(--color-delta-blue-700)' }}
                            />
                          </div>
                        ))}
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
                  {step === 1 ? 'Continue →' : 'Create account →'}
                </button>
              </div>

              <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', textAlign: 'center', marginTop: '14px' }}>
                Free to join · No credit card · Cancel any time
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
