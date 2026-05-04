/**
 * Mock dashboard data for Delta for Business prototype
 * All data is realistic and sourced from program documentation
 */

// ─── Company ─────────────────────────────────────────────────────────────────

export const mockCompany = {
  businessId: 'DELTA-AF7829',
  name: 'Acme Corp',
  tier: 'Plus' as const,
  travelersCount: 18,
  activeTravelersCount: 12,
  joinedDate: '2024-01-15',
}

// ─── Miles Balance ───────────────────────────────────────────────────────────

export const mockMilesBalance = {
  total: 1_234_567,
  earnedThisMonth: 48_200,
  earnedThisYear: 312_800,
  trend: '+12%',
  trendUp: true,
}

// ─── Tier Progress ───────────────────────────────────────────────────────────

export const mockTierProgress = {
  currentTier: 'Plus' as const,
  currentSpend: 204_000,
  nextTierThreshold: 300_000,
  previousTierThreshold: 5_000,
  percentToNextTier: 68,
  projectedMonthsToNextTier: 3,
  monthlySpendAvg: 24_500,
  projectedReachDate: 'July 2026',
  tiers: [
    { name: 'Member', threshold: 0, color: 'var(--color-neutral-400)' },
    { name: 'Plus', threshold: 5_000, color: 'var(--color-delta-blue-300)' },
    { name: 'Elite', threshold: 300_000, color: 'var(--color-delta-red-400)' },
  ],
}

// ─── Transactions (20 items) ─────────────────────────────────────────────────

export interface Transaction {
  id: string
  traveler: string
  date: string
  route: string
  origin: string
  destination: string
  miles: number
  fare: string
  fareAmount: number
  cabin: string
  status: 'completed' | 'pending' | 'cancelled'
}

export const mockTransactions: Transaction[] = [
  { id: '1', traveler: 'J. Smith', date: '2026-04-15', route: 'ATL-JFK', origin: 'ATL', destination: 'JFK', miles: 2400, fare: '$580', fareAmount: 580, cabin: 'Main Cabin', status: 'completed' },
  { id: '2', traveler: 'M. Garcia', date: '2026-04-14', route: 'LAX-ATL', origin: 'LAX', destination: 'ATL', miles: 1800, fare: '$420', fareAmount: 420, cabin: 'Comfort+', status: 'completed' },
  { id: '3', traveler: 'R. Chen', date: '2026-04-12', route: 'BOS-SEA', origin: 'BOS', destination: 'SEA', miles: 3200, fare: '$780', fareAmount: 780, cabin: 'First Class', status: 'completed' },
  { id: '4', traveler: 'T. Williams', date: '2026-04-11', route: 'JFK-MIA', origin: 'JFK', destination: 'MIA', miles: 1200, fare: '$310', fareAmount: 310, cabin: 'Main Cabin', status: 'completed' },
  { id: '5', traveler: 'A. Patel', date: '2026-04-10', route: 'ORD-DEN', origin: 'ORD', destination: 'DEN', miles: 2800, fare: '$640', fareAmount: 640, cabin: 'Comfort+', status: 'completed' },
  { id: '6', traveler: 'S. Kim', date: '2026-04-09', route: 'SFO-ORD', origin: 'SFO', destination: 'ORD', miles: 3600, fare: '$890', fareAmount: 890, cabin: 'Delta One', status: 'completed' },
  { id: '7', traveler: 'L. Thompson', date: '2026-04-08', route: 'ATL-LHR', origin: 'ATL', destination: 'LHR', miles: 8200, fare: '$2,100', fareAmount: 2100, cabin: 'Delta One', status: 'completed' },
  { id: '8', traveler: 'D. Martinez', date: '2026-04-07', route: 'LAX-CDG', origin: 'LAX', destination: 'CDG', miles: 9400, fare: '$2,450', fareAmount: 2450, cabin: 'Delta One', status: 'completed' },
  { id: '9', traveler: 'J. Smith', date: '2026-04-06', route: 'DFW-ATL', origin: 'DFW', destination: 'ATL', miles: 950, fare: '$220', fareAmount: 220, cabin: 'Main Cabin', status: 'completed' },
  { id: '10', traveler: 'M. Garcia', date: '2026-04-05', route: 'ATL-MIA', origin: 'ATL', destination: 'MIA', miles: 780, fare: '$190', fareAmount: 190, cabin: 'Main Cabin', status: 'completed' },
  { id: '11', traveler: 'N. Brown', date: '2026-04-04', route: 'SEA-SFO', origin: 'SEA', destination: 'SFO', miles: 1400, fare: '$360', fareAmount: 360, cabin: 'Comfort+', status: 'completed' },
  { id: '12', traveler: 'P. Davis', date: '2026-04-03', route: 'JFK-LAX', origin: 'JFK', destination: 'LAX', miles: 4200, fare: '$980', fareAmount: 980, cabin: 'First Class', status: 'completed' },
  { id: '13', traveler: 'C. Wilson', date: '2026-04-02', route: 'BOS-ATL', origin: 'BOS', destination: 'ATL', miles: 1600, fare: '$380', fareAmount: 380, cabin: 'Main Cabin', status: 'completed' },
  { id: '14', traveler: 'R. Chen', date: '2026-04-01', route: 'ATL-ORD', origin: 'ATL', destination: 'ORD', miles: 1100, fare: '$260', fareAmount: 260, cabin: 'Main Cabin', status: 'completed' },
  { id: '15', traveler: 'T. Williams', date: '2026-03-30', route: 'MIA-JFK', origin: 'MIA', destination: 'JFK', miles: 1250, fare: '$320', fareAmount: 320, cabin: 'Comfort+', status: 'completed' },
  { id: '16', traveler: 'A. Patel', date: '2026-03-28', route: 'DEN-ORD', origin: 'DEN', destination: 'ORD', miles: 2700, fare: '$610', fareAmount: 610, cabin: 'Main Cabin', status: 'completed' },
  { id: '17', traveler: 'S. Kim', date: '2026-03-27', route: 'ORD-SFO', origin: 'ORD', destination: 'SFO', miles: 3500, fare: '$820', fareAmount: 820, cabin: 'First Class', status: 'completed' },
  { id: '18', traveler: 'L. Thompson', date: '2026-03-25', route: 'LHR-ATL', origin: 'LHR', destination: 'ATL', miles: 8200, fare: '$2,050', fareAmount: 2050, cabin: 'Delta One', status: 'completed' },
  { id: '19', traveler: 'D. Martinez', date: '2026-03-24', route: 'ATL-CDG', origin: 'ATL', destination: 'CDG', miles: 9100, fare: '$2,380', fareAmount: 2380, cabin: 'Delta One', status: 'completed' },
  { id: '20', traveler: 'N. Brown', date: '2026-03-22', route: 'SFO-BOS', origin: 'SFO', destination: 'BOS', miles: 5200, fare: '$1,240', fareAmount: 1240, cabin: 'First Class', status: 'completed' },
]

// ─── Monthly Spend (12 months) ───────────────────────────────────────────────

export interface MonthlySpend {
  month: string
  spend: number
  miles: number
  cumulative: number
}

export const mockMonthlySpend: MonthlySpend[] = [
  { month: 'May 2025', spend: 18_200, miles: 36_400, cumulative: 18_200 },
  { month: 'Jun 2025', spend: 21_000, miles: 42_000, cumulative: 39_200 },
  { month: 'Jul 2025', spend: 19_500, miles: 39_000, cumulative: 58_700 },
  { month: 'Aug 2025', spend: 22_800, miles: 45_600, cumulative: 81_500 },
  { month: 'Sep 2025', spend: 25_400, miles: 50_800, cumulative: 106_900 },
  { month: 'Oct 2025', spend: 23_100, miles: 46_200, cumulative: 130_000 },
  { month: 'Nov 2025', spend: 17_600, miles: 35_200, cumulative: 147_600 },
  { month: 'Dec 2025', spend: 20_300, miles: 40_600, cumulative: 167_900 },
  { month: 'Jan 2026', spend: 19_800, miles: 39_600, cumulative: 187_700 },
  { month: 'Feb 2026', spend: 21_500, miles: 43_000, cumulative: 209_200 },
  { month: 'Mar 2026', spend: 24_800, miles: 49_600, cumulative: 234_000 },
  { month: 'Apr 2026', spend: 24_500, miles: 48_200, cumulative: 258_500 },
]

// ─── Travelers (Roster — 15 travelers) ───────────────────────────────────────

export interface TravelerRoster {
  id: string
  name: string
  email: string
  skymilesNumber: string
  status: 'active' | 'invited' | 'inactive'
  lastFlight: string
  milesThisYear: number
  medallionTier: string
  department: string
  flightsThisYear: number
}

export const mockTravelers: TravelerRoster[] = [
  { id: '1', name: 'Jane Smith', email: 'j.smith@acme.com', skymilesNumber: '1234567890', status: 'active', lastFlight: '2026-04-15', milesThisYear: 28_400, medallionTier: 'Gold', department: 'Sales', flightsThisYear: 18 },
  { id: '2', name: 'Miguel Garcia', email: 'm.garcia@acme.com', skymilesNumber: '2345678901', status: 'active', lastFlight: '2026-04-14', milesThisYear: 22_100, medallionTier: 'Gold', department: 'Sales', flightsThisYear: 14 },
  { id: '3', name: 'Robert Chen', email: 'r.chen@acme.com', skymilesNumber: '3456789012', status: 'active', lastFlight: '2026-04-12', milesThisYear: 41_600, medallionTier: 'Platinum', department: 'Engineering', flightsThisYear: 24 },
  { id: '4', name: 'Tanya Williams', email: 't.williams@acme.com', skymilesNumber: '4567890123', status: 'active', lastFlight: '2026-04-11', milesThisYear: 15_200, medallionTier: 'Member', department: 'Marketing', flightsThisYear: 10 },
  { id: '5', name: 'Arjun Patel', email: 'a.patel@acme.com', skymilesNumber: '5678901234', status: 'active', lastFlight: '2026-04-10', milesThisYear: 32_800, medallionTier: 'Gold', department: 'Executive', flightsThisYear: 20 },
  { id: '6', name: 'Sarah Kim', email: 's.kim@acme.com', skymilesNumber: '6789012345', status: 'active', lastFlight: '2026-04-09', milesThisYear: 54_200, medallionTier: 'Diamond', department: 'Executive', flightsThisYear: 32 },
  { id: '7', name: 'Laura Thompson', email: 'l.thompson@acme.com', skymilesNumber: '7890123456', status: 'active', lastFlight: '2026-04-08', milesThisYear: 48_900, medallionTier: 'Platinum', department: 'Sales', flightsThisYear: 28 },
  { id: '8', name: 'Diego Martinez', email: 'd.martinez@acme.com', skymilesNumber: '8901234567', status: 'active', lastFlight: '2026-04-07', milesThisYear: 61_400, medallionTier: 'Diamond', department: 'Sales', flightsThisYear: 36 },
  { id: '9', name: 'Nina Brown', email: 'n.brown@acme.com', skymilesNumber: '9012345678', status: 'active', lastFlight: '2026-04-04', milesThisYear: 18_700, medallionTier: 'Gold', department: 'Engineering', flightsThisYear: 12 },
  { id: '10', name: 'Patrick Davis', email: 'p.davis@acme.com', skymilesNumber: '0123456789', status: 'active', lastFlight: '2026-04-03', milesThisYear: 39_200, medallionTier: 'Gold', department: 'Marketing', flightsThisYear: 22 },
  { id: '11', name: 'Claire Wilson', email: 'c.wilson@acme.com', skymilesNumber: '1122334455', status: 'active', lastFlight: '2026-04-02', milesThisYear: 12_400, medallionTier: 'Member', department: 'Engineering', flightsThisYear: 8 },
  { id: '12', name: 'Marcus Lee', email: 'm.lee@acme.com', skymilesNumber: '2233445566', status: 'active', lastFlight: '2026-03-28', milesThisYear: 8_900, medallionTier: 'Member', department: 'Marketing', flightsThisYear: 6 },
  { id: '13', name: 'Rachel Torres', email: 'r.torres@acme.com', skymilesNumber: '', status: 'invited', lastFlight: '', milesThisYear: 0, medallionTier: 'Member', department: 'Sales', flightsThisYear: 0 },
  { id: '14', name: 'Kevin Anderson', email: 'k.anderson@acme.com', skymilesNumber: '', status: 'invited', lastFlight: '', milesThisYear: 0, medallionTier: 'Member', department: 'Engineering', flightsThisYear: 0 },
  { id: '15', name: 'Mia Jackson', email: 'm.jackson@acme.com', skymilesNumber: '', status: 'inactive', lastFlight: '2025-11-15', milesThisYear: 3_200, medallionTier: 'Member', department: 'Marketing', flightsThisYear: 2 },
]

// ─── Reports / Spend by Department ──────────────────────────────────────────

export interface DepartmentSpend {
  department: string
  spend: number
  miles: number
  travelers: number
}

export const mockSpendByDepartment: DepartmentSpend[] = [
  { department: 'Sales', spend: 89_000, miles: 178_000, travelers: 5 },
  { department: 'Engineering', spend: 54_000, miles: 108_000, travelers: 4 },
  { department: 'Executive', spend: 32_000, miles: 64_000, travelers: 2 },
  { department: 'Marketing', spend: 29_000, miles: 58_000, travelers: 4 },
]

export interface TopTraveler {
  name: string
  department: string
  spend: number
  miles: number
  flights: number
}

export const mockTopTravelers: TopTraveler[] = [
  { name: 'Diego Martinez', department: 'Sales', spend: 61_400, miles: 122_800, flights: 36 },
  { name: 'Sarah Kim', department: 'Executive', spend: 54_200, miles: 108_400, flights: 32 },
  { name: 'Laura Thompson', department: 'Sales', spend: 48_900, miles: 97_800, flights: 28 },
  { name: 'Robert Chen', department: 'Engineering', spend: 41_600, miles: 83_200, flights: 24 },
  { name: 'Patrick Davis', department: 'Marketing', spend: 39_200, miles: 78_400, flights: 22 },
]

// ─── Wallet / eCredits ───────────────────────────────────────────────────────

export interface ECredit {
  id: string
  amount: number
  issueDate: string
  expiryDate: string
  reason: string
  status: 'available' | 'pending' | 'used' | 'expired'
}

export const mockWallet = {
  eCreditBalance: 3_420,
  eCreditCount: 8,
  pendingRedemptions: 2,
  milesValue: 1_234_567,
  eCreditValuePerMile: 0.017,
}

export const mockECredits: ECredit[] = [
  { id: 'EC001', amount: 580, issueDate: '2026-01-15', expiryDate: '2027-01-15', reason: 'Miles Redemption', status: 'available' },
  { id: 'EC002', amount: 420, issueDate: '2026-02-01', expiryDate: '2027-02-01', reason: 'Miles Redemption', status: 'available' },
  { id: 'EC003', amount: 750, issueDate: '2026-02-20', expiryDate: '2027-02-20', reason: 'Miles Redemption', status: 'available' },
  { id: 'EC004', amount: 310, issueDate: '2026-03-05', expiryDate: '2027-03-05', reason: 'Miles Redemption', status: 'available' },
  { id: 'EC005', amount: 640, issueDate: '2026-03-18', expiryDate: '2027-03-18', reason: 'Miles Redemption', status: 'available' },
  { id: 'EC006', amount: 290, issueDate: '2026-03-25', expiryDate: '2026-09-25', reason: 'Miles Redemption', status: 'pending' },
  { id: 'EC007', amount: 185, issueDate: '2026-04-02', expiryDate: '2026-10-02', reason: 'Miles Redemption', status: 'pending' },
  { id: 'EC008', amount: 245, issueDate: '2026-04-10', expiryDate: '2027-04-10', reason: 'Miles Redemption', status: 'available' },
]

// ─── Settings — mock admin user ──────────────────────────────────────────────

export const mockAdminUser = {
  id: 'user-001',
  name: 'Arjun Patel',
  email: 'a.patel@acme.com',
  role: 'Primary Admin',
  businessId: 'DELTA-AF7829',
  tier: 'Plus',
  phone: '+1 (415) 555-0192',
  title: 'Director of Operations',
}

export const mockSettings = {
  company: {
    name: 'Acme Corp',
    legalName: 'Acme Corporation LLC',
    ein: '82-4561934',
    industry: 'Technology',
    website: 'https://acmecorp.com',
    address: '500 Market St, San Francisco, CA 94105',
    travelersCount: 18,
  },
  notifications: {
    monthlyReport: true,
    tierAlerts: true,
    expiryAlerts: true,
    weeklyDigest: false,
    newTraveler: true,
    bookingConfirmation: false,
  },
  integrations: {
    concur: false,
    tmc: false,
    tmcName: '',
  },
}

// ─── Milestone Log ───────────────────────────────────────────────────────────

export interface Milestone {
  date: string
  label: string
  description: string
  type: 'enrollment' | 'tier' | 'spend' | 'alert'
}

export const mockMilestones: Milestone[] = [
  { date: 'Apr 2026', label: 'Reached $200K cumulative', description: '66% of Elite threshold — on track for July', type: 'spend' },
  { date: 'Mar 2026', label: 'Monthly record: $24,800', description: 'Highest monthly spend to date', type: 'spend' },
  { date: 'Feb 2026', label: 'Reached $150,000 (50%)', description: 'Plus perks fully active — 5-traveler minimum maintained', type: 'tier' },
  { date: 'Nov 2025', label: 'Added 3 new travelers', description: 'Team expanded to 18 registered travelers', type: 'enrollment' },
  { date: 'Mar 2025', label: 'Upgraded to Plus tier', description: 'Crossed $5,000 annual spend with 5 travelers registered', type: 'tier' },
  { date: 'Jan 2024', label: 'Enrolled as Member', description: 'SkyMiles for Business account created — Business ID: DELTA-AF7829', type: 'enrollment' },
]

// ─── Dashboard KPI helper ────────────────────────────────────────────────────

export const mockDashboardKPIs = {
  milesBalance: mockMilesBalance.total,
  milesEarnedThisMonth: mockMilesBalance.earnedThisMonth,
  milesTrend: mockMilesBalance.trend,
  milesTrendUp: mockMilesBalance.trendUp,
  tierCurrent: mockTierProgress.currentTier,
  tierPercent: mockTierProgress.percentToNextTier,
  tierMonthsLeft: mockTierProgress.projectedMonthsToNextTier,
  monthlySpend: mockTierProgress.monthlySpendAvg,
  monthlySpendTrend: '+8%',
  monthlySpendTrendUp: true,
  activeTravelers: mockCompany.activeTravelersCount,
  totalTravelers: mockCompany.travelersCount,
}
