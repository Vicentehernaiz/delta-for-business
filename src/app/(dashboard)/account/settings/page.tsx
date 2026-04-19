'use client'

import { useState } from 'react'
import { mockAdminUser, mockSettings, mockCompany } from '@/lib/api/mock-data'

type SectionId = 'company' | 'profile' | 'notifications' | 'integrations' | 'billing'

export default function SettingsPage() {
  const [section, setSection] = useState<SectionId>('company')
  const [notifications, setNotifications] = useState(mockSettings.notifications)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const navItems: { id: SectionId; label: string; icon: string }[] = [
    { id: 'company', label: 'Company info', icon: 'ph-buildings' },
    { id: 'profile', label: 'Admin profile', icon: 'ph-user-circle' },
    { id: 'notifications', label: 'Notifications', icon: 'ph-bell' },
    { id: 'integrations', label: 'Integrations', icon: 'ph-plugs' },
    { id: 'billing', label: 'Billing & plan', icon: 'ph-credit-card' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
          Settings
        </h1>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
          Manage your account, company details, and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Nav */}
        <div
          className="rounded-[var(--radius-l)] p-2 h-fit"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className="w-full flex items-center gap-3 rounded-[var(--radius-l)] transition-all"
              style={{
                height: '44px',
                padding: '0 12px',
                background: section === item.id ? 'var(--color-delta-blue-50)' : 'transparent',
                color: section === item.id ? 'var(--color-delta-blue-700)' : 'var(--color-neutral-600)',
                fontWeight: section === item.id ? '600' : '400',
                fontSize: 'var(--type-scale-14)',
                textAlign: 'left',
              }}
            >
              <i className={`ph-bold ${item.icon} text-base`} style={{ color: section === item.id ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-400)' }}></i>
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-5">

          {/* Company info */}
          {section === 'company' && (
            <div
              className="rounded-[var(--radius-l)] p-6"
              style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
            >
              <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>Company information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Business name', value: mockSettings.company.name },
                  { label: 'Legal name', value: mockSettings.company.legalName },
                  { label: 'EIN / Tax ID', value: mockSettings.company.ein },
                  { label: 'Industry', value: mockSettings.company.industry },
                  { label: 'Website', value: mockSettings.company.website },
                  { label: 'Business ID', value: mockCompany.businessId },
                ].map((field) => (
                  <div key={field.label}>
                    <label style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', display: 'block', marginBottom: '4px' }}>
                      {field.label}
                    </label>
                    <input
                      defaultValue={field.value}
                      className="w-full rounded-[var(--radius-l)] px-3"
                      style={{ height: '40px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)', fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', outline: 'none' }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <label style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', display: 'block', marginBottom: '4px' }}>
                  Mailing address
                </label>
                <input
                  defaultValue={mockSettings.company.address}
                  className="w-full rounded-[var(--radius-l)] px-3"
                  style={{ height: '40px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)', fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', outline: 'none' }}
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ height: '40px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: saved ? 'var(--color-success)' : 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', transition: 'background 200ms' }}
                >
                  <i className={`ph-bold ${saved ? 'ph-check' : 'ph-floppy-disk'} text-sm`}></i>
                  {saved ? 'Saved!' : 'Save changes'}
                </button>
              </div>
            </div>
          )}

          {/* Admin profile */}
          {section === 'profile' && (
            <div
              className="rounded-[var(--radius-l)] p-6"
              style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
            >
              <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>Admin profile</h3>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold"
                  style={{ background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-22)' }}
                >
                  {mockAdminUser.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>{mockAdminUser.name}</p>
                  <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>{mockAdminUser.role} · {mockAdminUser.title}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Full name', value: mockAdminUser.name },
                  { label: 'Email address', value: mockAdminUser.email },
                  { label: 'Phone', value: mockAdminUser.phone },
                  { label: 'Job title', value: mockAdminUser.title },
                ].map((field) => (
                  <div key={field.label}>
                    <label style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', display: 'block', marginBottom: '4px' }}>
                      {field.label}
                    </label>
                    <input
                      defaultValue={field.value}
                      className="w-full rounded-[var(--radius-l)] px-3"
                      style={{ height: '40px', border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)', fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)', outline: 'none' }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-[var(--radius-l)]" style={{ background: 'var(--color-delta-blue-50)', border: '1px solid var(--color-neutral-10)' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>Role: {mockAdminUser.role}</p>
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>You have full admin access to manage travelers, billing, and account settings.</p>
                  </div>
                  <i className="ph-fill ph-shield-check text-2xl" style={{ color: 'var(--color-delta-blue-600)', flexShrink: 0 }}></i>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ height: '40px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: saved ? 'var(--color-success)' : 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', transition: 'background 200ms' }}
                >
                  <i className={`ph-bold ${saved ? 'ph-check' : 'ph-floppy-disk'} text-sm`}></i>
                  {saved ? 'Saved!' : 'Save changes'}
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {section === 'notifications' && (
            <div
              className="rounded-[var(--radius-l)] p-6"
              style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
            >
              <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>Email notifications</h3>
              <div className="space-y-4">
                {([
                  { key: 'monthlyReport', label: 'Monthly spend report', desc: 'Summary of spend, miles, and savings sent on the 1st of each month' },
                  { key: 'tierAlerts', label: 'Tier progress alerts', desc: 'Notify when you cross 50%, 75%, and 90% of the next tier threshold' },
                  { key: 'expiryAlerts', label: 'eCredit expiry alerts', desc: 'Remind 90 and 30 days before eCredits expire' },
                  { key: 'weeklyDigest', label: 'Weekly activity digest', desc: 'A round-up of all travel activity across your team' },
                  { key: 'newTraveler', label: 'New traveler joined', desc: 'Alert when an invited traveler completes registration' },
                  { key: 'bookingConfirmation', label: 'Booking confirmations', desc: 'Copy of every booking made under your account' },
                ] as { key: keyof typeof notifications; label: string; desc: string }[]).map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 rounded-[var(--radius-l)]"
                    style={{ border: '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)' }}
                  >
                    <div>
                      <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{item.label}</p>
                      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifications((n) => ({ ...n, [item.key]: !n[item.key] }))}
                      className="relative flex-shrink-0"
                      style={{ width: '44px', height: '24px', borderRadius: '12px', background: notifications[item.key] ? 'var(--color-delta-blue-600)' : 'var(--color-neutral-300)', transition: 'background 200ms', border: 'none', cursor: 'pointer' }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          top: '3px',
                          left: notifications[item.key] ? '23px' : '3px',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'white',
                          transition: 'left 200ms',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ height: '40px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: saved ? 'var(--color-success)' : 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', transition: 'background 200ms' }}
                >
                  <i className={`ph-bold ${saved ? 'ph-check' : 'ph-floppy-disk'} text-sm`}></i>
                  {saved ? 'Saved!' : 'Save preferences'}
                </button>
              </div>
            </div>
          )}

          {/* Integrations */}
          {section === 'integrations' && (
            <div
              className="rounded-[var(--radius-l)] p-6"
              style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
            >
              <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '20px' }}>Integrations</h3>
              <div className="space-y-4">
                {[
                  {
                    name: 'SAP Concur',
                    desc: 'Sync travel bookings directly with your Concur expense management system',
                    icon: 'ph-arrows-merge',
                    connected: mockSettings.integrations.concur,
                    badge: 'Popular',
                  },
                  {
                    name: 'Travel Management Company (TMC)',
                    desc: 'Connect your TMC for consolidated reporting and managed travel workflows',
                    icon: 'ph-briefcase',
                    connected: mockSettings.integrations.tmc,
                    badge: 'Enterprise',
                  },
                  {
                    name: 'Navan',
                    desc: 'One-click connection with Navan for real-time booking data and policy enforcement',
                    icon: 'ph-airplane-takeoff',
                    connected: false,
                    badge: null,
                  },
                  {
                    name: 'TripActions / Spotnana',
                    desc: 'Modern travel platform integration — automated data sync, no manual exports',
                    icon: 'ph-map-pin',
                    connected: false,
                    badge: null,
                  },
                ].map((int) => (
                  <div
                    key={int.name}
                    className="flex items-center justify-between p-4 rounded-[var(--radius-l)]"
                    style={{ border: `1px solid ${int.connected ? 'var(--color-success)' : 'var(--color-neutral-10)'}`, background: int.connected ? 'rgba(5,150,105,0.04)' : 'var(--color-neutral-5)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: int.connected ? 'rgba(5,150,105,0.12)' : 'var(--color-delta-blue-50)' }}
                      >
                        <i className={`ph-bold ${int.icon} text-base`} style={{ color: int.connected ? 'var(--color-success)' : 'var(--color-delta-blue-600)' }}></i>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{int.name}</p>
                          {int.badge && (
                            <span className="px-2 py-0.5 rounded-full" style={{ background: 'var(--color-delta-blue-50)', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-11)', fontWeight: '700' }}>
                              {int.badge}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{int.desc}</p>
                      </div>
                    </div>
                    <button
                      className="font-semibold flex-shrink-0"
                      style={{
                        height: '36px',
                        padding: '0 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--type-scale-13)',
                        background: int.connected ? 'rgba(5,150,105,0.1)' : 'var(--color-delta-blue-600)',
                        color: int.connected ? 'var(--color-success)' : 'var(--color-neutral-0)',
                        border: int.connected ? '1px solid var(--color-success)' : 'none',
                      }}
                    >
                      {int.connected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing */}
          {section === 'billing' && (
            <div className="space-y-5">
              <div
                className="rounded-[var(--radius-l)] p-6"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
              >
                <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>Current plan</h3>
                <div
                  className="rounded-[var(--radius-l)] p-5 flex items-center justify-between"
                  style={{ background: 'var(--color-delta-blue-50)', border: '2px solid var(--color-delta-blue-600)' }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <i className="ph-fill ph-medal text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
                      <p style={{ fontSize: 'var(--type-scale-18)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>SkyMiles for Business — Plus Tier</p>
                    </div>
                    <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
                      No monthly fee · Earn up to 10 miles per $1 spent
                    </p>
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', marginTop: '4px' }}>
                      Member since January 2024 · Business ID: DELTA-AF7829
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full font-bold" style={{ background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-12)' }}>
                    Active
                  </span>
                </div>
              </div>

              <div
                className="rounded-[var(--radius-l)] p-6"
                style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
              >
                <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>Program benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: '5 miles per $1', desc: 'Base earning on all Delta flights' },
                    { label: '10 miles per $1', desc: 'On Delta One® and First Class' },
                    { label: 'eCredit redemptions', desc: 'Convert miles to ~1.7¢ eCredits' },
                    { label: 'Management dashboard', desc: 'Full roster and reporting tools' },
                    { label: 'Dual-earn model', desc: 'Company + employees earn simultaneously' },
                    { label: 'No cost to join', desc: 'Free enrollment, no monthly fees' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-3">
                      <i className="ph-fill ph-check-circle text-lg" style={{ color: 'var(--color-success)', flexShrink: 0 }}></i>
                      <div>
                        <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>{b.label}</p>
                        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[var(--radius-l)] p-5 flex items-center justify-between"
                style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
              >
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>Need more? Talk to sales about Elite tier.</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Unlock negotiated fares and a dedicated account manager at $300K+ spend.</p>
                </div>
                <button
                  className="font-semibold flex-shrink-0"
                  style={{ height: '40px', padding: '0 16px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-blue-600)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-13)' }}
                >
                  Contact sales
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
