'use client'

import { useState } from 'react'
import { mockECredits, mockWallet, mockMilesBalance, mockTransactions } from '@/lib/api/mock-data'

type TabId = 'ecredits' | 'conversions' | 'history'

export default function WalletPage() {
  const [tab, setTab] = useState<TabId>('ecredits')
  const [redeemOpen, setRedeemOpen] = useState(false)
  const [milesInput, setMilesInput] = useState(50000)

  const eCreditFromMiles = Math.floor(milesInput * mockWallet.eCreditValuePerMile)
  const available = mockECredits.filter((c) => c.status === 'available')
  const pending = mockECredits.filter((c) => c.status === 'pending')

  const statusStyle = (status: string) => {
    if (status === 'available') return { bg: 'rgba(5,150,105,0.1)', color: 'var(--color-success)' }
    if (status === 'pending') return { bg: 'rgba(217,119,6,0.1)', color: 'var(--color-warning)' }
    return { bg: 'var(--color-neutral-5)', color: 'var(--color-neutral-400)' }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
            Credit Wallet
          </h1>
          <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
            eCredits redeemable on delta.com for future bookings
          </p>
        </div>
        <button
          onClick={() => setRedeemOpen(!redeemOpen)}
          className="inline-flex items-center gap-2 font-semibold"
          style={{ height: '44px', padding: '0 20px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}
        >
          <i className="ph-bold ph-arrows-left-right text-sm"></i>
          Convert Miles
        </button>
      </div>

      {/* Balance hero */}
      <div
        className="rounded-[var(--radius-l)] p-8"
        style={{ background: 'linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              eCredit balance
            </p>
            <p style={{ fontSize: 'var(--type-scale-48)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1 }}>
              ${mockWallet.eCreditBalance.toLocaleString()}
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              {mockWallet.eCreditCount} eCredits · {mockWallet.pendingRedemptions} pending
            </p>
          </div>
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              Miles available to convert
            </p>
            <p style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1 }}>
              {mockMilesBalance.total.toLocaleString()}
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              ≈ ${Math.round(mockMilesBalance.total * 0.017).toLocaleString()} eCredit value
            </p>
          </div>
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              Conversion rate
            </p>
            <p style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1 }}>
              1.7¢
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              Per SkyMile to eCredit
            </p>
          </div>
        </div>
      </div>

      {/* Convert panel */}
      {redeemOpen && (
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '2px solid var(--color-delta-red-400)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
              Convert Miles to eCredits
            </h3>
            <button onClick={() => setRedeemOpen(false)}>
              <i className="ph ph-x text-lg" style={{ color: 'var(--color-neutral-400)' }}></i>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <label style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', display: 'block', marginBottom: '8px' }}>
                Miles to convert
              </label>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="range"
                  min={10000}
                  max={mockMilesBalance.total}
                  step={10000}
                  value={milesInput}
                  onChange={(e) => setMilesInput(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}>10,000 min</span>
                <span style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                  {milesInput.toLocaleString()} miles
                </span>
              </div>
            </div>
            <div
              className="rounded-[var(--radius-l)] p-5 text-center"
              style={{ background: 'var(--color-delta-red-50)', border: '1px solid var(--color-delta-red-400)' }}
            >
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginBottom: '4px' }}>You will receive</p>
              <p style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-red-400)' }}>
                ${eCreditFromMiles.toLocaleString()}
              </p>
              <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', marginTop: '4px' }}>in eCredits · valid 1 year</p>
              <button
                className="mt-4 w-full font-semibold inline-flex items-center justify-center gap-2"
                style={{ height: '44px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-14)', boxShadow: 'var(--shadow-button)' }}
              >
                <i className="ph-bold ph-check text-sm"></i>
                Confirm conversion
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div
        className="flex p-1 gap-1 rounded-full w-fit"
        style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
      >
        {([
          { id: 'ecredits', label: `Active eCredits (${available.length + pending.length})` },
          { id: 'conversions', label: 'Used / Expired' },
          { id: 'history', label: 'Transaction History' },
        ] as { id: TabId; label: string }[]).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="font-semibold transition-all"
            style={{
              height: '36px',
              padding: '0 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--type-scale-14)',
              background: tab === t.id ? 'var(--color-delta-blue-600)' : 'transparent',
              color: tab === t.id ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* eCredits tab */}
      {tab === 'ecredits' && (
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockECredits.filter((c) => c.status !== 'used' && c.status !== 'expired').map((ec) => {
              const s = statusStyle(ec.status)
              const expDate = new Date(ec.expiryDate)
              const daysLeft = Math.ceil((expDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
              const expiring = daysLeft <= 90
              return (
                <div
                  key={ec.id}
                  className="rounded-[var(--radius-l)] p-4 flex items-center justify-between"
                  style={{ border: expiring && ec.status === 'available' ? '2px solid var(--color-warning)' : '1px solid var(--color-neutral-10)', background: 'var(--color-neutral-5)' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                      style={{ background: s.bg }}
                    >
                      <i className="ph-fill ph-ticket text-lg" style={{ color: s.color }}></i>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-700)' }}>
                        ${ec.amount} eCredit
                      </p>
                      <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>
                        {ec.reason} · Issued {new Date(ec.issueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                      {expiring && (
                        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-warning)', marginTop: '2px' }}>
                          Expires in {daysLeft} days
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full font-semibold capitalize"
                      style={{ background: s.bg, color: s.color, fontSize: 'var(--type-scale-12)' }}
                    >
                      {ec.status}
                    </span>
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', marginTop: '4px' }}>
                      Exp: {expDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Used/Expired tab */}
      {tab === 'conversions' && (
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="text-center py-12">
            <i className="ph-duotone ph-archive text-4xl" style={{ color: 'var(--color-neutral-300)' }}></i>
            <p style={{ fontSize: 'var(--type-scale-16)', color: 'var(--color-neutral-600)', marginTop: '8px' }}>
              No used or expired eCredits yet.
            </p>
          </div>
        </div>
      )}

      {/* Transaction history tab */}
      {tab === 'history' && (
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-neutral-10)' }}>
                  {['Date', 'Traveler', 'Route', 'Amount', 'Miles earned'].map((h) => (
                    <th key={h} className="pb-3 text-left" style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', paddingRight: '16px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((t) => (
                  <tr key={t.id} style={{ borderBottom: '1px solid var(--color-neutral-5)' }}>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>
                      {new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)' }}>{t.traveler}</td>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-700)' }}>{t.route}</td>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>{t.fare}</td>
                    <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-red-400)' }}>+{t.miles.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
