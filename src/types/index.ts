/**
 * Central type definitions for Delta for Business
 * All domain types defined here (Agent 1 - Architect)
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Segments
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type SegmentId = 'business-traveler' | 'enterprise' | 'large-enterprise'

export interface Segment {
  id: SegmentId
  name: string
  shortName: string
  tagline: string
  description: string
  color: string
  programType: 'self-serve' | 'negotiated'
  oldName: string
  enrollmentPath: string
  minTravelers: number
  maxTravelers: number | null
  annualSpend: {
    min: number
    max: number | null
  }
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
  keyBenefits: string[]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Cards
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type CardFamily = 'personal' | 'business'
export type CardTier = 'blue' | 'gold' | 'platinum' | 'reserve'

export interface CardCredit {
  name: string
  amount: number
  frequency: 'annual' | 'monthly'
  description: string
}

export interface CardEarningRate {
  category: string
  rate: string
}

export interface CardWelcomeBonus {
  miles: number
  spendRequirement: number
  months: number
}

export interface CardCompanionCert {
  cabin: string
  routes: string
}

export interface Card {
  id: string
  name: string
  slug: string
  family: CardFamily
  tier: CardTier
  annualFee: number
  firstYearFee: number
  welcomeBonus: CardWelcomeBonus
  earningRates: CardEarningRate[]
  credits: CardCredit[]
  mqdHeadstart: number
  mqdBoostRate: string
  companionCert: CardCompanionCert | null
  skyClubAccess: string
  image: string
  bestFor: string
  applyUrl: string
  // Optional legacy fields
  applicableSegments?: SegmentId[]
  learnMoreUrl?: string
  signupBonus?: string
  benefits?: string[]
  earning?: {
    base: number
    multiplied: number[]
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Medallion Status
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type MedallionTierLevel = 'gold' | 'platinum' | 'diamond'

export interface MedallionTier {
  id: string
  name: string
  mqdThreshold: number
  boardingZone: number
  skymilesBonus: number
  upgradeWindow: number
  skyClubAccess: string
  choiceBenefits: boolean
  upgradeQueuePosition: number
  color: string
}

export interface MedallionStatus {
  tier: MedallionTierLevel
  mqmRequired: number
  mqdRequired: number
  segmentsRequired: number
  benefits: string[]
  cardWaivers?: string[]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SkyMiles
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface EarningRate {
  program: SegmentId
  milesPerDollar: number
  domestic: number
  international: number
  bonusMultipliers?: {
    routeType: string
    multiplier: number
  }[]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Partners
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface Partner {
  id: string
  name: string
  category: 'airline' | 'hotel' | 'car' | 'lounge' | 'benefit'
  logo: string
  applicableSegments: SegmentId[]
}

export interface AirlinePartner {
  name: string
  code: string
  alliance: 'skyteam' | 'partner'
  region: string
}

export interface EarningPartner {
  name: string
  category: 'hotel' | 'car-rental' | 'rideshare' | 'retail' | 'dining' | 'vacation' | 'financial'
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SMB Tiers
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface SMBTier {
  id: string
  name: string
  minTravelers: number
  minSpend: number
  earningRate: string
  bonusPercentage: number
  accountManager: boolean
  features: string[]
}

export interface SMBEarningRate {
  routeType: 'non-hub' | 'hub'
  cabin: 'main' | 'comfort-plus' | 'first' | 'delta-one'
  milesPerDollar: number
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Navigation
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface NavLink {
  label: string
  href: string
  icon?: string
  children?: NavLink[]
}

export interface NavItem {
  label: string
  href: string
  icon?: string
  isExternal?: boolean
  children?: NavItem[]
  /** Optional secondary copy shown under the label inside mega menus. */
  description?: string
  /** Optional Microsoft Clarity event name fired when the link is clicked. */
  clarityEvent?: string
  /**
   * When true, the mega-menu renders a horizontal rule above this item to
   * separate it visually from the items above (e.g. "Compare" placed below
   * the four plan cards in the Programs dropdown).
   */
  separatorBefore?: boolean
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Content
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  applicableSegments?: SegmentId[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt: Date
  tags: string[]
  slug: string
}

export interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  excerpt: string
  results: {
    label: string
    value: string
  }[]
  slug: string
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Enrollment
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface EnrollmentFormData {
  companyName: string
  email: string
  phone: string
  numberOfTravelers: number
  estimatedAnnualSpend: number
  targetSegment?: SegmentId
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// User / Auth
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface User {
  id: string
  email: string
  name: string
  company: string
  role: 'admin' | 'manager' | 'traveler'
  segment: SegmentId
  createdAt: Date
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Dashboard
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface DashboardStats {
  milesBalance: number
  monthlySpend: number
  activeTravelers: number
  currentTier: MedallionTierLevel
  pointsToNextTier: number
}
