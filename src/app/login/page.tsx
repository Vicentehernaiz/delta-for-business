'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (f: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [f]: e.target.value }))

  const canSubmit = !!form.email && !!form.password

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError('')
    // Simulate auth — any valid email/password works in this prototype
    await new Promise((r) => setTimeout(r, 900))
    if (form.password.length < 6) {
      setError('Incorrect email or password. Please try again.')
      setLoading(false)
      return
    }
    router.push('/account/dashboard')
  }

  return (
    <div
      className="min-h-screen flex"
      style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
    >
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[480px] flex-shrink-0 p-12">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
            alt="Delta for Business"
            style={{ height: '36px', width: 'auto' }}
          />
        </Link>

        <div>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 2.5vw, var(--type-scale-40))',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-neutral-0)',
              lineHeight: 'var(--line-height-heading-xl)',
              marginBottom: '16px',
            }}
          >
            Manage your team's travel from one place.
          </h1>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Track miles, manage travelers, view spend reports, and redeem eCredits — all in your Delta for Business dashboard.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: 'ph-fill ph-chart-bar', label: 'Spend & miles reporting' },
              { icon: 'ph-fill ph-users', label: 'Traveler roster management' },
              { icon: 'ph-fill ph-wallet', label: 'eCredit wallet' },
              { icon: 'ph-fill ph-trend-up', label: 'Tier progress tracker' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <i className={`${item.icon} text-base`} style={{ color: 'rgba(255,255,255,0.9)' }}></i>
                </div>
                <span style={{ fontSize: 'var(--type-scale-15)', color: 'rgba(255,255,255,0.82)', fontWeight: '500' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Delta Air Lines, Inc.
        </p>
      </div>

      {/* Right panel — form */}
      <div
        className="flex-1 flex items-center justify-center p-6 lg:p-12"
        style={{ background: 'var(--color-neutral-0)', borderRadius: '0' }}
      >
        <div style={{ maxWidth: '400px', width: '100%' }}>
          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
                alt="Delta for Business"
                style={{ height: '28px', width: 'auto' }}
              />
            </Link>
          </div>

          <h2
            style={{
              fontSize: 'var(--type-scale-28)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-700)',
              marginBottom: '6px',
            }}
          >
            Welcome back
          </h2>
          <p style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-500)', marginBottom: '32px' }}>
            Sign in to your Delta for Business account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '6px' }}
              >
                Work email <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@company.com"
                required
                className="w-full rounded-[var(--radius-l)] px-4 transition-colors"
                style={{
                  height: '48px',
                  border: '1.5px solid var(--color-neutral-10)',
                  background: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  color: 'var(--color-delta-blue-700)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  style={{ fontSize: 'var(--type-scale-13)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}
                >
                  Password <span style={{ color: 'var(--color-delta-red-400)' }}>*</span>
                </label>
                <button
                  type="button"
                  style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-400)', fontWeight: '500', textDecoration: 'underline', textUnderlineOffset: '2px' }}
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={form.password}
                onChange={set('password')}
                placeholder="••••••••"
                required
                className="w-full rounded-[var(--radius-l)] px-4 transition-colors"
                style={{
                  height: '48px',
                  border: '1.5px solid var(--color-neutral-10)',
                  background: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  color: 'var(--color-delta-blue-700)',
                  outline: 'none',
                }}
              />
            </div>

            {error && (
              <div
                className="flex items-center gap-2 rounded-[var(--radius-l)] px-4 py-3"
                style={{ background: 'var(--color-delta-red-50)', border: '1px solid rgba(192,25,51,0.15)' }}
              >
                <i className="ph-fill ph-warning text-base flex-shrink-0" style={{ color: 'var(--color-delta-red-400)' }}></i>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-red-400)' }}>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit || loading}
              className="w-full flex items-center justify-center gap-2 font-semibold transition-opacity"
              style={{
                height: '52px',
                borderRadius: 'var(--radius-full)',
                background: canSubmit && !loading ? 'var(--color-delta-red-400)' : 'var(--color-neutral-50)',
                color: canSubmit && !loading ? 'var(--color-neutral-0)' : 'var(--color-neutral-400)',
                fontSize: 'var(--type-scale-16)',
                boxShadow: canSubmit && !loading ? 'var(--shadow-button)' : 'none',
                cursor: canSubmit && !loading ? 'pointer' : 'not-allowed',
              }}
            >
              {loading ? (
                <>
                  <i className="ph-bold ph-circle-notch text-base animate-spin"></i>
                  Signing in…
                </>
              ) : (
                <>
                  Sign in
                  <i className="ph-bold ph-arrow-right text-sm"></i>
                </>
              )}
            </button>
          </form>

          <div
            className="flex items-center gap-3 my-6"
            style={{ color: 'var(--color-neutral-200)' }}
          >
            <div style={{ flex: 1, height: '1px', background: 'var(--color-neutral-10)' }} />
            <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', whiteSpace: 'nowrap' }}>
              New to Delta for Business?
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-neutral-10)' }} />
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/enroll/small-business"
              className="w-full flex items-center justify-center gap-2 font-semibold"
              style={{
                height: '48px',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--color-delta-blue-700)',
                color: 'var(--color-delta-blue-700)',
                fontSize: 'var(--type-scale-15)',
              }}
            >
              Create a free account
            </Link>
            <Link
              href="/enroll/enterprise"
              className="w-full flex items-center justify-center gap-2"
              style={{
                height: '40px',
                fontSize: 'var(--type-scale-14)',
                color: 'var(--color-neutral-500)',
                fontWeight: '500',
              }}
            >
              Enterprise? Contact sales →
            </Link>
          </div>

          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-300)', textAlign: 'center', marginTop: '24px' }}>
            By signing in you agree to Delta's{' '}
            <Link href="/resources/program-terms" style={{ color: 'var(--color-delta-blue-400)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              Terms of Service
            </Link>{' '}
            and{' '}
            <a href="#" style={{ color: 'var(--color-delta-blue-400)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
