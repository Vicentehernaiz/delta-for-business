'use client'

import { useState } from 'react'
import Link from 'next/link'
import { mockCompany, mockAdminUser } from '@/lib/api/mock-data'

interface StepProps {
  onNext: () => void
  onBack?: () => void
}

function StepCompany({ onNext }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'var(--color-delta-blue-50)' }}
        >
          <i className="ph-fill ph-buildings text-3xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
        </div>
        <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
          Your account is confirmed
        </h2>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '6px' }}>
          Here's what we set up for {mockCompany.name}
        </p>
      </div>

      <div className="space-y-3">
        {[
          { icon: 'ph-fill ph-check-circle', label: 'Business account created', value: `ID: ${mockCompany.businessId}`, color: 'var(--color-success)' },
          { icon: 'ph-fill ph-medal', label: 'Starting tier', value: 'Member — upgrades automatically as you spend', color: 'var(--color-delta-blue-600)' },
          { icon: 'ph-fill ph-user-circle', label: 'Primary admin', value: `${mockAdminUser.name} (${mockAdminUser.email})`, color: 'var(--color-delta-blue-600)' },
          { icon: 'ph-fill ph-currency-dollar', label: 'Earning rate', value: '5 miles per $1 on all Delta flights · 10 miles/$1 in premium cabins', color: 'var(--color-delta-red-400)' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-4 rounded-[var(--radius-l)]"
            style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
          >
            <i className={`${item.icon} text-xl flex-shrink-0`} style={{ color: item.color }}></i>
            <div>
              <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{item.label}</p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-full font-semibold inline-flex items-center justify-center gap-2"
        style={{ height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
      >
        Next: Link travelers
        <i className="ph-bold ph-arrow-right text-sm"></i>
      </button>
    </div>
  )
}

function StepTravelers({ onNext, onBack }: StepProps) {
  const [emails, setEmails] = useState('')
  const [added, setAdded] = useState<string[]>([])

  const handleAdd = () => {
    const list = emails.split(/[\n,;]+/).map((e) => e.trim()).filter(Boolean)
    setAdded((prev) => [...new Set([...prev, ...list])])
    setEmails('')
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'var(--color-delta-blue-50)' }}
        >
          <i className="ph-fill ph-users text-3xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
        </div>
        <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
          Invite your travelers
        </h2>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '6px' }}>
          Each traveler links their SkyMiles number to your company account. They keep their personal miles — you earn company miles on the same flights.
        </p>
      </div>

      <div
        className="p-4 rounded-[var(--radius-l)]"
        style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-neutral-10)' }}
      >
        <p style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>
          How dual-earn works
        </p>
        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
          When a traveler books a flight and provides their SkyMiles number, Delta automatically splits the miles earned: personal miles go to their account, company miles go to yours. No change to how employees book — just add them to your roster.
        </p>
      </div>

      <div>
        <label style={{ fontSize: 'var(--type-scale-13)', fontWeight: '700', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '6px' }}>
          Enter work email addresses (comma or line-separated)
        </label>
        <textarea
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          placeholder="j.doe@company.com, a.patel@company.com..."
          rows={3}
          className="w-full rounded-[var(--radius-l)] px-3 py-2"
          style={{ border: '1px solid var(--color-neutral-10)', fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', outline: 'none', resize: 'none', background: 'var(--color-neutral-0)' }}
        />
        <button
          onClick={handleAdd}
          className="mt-2 font-semibold inline-flex items-center gap-2"
          style={{ height: '36px', padding: '0 16px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}
        >
          <i className="ph-bold ph-plus text-xs"></i>
          Add to list
        </button>
      </div>

      {added.length > 0 && (
        <div className="space-y-2">
          <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', color: 'var(--color-neutral-600)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Queued ({added.length})
          </p>
          {added.map((email) => (
            <div
              key={email}
              className="flex items-center justify-between px-3 py-2 rounded-[var(--radius-l)]"
              style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
            >
              <span style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)' }}>{email}</span>
              <button onClick={() => setAdded((a) => a.filter((e) => e !== email))}>
                <i className="ph ph-x text-sm" style={{ color: 'var(--color-neutral-400)' }}></i>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="font-semibold"
          style={{ height: '48px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-16)', border: '1px solid var(--color-neutral-10)' }}
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 font-semibold inline-flex items-center justify-center gap-2"
          style={{ height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
        >
          {added.length > 0 ? `Send ${added.length} invite${added.length > 1 ? 's' : ''}` : 'Skip for now'}
          <i className="ph-bold ph-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  )
}

function StepBooking({ onNext, onBack }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'var(--color-delta-blue-50)' }}
        >
          <i className="ph-fill ph-airplane-takeoff text-3xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
        </div>
        <h2 style={{ fontSize: 'var(--type-scale-22)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
          Your first booking guide
        </h2>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '6px' }}>
          Three things to do to start earning company miles immediately
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            step: '1',
            title: 'Share your Business ID with travelers',
            body: `Tell travelers to add ${mockCompany.businessId} in their SkyMiles profile under "Business travel." This links their future bookings to your account automatically.`,
            icon: 'ph-identification-card',
          },
          {
            step: '2',
            title: 'Book on delta.com or the Fly Delta app',
            body: 'Travelers enter their SkyMiles number at booking — miles are allocated automatically. No codes needed, no separate booking portal required.',
            icon: 'ph-device-mobile',
          },
          {
            step: '3',
            title: 'Watch miles accrue in your dashboard',
            body: 'Miles appear within 3–5 days of flight completion. Use this dashboard to track, convert to eCredits, and transfer to employees.',
            icon: 'ph-chart-line-up',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="flex gap-4 p-4 rounded-[var(--radius-l)]"
            style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontWeight: '700', fontSize: 'var(--type-scale-14)' }}
            >
              {item.step}
            </div>
            <div>
              <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', marginBottom: '4px' }}>{item.title}</p>
              <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="font-semibold"
          style={{ height: '48px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-neutral-5)', color: 'var(--color-delta-blue-700)', fontSize: 'var(--type-scale-16)', border: '1px solid var(--color-neutral-10)' }}
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 font-semibold inline-flex items-center justify-center gap-2"
          style={{ height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
        >
          Go to dashboard
          <i className="ph-bold ph-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  )
}

function StepComplete() {
  return (
    <div className="space-y-6 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
        style={{ background: 'rgba(5,150,105,0.1)' }}
      >
        <i className="ph-fill ph-check-circle text-5xl" style={{ color: 'var(--color-success)' }}></i>
      </div>
      <div>
        <h2 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '8px' }}>
          You're all set!
        </h2>
        <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)' }}>
          {mockCompany.name} is enrolled in SkyMiles for Business. Start booking flights to earn company miles.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Miles balance', value: '0', icon: 'ph-fill ph-airplane' },
          { label: 'Current tier', value: 'Member', icon: 'ph-fill ph-medal' },
          { label: 'Travelers', value: '0 linked', icon: 'ph-fill ph-users' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[var(--radius-l)] p-4"
            style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
          >
            <i className={`${stat.icon} text-2xl`} style={{ color: 'var(--color-delta-blue-600)' }}></i>
            <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginTop: '6px' }}>{stat.value}</p>
            <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <Link
        href="/account/dashboard"
        className="w-full font-semibold inline-flex items-center justify-center gap-2"
        style={{ height: '52px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)', display: 'flex' }}
      >
        <i className="ph-bold ph-layout text-sm"></i>
        Go to my dashboard
      </Link>
    </div>
  )
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const stepLabels = ['Company confirmed', 'Invite travelers', 'First booking', 'All set!']

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'var(--color-neutral-5)' }}>
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <i className="ph-fill ph-airplane text-2xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
            <span style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>Delta for Business</span>
          </div>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>Account setup</p>
        </div>

        {/* Card */}
        <div
          className="rounded-[var(--radius-l)] p-8"
          style={{ background: 'var(--color-neutral-0)', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid var(--color-neutral-10)' }}
        >
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              {stepLabels.map((label, idx) => (
                <span
                  key={label}
                  style={{
                    fontSize: 'var(--type-scale-11)',
                    fontWeight: idx + 1 <= step ? '700' : '400',
                    color: idx + 1 <= step ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-400)',
                    textAlign: 'center',
                    flex: 1,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-1.5 flex-1 rounded-full transition-all"
                  style={{ background: idx + 1 <= step ? 'var(--color-delta-red-400)' : 'var(--color-neutral-10)' }}
                />
              ))}
            </div>
          </div>

          {/* Step content */}
          {step === 1 && <StepCompany onNext={() => setStep(2)} />}
          {step === 2 && <StepTravelers onNext={() => setStep(3)} onBack={() => setStep(1)} />}
          {step === 3 && <StepBooking onNext={() => setStep(4)} onBack={() => setStep(2)} />}
          {step === 4 && <StepComplete />}
        </div>

        {step < 4 && (
          <p className="text-center mt-6" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-400)' }}>
            Step {step} of {totalSteps - 1} ·{' '}
            <Link href="/account/dashboard" style={{ color: 'var(--color-delta-blue-600)' }}>
              Skip setup
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
