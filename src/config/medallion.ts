import type { MedallionTier } from '@/types'

export const medallionTiers: Record<string, MedallionTier> = {
  silver: {
    id: 'silver',
    name: 'Silver Medallion',
    mqdThreshold: 5000,
    boardingZone: 6,
    skymilesBonus: 40,
    upgradeWindow: 24,
    skyClubAccess: 'None',
    choiceBenefits: false,
    upgradeQueuePosition: 4,
    color: 'var(--color-medallion-silver)',
  },
  gold: {
    id: 'gold',
    name: 'Gold Medallion',
    mqdThreshold: 10000,
    boardingZone: 5,
    skymilesBonus: 60,
    upgradeWindow: 72,
    skyClubAccess: 'None',
    choiceBenefits: false,
    upgradeQueuePosition: 3,
    color: 'var(--color-medallion-gold)',
  },
  platinum: {
    id: 'platinum',
    name: 'Platinum Medallion',
    mqdThreshold: 15000,
    boardingZone: 4,
    skymilesBonus: 80,
    upgradeWindow: 120,
    skyClubAccess: 'Limited',
    choiceBenefits: true,
    upgradeQueuePosition: 2,
    color: 'var(--color-medallion-platinum)',
  },
  diamond: {
    id: 'diamond',
    name: 'Diamond Medallion',
    mqdThreshold: 28000,
    boardingZone: 3,
    skymilesBonus: 120,
    upgradeWindow: 120,
    skyClubAccess: 'Full',
    choiceBenefits: true,
    upgradeQueuePosition: 1,
    color: 'var(--color-medallion-diamond)',
  },
}

export const medallionOrder = ['silver', 'gold', 'platinum', 'diamond'] as const
