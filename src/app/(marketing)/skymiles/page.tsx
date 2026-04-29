import type { Metadata } from 'next'
import Link from 'next/link'
import { smbTiers } from '@/config/smb-tiers'
import { airlinePartners } from '@/config/partners'

export const metadata: Metadata = {
  title: 'Delta SkyMiles for Business | Earn Miles for Your Company & Employees',
  description:
    "SkyMiles for Business lets your company and every employee earn miles on the same flight — simultaneously. Double-earn, free to join, instant activation.",
  openGraph: {
    title: 'Delta SkyMiles for Business',
    description: 'Your company earns. Your employees earn. Same flight.',
    images: ['/og/skymiles.png'],
  },
  alternates: { canonical: 'https://business.delta.com/skymiles' },
}

const subPages = [
  { href: '/skymiles/how-it-works', icon: 'ph-fill ph-info', label: 'How it works', desc: 'Step-by-step setup and the dual-earn mechanics' },
  { href: '/skymiles/earning', icon: 'ph-fill ph-trend-up', label: 'Earning miles', desc: 'Rates by fare class, cabin, route, and partner' },
  { href: '/skymiles/redeeming', icon: 'ph-fill ph-wallet', label: 'Redeeming miles', desc: 'eCredits, award flights, upgrades, and transfers' },
  { href: '/skymiles/double-earn', icon: 'ph-fill ph-arrows-split', label: 'Double earn', desc: 'How company + employee miles accrue on every flight' },
]

export default function SkyMilesPage() {
  const partnerList = airlinePartners.slice(0, 8)

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-aura-secondary) 100%)',
        }}
      >
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full mb-4 font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 'var(--type-scale-13)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                SkyMiles for Business
              </span>
              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, var(--type-scale-40))',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  color: 'var(--color-neutral-0)',
                  lineHeight: 'var(--line-height-heading-xl)',
                  marginBottom: '16px',
                }}
              >
                Miles that work twice —<br />for your company and your people
              </h1>
              <p
                style={{
                  fontSize: 'var(--type-scale-18)',
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: '32px',
                  lineHeight: 'var(--line-height-body-medium)',
                }}
              >
                Every Delta flight earns miles in two places simultaneously: your company account and each employee's personal SkyMiles account. Neither reduces the other.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enroll/small-business"
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
                  Get started free
                  <i className="ph-bold ph-arrow-right text-sm"></i>
                </Link>
                <Link
                  href="/skymiles/how-it-works"
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{
                    height: '48px',
                    padding: '0 24px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.12)',
                    color: 'var(--color-neutral-0)',
                    fontSize: 'var(--type-scale-16)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  How it works
                </Link>
              </div>
            </div>

            {/* Dual-earn visual */}
            <div
              className="rounded-[var(--radius-l)] p-8"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
                One flight, two accounts
              </p>
              <div className="space-y-4">
                <div className="rounded-[var(--radius-m)] p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="ph-fill ph-buildings text-xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
                    <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Your company</span>
                  </div>
                  <p style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>5–10 miles/$</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.82)' }}>Redeemable for eCredits, transfers, upgrades</p>
                </div>
                <div className="flex items-center justify-center">
                  <span style={{ fontSize: 'var(--type-scale-12)', color: 'rgba(255,255,255,0.78)', fontWeight: '600' }}>PLUS</span>
                </div>
                <div className="rounded-[var(--radius-m)] p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="ph-fill ph-user text-xl" style={{ color: '#60a5fa' }}></i>
                    <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Each employee</span>
                  </div>
                  <p style={{ fontSize: 'var(--type-scale-24)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)' }}>Full personal miles</p>
                  <p style={{ fontSize: 'var(--type-scale-13)', color: 'rgba(255,255,255,0.6)' }}>MQDs toward Medallion status, award travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to set up */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}
          >
            Set up in three steps
          </h2>
          <p className="text-center mb-12" style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', maxWidth: '480px', margin: '0 auto 48px' }}>
            Once configured, every flight earns automatically — no action needed per trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: 'ph-fill ph-buildings', title: 'Enroll your company', desc: "Free registration at Delta.com. You get a Business ID — your company's unique identifier for all future bookings." },
              { step: '02', icon: 'ph-fill ph-users', title: 'Link employee SkyMiles', desc: 'Each traveler adds their SkyMiles number to the company portal once. After that, every flight auto-earns in both accounts.' },
              { step: '03', icon: 'ph-fill ph-airplane-takeoff', title: 'Fly and earn', desc: 'Book through Delta.com, your TMC, or any booking tool using the Business ID. Miles post within 72 hours of flight completion.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--color-delta-red-50)' }}
                >
                  <i className={`${s.icon} text-3xl`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                </div>
                <span style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-400)' }}>
                  Step {s.step}
                </span>
                <h3 style={{ fontSize: 'var(--type-scale-18)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', margin: '8px 0' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB Tiers */}
      <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-32))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}
          >
            Company account tiers
          </h2>
          <p className="text-center mb-12" style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', maxWidth: '480px', margin: '0 auto 48px' }}>
            As your company's annual spend grows, your earn rate increases automatically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(smbTiers).map((tier) => (
              <div
                key={tier.id}
                className="rounded-[var(--radius-l)] p-6"
                style={{
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <p style={{ fontSize: 'var(--type-scale-11)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-neutral-500)', marginBottom: '4px' }}>
                  {tier.name}
                </p>
                <p style={{ fontSize: 'var(--type-scale-18)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '4px' }}>
                  {tier.earningRate}
                </p>
                <div className="space-y-2 mt-4">
                  {tier.features.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <i className="ph-fill ph-check-circle text-sm" style={{ color: 'var(--color-success)' }}></i>
                      <span style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-delta-blue-600)' }}>{b}</span>
                    </div>
                  ))}
                </div>
                {tier.minSpend > 0 && (
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-500)', marginTop: '12px' }}>
                    Requires ${tier.minSpend.toLocaleString()}+ annual spend
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner airlines */}
      <section className="py-20" style={{ background: 'var(--color-neutral-0)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2vw, var(--type-scale-28))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}
          >
            Earn on 23 partner airlines
          </h2>
          <p className="text-center mb-10" style={{ fontSize: 'var(--type-scale-15)', color: 'var(--color-neutral-600)', maxWidth: '420px', margin: '0 auto 40px' }}>
            SkyMiles earn on SkyTeam and partner airlines worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerList.map((partner) => (
              <span
                key={partner.code}
                className="px-4 py-2 rounded-full font-semibold"
                style={{
                  background: 'var(--color-neutral-5)',
                  border: '1px solid var(--color-neutral-10)',
                  fontSize: 'var(--type-scale-14)',
                  color: 'var(--color-delta-blue-600)',
                }}
              >
                {partner.name}
              </span>
            ))}
            <Link
              href="/skymiles/earning"
              className="px-4 py-2 rounded-full font-semibold"
              style={{
                background: 'var(--color-delta-blue-50)',
                border: '1px solid var(--color-delta-blue-300)',
                fontSize: 'var(--type-scale-14)',
                color: 'var(--color-delta-blue-300)',
              }}
            >
              + 15 more →
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-page navigation */}
      <section className="py-20" style={{ background: 'var(--color-neutral-5)' }}>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 'var(--container-wide)' }}>
          <h2
            className="text-center mb-10"
            style={{ fontSize: 'clamp(1.25rem, 2vw, var(--type-scale-28))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}
          >
            Explore SkyMiles for Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-[var(--radius-l)] p-6 group"
                style={{
                  background: 'var(--color-neutral-0)',
                  border: '1px solid var(--color-neutral-10)',
                  boxShadow: 'var(--shadow-card)',
                  textDecoration: 'none',
                }}
              >
                <i className={`${p.icon} text-2xl mb-3 block`} style={{ color: 'var(--color-delta-red-400)' }}></i>
                <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)', marginBottom: '6px' }}>{p.label}</p>
                <p style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)', lineHeight: 1.5 }}>{p.desc}</p>
                <div className="flex items-center gap-1 mt-3" style={{ color: 'var(--color-delta-blue-300)', fontSize: 'var(--type-scale-13)', fontWeight: '600' }}>
                  Read more <i className="ph-bold ph-arrow-right text-xs"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--color-delta-blue-700)' }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, var(--type-scale-28))', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', marginBottom: '12px' }}
          >
            Start earning for your company today
          </h2>
          <p style={{ fontSize: 'var(--type-scale-16)', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
            Free to join. No minimum spend to start. Miles activate on your first flight.
          </p>
          <Link
            href="/enroll/small-business"
            className="inline-flex items-center gap-2 font-semibold"
            style={{
              height: '48px',
              padding: '0 28px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-delta-red-400)',
              color: 'var(--color-neutral-0)',
              fontSize: 'var(--type-scale-16)',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Get started free
            <i className="ph-bold ph-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
