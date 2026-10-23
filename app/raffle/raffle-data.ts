// MCAW 2026 Prize Raffle — single source of truth for the raffle page and T&Cs schedule.
//
// Each prize is a SEPARATE Small Society Lottery with its own Zeffy form.
// Paste each lottery's Zeffy link into `entryHref` once the forms are live.
// Prize details must match the Schedule in the published Terms & Conditions.

export type RafflePrize = {
  id: string            // Lottery ID, e.g. MCAW-01
  brand: string
  name: string
  quantity: number
  valueEach: number     // £, supplier RRP
  ticketPrice: number   // £ per entry
  maxEntries: number
  image: string
  imageAlt: string
  entryHref: string     // Zeffy raffle form URL for this lottery
  hidden?: boolean      // true = kept in the T&Cs schedule but not shown on the raffle page
}

export const rafflePrizes: RafflePrize[] = [
  {
    id: 'MCAW-01',
    brand: 'Vaphit',
    name: 'Quartz on Quartz Kit',
    quantity: 1,
    valueEach: 40,
    ticketPrice: 1,
    maxEntries: 20000,
    image: '/images/raffle/vaphit-quartz-on-quartz-kit.png',
    imageAlt: 'Vaphit Quartz on Quartz Kit: a clear quartz vaporiser with a rose-gold band',
    entryHref: '',
  },
  {
    id: 'MCAW-02',
    brand: 'Vaphit',
    name: '3D Pro Kit',
    quantity: 1,
    valueEach: 38,
    ticketPrice: 1,
    maxEntries: 20000,
    image: '/images/raffle/vaphit-3d-pro-kit.png',
    imageAlt: 'Vaphit 3D Pro Kit: a glass vaporiser and tools with a black Vaphit carry case',
    entryHref: '',
  },
  {
    id: 'MCAW-03',
    brand: 'Vaphit',
    name: '3D Kit',
    quantity: 2,
    valueEach: 21,
    ticketPrice: 1,
    maxEntries: 20000,
    image: '/images/raffle/vaphit-3d-kit.png',
    imageAlt: 'Vaphit 3D Kit: a clear glass vaporiser with a copper-coloured coil',
    entryHref: '',
  },
  {
    id: 'MCAW-04',
    brand: 'ZR2',
    name: 'Butane Ball Vape',
    quantity: 2,
    valueEach: 45,
    ticketPrice: 1,
    maxEntries: 20000,
    image: '/images/raffle/zr2-butane-ball-vape.png',
    imageAlt: 'ZR2 Butane Ball Vape: a clear glass vaporiser with metal balls inside',
    entryHref: '',
  },
  {
    id: 'MCAW-05',
    brand: 'Dynavap',
    name: 'M7 XL',
    quantity: 3,
    valueEach: 100.99,
    ticketPrice: 2,
    maxEntries: 10000,
    image: '/images/raffle/dynavap-m7-xl.png',
    imageAlt: 'Dynavap M7 XL: a long stainless-steel vaporiser',
    entryHref: '',
    // Temporarily hidden: delivery not yet confirmed. Delete this line to show it again.
    hidden: true,
  },
  {
    id: 'MCAW-06',
    brand: 'Dynavap',
    name: 'VonG X',
    quantity: 1,
    valueEach: 125.99,
    ticketPrice: 2.5,
    maxEntries: 8000,
    image: '/images/raffle/dynavap-vong-x.png',
    imageAlt: 'Dynavap VonG X: a stainless-steel vaporiser with a glass mouthpiece',
    entryHref: '',
    // Temporarily hidden: delivery not yet confirmed. Delete this line to show it again.
    hidden: true,
  },
]

// Key moments (UK time). Clocks go back on 25 October 2026, so all of these are GMT (UTC+0).
export const raffleDates = {
  subscriberOpen: new Date('2026-10-26T00:00:00Z'),
  generalOpen: new Date('2026-11-01T00:00:00Z'),
  close: new Date('2026-11-08T20:00:00Z'),
  draw: new Date('2026-11-08T21:00:00Z'),
}

export type RafflePhase = 'upcoming' | 'early-access' | 'open' | 'closed' | 'drawn'

export function getRafflePhase(now: Date = new Date()): RafflePhase {
  if (now < raffleDates.subscriberOpen) return 'upcoming'
  if (now < raffleDates.generalOpen) return 'early-access'
  if (now < raffleDates.close) return 'open'
  if (now < raffleDates.draw) return 'closed'
  return 'drawn'
}

export const raffleOrganiser = {
  society: 'Medicinal Cannabis UK CIC',
  companyNumber: '17373828',
  address: '111 New Union Street, Coventry, CV1 2NT',
  responsiblePerson: 'Jane Hinchliffe',
  council: 'Coventry City Council',
  registration: 'LN226334558',
  email: 'hello@mcukcic.co.uk',
}

export function formatGBP(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value)
}

/** Prizes shown on the raffle page (hidden ones are left out). */
export const visibleRafflePrizes = rafflePrizes.filter((p) => !p.hidden)

export const totalRaffleCount = visibleRafflePrizes.length
export const totalPrizeCount = visibleRafflePrizes.reduce((sum, p) => sum + p.quantity, 0)
export const totalPrizeValue = visibleRafflePrizes.reduce((sum, p) => sum + p.quantity * p.valueEach, 0)

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

/** 4 → "four"; falls back to digits above twelve. */
export function numberToWords(value: number): string {
  return numberWords[value] ?? String(value)
}
