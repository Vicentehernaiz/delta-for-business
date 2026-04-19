/**
 * Miles transfer form for company miles management
 */

'use client'

import { useState } from 'react'

export function MilesTransfer() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 max-w-md">
      <h3 className="text-lg font-bold mb-6">Transfer company miles</h3>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-semibold text-green-900">
            <i className="ph ph-check-circle inline-block mr-2"></i>
            Transfer initiated successfully
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Recipient email</label>
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="traveler@company.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-delta-blue)]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Miles to transfer</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1000"
            min="100"
            max="999999"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-delta-blue)]"
            required
          />
        </div>

        <p className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
          <i className="ph ph-info inline-block mr-2"></i>
          A transfer fee of 1% applies. Your recipient will receive{' '}
          <strong>{amount ? Math.round(parseInt(amount) * 0.99).toLocaleString() : '0'}</strong> miles.
        </p>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-[var(--color-delta-red)] text-white rounded-lg font-semibold hover:opacity-90"
        >
          <i className="ph ph-arrow-right inline-block mr-2"></i>
          Transfer miles
        </button>
      </form>
    </div>
  )
}
