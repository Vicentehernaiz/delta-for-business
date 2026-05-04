/**
 * Plan catalog for enrollment funnels.
 * Spend-primary: each plan keys off annual Delta spend; the traveler band is
 * descriptive ("typically accommodates X to Y travelers").
 */

export type EnrollPlanKey = 'individual' | 'gold' | 'platinum' | 'diamond'

export interface EnrollPlan {
  key: EnrollPlanKey
  /** Display name */
  name: string
  /** Short eyebrow shown above the plan name on enrollment pages */
  badge: string
  /** Phosphor icon (with weight prefix) for the plan badge */
  icon: string
  /** Spend range copy — primary eligibility line */
  spend: string
  /** Traveler band copy — descriptive only, never primary */
  travelersTypical: string
  /** One-line "what is this" */
  short: string
  /** Long-form description shown in the match panel */
  long: string
  /** Form behaviour: self-serve account creation OR sales contact request */
  formKind: 'self-serve' | 'sales'
  /** Submit button label */
  ctaLabel: string
  /** Where "Learn more" links to (program page) */
  learnHref: string
  /** Where this plan's enrollment lives */
  enrollHref: string
  /** Top 4–5 perks */
  perks: string[]
  /** Note about MQDs / what is included automatically */
  programNote: { title: string; body: string }
  /** Brand accent color (CSS var or hex) */
  accent: string
}

export const ENROLL_PLANS: Record<EnrollPlanKey, EnrollPlan> = {
  individual: {
    key: 'individual',
    name: 'Individual',
    badge: 'Solo · Free · No employer needed',
    icon: 'ph-fill ph-user',
    spend: 'Up to $5,000 / year on Delta',
    travelersTypical: 'For one solo traveler',
    short: 'For solo business travelers — freelancers, consultants, or employees without a corporate program.',
    long: 'Join free with just your work email. Earn personal SkyMiles on every Delta flight, plus exclusive business partner perks — no employer signup, no company account.',
    formKind: 'self-serve',
    ctaLabel: 'Create my SkyMiles account',
    learnHref: '/programs/individual',
    enrollHref: '/enroll/individual',
    perks: [
      'Hertz Five Star (free)',
      'CLEAR Plus discount (~30% off $189/yr)',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount + targeted bonus offers',
      'Personal SkyMiles + Comfort+ promotions',
      'Delta Business Tool · limited (view-only)',
    ],
    programNote: {
      title: "You're joining SkyMiles.",
      body: 'A personal Delta SkyMiles account is created (or linked, if you have one) — earn miles on every Delta flight starting day one. No company account, no employer needed.',
    },
    accent: 'var(--color-segment-individual)',
  },
  gold: {
    key: 'gold',
    name: 'Gold business plan',
    badge: 'Self-serve · Free',
    icon: 'ph-fill ph-buildings',
    spend: '$5,000 – $50,000 annual Delta spend',
    travelersTypical: 'Typically accommodates 2 to 49 travelers',
    short: 'For small teams. Company rewards pool, dual earning, and Delta Business Tool — all free.',
    long: 'The Gold business plan is Delta\'s free self-serve corporate program. Earn up to 12 company miles per dollar (when paired with the Amex Gold Business card), manage travelers from a dashboard, and unlock partner perks from day one.',
    formKind: 'self-serve',
    ctaLabel: 'Create company account',
    learnHref: '/programs/business-traveler',
    enrollHref: '/enroll/gold',
    perks: [
      'Up to 12 company miles per dollar (with Amex Gold Business)',
      'Pooled SkyMiles wallet · Pooled MQDs',
      'Free Travel Management Dashboard',
      'AMEX SkyMiles Gold Business · annual fee waived',
      'Sky Priority boarding (Zone 4)',
      '24/7 priority support line',
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'When you register the corporate account, Delta opens a company SkyMiles pool with pooled MQDs — no separate signup needed. Travelers keep their personal SkyMiles untouched.',
    },
    accent: '#8f6c32',
  },
  platinum: {
    key: 'platinum',
    name: 'Platinum business plan',
    badge: 'Negotiated · Talk to sales',
    icon: 'ph-fill ph-briefcase',
    spend: '$50,000 – $300,000 annual Delta spend',
    travelersTypical: 'Typically accommodates 50 to 499 travelers',
    short: 'Negotiated agreement with dynamic fares, full Corporate Priority, and dedicated account manager.',
    long: 'Negotiated agreement with discounted fares, full Corporate Priority benefits suite, AI-powered Travel Management Dashboard, and a dedicated Delta account manager. Concur / TMC integration included.',
    formKind: 'sales',
    ctaLabel: 'Request sales contact',
    learnHref: '/programs/enterprise',
    enrollHref: '/enroll/platinum',
    perks: [
      'Up to 14 company miles per dollar (with Amex Platinum Business)',
      'Reduced fair rates · 3-seat reserves up to 24h',
      'Travel Management Dashboard with AI Insights',
      'AMEX SkyMiles Platinum Business · annual fee waived',
      'Sky Priority boarding (Zone 3) · Reduced SkyClub entry fee',
      '15% of business-travel miles to personal wallet',
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'When the Platinum business plan agreement is signed, Delta opens a company SkyMiles pool alongside the negotiated fares — no separate signup needed.',
    },
    accent: '#6f7f8d',
  },
  diamond: {
    key: 'diamond',
    name: 'Diamond business plan',
    badge: 'Enterprise · Talk to sales',
    icon: 'ph-fill ph-globe-hemisphere-west',
    spend: '$300,000+ annual Delta spend',
    travelersTypical: 'Typically accommodates 500+ travelers',
    short: 'Custom pricing, global priority, and full Delta Business Tool platform with dedicated concierge.',
    long: 'Delta\'s top-tier managed travel program — custom pricing, partner airline coverage (AF, KLM, LATAM, Virgin Atlantic), unused ticket transfer, 24/7 Corporate Solutions, dedicated account support concierge, and full Delta Business Tool platform access.',
    formKind: 'sales',
    ctaLabel: 'Request sales contact',
    learnHref: '/programs/large-enterprise',
    enrollHref: '/enroll/diamond',
    perks: [
      'Up to 16 company miles per dollar (with Amex Reserve Business)',
      'Premium reduced fair rates · 5-seat reserves up to 24h',
      'AI-powered dashboard · Dedicated account concierge',
      'AMEX SkyMiles Reserve Business · annual fee waived',
      'Sky Priority boarding (Zone 2) · Waived SkyClub entry fee',
      '20% of business-travel miles to personal wallet',
    ],
    programNote: {
      title: 'SkyMiles for Business is created automatically.',
      body: 'The Diamond business plan includes a global SkyMiles pool, full Delta Business Tool access, and dedicated onboarding — no separate signup needed.',
    },
    accent: '#726394',
  },
}

export const ENROLL_PLAN_ORDER: EnrollPlanKey[] = ['individual', 'gold', 'platinum', 'diamond']

/** Spend bracket → plan match. Drives the funnel selector. */
export type SpendBracket = 'under-5k' | '5k-50k' | '50k-300k' | '300k-plus'

export const SPEND_BRACKETS: { value: SpendBracket; label: string; sub: string; plan: EnrollPlanKey }[] = [
  {
    value: 'under-5k',
    label: 'Up to $5K / year',
    sub: 'Solo / personal use',
    plan: 'individual',
  },
  {
    value: '5k-50k',
    label: '$5K – $50K / year',
    sub: 'Small team',
    plan: 'gold',
  },
  {
    value: '50k-300k',
    label: '$50K – $300K / year',
    sub: 'Mid-market',
    plan: 'platinum',
  },
  {
    value: '300k-plus',
    label: '$300K+ / year',
    sub: 'Enterprise',
    plan: 'diamond',
  },
]

export function planForSpend(value: SpendBracket): EnrollPlanKey {
  return SPEND_BRACKETS.find((b) => b.value === value)?.plan ?? 'individual'
}
