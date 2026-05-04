import type { SMBTier, SMBEarningRate } from '@/types'

export const smbTiers: Record<string, SMBTier> = {
  member: {
    id: 'member',
    name: 'Member',
    minTravelers: 0,
    minSpend: 0,
    earningRate: 'No earning — portal access and offers only',
    bonusPercentage: 0,
    accountManager: false,
    features: [
      'Free enrollment',
      'Portal access',
      'Personalized offers',
      'No mile earning at this tier',
    ],
  },
  plus: {
    id: 'plus',
    name: 'Plus',
    minTravelers: 5,
    minSpend: 5000,
    earningRate: 'Up to 10 miles per dollar',
    bonusPercentage: 0,
    accountManager: false,
    features: [
      'Company earns miles on every eligible flight',
      'Up to 10 miles/$ on non-hub premium routes',
      'eCredit redemptions (~1.5–2¢/mile)',
      'Transfer miles to employee personal accounts',
      'Sky Club membership purchase',
      'Management dashboard',
    ],
  },
  elite: {
    id: 'elite',
    name: 'Elite',
    minTravelers: 5,
    minSpend: 300000,
    earningRate: 'Up to 10 miles per dollar + 15% bonus',
    bonusPercentage: 15,
    accountManager: true,
    features: [
      'All Plus features',
      '+15% bonus on all miles earned',
      'Dedicated account manager',
      'Priority support',
    ],
  },
}

export const smbEarningRates: SMBEarningRate[] = [
  // Non-hub routes (full rates)
  { routeType: 'non-hub', cabin: 'main', milesPerDollar: 5 },
  { routeType: 'non-hub', cabin: 'comfort-plus', milesPerDollar: 7 },
  { routeType: 'non-hub', cabin: 'first', milesPerDollar: 8 },
  { routeType: 'non-hub', cabin: 'delta-one', milesPerDollar: 10 },
  // Hub routes (~half rate)
  { routeType: 'hub', cabin: 'main', milesPerDollar: 2.5 },
  { routeType: 'hub', cabin: 'comfort-plus', milesPerDollar: 3.5 },
  { routeType: 'hub', cabin: 'first', milesPerDollar: 4 },
  { routeType: 'hub', cabin: 'delta-one', milesPerDollar: 5 },
]

export const hubCities = ['ATL', 'DTW', 'MSP', 'SLC'] as const
