// src/config/medallion.ts — Medallion Status for Business
import type { MedallionTier } from '@/types'

export const medallionTiers: Record<string, MedallionTier & {
  shortName: string
  hex: string
  gradient: string
  boardingLabel: string
  skymilesMult: number
  freeBags: number
  sameDayChange: string
  skyClubNote: string
  internationalLounge: string
  waivedFees: string
  businessTagline: string
  businessContext: string
  mainCabinPlusUpgrade: string
  firstClassUpgrade: string
  deltaOneUpgrade: string
  companyPerk?: string
}> = {
  gold: {
    id: 'gold',
    name: 'Gold Medallion',
    shortName: 'Gold',
    mqdThreshold: 10000,
    boardingZone: 5,
    boardingLabel: 'Sky Priority',
    skymilesBonus: 60,
    skymilesMult: 8,
    upgradeWindow: 72,
    skyClubAccess: 'None',
    skyClubNote: 'No access',
    choiceBenefits: false,
    upgradeQueuePosition: 3,
    color: 'var(--color-medallion-gold)',
    hex: '#8f6c32',
    gradient: 'linear-gradient(135deg, #6b4f22 0%, #b8860b 100%)',
    freeBags: 2,
    sameDayChange: 'Free same-day confirmed',
    internationalLounge: 'SkyTeam (Delta Plus)',
    waivedFees: 'Most change fees',
    businessTagline: 'The entry tier for frequent corporate travelers — real upgrade access starts here.',
    businessContext: 'At $10K MQD, business travelers flying 15–20 round trips see consistent First Class upgrades. The 72-hour window means upgrades clear before departure day.',
    mainCabinPlusUpgrade: 'Occasional',
    firstClassUpgrade: 'Limited',
    deltaOneUpgrade: 'No',
  },
  platinum: {
    id: 'platinum',
    name: 'Platinum Medallion',
    shortName: 'Platinum',
    mqdThreshold: 15000,
    boardingZone: 4,
    boardingLabel: 'Sky Priority',
    skymilesBonus: 80,
    skymilesMult: 9,
    upgradeWindow: 120,
    skyClubAccess: 'Limited',
    skyClubNote: '$50/visit',
    choiceBenefits: true,
    upgradeQueuePosition: 2,
    color: 'var(--color-medallion-platinum)',
    hex: '#726394',
    gradient: 'linear-gradient(135deg, #4a3d6b 0%, #726394 100%)',
    freeBags: 3,
    sameDayChange: 'Free',
    internationalLounge: 'Yes (included)',
    waivedFees: 'Most fees waived',
    businessTagline: 'High-volume road warriors get Sky Club access, Choice Benefits, and top upgrade priority.',
    businessContext: 'Travelers spending $15K+ on Delta qualify for Choice Benefits — redeem for a companion certificate, Global Upgrade Certificates, or a bonus SkyMiles deposit. 120-hour upgrade window.',
    mainCabinPlusUpgrade: 'Frequent',
    firstClassUpgrade: 'Possible',
    deltaOneUpgrade: 'No',
  },
  diamond: {
    id: 'diamond',
    name: 'Diamond Medallion',
    shortName: 'Diamond',
    mqdThreshold: 28000,
    boardingZone: 3,
    boardingLabel: 'Sky Priority',
    skymilesBonus: 120,
    skymilesMult: 11,
    upgradeWindow: 120,
    skyClubAccess: 'Full',
    skyClubNote: 'Complimentary + guests',
    choiceBenefits: true,
    upgradeQueuePosition: 1,
    color: 'var(--color-medallion-diamond)',
    hex: '#002d59',
    gradient: 'linear-gradient(135deg, #001a36 0%, #002d59 100%)',
    freeBags: 3,
    sameDayChange: 'Free',
    internationalLounge: 'Yes (included)',
    waivedFees: 'All fees waived',
    businessTagline: "Delta's pinnacle tier — unlimited Sky Club, top upgrade queue, Delta 360° concierge.",
    businessContext: 'For executives and road warriors spending $28K+. Delta 360° provides a dedicated concierge. Sky Club access is unlimited, including for guests. Choice Benefits include multiple Global Upgrade Certificates.',
    mainCabinPlusUpgrade: 'Very frequent',
    firstClassUpgrade: 'Best odds',
    deltaOneUpgrade: 'Yes (via worldwide certificates)',
  },
}

export const medallionOrder = ['gold', 'platinum', 'diamond'] as const

export interface BenefitRow {
  feature: string
  category?: string
  gold: string
  platinum: string
  diamond: string
}

export const MEDALLION_BENEFITS_TABLE: BenefitRow[] = [
  { feature: 'MQD to qualify', gold: '$10,000', platinum: '$15,000', diamond: '$28,000' },
  { feature: 'Miles multiplier', gold: '8× per $', platinum: '9× per $', diamond: '11× per $' },
  { feature: 'SkyMiles bonus', gold: '+60%', platinum: '+80%', diamond: '+120%' },
  { feature: 'Boarding zone', gold: 'Sky Priority', platinum: 'Sky Priority', diamond: 'Sky Priority' },
  { feature: 'Sky Priority service', gold: 'Yes', platinum: 'Yes', diamond: 'Yes' },
  { feature: 'Upgrade priority', gold: 'Medium', platinum: 'High', diamond: 'Highest' },
  { feature: 'Upgrade window', gold: '72 hrs', platinum: '120 hrs', diamond: '120 hrs' },
  { feature: 'Complimentary upgrades', gold: 'Yes', platinum: 'Yes', diamond: 'Best odds' },
  { feature: 'First Class upgrades', gold: 'Yes', platinum: 'Yes', diamond: 'Yes' },
  { feature: 'Comfort+ upgrades', gold: 'Earlier', platinum: 'Shortly after booking', diamond: 'Immediately' },
  { feature: 'Free checked bags', gold: '2 free', platinum: '3 free', diamond: '3 free' },
  { feature: 'Same-day changes', gold: 'Free confirmed', platinum: 'Free', diamond: 'Free' },
  { feature: 'Waived fees', gold: 'More', platinum: 'Most', diamond: 'All' },
  { feature: 'Sky Club access', gold: 'No', platinum: '$50/visit', diamond: 'Complimentary' },
  { feature: 'International lounges', gold: 'SkyTeam Elite+', platinum: 'Yes', diamond: 'Yes' },
  { feature: 'Choice Benefits', gold: 'No', platinum: '1 choice', diamond: '2 choices' },
  { feature: 'Corporate Priority stacks', gold: 'Yes', platinum: 'Yes', diamond: 'Yes' },
]

export interface SeatUpgradeRow {
  tier: string
  mainCabinPlus: string
  firstClass: string
  deltaOne: string
}

export const SEAT_UPGRADE_LIKELIHOOD: SeatUpgradeRow[] = [
  { tier: 'Gold',     mainCabinPlus: 'Occasional',    firstClass: 'Limited',   deltaOne: '—' },
  { tier: 'Platinum', mainCabinPlus: 'Frequent',      firstClass: 'Possible',  deltaOne: '—' },
  { tier: 'Diamond',  mainCabinPlus: 'Very frequent', firstClass: 'Best odds', deltaOne: 'Via certificates' },
]

export interface MedallionXerRow {
  status: string
  multiplier: string
}

export const MEDALLION_XERS_TABLE: MedallionXerRow[] = [
  { status: 'No status',  multiplier: '5×' },
  { status: 'Gold',       multiplier: '8×' },
  { status: 'Platinum',   multiplier: '9×' },
  { status: 'Diamond',    multiplier: '11×' },
]
