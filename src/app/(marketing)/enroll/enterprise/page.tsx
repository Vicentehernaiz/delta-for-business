'use client'

import { useState } from 'react'
import { Nav } from '@/components/marketing/Nav'
import { Footer } from '@/components/marketing/Footer'
import Link from 'next/link'

const COMPANY_SIZES = ['50–200 travelers', '200–500 travelers', '500–1,000 travelers', '1,000+ travelers']
const SPEND_RANGES = ['$50,000–$150,000', '$150,000–$500,000', '$500,000–$2M', '$2M+']
const TMC_OPTIONS = ['Amex GBT', 'BCD Travel', 'CWT', 'FCM', 'Navan', 'Other', 'No TMC']

const CORP_BENEFITS = [
  { icon: 'ph-fill ph-tag', title: 'Negotiated fares', desc: 'Custom rates off published pricing for your routes' },
  { icon: 'ph-fill ph-crown', title: 'Corporate Priority', desc: 'Preferred seating, boarding, and upgrade priority' },
  { icon: 'ph-fill ph-user-gear', title: 'Dedicated account manager', desc: 'Single point of contact for all needs' },
  { icon: 'ph-fill ph-globe-hemisphere-west', title: 'Partner airline access', desc: 'AF, KLM, LATAM, Virgin Atlantic coverage' },
]

export default function EnrollEnterprisePage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    spend: '',
    tmc: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (f: keyof typeof form) => (v: string) => setForm((p) => ({ ...p, [f]: v }))

  const canSubmit = !!form.firstName && !!form.lastName && !!form.email && !!form.company && !!form.size

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)', background: 'var(--color-neutral-5)', minHeight: '80vh' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--nav-height))' }}>
          {/* Left panel */}
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
              Mid-market & Enterprise
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
              Talk to Delta Corporate Sales
            </h1>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>
              Our team typically responds within 1 business day. No commitment required for the first call.
            </p>

            <div className="space-y-4 mb-10">
              {CORP_BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    <i className={`${b.icon} text-xl`} style={{ color: 'var(--color-neutral-0)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)' }}>{b.title}</p>
                    <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-[var(--radius-l)] p-4 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <i className="ph-fill ph-clock text-xl" style={{ color: 'rgba(255,255,255,0.6)' }}></i>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.75)' }}>
                <strong style={{ color: 'var(--color-neutral-0)' }}>Typical response:</strong> 1 business day · First call is 30 minutes
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex items-center justify-center py-16 px-8">
            {submitted ? (
              <div className="text-center" style={{ maxWidth: '400px' }}>
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'var(--color-delta-red-50)' }}
                >
                  <i className="ph-fill ph-check-circle text-3xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
                </div>
                <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '12px' }}>
                  We'll be in touch
                </h2>
                <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginBottom: '8px' }}>
                  Thanks, <strong>{form.firstName}</strong>. Our corporate sales team will contact you at <strong>{form.email}</strong>.
                </p>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginBottom: '32px' }}>
                  Typical response time: 1 business day.
                </p>
                <Link
                  href="/programs/mid-market"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '48px',
                    padding: '0 24px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-delta-red-400)',
                    color: 'var(--color-neutral-0)',
                    fontSize: 'var(--type-scale-16)',
                    fontWeight: '600',
                  }}
                >
                  Explore program details
                  <i className="ph-bold ph-arrow-right text-sm"></i>
                </Link>
              </div>
            ) : (
              <div style={{ maxWidth: '440px', width: '100%' }}>
                <h2 style={{ fontSize: 'var(--type-scale-22)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>
                  Contact sales
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[{ label: 'First name', key: 'firstName', required: true }, { label: 'Last name', key: 'lastName', required: true }].map(({ label, key, required }) => (
                      <div key={key}>
                        <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                          {label}{required && <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>}
                        </label>
                        <input
                          type="text"
                          value={form[key as keyof typeof form]}
                          onChange={(e) => set(key as keyof typeof form)(e.target.value)}
                          className="w-full rounded-[var(--radius-l)] px-4"
                          style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none', color: 'var(--color-delta-blue-600)' }}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { label: 'Work email', key: 'email', type: 'email', required: true },
                    { label: 'Phone', key: 'phone', type: 'tel' },
                    { label: 'Company name', key: 'company', required: true },
                  ].map(({ label, key, type = 'text', required }) => (
                    <div key={key}>
                      <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                        {label}{required && <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>}
                      </label>
                      <input
                        type={type}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => set(key as keyof typeof form)(e.target.value)}
                        className="w-full rounded-[var(--radius-l)] px-4"
                        style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none', color: 'var(--color-delta-blue-600)' }}
                      />
                    </div>
                  ))}

                  {[
                    { label: 'Company size', key: 'size', options: COMPANY_SIZES, required: true },
                    { label: 'Annual travel spend', key: 'spend', options: SPEND_RANGES },
                    { label: 'Travel management company (TMC)', key: 'tmc', options: TMC_OPTIONS },
                  ].map(({ label, key, options, required }) => (
                    <div key={key}>
                      <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                        {label}{required && <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>}
                      </label>
                      <select
                        value={form[key as keyof typeof form]}
                        onChange={(e) => set(key as keyof typeof form)(e.target.value)}
                        className="w-full rounded-[var(--radius-l)] px-4"
                        style={{ height: '44px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none', appearance: 'none', color: form[key as keyof typeof form] ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-500)' }}
                      >
                        <option value="">Select…</option>
                        {options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '5px' }}>
                      Anything else? (optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set('message')(e.target.value)}
                      rows={3}
                      placeholder="Specific routes, integrations, or timing..."
                      className="w-full rounded-[var(--radius-l)] px-4 py-3 resize-none"
                      style={{ border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', outline: 'none', color: 'var(--color-delta-blue-600)' }}
                    />
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!canSubmit}
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: 'var(--radius-full)',
                      background: canSubmit ? 'var(--color-delta-red-400)' : 'var(--color-neutral-50)',
                      color: canSubmit ? 'var(--color-neutral-0)' : 'var(--color-neutral-400)',
                      fontSize: 'var(--type-scale-16)',
                      fontWeight: '600',
                      boxShadow: canSubmit ? 'var(--shadow-button)' : 'none',
                      cursor: canSubmit ? 'pointer' : 'not-allowed',
                    }}
                  >
                    Request a call →
                  </button>

                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', textAlign: 'center' }}>
                    No commitment · Free initial consultation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
