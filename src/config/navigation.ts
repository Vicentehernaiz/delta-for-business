import type { NavItem } from '@/types'

// ── Primary navigation (our pages) ─────────────────────────
export const mainNav: NavItem[] = [
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Individual traveler', href: '/programs/individual' },
      { label: 'Gold business plan', href: '/programs/business-traveler' },
      { label: 'Platinum business plan', href: '/programs/enterprise' },
      { label: 'Diamond business plan', href: '/programs/large-enterprise' },
      { label: 'Compare business plans', href: '/programs/compare', separatorBefore: true },
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
  { label: 'Delta Business Tool', href: '/delta-sync' },
  {
    label: 'Calculate Plan',
    // Parent href points at the program-selector quiz so keyboard/middle-click
    // on the trigger still goes somewhere useful. The dropdown is the primary
    // interaction.
    href: '/tools/program-selector',
    children: [
      {
        label: 'Take a quiz to customize your plan',
        href: '/tools/program-selector',
        description: 'Answer a few questions and we’ll recommend the right plan',
        clarityEvent: 'nav_calculate_plan_quiz_clicked',
      },
      {
        label: 'Plan Calculator',
        href: '/tools/plan-calculator',
        description: 'Estimate miles earned and projected ROI for your team',
        clarityEvent: 'nav_calculate_plan_calculator_clicked',
      },
      {
        label: 'Plan Comparison Tool',
        href: '/tools/plan-comparison',
        description: 'See Individual, Gold, Platinum and Diamond business plans side by side',
        clarityEvent: 'nav_calculate_plan_comparison_clicked',
      },
    ],
  },
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
  login: { label: 'Log In', href: '/login' },
  cta: { label: 'Get Started', href: '/enroll/individual' },
}

// ── Footer navigation ──────────────────────────────────────
export const footerNav = {
  programs: [
    { label: 'Individual traveler', href: '/programs/individual' },
    { label: 'Gold business plan', href: '/programs/business-traveler' },
    { label: 'Platinum business plan', href: '/programs/enterprise' },
    { label: 'Diamond business plan', href: '/programs/large-enterprise' },
    { label: 'Compare business plans', href: '/programs/compare' },
    { label: 'Delta Business Tool', href: '/delta-sync' },
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
    { label: 'Delta Business Tool', href: '/delta-sync' },
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
