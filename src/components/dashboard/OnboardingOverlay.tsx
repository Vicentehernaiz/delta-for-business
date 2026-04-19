/**
 * 4-step onboarding flow for new dashboard users
 * Shown once after first login
 */

'use client'

import { useState } from 'react'

export function OnboardingOverlay() {
  const [step, setStep] = useState<number>(1)

  const steps = [
    {
      title: 'Welcome to your Delta dashboard',
      description: 'Let\'s get you set up in 4 quick steps.',
      icon: 'ph-check-circle',
      action: 'Next',
    },
    {
      title: 'Link your travelers',
      description: 'Add your team members so they can start earning miles.',
      icon: 'ph-users',
      action: 'Next',
    },
    {
      title: 'Set up integrations',
      description: 'Connect your TMC or expense system for automated reporting.',
      icon: 'ph-plugs',
      action: 'Next',
    },
    {
      title: 'You\'re all set!',
      description: 'Start booking flights and earning miles for your company.',
      icon: 'ph-rocket',
      action: 'Get started',
    },
  ]

  const currentStep = steps[step - 1]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 rounded-full ${
                  idx + 1 <= step ? 'bg-[var(--color-delta-red)]' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <i className={`ph ${currentStep.icon} text-3xl text-[var(--color-delta-red)]`}></i>
          </div>

          <h2 className="text-2xl font-bold mb-3">{currentStep.title}</h2>
          <p className="text-gray-600">{currentStep.description}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
            >
              Back
            </button>
          )}

          <button
            onClick={() => {
              if (step < steps.length) {
                setStep(step + 1)
              } else {
                // Close onboarding
              }
            }}
            className="flex-1 px-4 py-3 bg-[var(--color-delta-red)] text-white rounded-lg font-semibold hover:opacity-90"
          >
            {currentStep.action}
          </button>
        </div>

        {/* Skip */}
        <button className="w-full mt-4 py-2 text-gray-600 text-sm hover:text-gray-900">
          Skip onboarding
        </button>
      </div>
    </div>
  )
}
