'use client'

import { useState } from 'react'
import { mockMilesBalance, mockWallet, mockECredits, mockTransactions } from '@/lib/api/mock-data'
import { MilesTransfer } from '@/components/dashboard/MilesTransfer'
import { TierProgress } from '@/components/dashboard/TierProgress'

export default function MilesPage() {
  const [showTransfer, setShowTransfer] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 style={{ fontSize: 'var(--type-scale-28)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>
          Miles & Rewards
        </h1>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)', marginTop: '2px' }}>
          Company SkyMiles balance and redemption options
        </p>
      </div>

      {/* Balance hero */}
      <div
        className="rounded-[var(--radius-l)] p-8"
        style={{ background: `linear-gradient(135deg, var(--color-delta-blue-700) 0%, var(--color-delta-blue-600) 100%)` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              Total company miles
            </p>
            <p style={{ fontSize: 'var(--type-scale-48)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1 }}>
              {mockMilesBalance.total.toLocaleString()}
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              +{mockMilesBalance.earnedThisMonth.toLocaleString()} this month · {mockMilesBalance.trend}
            </p>
          </div>
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
              eCredit value
            </p>
            <p style={{ fontSize: 'var(--type-scale-40)', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--color-neutral-0)', lineHeight: 1.1 }}>
              ${Math.round(mockMilesBalance.total * 0.017).toLocaleString()}
            </p>
            <p style={{ fontSize: 'var(--type-scale-14)', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>@ ~1.7¢ per mile</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowTransfer(!showTransfer)}
              className="font-semibold inline-flex items-center justify-center gap-2"
              style={{ height: '44px', borderRadius: 'var(--radius-full)', background: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', boxShadow: 'var(--shadow-button)' }}
            >
              <i className="ph-bold ph-arrows-left-right text-sm"></i>
              Convert to eCredits
            </button>
            <button
              className="font-semibold inline-flex items-center justify-center gap-2"
              style={{ height: '44px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.1)', color: 'var(--color-neutral-0)', fontSize: 'var(--type-scale-16)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Transfer to employee
            </button>
          </div>
        </div>
      </div>

      {showTransfer && <MilesTransfer />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TierProgress />
        <div
          className="rounded-[var(--radius-l)] p-6"
          style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)' }}>eCredit Wallet</h3>
            <span className="px-2 py-0.5 rounded-full font-semibold" style={{ background: 'var(--color-delta-red-50)', color: 'var(--color-delta-red-400)', fontSize: 'var(--type-scale-12)' }}>
              ${mockWallet.eCreditBalance.toLocaleString()} available
            </span>
          </div>
          <div className="space-y-3">
            {mockECredits.filter((c) => c.status !== 'used').slice(0, 5).map((ec) => (
              <div key={ec.id} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid var(--color-neutral-5)' }}>
                <div>
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>${ec.amount} eCredit</p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>Exp: {new Date(ec.expiryDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                </div>
                <span
                  className="px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: ec.status === 'available' ? 'rgba(5,150,105,0.1)' : 'rgba(217,119,6,0.1)',
                    color: ec.status === 'available' ? 'var(--color-success)' : 'var(--color-warning)',
                    fontSize: 'var(--type-scale-12)',
                  }}
                >{ec.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent earning activity */}
      <div className="rounded-[var(--radius-l)] p-6" style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)', boxShadow: 'var(--shadow-card)' }}>
        <h3 style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', color: 'var(--color-delta-blue-600)', marginBottom: '16px' }}>Recent earning activity</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-neutral-10)' }}>
                {['Date', 'Traveler', 'Route', 'Cabin', 'Miles earned'].map((h) => (
                  <th key={h} className="pb-3 text-left" style={{ fontSize: 'var(--type-scale-12)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', paddingRight: '16px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockTransactions.slice(0, 8).map((t) => (
                <tr key={t.id} style={{ borderBottom: '1px solid var(--color-neutral-5)' }}>
                  <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                  <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-delta-blue-600)' }}>{t.traveler}</td>
                  <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-700)' }}>{t.route}</td>
                  <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-13)', color: 'var(--color-neutral-600)' }}>{t.cabin}</td>
                  <td className="py-3 pr-4" style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: 'var(--color-delta-red-400)' }}>+{t.miles.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
