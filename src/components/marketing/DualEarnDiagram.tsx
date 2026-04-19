export function DualEarnDiagram() {
  return (
    <div
      className="rounded-[var(--radius-l)] p-8"
      style={{ background: 'var(--color-neutral-5)', border: '1px solid var(--color-neutral-10)' }}
    >
      {/* One ticket row */}
      <div className="flex items-center justify-center mb-8">
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-[var(--radius-l)]"
          style={{
            background: 'var(--color-delta-blue-700)',
            color: 'var(--color-neutral-0)',
          }}
        >
          <i className="ph-fill ph-airplane-takeoff text-2xl"></i>
          <div>
            <p style={{ fontSize: 'var(--type-scale-12)', opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              1 flight ticket
            </p>
            <p style={{ fontSize: 'var(--type-scale-16)', fontWeight: '700', fontFamily: 'var(--font-display)' }}>
              NYC → LAX · $650 fare
            </p>
          </div>
        </div>
      </div>

      {/* Arrow split */}
      <div className="relative flex justify-center mb-8">
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '20px', background: 'var(--color-neutral-200)' }}></div>
          <div className="flex items-center gap-16">
            {/* Left branch */}
            <div className="flex flex-col items-end">
              <div
                style={{
                  width: '80px',
                  height: '2px',
                  background: 'var(--color-delta-blue-600)',
                  position: 'relative',
                }}
              ></div>
              <div style={{ width: '2px', height: '20px', background: 'var(--color-delta-blue-600)', marginRight: '-1px' }}></div>
            </div>
            <i className="ph-bold ph-arrows-split text-2xl" style={{ color: 'var(--color-neutral-400)' }}></i>
            {/* Right branch */}
            <div className="flex flex-col items-start">
              <div
                style={{
                  width: '80px',
                  height: '2px',
                  background: 'var(--color-delta-red-400)',
                }}
              ></div>
              <div style={{ width: '2px', height: '20px', background: 'var(--color-delta-red-400)', marginLeft: '-1px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Two accounts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Employee account */}
        <div
          className="rounded-[var(--radius-l)] p-4 text-center"
          style={{ background: 'var(--color-neutral-0)', border: '2px solid var(--color-delta-blue-600)' }}
        >
          <div
            className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{ background: 'var(--color-delta-blue-50)' }}
          >
            <i className="ph-fill ph-user text-xl" style={{ color: 'var(--color-delta-blue-600)' }}></i>
          </div>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
            Employee SkyMiles
          </p>
          <p
            style={{
              fontSize: 'var(--type-scale-28)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-blue-600)',
            }}
          >
            5,200
          </p>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>miles earned</p>
        </div>

        {/* Company account */}
        <div
          className="rounded-[var(--radius-l)] p-4 text-center"
          style={{ background: 'var(--color-neutral-0)', border: '2px solid var(--color-delta-red-400)' }}
        >
          <div
            className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{ background: 'var(--color-delta-red-50)' }}
          >
            <i className="ph-fill ph-buildings text-xl" style={{ color: 'var(--color-delta-red-400)' }}></i>
          </div>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
            Company SkyMiles
          </p>
          <p
            style={{
              fontSize: 'var(--type-scale-28)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              color: 'var(--color-delta-red-400)',
            }}
          >
            7,800
          </p>
          <p style={{ fontSize: 'var(--type-scale-12)', color: 'var(--color-neutral-600)' }}>miles earned</p>
        </div>
      </div>

      {/* Zero-sum clarification */}
      <div
        className="rounded-[var(--radius-l)] px-4 py-3 flex items-center gap-3"
        style={{ background: 'var(--color-neutral-0)', border: '1px solid var(--color-neutral-10)' }}
      >
        <i className="ph-fill ph-check-circle text-xl flex-shrink-0" style={{ color: 'var(--color-delta-red-400)' }}></i>
        <p style={{ fontSize: 'var(--type-scale-14)', color: 'var(--color-neutral-600)' }}>
          <strong style={{ color: 'var(--color-delta-blue-600)' }}>Neither reduces the other.</strong>
          {' '}Employee miles are fully personal — they don't come from the company pool.
        </p>
      </div>
    </div>
  )
}
