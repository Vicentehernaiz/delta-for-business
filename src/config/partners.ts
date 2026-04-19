import type { AirlinePartner, EarningPartner } from '@/types'

export const airlinePartners: AirlinePartner[] = [
  // SkyTeam core
  { name: 'Air France', code: 'AF', alliance: 'skyteam', region: 'Europe' },
  { name: 'KLM', code: 'KL', alliance: 'skyteam', region: 'Europe' },
  { name: 'Virgin Atlantic', code: 'VS', alliance: 'skyteam', region: 'Europe' },
  { name: 'Aeromexico', code: 'AM', alliance: 'skyteam', region: 'Latin America' },
  { name: 'Korean Air', code: 'KE', alliance: 'skyteam', region: 'Asia-Pacific' },
  // Partners
  { name: 'WestJet', code: 'WS', alliance: 'partner', region: 'North America' },
  { name: 'Alaska Airlines', code: 'AS', alliance: 'partner', region: 'North America' },
  { name: 'Hawaiian Airlines', code: 'HA', alliance: 'partner', region: 'North America' },
  { name: 'GOL', code: 'G3', alliance: 'partner', region: 'Latin America' },
  { name: 'LATAM', code: 'LA', alliance: 'partner', region: 'Latin America' },
  { name: 'Aerolíneas Argentinas', code: 'AR', alliance: 'partner', region: 'Latin America' },
  { name: 'China Eastern', code: 'MU', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'China Southern', code: 'CZ', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'Vietnam Airlines', code: 'VN', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'XiamenAir', code: 'MF', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'Garuda Indonesia', code: 'GA', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'Air Tahiti Nui', code: 'TN', alliance: 'partner', region: 'Asia-Pacific' },
  { name: 'ITA Airways', code: 'AZ', alliance: 'partner', region: 'Europe' },
  { name: 'Etihad Airways', code: 'EY', alliance: 'partner', region: 'Middle East' },
  { name: 'Saudia', code: 'SV', alliance: 'partner', region: 'Middle East' },
  { name: 'Kenya Airways', code: 'KQ', alliance: 'partner', region: 'Africa' },
  { name: 'Middle East Airlines', code: 'ME', alliance: 'partner', region: 'Middle East' },
  { name: 'TAROM', code: 'RO', alliance: 'partner', region: 'Europe' },
]

export const earningPartners: EarningPartner[] = [
  // Hotels
  { name: 'Marriott Bonvoy', category: 'hotel' },
  { name: 'Hilton Honors', category: 'hotel' },
  { name: 'IHG', category: 'hotel' },
  { name: 'Hyatt', category: 'hotel' },
  { name: 'Wyndham', category: 'hotel' },
  { name: 'Best Western', category: 'hotel' },
  { name: 'Choice Hotels', category: 'hotel' },
  // Car rentals
  { name: 'Hertz', category: 'car-rental' },
  { name: 'Avis', category: 'car-rental' },
  { name: 'Budget', category: 'car-rental' },
  { name: 'National', category: 'car-rental' },
  { name: 'Alamo', category: 'car-rental' },
  { name: 'Enterprise', category: 'car-rental' },
  { name: 'Sixt', category: 'car-rental' },
  { name: 'Dollar', category: 'car-rental' },
  { name: 'Thrifty', category: 'car-rental' },
  // Rideshare
  { name: 'Lyft', category: 'rideshare' },
  // Retail
  { name: 'Delta SkyMiles Shopping', category: 'retail' },
  // Dining
  { name: 'Delta SkyMiles Dining', category: 'dining' },
  // Vacations
  { name: 'Delta Vacations', category: 'vacation' },
  // Financial
  { name: 'SkyMiles Mortgage', category: 'financial' },
  { name: 'SkyMiles Investments', category: 'financial' },
]
