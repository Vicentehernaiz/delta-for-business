// SSR-safe wrappers around Microsoft Clarity's global `window.clarity` API.
// Components must NEVER touch window.clarity directly — go through these helpers.
//
// CLARITY API surface used:
//   window.clarity('event', name)            → custom event
//   window.clarity('set',   key, value)      → custom dimension/tag
//   window.clarity('identify', userId, ...)  → user identification

type ClarityFn = (...args: unknown[]) => void

declare global {
  interface Window {
    clarity?: ClarityFn
  }
}

function getClarity(): ClarityFn | null {
  if (typeof window === 'undefined') return null
  return typeof window.clarity === 'function' ? window.clarity : null
}

/**
 * Fire a custom Clarity event. Safe to call during SSR (no-op).
 * Event names should be short, snake_case, and contain no PII.
 */
export function clarityEvent(name: string): void {
  const c = getClarity()
  if (!c) return
  try {
    c('event', name)
  } catch {
    // Swallow — analytics must never break the UI.
  }
}

/**
 * Set a custom dimension / tag on the current Clarity session.
 * Use this for non-PII attributes (segment, plan, role, experiment variant).
 */
export function claritySet(key: string, value: string): void {
  const c = getClarity()
  if (!c) return
  try {
    c('set', key, value)
  } catch {
    // no-op
  }
}

/**
 * Identify the current user. Pass a stable, non-PII id (e.g. hashed user id).
 * Optional friendly name / page id are forwarded to Clarity as-is.
 */
export function clarityIdentify(
  userId: string,
  sessionId?: string,
  pageId?: string,
  friendlyName?: string,
): void {
  const c = getClarity()
  if (!c) return
  try {
    c('identify', userId, sessionId, pageId, friendlyName)
  } catch {
    // no-op
  }
}
