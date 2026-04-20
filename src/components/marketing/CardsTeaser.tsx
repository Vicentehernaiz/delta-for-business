'use client'

import { useState } from 'react'
import Link from 'next/link'

const IMG_BLUE     = '/assets/images/cards/delta-amex-blue-card.png'
const IMG_GOLD     = '/assets/images/cards/delta-amex-gold-card.png'
const IMG_PLATINUM = '/assets/images/cards/delta-amex-platinum-card.png'
const IMG_RESERVE  = '/assets/images/cards/delta-amex-reserve-card.png'

type CardTab = 'business' | 'personal'

interface CardData {
  id: string
  image: string
  nameColor: string
  name1: string
  name2: string
  fee: string
  feeNote?: string
  welcomeTitle: string
  welcomeMiles: string
  welcomeSpend: string
  welcomeMonths: number
  earn: string[]
  mqd?: string[]
  perks: string[]
  knowMoreHref: string
  applyHref: string
}

const businessCards: CardData[] = [
  {
    id: 'gold-business',
    image: IMG_GOLD,
    nameColor: 'var(--color-card-gold)',
    name1: 'Delta SkyMiles®',
    name2: 'Gold BusinessCard',
    fee: '$0 first year',
    feeNote: '( then $150/y)',
    welcomeTitle: 'Welcome offer.',
    welcomeMiles: 'AS HIGH AS 80,000 Bonus Miles',
    welcomeSpend: 'after you spend $2,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['2x Delta · 2x restaurants', '2x US shipping + advertising'],
    perks: ['Free checked bag', 'Zone 5 boarding', 'TakeOff 15% off when spend miles', 'Up to 99 employee cards free'],
    knowMoreHref: '/cards/business/gold-business',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-business-american-express-card/',
  },
  {
    id: 'platinum-business',
    image: IMG_PLATINUM,
    nameColor: 'var(--color-card-platinum)',
    name1: 'Delta SkyMiles®',
    name2: 'Platinum Business Card',
    fee: '$350 / year',
    welcomeTitle: 'Welcome offer.',
    welcomeMiles: 'AS HIGH AS 90,000 Bonus Miles',
    welcomeSpend: 'after you spend $3,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['3x Delta · 3x hotels', '1.5x transit + shipping + office'],
    mqd: ['$2,500 Headstart', '$1 MQD per $20 spent'],
    perks: ['Main Cabin companion cert.', '15 Sky Club visits/yr', 'Free bag + ~$440 credits', 'Up to 99 employee cards free', 'TakeOff 15% off when spend miles'],
    knowMoreHref: '/cards/business/platinum-business',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-business-american-express-card/',
  },
  {
    id: 'reserve-business',
    image: IMG_RESERVE,
    nameColor: 'var(--color-card-reserve)',
    name1: 'Delta SkyMiles®',
    name2: 'Reserve Business Card',
    fee: '$650 / year',
    welcomeTitle: 'Welcome offer.',
    welcomeMiles: 'AS HIGH AS 100,000 Bonus Miles',
    welcomeSpend: 'after you spend $5,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['3x Delta purchases', '1.5x transit + shipping + office', '1.5x all after $150K spend'],
    mqd: ['$2,500 Headstart', '$1 MQD per $10 spent'],
    perks: ['Delta One companion cert.', '15 visits + 4 guest passes', 'Centurion + Escape Lounge', 'Up to 99 employee cards free', 'TakeOff 15% off when spend miles'],
    knowMoreHref: '/cards/business/reserve-business',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-business-american-express-card/',
  },
]

const personalCards: CardData[] = [
  {
    id: 'blue',
    image: IMG_BLUE,
    nameColor: 'var(--color-card-blue)',
    name1: 'Delta SkyMiles®',
    name2: 'Blue Card',
    fee: '$150 / year',
    welcomeTitle: 'Welcome offer.',
    welcomeMiles: 'AS HIGH AS 80,000 Bonus Miles',
    welcomeSpend: 'after you spend $2,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['2x Delta · 2x restaurants', '1x everything else'],
    perks: ['No travel benefits', 'No lounge · No bag', 'Entry-level only'],
    knowMoreHref: '/cards/personal/blue',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/',
  },
  {
    id: 'gold',
    image: IMG_GOLD,
    nameColor: 'var(--color-card-gold)',
    name1: 'Delta SkyMiles®',
    name2: 'Gold Card',
    fee: '$0 first year',
    feeNote: '( then $150/y)',
    welcomeTitle: 'Apply and find out your welcome offer.',
    welcomeMiles: 'AS HIGH AS 80,000 Bonus Miles',
    welcomeSpend: 'after you spend $2,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['2x Delta · 2x dining', '2x dining + supermarkets'],
    perks: ['Free checked bag', 'Zone 5 boarding', 'TakeOff 15% off when spend miles', '$200 Delta flight credit'],
    knowMoreHref: '/cards/personal/gold',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/',
  },
  {
    id: 'platinum',
    image: IMG_PLATINUM,
    nameColor: 'var(--color-card-platinum)',
    name1: 'Delta SkyMiles®',
    name2: 'Platinum Card',
    fee: '$350 / year',
    welcomeTitle: 'Apply and find out your welcome offer.',
    welcomeMiles: 'AS HIGH AS 90,000 Bonus Miles',
    welcomeSpend: 'after you spend $3,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['3x Delta · 3x hotels', '2x dining + supermarkets'],
    mqd: ['$2,500 Headstart', '$1 MQD per $20 spent'],
    perks: ['Main Cabin companion cert.', '15 Sky Club visits/yr', 'Free bag + Zone 5 boarding', '~$440 in annual credits', 'TakeOff 15% off when spend miles'],
    knowMoreHref: '/cards/personal/platinum',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/',
  },
  {
    id: 'reserve',
    image: IMG_RESERVE,
    nameColor: 'var(--color-card-reserve)',
    name1: 'Delta SkyMiles®',
    name2: 'Reserve Card',
    fee: '$650 / year',
    welcomeTitle: 'Apply and find out your welcome offer.',
    welcomeMiles: 'AS HIGH AS 100,000 Bonus Miles',
    welcomeSpend: 'after you spend $5,000 in purchases on your new Card within the first 6 months of Card Membership.',
    welcomeMonths: 6,
    earn: ['3x Delta purchases', '1.5x after $150K spend'],
    mqd: ['$2,500 Headstart', '$1 MQD per $10 spent'],
    perks: ['Delta One companion cert.', '15 visits + 4 guest passes', 'Centurion + Escape Lounge', '~$610 in annual credits', 'TakeOff 15% off when spend miles'],
    knowMoreHref: '/cards/personal/reserve',
    applyHref: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/',
  },
]

const bodyText: React.CSSProperties = {
  fontSize: 'var(--type-scale-16)',
  lineHeight: 'var(--line-height-body-medium)',
  letterSpacing: 'var(--letter-spacing-marketing-small)',
  color: 'var(--color-delta-blue-500)',
  fontFamily: 'var(--font-body)',
  fontWeight: '500',
}

const labelText: React.CSSProperties = {
  fontSize: 'var(--type-scale-18)',
  lineHeight: 'var(--line-height-body-medium)',
  color: 'var(--color-delta-blue-500)',
  fontFamily: 'var(--font-display)',
  fontWeight: '700',
  letterSpacing: 'var(--letter-spacing-marketing-small)',
}

function CardTile({ card, narrow = false }: { card: CardData; narrow?: boolean }) {
  const p = narrow ? '16px' : '32px'
  return (
    <div
      className="flex flex-col"
      style={{
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-5)',
        borderRadius: 'var(--radius-l)',
        boxShadow: 'var(--shadow-card)',
        padding: p,
        gap: '24px',
        flex: narrow ? '0 0 auto' : '1 0 0',
        minWidth: narrow ? '300px' : '470px',
        width: narrow ? '336px' : undefined,
      }}
    >
      {/* Image + name */}
      <div className="flex items-start" style={{ gap: '24px' }}>
        <div style={{ position: 'relative', width: '200px', height: narrow ? '126px' : '128px', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={`${card.name1} ${card.name2}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
          />
        </div>
        <div className="flex flex-col justify-between" style={{ flex: 1, minWidth: 0, padding: '8px 0', height: narrow ? '126px' : '128px' }}>
          <div
            style={{
              fontSize: 'var(--type-scale-28)',
              lineHeight: 'var(--line-height-heading-m)',
              letterSpacing: 'var(--letter-spacing-heading-xxs)',
              color: card.nameColor,
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
            }}
          >
            <p>{card.name1}</p>
            <p>{card.name2}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <p
              style={{
                fontSize: 'var(--type-scale-28)',
                lineHeight: 'var(--line-height-heading-m)',
                letterSpacing: 'var(--letter-spacing-heading-xxs)',
                color: 'var(--color-delta-blue-500)',
                fontFamily: 'var(--font-body)',
                fontWeight: '500',
              }}
            >
              {card.fee}
            </p>
            {card.feeNote && (
              <p style={{ ...bodyText, fontSize: 'var(--type-scale-16)' }}>{card.feeNote}</p>
            )}
          </div>
        </div>
      </div>

      {/* Welcome offer */}
      <div
        className="flex flex-col overflow-hidden"
        style={{ borderRadius: 'var(--radius-l)', background: 'var(--color-neutral-5)' }}
      >
        <div
          className="flex items-center justify-center"
          style={{ background: 'var(--color-neutral-400)', padding: '8px 24px' }}
        >
          <p
            style={{
              fontSize: 'var(--type-scale-18)',
              lineHeight: 'var(--line-height-heading-xs)',
              color: 'var(--color-neutral-0)',
              fontFamily: 'var(--font-body)',
              fontWeight: '700',
            }}
          >
            {card.welcomeTitle}
          </p>
        </div>
        <div className="flex flex-col" style={{ padding: '16px', gap: '12px' }}>
          <p
            style={{
              ...bodyText,
              fontSize: 'var(--type-scale-18)',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
            }}
          >
            {card.welcomeMiles}
          </p>
          <p style={bodyText}>{card.welcomeSpend}</p>
          <p
            style={{
              fontSize: 'var(--type-scale-14)',
              lineHeight: 'var(--line-height-body-small)',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              color: 'var(--color-neutral-700)',
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
            }}
          >
            Welcome offers vary and you may not be eligible for an offer.†
          </p>
        </div>
      </div>

      {/* Earn + perks */}
      <div className="flex items-start" style={{ gap: '24px', flex: 1 }}>
        <div className="flex flex-col" style={{ flex: 1, minWidth: 0, gap: '24px' }}>
          <div className="flex flex-col" style={{ gap: '12px' }}>
            <p style={labelText}>EARN</p>
            <div className="flex flex-col" style={{ ...bodyText, gap: '0' }}>
              {card.earn.map((e) => <p key={e}>{e}</p>)}
            </div>
          </div>
          {card.mqd ? (
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <p style={labelText}>MQD acceleration</p>
              <div className="flex flex-col" style={bodyText}>
                {card.mqd.map((m) => <p key={m}>{m}</p>)}
              </div>
            </div>
          ) : (
            <p style={labelText}>No MQD acceleration</p>
          )}
        </div>
        <div className="flex flex-col" style={{ flex: 1, minWidth: 0, gap: '12px' }}>
          <p style={labelText}>KEY PERKS</p>
          <div className="flex flex-col" style={bodyText}>
            {card.perks.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div
        className="flex items-end justify-between"
        style={{ paddingTop: '16px', borderTop: '1px solid var(--color-neutral-10)' }}
      >
        <Link
          href={card.knowMoreHref}
          style={{
            height: '44px',
            padding: '0 24px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 'var(--type-scale-16)',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            letterSpacing: 'var(--letter-spacing-marketing-x-large)',
            color: 'var(--color-delta-blue-700)',
            borderBottom: '1.5px solid var(--color-delta-blue-700)',
          }}
        >
          Know more
        </Link>
        <a
          href={card.applyHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            height: '44px',
            padding: '0 24px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 'var(--type-scale-16)',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            letterSpacing: 'var(--letter-spacing-marketing-x-large)',
            color: 'var(--color-delta-red-400)',
            borderBottom: '1.5px solid var(--color-delta-red-400)',
          }}
        >
          Get in
        </a>
      </div>
    </div>
  )
}

export function CardsTeaser() {
  const [activeTab, setActiveTab] = useState<CardTab>('business')

  return (
    <section
      className="flex flex-col items-center w-full"
      style={{
        background: 'var(--color-neutral-2)',
        padding: '96px 32px',
        gap: '56px',
      }}
    >
      {/* Heading */}
      <h2
        className="text-center"
        style={{
          fontSize: 'clamp(2rem, 5vw, var(--type-scale-64))',
          lineHeight: 'var(--line-height-heading-xxxl)',
          letterSpacing: 'var(--letter-spacing-heading-xxxl)',
          color: 'var(--color-delta-blue-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: '700',
        }}
      >
        Delta-Amex Cards
        <br />
        for Business
      </h2>

      {/* Tab switcher */}
      <div
        className="flex p-1"
        style={{
          background: 'var(--color-neutral-0)',
          border: '1px solid var(--color-neutral-5)',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-card)',
          width: '800px',
          maxWidth: '100%',
          gap: '4px',
        }}
      >
        {(['business', 'personal'] as CardTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 font-semibold transition-all"
            style={{
              height: '44px',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--type-scale-16)',
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
              background: activeTab === tab ? 'var(--color-delta-blue-600)' : 'transparent',
              color: activeTab === tab ? 'var(--color-neutral-0)' : 'var(--color-delta-blue-700)',
              boxShadow: activeTab === tab ? 'var(--shadow-button)' : 'none',
              letterSpacing: 'var(--letter-spacing-marketing-x-large)',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            {tab === 'business' ? 'Business cards' : 'Personal Cards'}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="flex flex-col items-center w-full" style={{ maxWidth: '1200px', gap: '32px' }}>
        {activeTab === 'business' ? (
          <>
            <div className="flex items-stretch" style={{ gap: '16px', width: '100%' }}>
              {businessCards.map((card) => (
                <CardTile key={card.id} card={card} narrow />
              ))}
            </div>
            <p
              className="text-center"
              style={{
                ...bodyText,
                color: 'var(--color-delta-blue-700)',
                maxWidth: '400px',
              }}
            >
              The Delta-Amex Cards are requested, managed, and issued by the company to its employees using its management tools.
            </p>
            <div className="flex flex-wrap items-center justify-center w-full" style={{ gap: '12px' }}>
              <Link
                href="/cards/business"
                className="flex items-center justify-center font-semibold"
                style={{
                  flex: '1 0 335px',
                  maxWidth: '400px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-neutral-50)',
                  color: 'var(--color-delta-blue-700)',
                  fontSize: 'var(--type-scale-16)',
                  letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                Know More About Business Cards
              </Link>
              <a
                href="https://www.americanexpress.com/us/credit-cards/card-application/apply/delta-skymiles-gold-business-american-express-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-semibold"
                style={{
                  flex: '1 0 335px',
                  maxWidth: '400px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                Apply Now
              </a>
            </div>
          </>
        ) : (
          <>
            <div
              className="grid w-full"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(470px, 1fr))',
                gap: '32px',
              }}
            >
              {personalCards.map((card) => (
                <CardTile key={card.id} card={card} />
              ))}
            </div>
            <p
              className="text-center"
              style={{
                ...bodyText,
                color: 'var(--color-delta-blue-700)',
                maxWidth: '600px',
              }}
            >
              Personal card + SkyMiles for Business can run simultaneously, they stack, they don&apos;t conflict. Payments made with personal cards accrue miles in the individual account. When the company purchases the flights, the miles are credited to both the company and personal accounts. Personal cards are acquired by the individual themselves.
            </p>
            <div className="flex flex-wrap items-center justify-center w-full" style={{ gap: '12px' }}>
              <Link
                href="/cards/personal"
                className="flex items-center justify-center font-semibold"
                style={{
                  flex: '1 0 335px',
                  maxWidth: '400px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-neutral-50)',
                  color: 'var(--color-delta-blue-700)',
                  fontSize: 'var(--type-scale-16)',
                  letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                Know More About Personal Cards
              </Link>
              <a
                href="https://www.americanexpress.com/us/credit-cards/card-application/apply/delta-skymiles-gold-american-express-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-semibold"
                style={{
                  flex: '1 0 335px',
                  maxWidth: '400px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-delta-red-400)',
                  color: 'var(--color-neutral-0)',
                  fontSize: 'var(--type-scale-16)',
                  letterSpacing: 'var(--letter-spacing-marketing-x-large)',
                  boxShadow: 'var(--shadow-button)',
                }}
              >
                Apply Now
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
