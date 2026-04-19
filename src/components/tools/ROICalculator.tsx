'use client'

import { useCalculatorStore } from '@/stores/calculator'
import type { RouteType, ProgramTier } from '@/stores/calculator'
import Link from 'next/link'

function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  format,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  format: (v: number) => string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)' }}>
          {label}
        </label>
        <span
          style={{
            fontSize: 'var(--type-scale-16)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-red-400)',
          }}
        >
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-delta-red-400)]"
        style={{ accentColor: 'var(--color-delta-red-400)' }}
      />
      <div className="flex justify-between mt-1">
        <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}>{format(min)}</span>
        <span style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)' }}>{format(max)}</span>
      </div>
    </div>
  )
}

function MetricCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub?: string
  accent?: boolean
}) {
  return (
    <div
      className="rounded-[var(--radius-l)] p-5"
      style={{
        background: accent ? 'var(--color-delta-red-400)' : 'var(--color-neutral-5)',
        border: accent ? 'none' : '1px solid var(--color-neutral-10)',
      }}
    >
      <p
        style={{
          fontSize: 'var(--type-scale-12)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: accent ? 'rgba(255,255,255,0.75)' : 'var(--color-neutral-600)',
          marginBottom: '4px',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 'var(--type-scale-28)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
          color: accent ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
          lineHeight: 1.1,
        }}
      >
        {value}
      </p>
      {sub && (
        <p style={{ fontSize: 'var(--type-scale-12)', color: accent ? 'rgba(255,255,255,0.65)' : 'var(--color-neutral-600)', marginTop: '4px' }}>
          {sub}
        </p>
      )}
    </div>
  )
}

export function ROICalculator() {
  const { inputs, outputs, setTravelers, setTripsPerYear, setAvgFare, setRouteType, setProgramTier } =
    useCalculatorStore()

  const fmt$ = (v: number) =>
    v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v}`
  const fmtM = (v: number) =>
    v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : `${v}`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* ── Inputs ── */}
      <div
        className="rounded-[var(--radius-l)] p-8"
        style={{
          background: 'var(--color-neutral-0)',
          border: '1px solid var(--color-neutral-10)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <h2
          style={{
            fontSize: 'var(--type-scale-22)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            color: 'var(--color-delta-blue-600)',
            marginBottom: '24px',
          }}
        >
          Your travel profile
        </h2>

        <div className="space-y-8">
          <SliderInput
            label="Travelers"
            value={inputs.travelers}
            min={1}
            max={500}
            onChange={setTravelers}
            format={(v) => `${v} traveler${v === 1 ? '' : 's'}`}
          />
          <SliderInput
            label="Trips per year"
            value={inputs.tripsPerYear}
            min={1}
            max={50}
            onChange={setTripsPerYear}
            format={(v) => `${v} trip${v === 1 ? '' : 's'}`}
          />
          <SliderInput
            label="Average fare"
            value={inputs.avgFare}
            min={200}
            max={5000}
            step={50}
            onChange={setAvgFare}
            format={(v) => `$${v.toLocaleString()}`}
          />

          {/* Route type */}
          <div>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', marginBottom: '8px' }}>
              Route type
            </p>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: 'hub', label: 'Hub routes', sub: '5x miles/$' },
                  { value: 'mix', label: 'Mix', sub: '6.5x miles/$' },
                  { value: 'non-hub', label: 'Non-hub', sub: '8x miles/$' },
                ] as { value: RouteType; label: string; sub: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setRouteType(opt.value)}
                  className="p-3 rounded-[var(--radius-l)] transition-all text-center"
                  style={{
                    background: inputs.routeType === opt.value ? 'var(--color-delta-red-50)' : 'var(--color-neutral-5)',
                    border: inputs.routeType === opt.value
                      ? '2px solid var(--color-delta-red-400)'
                      : '2px solid var(--color-neutral-10)',
                  }}
                >
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: inputs.routeType === opt.value ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)' }}>
                    {opt.label}
                  </p>
                  <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Program tier */}
          <div>
            <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '600', color: 'var(--color-delta-blue-600)', marginBottom: '8px' }}>
              SkyMiles for Business tier
            </p>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: 'member', label: 'Member' },
                  { value: 'plus', label: 'Plus' },
                  { value: 'elite', label: 'Elite', bonus: '+15%' },
                ] as { value: ProgramTier; label: string; bonus?: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setProgramTier(opt.value)}
                  className="p-3 rounded-[var(--radius-l)] transition-all text-center"
                  style={{
                    background: inputs.programTier === opt.value ? 'var(--color-delta-red-50)' : 'var(--color-neutral-5)',
                    border: inputs.programTier === opt.value
                      ? '2px solid var(--color-delta-red-400)'
                      : '2px solid var(--color-neutral-10)',
                  }}
                >
                  <p style={{ fontSize: 'var(--type-scale-14)', fontWeight: '700', color: inputs.programTier === opt.value ? 'var(--color-delta-red-400)' : 'var(--color-delta-blue-600)' }}>
                    {opt.label}
                  </p>
                  {opt.bonus && (
                    <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>{opt.bonus}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Outputs ── */}
      <div className="space-y-4">
        <MetricCard
          label="Estimated company miles"
          value={fmtM(outputs.estimatedMiles)}
          sub={`@ ${outputs.earnRate.toFixed(1)} miles per dollar`}
          accent
        />
        <div className="grid grid-cols-2 gap-4">
          <MetricCard
            label="Annual spend"
            value={fmt$(outputs.annualSpend)}
            sub={`${inputs.travelers} travelers × ${inputs.tripsPerYear} trips`}
          />
          <MetricCard
            label="eCredit value"
            value={`$${outputs.eCreditValue.toLocaleString()}`}
            sub="@ ~1.7¢ per mile"
          />
        </div>
        <MetricCard
          label="Savings vs. no program"
          value={`$${outputs.savingsVsNoProgram.toLocaleString()}`}
          sub={`${outputs.savingsPercent.toFixed(1)}% back on travel spend`}
        />

        {/* Card recommendation */}
        <div
          className="rounded-[var(--radius-l)] p-5"
          style={{
            background: 'var(--color-neutral-5)',
            border: '1px solid var(--color-neutral-10)',
          }}
        >
          <p style={{ fontSize: 'var(--type-scale-12)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-neutral-600)', marginBottom: '4px' }}>
            Recommended card
          </p>
          <p style={{ fontWeight: '700', color: 'var(--color-delta-blue-600)', fontSize: 'var(--type-scale-16)' }}>
            {outputs.recommendedCard}
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/enroll/small-business"
          className="w-full inline-flex items-center justify-center gap-2 font-semibold transition-opacity hover:opacity-90"
          style={{
            height: '52px',
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

        <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-400)', textAlign: 'center' }}>
          Estimates based on published SkyMiles for Business rates. Actual earnings may vary.
        </p>
      </div>
    </div>
  )
}
