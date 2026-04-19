/**
 * Interactive card comparison table
 * Allows toggling between personal and business cards
 */

'use client'

import { useState } from 'react'

export function CardCompareTable() {
  const [cardType, setCardType] = useState<'personal' | 'business'>('personal')

  const personalCards = [
    { name: 'Blue', fee: '$0', earning: '1x', signup: 'None', lounge: 'No' },
    { name: 'Gold', fee: '$150', earning: '2x', signup: '$75 credit', lounge: 'No' },
    { name: 'Platinum', fee: '$350', earning: '3x', signup: '$100 credit', lounge: 'Yes' },
    { name: 'Reserve', fee: '$650', earning: '3x', signup: '$200 credit', lounge: 'Yes' },
  ]

  const businessCards = [
    { name: 'Gold Business', fee: '$150', earning: '2x', signup: '$75 credit', lounge: 'No' },
    { name: 'Platinum Business', fee: '$350', earning: '3x', signup: '$100 credit', lounge: 'Yes' },
    { name: 'Reserve Business', fee: '$650', earning: '3x', signup: '$200 credit', lounge: 'Yes' },
  ]

  const cards = cardType === 'personal' ? personalCards : businessCards

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setCardType('personal')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            cardType === 'personal'
              ? 'bg-[var(--color-delta-red)] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Personal Cards
        </button>
        <button
          onClick={() => setCardType('business')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            cardType === 'business'
              ? 'bg-[var(--color-delta-red)] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Business Cards
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--color-delta-navy)] text-white">
              <th className="px-6 py-4 text-left font-semibold">Card</th>
              <th className="px-6 py-4 text-left font-semibold">Annual Fee</th>
              <th className="px-6 py-4 text-left font-semibold">Base Earning</th>
              <th className="px-6 py-4 text-left font-semibold">Signup Bonus</th>
              <th className="px-6 py-4 text-left font-semibold">Lounge Access</th>
              <th className="px-6 py-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-6 py-4 font-semibold text-gray-900">{card.name}</td>
                <td className="px-6 py-4 text-[var(--color-delta-red)] font-semibold">
                  {card.fee}
                </td>
                <td className="px-6 py-4">{card.earning} miles/$</td>
                <td className="px-6 py-4">{card.signup}</td>
                <td className="px-6 py-4">
                  {card.lounge ? (
                    <i className="ph ph-check-circle text-[var(--color-delta-red)] text-lg"></i>
                  ) : (
                    <i className="ph ph-x-circle text-gray-300 text-lg"></i>
                  )}
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="text-[var(--color-delta-red)] font-semibold hover:underline text-sm">
                    Apply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
