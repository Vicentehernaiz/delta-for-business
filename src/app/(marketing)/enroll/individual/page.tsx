'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type Benefit = { title: string; desc: string; icon?: string; img?: string }

const BENEFITS: Benefit[] = [
  { img: '/assets/images/logos/logo-hetz-png.png', title: 'Hertz Five Star status', desc: 'Skip the counter, free upgrades' },
  { icon: 'ph-fill ph-fingerprint', title: 'CLEAR Plus discount', desc: 'Expedited airport security — $119/yr' },
  { icon: 'ph-fill ph-buildings', title: 'Industrious coworking', desc: '$99/month (vs $149 retail)' },
  { icon: 'ph-fill ph-linkedin-logo', title: 'LinkedIn Premium', desc: 'Discounted access for business travelers' },
]

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
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--nav-height))' }}>
          {/* Left: benefits panel */}
          <div
            className="py-16 px-8 lg:px-16 flex flex-col justify-center"
            style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full mb-4 font-semibold self-start"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 'var(--type-scale-12)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Free · No employer needed
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-40))',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-neutral-0)',
                lineHeight: 'var(--line-height-heading-xl)',
                marginBottom: '12px',
              }}
            >
              Delta SMB Flex
            </h1>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
              Personal perks for solo business travelers. Free to join, instant access.
            </p>

            <div className="space-y-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.95)' }}
                  >
                    {b.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={b.img}
                        alt={b.title}
                        style={{ width: '70%', height: '70%', objectFit: 'contain' }}
                      />
                    ) : (
                      <i className={`${b.icon} text-xl`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
                    )}
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)' }}>
                      {b.title}
                    </p>
                    <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="flex items-center justify-center py-16 px-8">
            {step === 'done' ? (
              <div className="text-center" style={{ maxWidth: '400px' }}>
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'var(--color-delta-red-50)' }}
                >
                  <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
                </div>
                <h2
                  style={{
                    fontSize: 'var(--type-scale-28)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: 'var(--color-delta-blue-600)',
                    marginBottom: '12px',
                  }}
                >
                  You're in, {form.firstName}!
                </h2>
                <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '8px' }}>
                  Welcome to Delta SMB Flex.
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
                  Confirmation sent to <strong>{form.email}</strong>. Your benefits activate within 24 hours.
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
                    fontSize: 'var(--type-scale-16)',
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 1 ? (
                      <div>
                        <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>
                          Create your account
                        </h2>
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
                                  style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none' }}
                                />
                              </div>
                            ))}
                          </div>
                          {[
                            { label: 'Work email', key: 'email' as const, type: 'email', required: true },
                          ].map(({ label, key, type, required }) => (
                            <div key={key}>
                              <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                                {label} {required && <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>}
                              </label>
                              <input
                                type={type}
                                value={form[key]}
                                onChange={(e) => set(key)(e.target.value)}
                                className="w-full rounded-[var(--radius-l)] px-4"
                                style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none' }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>
                          Almost done
                        </h2>
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
                                style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none', color: 'var(--color-delta-blue-600)' }}
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
                        fontSize: 'var(--type-scale-16)',
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
                      fontSize: 'var(--type-scale-16)',
                      fontWeight: '600',
                      boxShadow: step === 1 && !canStep1 ? 'none' : 'var(--shadow-button)',
                    }}
                  >
                    {step === 1 ? 'Continue →' : 'Create account →'}
                  </button>
                </div>

                <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', textAlign: 'center', marginTop: '16px' }}>
                  Free to join · No credit card · Cancel any time
                </p>
              </div>
            )}
          </div>
        </div>
    </>
  )
}
