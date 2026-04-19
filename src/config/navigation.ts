import type { NavItem } from '@/types'

// ── Primary navigation (our pages) ─────────────────────────
export const mainNav: NavItem[] = [
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Business Traveler', href: '/programs/business-traveler' },
      { label: 'Enterprise program', href: '/programs/enterprise' },
      { label: 'Large-Enterprise program', href: '/programs/large-enterprise' },
      { label: 'Compare all programs', href: '/programs/compare' },
    ],
  },
  {
    label: 'Benefits',
    href: '/benefits',
    children: [
      { label: 'Corporate Priority', href: '/benefits/corporate-priority' },
      { label: 'Sky Club Access', href: '/benefits/sky-club' },
      { label: 'Meetings & Groups', href: '/benefits/meetings-groups' },
    ],
  },
  {
    label: 'Cards',
    href: '/cards',
    children: [
      { label: 'Personal Cards', href: '/cards/personal' },
      { label: 'Business Cards', href: '/cards/business' },
      { label: 'Compare all cards', href: '/cards/compare' },
    ],
  },
  { label: 'SkyMiles', href: '/skymiles' },
  { label: 'Medallion', href: '/medallion' },
  { label: 'Delta Sync', href: '/delta-sync' },
  { label: 'Tools', href: '/tools/program-selector' },
]

// ── Utility navigation (external delta.com links) ──────────
export const utilityNav: NavItem[] = [
  { label: 'Book a Flight', href: 'https://www.delta.com/flightsearch/book-a-flight', isExternal: true },
  { label: 'Flight Status', href: 'https://www.delta.com/flightstatus/search', isExternal: true },
  { label: 'Manage Trip', href: 'https://www.delta.com/mytrips/', isExternal: true },
  { label: 'Help', href: 'https://www.delta.com/us/en/need-help/overview', isExternal: true },
]

// ── Auth navigation ────────────────────────────────────────
export const authNav = {
  login: { label: 'Launch Tool', href: '/tools/program-selector' },
  cta: { label: 'Get Started', href: '/enroll/individual' },
}

// ── Footer navigation ──────────────────────────────────────
export const footerNav = {
  programs: [
    { label: 'Business Traveler', href: '/programs/business-traveler' },
    { label: 'Enterprise program', href: '/programs/enterprise' },
    { label: 'Large-Enterprise program', href: '/programs/large-enterprise' },
    { label: 'Compare programs', href: '/programs/compare' },
    { label: 'Delta SYNC', href: '/delta-sync' },
  ],
  benefits: [
    { label: 'Corporate Priority', href: '/benefits/corporate-priority' },
    { label: 'Sky Club Access', href: '/benefits/sky-club' },
    { label: 'Meetings & Groups', href: '/benefits/meetings-groups' },
  ],
  cards: [
    { label: 'Personal Cards', href: '/cards/personal' },
    { label: 'Business Cards', href: '/cards/business' },
    { label: 'Compare Cards', href: '/cards/compare' },
  ],
  resources: [
    { label: 'FAQ', href: '/resources/faq' },
    { label: 'Glossary', href: '/resources/glossary' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Case Studies', href: '/resources/case-studies' },
    { label: 'Program Terms', href: '/resources/program-terms' },
  ],
  tools: [
    { label: 'Program Selector Quiz', href: '/tools/program-selector' },
    { label: 'ROI Calculator', href: '/tools/roi-calculator' },
    { label: 'MQD Calculator', href: '/medallion/mqd-calculator' },
    { label: 'Card Comparison', href: '/cards/compare' },
    { label: 'Delta Sync Platform', href: '/delta-sync' },
  ],
  external: [
    { label: 'Delta.com', href: 'https://www.delta.com/', isExternal: true },
    { label: 'Personal SkyMiles', href: 'https://www.delta.com/us/en/skymiles/overview', isExternal: true },
    { label: 'Delta Vacations', href: 'https://www.delta.com/us/en/delta-vacations', isExternal: true },
    { label: 'Delta Cargo', href: 'https://www.deltacargo.com/Cargo/', isExternal: true },
    { label: 'Contact Sales', href: '/enroll/enterprise' },
  ],
}

// ── External URLs registry (for use across components) ─────
export const externalUrls = {
  deltaHome: 'https://www.delta.com/',
  bookFlight: 'https://www.delta.com/flightsearch/book-a-flight',
  flightStatus: 'https://www.delta.com/flightstatus/search',
  manageTrip: 'https://www.delta.com/mytrips/',
  help: 'https://www.delta.com/us/en/need-help/overview',
  login: 'https://www.delta.com/profile/login',
  personalSkyMiles: 'https://www.delta.com/us/en/skymiles/overview',
  medallionProgram: 'https://www.delta.com/us/en/skymiles/medallion-program/overview',
  creditCards: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/overview',
  skyClub: 'https://www.delta.com/us/en/delta-sky-club/access',
  vacations: 'https://www.delta.com/us/en/delta-vacations',
  cargo: 'https://www.deltacargo.com/Cargo/',
} as const
