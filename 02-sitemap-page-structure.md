# 02 — Information Architecture, Sitemap & Page Structure Reference
## Delta for Business Web Redesign

> **How to read this document:**
> Each page entry shows: URL · SEO title · Meta description · Exact section sequence · Component list · Data sources
>
> **Key principle:** This website UNIFIES the business, corporate, and SkyMiles for Business experience into one hub. Anything related to business/corporate travel is built by us. General consumer Delta features (booking flights, personal SkyMiles, flight status, etc.) link OUT to existing delta.com pages.

---

## INFORMATION ARCHITECTURE — WHAT WE BUILD vs. EXTERNAL LINKS

### Scope: What this website redesigns (WE BUILD)

Everything related to Delta's **business and corporate travel programs**:
- Business program discovery, comparison, and enrollment
- SkyMiles for Business (company mile earning, dual-earn, eCredits)
- Corporate Priority benefits
- Delta-Amex card information **in business context** (we explain, Amex handles applications)
- Medallion status **in business context** (how it interacts with corporate travel)
- Program eligibility quiz and ROI calculator
- Enrollment flows (self-serve for SMB, contact-sales for mid/enterprise)
- Post-enrollment dashboard (account management)

### Scope: What links to existing delta.com (EXTERNAL LINKS)

These are established Delta pages. We link TO them — we don't rebuild them:

| Feature | External URL | Where we link it |
|---|---|---|
| Delta.com homepage | `https://www.delta.com/` | Logo link, nav "Delta.com" |
| Book a flight | `https://www.delta.com/flightsearch/book-a-flight` | Nav, dashboard quick action |
| Flight status | `https://www.delta.com/flightstatus/search` | Nav utility, dashboard |
| Personal SkyMiles | `https://www.delta.com/us/en/skymiles/overview` | "Already a SkyMiles member?" links |
| Medallion program (personal) | `https://www.delta.com/us/en/skymiles/medallion-program/overview` | Medallion section "Learn more on delta.com" |
| Credit card applications | `https://www.delta.com/us/en/skymiles/airline-credit-cards/overview` | "Apply Now" CTAs on card pages → Amex |
| Sky Club access | `https://www.delta.com/us/en/delta-sky-club/access` | Benefits section, card perks |
| Delta Vacations | `https://www.delta.com/us/en/delta-vacations` | Footer link |
| Delta Cargo | `https://www.deltacargo.com/Cargo/` | Footer link |
| Help / Support | `https://www.delta.com/us/en/need-help/overview` | Nav utility, footer |
| Manage trip | `https://www.delta.com/mytrips/` | Nav utility, dashboard |
| SkyMiles login | `https://www.delta.com/profile/login` | "Log in" CTA in nav |

### Navigation: How the two coexist

```
┌─────────────────────────────────────────────────────────────────┐
│ [Delta Logo → delta.com]  business.delta.com                    │
│                                                                 │
│ PRIMARY NAV (our pages):                                        │
│ [Programs ▾] [Benefits ▾] [Cards ▾] [SkyMiles] [Medallion]     │
│                                                                 │
│ UTILITY NAV (external delta.com links):                         │
│ [Book a Flight ↗] [Flight Status ↗] [Help ↗] [Manage Trip ↗]  │
│                                                                 │
│ AUTH:                                                           │
│ [Log in → delta.com/profile/login] [Find My Program → /tools/] │
└─────────────────────────────────────────────────────────────────┘
```

---

## SITEMAP — PAGES WE BUILD

```
business.delta.com/
│
├── /                                        HOMEPAGE
│
├── /programs/                               Program overview (comparison table)
│   ├── /individual/                         Individual Business Traveler
│   ├── /small-business/                     SkyMiles for Business (1-50 travelers)
│   │   ├── /tiers/                          Member → Plus → Elite tiers
│   │   ├── /earning/                        How companies earn miles
│   │   └── /redeeming/                      eCredits, mile redemptions
│   ├── /mid-market/                         Mid-Market (50-500, negotiated)
│   ├── /enterprise/                         Large Enterprise (500+)
│   └── /compare/                            Delta vs United vs American (SEO)
│
├── /benefits/                               All business travel benefits
│   ├── /corporate-priority/                 Corporate Priority suite
│   │   ├── /seating/
│   │   ├── /boarding/
│   │   ├── /upgrades/
│   │   ├── /service-recovery/
│   │   └── /global/                         Partner airlines coverage
│   ├── /sky-club/                           Sky Club in business context
│   └── /meetings-groups/                    Group travel + meetings
│
├── /cards/                                  Delta-Amex cards hub (informational)
│   ├── /compare/                            All 7 cards side-by-side
│   ├── /personal/                           Personal cards overview
│   │   ├── /blue/                           → "Apply Now" links to Amex ↗
│   │   ├── /gold/
│   │   ├── /platinum/
│   │   └── /reserve/
│   └── /business/                           Business cards overview
│       ├── /gold-business/                  → "Apply Now" links to Amex ↗
│       ├── /platinum-business/
│       └── /reserve-business/
│
├── /skymiles/                               SkyMiles for Business hub
│   ├── /how-it-works/                       Dual-earn, Business ID, tiers
│   ├── /earning/                            Company + employee earning
│   ├── /redeeming/                          eCredits, 4 company mile uses
│   └── /double-earn/                        Dual-earn mechanic explained
│
├── /medallion/                              Medallion in business context
│   ├── /overview/
│   ├── /silver/
│   ├── /gold/
│   ├── /platinum/
│   ├── /diamond/
│   └── /mqd-calculator/                     Interactive MQD calculator
│
├── /delta-sync/                             Delta Sync platform overview (marketing page)
│
├── /tools/                                  Interactive tools
│   ├── /program-selector/                   ★ Eligibility quiz (programs + cards)
│   └── /roi-calculator/                     ★ ROI calculator
│
├── /enroll/                                 ★ Enrollment flows (progressive disclosure)
│   ├── /individual/                         Quick 2-step enrollment
│   ├── /small-business/                     5-step progressive form
│   └── /enterprise/                         Contact-sales + form
│
├── /resources/
│   ├── /faq/                                All FAQs (11 sections A-K)
│   ├── /glossary/                           Business travel terminology
│   ├── /blog/[slug]/                        Blog articles
│   ├── /case-studies/[slug]/                Customer stories
│   └── /program-terms/                      Legal terms
│
└── /account/                                DASHBOARD (authenticated)
    ├── /dashboard/                          KPIs, quick actions, activity
    ├── /onboarding/                         First-login guided setup
    ├── /miles/                              Miles balance + history
    ├── /travelers/                          Traveler roster management
    ├── /reports/                            Spend reports + charts
    ├── /tier-progress/                      SMB tier + Medallion tracker
    ├── /wallet/                             eCredits + rewards wallet
    └── /settings/                           Account settings
```

### External link targets (NOT built by us — linked from nav/footer/CTAs)

```
delta.com ↗
├── /flightsearch/book-a-flight              "Book a Flight" (nav utility)
├── /flightstatus/search                     "Flight Status" (nav utility)
├── /mytrips/                                "Manage Trip" (nav utility)
├── /profile/login                           "Log in" (nav auth)
├── /us/en/skymiles/overview                 "Personal SkyMiles" (informational links)
├── /us/en/skymiles/medallion-program/overview  "Medallion Details" (learn more)
├── /us/en/skymiles/airline-credit-cards/overview  "Apply Now" (card CTAs)
├── /us/en/delta-sky-club/access             "Sky Club" (benefit links)
├── /us/en/delta-vacations                   Footer link
├── /us/en/need-help/overview                "Help" (nav utility, footer)
└── deltacargo.com/Cargo/                    Footer link
```

---

## PAGE STRUCTURES

---

### PAGE: Homepage `/`

**SEO title:** `Delta for Business | Corporate Travel Programs, SkyMiles & Amex Cards`
**Meta description:** `Find the right Delta corporate travel program in 60 seconds. Earn miles for your company, unlock Corporate Priority, and accelerate Medallion status. Free enrollment for small businesses.`
**Primary keyword:** `delta for business`
**JSON-LD:** `Organization` + `WebSite` with sitelinks searchbox

**Components needed:**
- `<Nav>` — fixed top, transparent → opaque on scroll
- `<Hero>` — full-viewport, navy bg
- `<AuthorityBar>` — stats strip
- `<ProgramFinder>` — quiz entry + 4 segment cards
- `<SegmentCard>` × 4
- `<PainPointSection>` — per-segment content
- `<SkyMilesTeaser>` — exploration hook
- `<CardsTeaser>` — card portfolio intro
- `<MedallionTeaser>` — status hook
- `<FinalCTA>` — 3 parallel CTAs
- `<Footer>`

**Exact section sequence (from Figma flow):**

```
[1] NAV
    Left: Delta logo
    Center: Programs · Benefits · Cards · SkyMiles · Medallion · Tools
    Right: Log in (ghost) · Find my program (primary red)
    Note: "Log in / launch app" is a SEPARATE path to dashboard

[2] HERO — "WHAT, FOR WHO, AND HOW"
    Headline: "Business travel, built around your company"
    Subline: "One program for every size. Free to join. Instant ROI."
    CTA 1 (red): "Find my program — 60 seconds"
    CTA 2 (ghost): "Log in to dashboard"
    Background: Delta navy (#0B1940) + subtle red accent
    Trust badge: "14× #1 in Business Travel News"

[3] AUTHORITY STRIP
    Stat 1: "$8.2B" / "American Express partnership"
    Stat 2: "14×" / "#1 in Business Travel News"
    Stat 3: "95%" / "Revenue from $100K+ households"
    Stat 4: "200M+" / "Passengers served annually"
    Logos: Fortune 100, Forbes Best Employers, BTN

[4] PROGRAM FINDER — "Find your program in 60 seconds"
    ← This section receives the red arrow loop-back from quiz
    Subhead: "Every business size has a Delta program built for it"
    
    4 SEGMENT CARDS (horizontal, equal width):
    
    Card 1: INDIVIDUAL
    - Tag: "Free · No employer needed"
    - For: "1 traveler · No minimum spend"
    - Key points: For who / How it works / Benefits / Cards / Miles
    - CTAs: "Get it" (primary) · "Know more" (link)
    
    Card 2: SMALL BUSINESS
    - Tag: "$5k–$50k annual travel"
    - For: "1–5 travelers"
    - Key points: For who / How it works / Benefits / Cards / Miles
    - CTAs: "Get started" (primary) · "Know more" (link)
    
    Card 3: MID-MARKET (Optimized for Managers)
    - Tag: "$50k–$300k annual travel"
    - For: "5–25 travelers"
    - Key points: For who / How it works / Benefits for company / 
                  Benefits for employees / Cards / Miles
    - CTAs: "Contact sales" (primary) · "Know more" (link)
    
    Card 4: LARGE ENTERPRISE (Optimized for Managers)
    - Tag: "$300k+ annual travel"
    - For: "25+ travelers"
    - Key points: Same structure as Mid-Market
    - CTAs: "Contact sales" (primary) · "Know more" (link)
    
    CONTEXT NOTE (right side of cards):
    "Yearly Average Corporate traveler ticket (in USA): $2.5–10k
     High tickers are associated with transcontinental travelers"
    
    QUIZ CTA (right column):
    Box: "Find the best program and cards match for the company.
          Take a 1min quiz to find it"
    → Opens ProgramSelectorQuiz
    → On completion: loops RED ARROW back to Program Finder section

[5] EXPLORATION — STAGE 3
    Subhead: "Understanding the model"
    Per-segment: "Attack specific pain points and motivations per group"
    
    [5a] SKYMILES FOR BUSINESS TEASER
    Quick explanation: For who · How it works · Use with
    → "Know more" → /skymiles/ (SkyMiles URL)
    → Right sidebar: "Final CTAs to join program"
    
    [5b] PREMIUM CARDS INTRODUCTION
    "For what programs, for who in those programs, what are the benefits"
    → SkyMiles web section (right)
    
    [5c] FOR WHO ARE THE CARDS
    Cards for business vs. Cards for personal use
    
    [5d] CARD TIER OVERVIEW
    Blue $0 / Gold $150 ($0 first year) / Platinum $350 / Reserve $650
    → "Know more about cards" → /cards/
    → Cards URL sidebar
    
    [5e] MEDALLION STATUS IN BUSINESS SECTION
    Teaser explaining how Medallion connects to business travel

[6] FINAL CTA STRIP
    3 parallel CTAs:
    "Enroll now" → /enroll/small-business
    "Contact sales" → /enroll/enterprise  
    "Calculate ROI" → /tools/roi-calculator
```

---

### PAGE: Programs Overview `/programs/`

**SEO title:** `Delta Corporate Travel Programs | Compare All Business Options`
**Meta description:** `Compare Delta corporate travel programs side by side. Individual perks, small business mile earning, mid-market MSA, and enterprise CSA. Find your match in 60 seconds.`

**Sections:**
```
[1] Nav (same)
[2] Header: "Choose the program built for your size"
    Subhead: "One Delta. Four programs. Zero confusion."
[3] Segment selector tabs (sticky on scroll)
[4] FULL COMPARISON TABLE
    Rows: Enrollment type / Cost / Mile earning / Corporate Priority /
          Account manager / TMC integration / Medallion impact /
          Card options / Reporting / Support / 
    Columns: Individual / SMB / Mid-Market / Enterprise
[5] Per-segment CTA blocks
[6] FAQ: "Which program is right for me?"
[7] Program selector quiz embed
```

---

### PAGE: Competitive Comparison `/programs/compare/`

**SEO title:** `Delta vs United vs American Airlines for Business | Corporate Travel Comparison 2026`
**Meta description:** `Compare Delta for Business against United for Business and AAdvantage Business side by side. Programs, earning rates, corporate priority, elite status, and credit cards for business travelers.`
**Primary keyword:** `delta vs united corporate travel`
**Secondary keywords:** `best airline for business travel program`, `delta for business vs american airlines`, `united perksplus alternative`
**JSON-LD:** `FAQPage`

**Data source:** `docs/04-competitive-analysis.md`

**Sections:**
```
[1] HEADER
    "How Delta compares — an honest look"
    Subhead: "We'll show you exactly where Delta leads, 
              where competitors lead, and what matters for your size."
    Tone: confidence without arrogance. Acknowledging competition builds trust.

[2] SEGMENT SELECTOR (sticky tabs)
    SME (< $50K) | Mid-Market ($50K–$300K) | Enterprise ($300K+)
    Each tab filters the comparison to the most relevant metrics

[3] SME COMPARISON TABLE
    Columns: Delta SkyMiles for Business | United PerksPlus/Blueprint | AA AAdvantage Business
    
    Rows:
    - Status: Active (self-serve) | Phasing out (agency-only since Feb 2024) | Active
    - Minimum to join: $0 | N/A for new direct | $0
    - Minimum to earn: $5,000 + 5 travelers | $50,000 (Blueprint) | $0 (flat rate)
    - Earning rate: Up to 10 miles/$ (non-hub premium) | Varies | Flat 1 mile/$
    - Double-earn (company + employee): Yes | No | No
    - Self-serve enrollment: Yes | No (agency required) | Yes
    - Dashboard/management: Yes | Limited | Basic
    - Tiers: Member → Plus → Elite | Single | Single
    
    CALLOUT BOX:
    "United PerksPlus is no longer accepting new direct enrollments. 
     If you were a PerksPlus customer, Delta SkyMiles for Business 
     offers free enrollment and starts earning from $5,000."

[4] CORPORATE COMPARISON TABLE
    Columns: Delta Corporate Priority | United Blueprint | AA Business Extra + Select
    
    Rows:
    - Minimum annual spend: $50K (MSA) | $50K | $250K (Select)
    - Preferred seating: Yes | Limited | Group 5 boarding (Select)
    - Priority boarding: Yes | Yes | Yes (Select)
    - Upgrade queue preference: Yes | Varies | No
    - Rebooking priority: Yes | Yes | Varies
    - Partner airline coverage: AF, KLM, LATAM, VA, Aeromexico | Star Alliance | oneworld
    - Account manager: MSA+ | Blueprint | Select
    - Fare savings: Negotiated | Negotiated | Up to 4% (Select)
    - Unused ticket transfer: CSA only | No | No
    - 24/7 dedicated support: CSA only | Premium | No
    
    CALLOUT BOX:
    "AA Business Select launched in July 2025 with a $250K threshold 
     vs Delta Elite at $300K. But Delta Corporate Priority includes 
     six specific priority benefits across five partner airlines 
     that AA cannot match at any spend level."

[5] ELITE STATUS COMPARISON TABLE
    Columns: Delta Medallion | United Premier | AA AAdvantage Elite
    
    Rows:
    - Qualification method: MQD only | MQD or MQD + segments | Loyalty Points
    - Entry tier: $5K (Silver) | $6K or $4.8K+20 flights | 40K LP
    - Top tier: $28K (Diamond) | $28K or $22K+60 flights | 200K LP
    - Card acceleration: Up to $5K Headstart | No equivalent | LP from card spend
    
    CALLOUT BOX:
    "United Premier 1K requires 60 flights OR $28K spend. 
     Delta Diamond requires $28K — period. No flight count. 
     If your team spends but doesn't fly 60 segments, 
     Delta gets you to top-tier status faster."

[6] CREDIT CARDS COMPARISON (brief)
    Columns: Delta Amex | United Chase | AA Citi/Barclays
    - Top card annual fee: $650 | $525 | $595
    - Lounge access: Sky Club + 2 guests | United Club | Admirals Club
    - Companion cert: Delta One / First | Economy | None
    - MQD acceleration: Up to $5K Headstart | None (removed 2024) | LP from spend
    → "See full card comparison" → /cards/compare/

[7] NETWORK STRENGTH (honest)
    "Where Delta is strongest: US domestic, transatlantic (AF/KLM JV), Latin America"
    "Where to consider alternatives: Asia-Pacific heavy travel (United Star Alliance or AA oneworld)"
    Map visual showing hub coverage

[8] DELTA'S 7 DEFENSIBLE ADVANTAGES (summary strip)
    1. Only airline with an individual traveler program
    2. $5K minimum vs $50K (United)
    3. Double-earn mechanic — unique
    4. MQD-only status — no flight count needed
    5. Card MQD Headstart — up to $5K/year
    6. Corporate Priority across 5 partner airlines
    7. United PerksPlus migration opportunity

[9] FAQ
    "Is Delta always the best choice?" → honest answer about network fit
    "What happened to United PerksPlus?" → migration opportunity
    "How does AA Business Select compare to Delta Elite?" → threshold + benefits
    "Can I use Delta for Asia-Pacific travel?" → Korean Air JV + honest limitations
    "Which airline has the best business credit card?" → depends on priorities

[10] CTA STRIP
    "Find your Delta program" → /tools/program-selector/
    "Calculate your ROI" → /tools/roi-calculator/
    "Talk to sales" → /enroll/enterprise/
```

---

### PAGE: Small Business Program `/programs/small-business/`

**SEO title:** `SkyMiles for Business | Small Business Loyalty Program | Delta`
**Meta description:** `Earn company SkyMiles on every Delta flight while employees earn personal miles simultaneously. Free enrollment. Member, Plus, and Elite tiers starting at $5k annual travel.`
**Primary keyword:** `delta skymiles for business`

**Sections:**
```
[1] HERO
    "Your company earns miles. Your employees earn miles. Same flight."
    The double-earn is the primary value prop, front and center
    CTA: "Enroll free — takes 3 minutes"

[2] THREE TIERS (interactive comparison)
    Member (free) | Plus ($5K + 5 travelers) | Elite ($300K + 5 travelers)
    Toggle: show conditions / hide conditions
    
[3] EARNING RATES TABLE
    Matrix: Route type × Cabin class
    Hub penalty clearly explained in plain language:
    "Flights through Atlanta, Detroit, Minneapolis, Salt Lake City 
     earn at half the rate of other routes"
    
[4] THE DOUBLE-EARN EXPLAINED
    Animated diagram: one ticket → two mile accounts
    "When your employee flies, your company account and their personal 
     account both earn — simultaneously, with no reduction to either"
    
[5] REDEMPTION OPTIONS
    eCredits / Transfers to employees / Sky Club membership / Silver Medallion certs
    Value comparison: what 10,000 miles is worth in each option
    
[6] MANAGEMENT HUB PREVIEW
    Dashboard screenshot / interactive mockup
    Features: spend tracking, tier progress, traveler roster, auto-reports
    
[7] HOW TO ENROLL
    5-step wizard preview
    "Less than 3 minutes"
    
[8] FAQ
    "Does this conflict with my Amex card?" → No — card miles go to personal account, program miles go to company account. Parallel systems.
    "Do employees also earn personal miles?" → Yes. Double-earn: company earns on fare, employee earns personal SkyMiles + MQDs. Neither reduces the other.
    "What can the company do with its miles?" → 4 options: transfer to employees, redeem as eCredits, buy Sky Club memberships, grant Silver Medallion certificates.
    "What's the minimum spend to start earning?" → $5,000/year + 5 registered travelers (Plus tier). Joining is free with no minimum.
    "What do Member, Plus, and Elite mean?" → Company program tiers. Member = enrolled but not earning. Plus = $5K threshold, earning activated. Elite = $300K, +15% bonus.
    "Who owns the Amex business card?" → An individual (owner/officer), not the company. Employee card miles go to the primary cardholder's personal account, not the company account.
    "What if an employee books outside Delta?" → No miles earned on non-Delta flights. Business ID must be linked at booking.
    "How does the hub penalty work?" → Flights through ATL, DTW, MSP, SLC earn at half rate.
    "When do miles appear in my account?" → Within 24 hours of flight completion.
    "How does Delta compare to United or American for small businesses?" → See /programs/compare/ for full comparison. Key: Delta starts at $5K vs United's $50K. AA earns flat 1 mile/$ vs Delta's up to 10 miles/$.
    
[9] ENROLL CTA (sticky bottom bar on mobile)
```

---

### PAGE: Cards Compare `/cards/compare/`

**SEO title:** `Compare All Delta SkyMiles American Express Cards | Personal & Business`
**Meta description:** `Side-by-side comparison of all 7 Delta Amex cards. Compare annual fees, earning rates, Sky Club access, MQD acceleration, companion certificates, and business categories.`
**Primary keyword:** `delta business credit card comparison`

**Sections:**
```
[1] HEADER
    "The right card accelerates everything"
    Key framing: "Cards work differently from programs. 
                  All miles go to YOUR personal SkyMiles — not a company account."

[2] FAMILY TABS (sticky)
    Personal (4 cards) | Business (3 cards) | Corporate (B2B, gated)

[3] COMPARISON TABLE
    Sticky column headers: Blue* / Gold / Platinum / Reserve
    (*Blue: personal only — no business variant)
    
    ROW GROUPS:
    
    COST
    - Annual fee
    - First year fee
    - Welcome bonus (miles after spend)
    - Employee cards (business only)
    
    EARN
    - Miles on Delta purchases
    - Miles on dining
    - Miles on US supermarkets (personal)
    - Miles on US shipping (business)
    - Miles on US advertising (business)
    - Miles on transit (Platinum+)
    - Earn rate after $150K spend
    
    TRAVEL BENEFITS
    - First checked bag (free for cardholder + companions)
    - Zone 5 priority boarding
    - TakeOff 15 (15% off award redemptions)
    - Sky Club visits per year
    - Sky Club unlimited threshold
    - Guest passes
    - Centurion Lounge access
    
    COMPANION CERTIFICATE
    - Cabin: None / Main Cabin / Delta One or First
    - Valid routes
    
    MEDALLION ACCELERATION
    - MQD Headstart (annual $)
    - MQD Boost ($ spent per $1 MQD)
    - Dual-card Headstart total
    
    STATEMENT CREDITS
    - Delta Stays credit
    - Resy dining credit
    - Rideshare credit
    - Total annual credit value
    
    INSURANCE
    - Trip delay trigger / max coverage
    - Baggage insurance
    
    BEST FOR
    - One-line summary

[4] RULE CALLOUT (prominent box)
    "All Amex card miles flow to the primary cardholder's 
     personal SkyMiles account — not the company account.
     Cards and SkyMiles for Business are separate but stackable."

[5] MQD ACCELERATION CALCULATOR
    Select: one card / two cards
    Input: monthly card spend
    Output: annual MQDs from cards + progress toward each Medallion tier

[6] APPLY SECTION
    Per card: apply link to Amex
```

---

### PAGE: Individual Card `/cards/[slug]/`

**Pattern used for:** blue, gold, platinum, reserve, gold-business, platinum-business, reserve-business

**Sections:**
```
[1] CARD VISUAL + NAME + FEE
    Large card image, name, annual fee prominent
    
[2] WELCOME BONUS
    Current offer: X miles after $Y spend in Z months
    Note: offers change — link to Amex for current offer
    
[3] EARNING RATES
    Visual grid with category icons
    Delta / Dining / Supermarkets or Shipping / Everything else
    
[4] KEY BENEFITS
    Accordion sections:
    - Travel benefits
    - MQD acceleration
    - Annual credits (with calculator: "Your annual net cost: $X")
    - Insurance
    - Business features (business cards only)
    
[5] MQD MECHANICS — THIS CARD
    "With this card, you start every Medallion year with $X already credited"
    "Every $Y you spend earns $1 MQD toward status"
    Progress bar: show contribution to each Medallion tier
    
[6] "BEST PAIRED WITH"
    If you have [this card], combine it with:
    - Program: [segment recommendation]
    - Second card: [pair recommendation]
    - Medallion goal: [tier you can realistically reach]
    
[7] APPLY CTA
    Links to Amex.com — opens new tab
    Disclaimer: "Issued by American Express. Subject to credit approval."
    
[8] RELATED CARDS
    "Also consider" — 2 related cards with brief comparison
    
[9] FAQ
    Card-specific questions
```

---

### PAGE: SkyMiles Hub `/skymiles/`

**SEO title:** `Delta SkyMiles for Business | Earn Miles for Your Company & Employees`
**Meta description:** `SkyMiles are Delta's travel currency. When your company enrolls in SkyMiles for Business, every flight earns miles in two accounts — your company's and your employee's — simultaneously.`
**Primary keyword:** `delta skymiles for business`
**JSON-LD:** `Product`

**Data source:** `docs/07-skymiles-knowledge-base.md`

**Sections:**
```
[1] HERO
    "Miles that work twice — for your company and your people"
    Subhead: "Every eligible flight earns in two accounts simultaneously.
              Your company builds a travel balance. Your employees build
              their personal status. One flight, two rewards, zero trade-off."
    CTA: "Get started free" → /enroll/small-business/
    CTA secondary: "How earning works" → #earning

[2] WHAT ARE SKYMILES
    "Delta's travel currency — earned every time you fly, spend, or engage 
     with Delta's partner network, and redeemable for flights, upgrades, 
     and experiences across more than 30 airlines worldwide."
    Key facts strip:
    - "Miles don't expire" (as long as account stays active)
    - "30+ partner airlines"
    - "Earned from flights, cards, hotels, dining, shopping, and more"

[3] TWO ACCOUNTS, ONE FLIGHT (the core explainer)
    Animated/visual diagram showing:
    ┌────────────────────────┐
    │    ONE DELTA FLIGHT    │
    └───────┬────────┬───────┘
            │        │
    ┌───────▼──┐ ┌──▼───────┐
    │ COMPANY  │ │ EMPLOYEE │
    │ ACCOUNT  │ │ ACCOUNT  │
    │          │ │          │
    │ Miles on │ │ Personal │
    │ base fare│ │ SkyMiles │
    │          │ │ + MQDs   │
    │ Business │ │ Medallion│
    │ controls │ │ personal │
    └──────────┘ └──────────┘
    
    "Two separate accounts. Two separate balances. 
     Company miles are owned by the business. 
     Employee miles are personal and always belong to the individual."

[4] WHAT MILES UNLOCK — SPLIT VIEW

    [LEFT COLUMN: COMPANY MILES]
    Header: "For the business"
    
    → Travel credits (eCredits)
      "Convert miles to eCredits at ~1.5–2¢/mile. 
       Applied to future bookings. Processed in under 4 hours."
    
    → Transfer miles to employees
      "Move company miles into any employee's personal account. 
       Immediate. They spend them however they want."
    
    → Sky Club membership
      "Purchase 12 months of lounge access for a team member."
    
    → Silver Medallion certificate
      "Give an employee 12 months of Silver status. 
       Processed in 1 business day."
    
    [RIGHT COLUMN: PERSONAL MILES]
    Header: "For the employee"
    
    → Award flights
      "Book on Delta and 30+ partners. No blackout dates on Delta flights."
    
    → Cabin upgrades
      "Use miles to upgrade to First Class or Delta One."
    
    → Companion certificates
      "Platinum and Reserve Amex cardholders get an annual companion 
       ticket — Main Cabin or First Class for taxes and fees only."
    
    → Sky Club day passes
      "Purchase lounge access with miles on the day of travel."

[5] PARTNER AIRLINES — "Fly on more airlines with the same miles"
    Visual grid/map with logos:
    
    SkyTeam core: Air France · KLM · Virgin Atlantic · Aeromexico · Korean Air
    
    Full partner list: WestJet · Alaska Airlines · Hawaiian Airlines · 
    GOL · LATAM · China Eastern · China Southern · Garuda Indonesia · 
    Kenya Airways · Middle East Airlines · Saudia · TAROM · 
    Vietnam Airlines · XiamenAir · Air Tahiti Nui · 
    Aerolíneas Argentinas · ITA Airways · Etihad Airways
    
    Note: "Book partner flights directly through delta.com"

[6] EARN MILES BEYOND FLYING — "Miles from everyday spending"
    Category grid with partner logos:

    Hotels: Marriott Bonvoy · Hilton Honors · IHG · Hyatt · 
            Wyndham · Best Western · Choice Hotels
    
    Car rentals: Hertz · Avis · Budget · National · Alamo · 
                 Enterprise · Sixt · Dollar · Thrifty
    
    Credit cards: Delta Amex co-branded (personal + business) · 
                  Amex Membership Rewards transfers
    
    Rideshare: Lyft
    
    Retail: Delta SkyMiles Shopping portal (hundreds of retailers)
    
    Dining: Delta SkyMiles Dining network (participating restaurants)
    
    Vacations: Delta Vacations (bonus miles on hotel + flight bundles)
    
    Financial: SkyMiles Mortgage · SkyMiles Investments (selected partners)

[7] FAQ
    "Do miles expire?" → No, as long as your account stays active.
    "Do company miles and personal miles come from the same flight?" → Yes. Two accounts earn simultaneously, neither reduces the other.
    "Can the company use miles to book flights?" → No. Company miles convert to eCredits, employee transfers, Sky Club memberships, or Silver Medallion certificates.
    "Do card miles go to the company account?" → No. Card miles go to the primary cardholder's personal SkyMiles account. Cards and SkyMiles for Business are parallel systems.
    "What's the difference between SkyMiles and Medallion?" → SkyMiles are your mile balance (spendable currency). Medallion is your status tier (earned by MQD qualification). They're related but separate — you earn both from flying.

[8] CTA STRIP
    "Enroll your company" → /enroll/small-business/
    "Calculate your ROI" → /tools/roi-calculator/
    "Compare all programs" → /programs/
```

---

### PAGE: SkyMiles — How It Works `/skymiles/how-it-works/`

**SEO title:** `How Delta SkyMiles Work for Business | Earning, Redeeming & Status`
**Meta description:** `Learn how SkyMiles work in a business context. Your company and employees earn simultaneously on every flight. Miles convert to eCredits, employee transfers, and Sky Club access.`

**Sections:**
```
[1] HEADER
    "Every eligible Delta flight earns miles in two accounts simultaneously"

[2] THE MECHANIC — step by step
    Step 1: Company enrolls in SkyMiles for Business (free)
    Step 2: Employees link their personal SkyMiles ID
    Step 3: When an employee flies with Business ID attached:
            → Company account earns on base fare (program rates)
            → Employee account earns personal miles + MQDs (personal rates)
    Step 4: Company decides how to use company miles
    Step 5: Employee keeps and uses personal miles independently

[3] EARNING RATES
    Interactive table: Route type × Cabin class × Program tier
    Hub penalty explained: "Flights through ATL, DTW, MSP, SLC earn at ~half rate"
    
[4] PROGRAM TIERS (how the company progresses)
    Member → Plus → Elite (brief, links to /programs/small-business/tiers/)

[5] FAQ + LINK TO FULL EARNING AND REDEEMING PAGES
```

---

### PAGE: SkyMiles — Earning `/skymiles/earning/`

**SEO title:** `How to Earn Delta SkyMiles for Business | Flights, Cards & Partners`
**Meta description:** `Earn SkyMiles from Delta flights (up to 10 miles/$), Amex card spend, hotel stays, car rentals, dining, shopping, and financial services. Complete earning guide for business travelers.`

**Sections:**
```
[1] HEADER
    "Up to 10 miles per dollar — and miles from everywhere else too"

[2] EARNING FROM FLIGHTS
    Rate table by route type × cabin × program tier
    Hub penalty callout
    Basic Economy exclusion note

[3] EARNING FROM CARDS
    Per-card earning summary (links to /cards/compare/)
    Clarification: "Card miles go to personal account, not company account"

[4] EARNING FROM PARTNERS
    Full partner grid (from 07-skymiles-knowledge-base.md section 5):
    Hotels · Car rentals · Rideshare · Retail · Dining · Vacations · Financial services
    Each with logo grid and brief explanation

[5] MAXIMIZING EARNING
    Tips for business travelers:
    - Link SkyMiles to all partner accounts
    - Use SkyMiles Shopping portal for office supplies
    - Book Delta Vacations for team retreats
    - Stack card earning with flight earning
```

---

### PAGE: SkyMiles — Redeeming `/skymiles/redeeming/`

**SEO title:** `How to Use Delta SkyMiles | Company & Personal Redemption Options`
**Meta description:** `Redeem company SkyMiles as eCredits, employee transfers, Sky Club memberships, or Silver Medallion certificates. Personal miles book flights on 30+ airlines, upgrades, and more.`

**Sections:**
```
[1] HEADER
    "Two types of miles, two ways to spend them"

[2] COMPANY MILE REDEMPTIONS (detailed)
    eCredits: value, processing time, GDS compatibility, one-per-ticket limit
    Employee transfers: mechanics, irreversibility, common use cases
    Sky Club: annual membership purchase
    Silver Medallion: certificate process, 1-day processing

[3] PERSONAL MILE REDEMPTIONS (detailed)
    Award flights: 30+ airlines, no blackout on Delta, how to search
    Upgrades: eligible routes, cabin combinations
    Companion certificates: which cards qualify, valid routes
    Sky Club day passes: how to purchase

[4] MILE VALUATION
    "What are company miles worth?"
    eCredit value: ~1.5–2¢/mile
    Transfer value: varies by how employee uses them
    Silver Medallion value: estimated annual benefit

[5] FAQ
    "Can the company book award flights directly?" → No.
    "Can I combine company and personal miles?" → No, separate accounts.
    "Is there a minimum redemption?" → Depends on option.
```

---

### PAGE: SkyMiles — Double Earn `/skymiles/double-earn/`

**SEO title:** `Delta Double-Earn | Company & Employee Miles on the Same Flight`
**Meta description:** `Delta SkyMiles for Business double-earn: your company earns miles on the base fare and your employee earns personal SkyMiles and MQDs on the same ticket. No reduction to either.`
**Primary keyword:** `delta double earn skymiles business`

**Sections:**
```
[1] HERO
    "Two accounts, one ticket"
    "Your company earns. Your employee earns. Neither reduces the other."

[2] ANIMATED DIAGRAM
    Visual: one ticket → splits into two streams
    Company stream: base fare × program rate → company miles
    Employee stream: personal rate × Medallion multiplier → personal miles + MQDs
    "This is the mechanic that makes SkyMiles for Business fundamentally 
     different from every other corporate airline program."

[3] WHY THIS MATTERS
    The classic corporate conflict: employee feels they lose personal benefits 
    when forced to fly a specific airline. With Delta, they lose nothing.
    The company gains a travel asset. The employee gains personal status.

[4] COMPARISON (competitive context)
    "Neither United for Business nor AAdvantage Business offers a simultaneous 
     dual-earn mechanic where both company and employee accumulate independently 
     on the same ticket."
    → Link to /programs/compare/ for full competitive comparison

[5] HOW TO ACTIVATE
    Step 1: Company enrolls (free)
    Step 2: Employees link SkyMiles ID
    Step 3: Business ID auto-applies at booking
    Step 4: Both accounts earn after flight
    CTA: "Enroll your company" → /enroll/small-business/

[6] FAQ
    "Does the employee need to do anything special?" → Just link their SkyMiles ID once.
    "Does Basic Economy earn double?" → No. Basic Economy excluded from company earning.
    "Does the hub penalty affect employee miles?" → No, only company miles.
```

---

### PAGE: Medallion Hub `/medallion/`

**SEO title:** `Delta Medallion Elite Status for Business Travelers | Silver Gold Platinum Diamond`
**Meta description:** `Understand Delta Medallion status and how business travel earns it faster. MQD-only qualification since 2024. Silver at $5K · Gold at $10K · Platinum at $15K · Diamond at $28K.`

**Sections:**
```
[1] HERO
    "Status that rewards how you actually travel"
    One metric: MQD (Medallion Qualifying Dollars)
    Earned by: flying + Amex card spend

[2] THE NEW SYSTEM (2024 update)
    "Delta simplified to one number: how much you spend"
    Clear explanation: no more MQM or MQS
    MQD sources: flights + card Headstart + card Boost

[3] FOUR TIERS (card layout with progression)
    Silver $5K → Gold $10K → Platinum $15K → Diamond $28K
    
    Per tier card:
    - MQD threshold
    - Boarding zone
    - SkyMiles bonus %
    - Upgrade window (hours before departure)
    - Sky Club access
    - Choice Benefits (Platinum+)
    - Upgrade queue position
    
[4] UPGRADE PRIORITY EXPLAINER
    Queue order diagram (visual):
    Diamond > Platinum > Gold > Silver
    then: cabin purchased, Million Miler, Reserve cardholder
    then: corporate travelers with ticket designator
    then: MQDs earned, then timestamp
    
    "A Gold Medallion corporate traveler outranks
     a Gold Medallion non-corporate traveler in the upgrade queue"

[5] MQD CALCULATOR (interactive)
    Inputs: trips/year + avg base fare + card type + current spend
    Outputs: projected MQDs + status + time to reach next tier
    
[6] CARD → STATUS ACCELERATION
    Table: which card gives what Headstart + Boost
    "Dual Reserve strategy: $5K Headstart = automatic Silver"

[7] CHOICE BENEFITS (Platinum + Diamond)
    What they are, how to select, what's available
    
[8] DELTA 360° 
    Invite-only above Diamond — brief explanation

[9] FAQ
```

---

### PAGE: ROI Calculator `/tools/roi-calculator/`

**SEO title:** `Delta for Business ROI Calculator | See How Much Your Company Could Earn`
**Meta description:** `Calculate your company's potential annual savings with Delta for Business. Enter your team size, travel frequency, and routes to see projected miles, eCredits, and cost savings.`

**Sections:**
```
[1] CALCULATOR (primary — above fold)

    INPUTS (left panel):
    - Number of travelers: [slider 1–500]
    - Average round trips per traveler per year: [slider 1–50]
    - Average base fare per round trip: [$__]
    - Primary route type: [Hub routes / Non-hub routes / Mix]
    - Cabin class mix: [% sliders for First / Comfort+ / Main]
    - Program tier: [Member / Plus / Elite auto-suggested based on spend]
    
    OUTPUTS (right panel, live update):
    - Estimated annual company miles: [X,XXX,XXX]
    - eCredit value (at 1.5¢/mile): [$X,XXX]
    - Savings vs no program: [$ + % of travel budget]
    - Months to reach Plus tier: [X months]
    - Months to reach Elite tier: [X months]
    - Recommended card for travel manager: [Card name + MQD impact]
    
    NOTE: "Estimate only. Actual results depend on eligible fares,
    routing, and program tier. Basic Economy tickets do not earn miles."

[2] METHODOLOGY (accordion)
    How the calculation works — transparency builds trust

[3] SAVE YOUR ESTIMATE
    Email input → sends summary PDF
    → Also starts email nurture sequence

[4] NEXT STEPS
    If SMB: "Enroll free and start earning"
    If Mid/Large: "Get a custom analysis from our sales team"

[5] RELATED: Full tier comparison link
```

---

### PAGE: Program Selector Quiz `/tools/program-selector/`

**Both standalone page AND embeddable widget (used on homepage)**

**Standalone page SEO title:** `Find Your Delta Business Travel Program | 60-Second Quiz`

```
STEP 1 OF 3: Company size
  Visual options (large tap targets):
  ○ Just me (individual traveler)
  ○ 2–50 people ($5k–$50k annual travel)
  ○ 50–300 people ($50k–$300k annual travel)
  ○ 300+ people ($300k+ annual travel)
  
  Sidebar note: "Yearly Average Corporate traveler ticket (in USA): 
  $2.5–10k. High tickets associated with transcontinental travelers"

STEP 2 OF 3: Primary goal
  ○ Personal travel perks (no employer needed)
  ○ Company mile earning + employee perks
  ○ Negotiated fares + priority service
  ○ Full managed travel program

STEP 3 OF 3: Estimated annual travel spend
  ○ Under $5,000
  ○ $5,000–$50,000
  ○ $50,000–$300,000
  ○ Over $300,000

RESULT PAGE:
  "Based on your profile, you match: [SEGMENT NAME]"
  
  Your program: [Program card with benefits]
  Your ideal card: [Card recommendation with fee + top 3 benefits]
  Your Medallion path: [Realistic tier + timeline]
  
  CTA primary: Enroll / Get started / Contact sales
  CTA secondary: "Back to see all programs" → loops to Program Finder
  
  ← Red arrow in Figma: this "back" path returns to 
     the 'Find your program in 60 seconds' section on homepage
```

---

### PAGE: Enrollment — Small Business `/enroll/small-business/`

**This is the conversion page from the Figma intent stage**

```
SYSTEM ALERT (shown based on quiz params):
  "Based on your profile, you qualify for:
   SkyMiles for Business — [specific tier based on their inputs]"
   
   Your match:
   ✓ [Number] travelers qualifies for Plus tier
   ✓ Estimated [X] miles/year based on $[Y] travel budget
   
ENROLLMENT FORM — 5 steps, progress indicator:

  Step 1/5: Company information
    - Legal company name
    - EIN / Tax ID
    - Industry (dropdown)
    - Company website
    - Auto-fill note: "We'll prefill what we can from public records"
    
  Step 2/5: Admin contact
    - First name, last name
    - Work email
    - Phone (optional)
    - Role/title
    - Set as Primary Admin + Secondary Admin option
    
  Step 3/5: Add travelers
    - Email invitation (enter emails)
    - OR CSV upload option
    - OR "Skip for now — add later"
    - Note: "Travelers must link their own SkyMiles ID"
    
  Step 4/5: Connect your bookings
    - Delta.com direct booking toggle
    - Concur integration toggle → setup guide link
    - TMC: "My company uses a TMC" → contact info
    - Business ID auto-apply: ON/OFF toggle (on = applies at checkout)
    
  Step 5/5: Review and confirm
    - Program: SkyMiles for Business
    - Tier you'll start at: Member (upgrades automatically)
    - Terms and conditions (expandable)
    - "I understand and create account" (primary CTA)
    - "Review benefits" (secondary)
    - "Contact Delta sales team" (tertiary)
    
SYSTEM DIALOGUE (after submit):
  "Account created! Your Business ID: DELTA-XXXXXXX"
  "Check your email for activation instructions"
  
→ Activation mail sent
→ If medium/large company flag detected: 
   "Your account has been flagged for a Corporate Sales call.
    A Delta representative will contact you within 4 business hours
    regarding closing conditions."

→ Redirect to: /account/dashboard (with onboarding overlay)
```

---

### PAGE: Dashboard — Main `/account/dashboard/`

**This is the Management Hub — authenticated area**

```
ONBOARDING OVERLAY (shown on first login):
  Step 1: "Welcome! Your Business ID is [ID]. Here's how to use it."
  Step 2: "Share this link with your travelers to link their SkyMiles"
  Step 3: "Make your first booking with Business ID at checkout"
  Step 4: "Miles appear within 24h. Here's your dashboard tour."
  
  Progress: ●●●○ | Skip tour

DASHBOARD MAIN VIEW:

  [SIDEBAR — collapsible]
  Logo + Business ID
  ─────────────────
  🏠 Home
  ✈  Miles & Rewards
  📊 Spend & Reports
  👥 Traveler Roster
  📈 Tier Progress
  💳 Credit & Wallet
  🔧 Tools
  🔔 Notifications (badge)
  ⚙  Settings
  ─────────────────
  [User avatar + name]
  Log out

  [MAIN AREA]
  
  TOP ROW: KPI Cards
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │ Miles Balance│ │ Tier Progress│ │ Monthly Spend│ │ Active Travel│
  │  1,234,567  │ │ Plus 68%    │ │  $24,500    │ │     12      │
  │ +12% vs last│ │ ~3mo to Elite│ │ +8% vs last │ │  of 18 total│
  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
  
  MIDDLE ROW:
  ┌─────────────────────────┐ ┌──────────────────────────┐
  │ Tier Progress Detail    │ │ Quick Actions            │
  │ ████████░░░ 68% to Elite│ │ → Transfer miles         │
  │ $204,000 / $300,000     │ │ → Redeem eCredit         │
  │ At current pace: 3 mo  │ │ → Add traveler           │
  │ [Adjust pace] [Alert ⚙]│ │ → Download report        │
  └─────────────────────────┘ └──────────────────────────┘
  
  BOTTOM ROW:
  ┌─────────────────────────┐ ┌──────────────────────────┐
  │ Recent Activity         │ │ Monthly Summary (auto)   │
  │ Apr 15: J.Smith +2,400  │ │ Sent: Apr 1              │
  │ Apr 14: M.Garcia +1,800 │ │ Total spend: $24,500     │
  │ Apr 12: R.Chen +3,200   │ │ Miles earned: 48,200     │
  │ [View all]              │ │ [View full report]       │
  └─────────────────────────┘ └──────────────────────────┘

RETENTION LOOP (Stage 7):
  Monthly: auto-report email → link back to dashboard
  Alert: tier progress milestone → dashboard notification
  Redemption: eCredit expiry alert → wallet view
  All paths return to: /account/dashboard (Dashboard main view)
```

---

### PAGE: Tier Progress `/account/tier-progress/`

```
[HEADER]
Current tier badge: [PLUS]
Progress: $204,000 of $300,000 to Elite

[PROGRESS VISUALIZATION]
Timeline bar with milestone markers:
Member ──── ██████████████████░░░░░░░ ──── Plus ──────── Elite

[PROJECTION]
"At your current monthly pace of $24,500:
 You will reach Elite in approximately 3 months (July 2026)"
 
[ALERT SETTINGS]
○ Alert me when I reach 50% of next tier
○ Alert me when I reach 90% of next tier
● Alert me monthly with progress update
Send to: [email field]

[HISTORICAL CHART]
Bar chart: monthly spend over 12 months
Line: cumulative toward Elite threshold

[MILESTONE LOG]
Apr: Reached $150,000 (50% of Elite) — Plus perks unlocked
Feb: Enrolled in Plus tier — 5 travelers + $5K threshold met
Jan: Program enrolled as Member
```

---

## URL PARAMETER SYSTEM

Pages accept `?for=` parameter to pre-select segment context:

```
Valid values: individual | smb | mid-market | enterprise

Examples:
/programs/?for=smb          → pre-selects SMB tab
/cards/compare/?for=enterprise → highlights corporate card info
/medallion/?for=individual  → focus on personal Medallion

Homepage uses this to receive quiz-selected segments:
/                            → default view
/?for=smb                   → SMB segment highlighted in program finder
```

---

## NAVIGATION STRUCTURE

```
PRIMARY NAV (desktop):
[Logo] [Programs ▾] [Benefits ▾] [Cards ▾] [SkyMiles] [Medallion] [Tools] | [Log in] [Find my program →]

Programs dropdown:
  Individual Traveler
  Small Business
  Mid-Market
  Large Enterprise
  ───────────────
  Compare all programs →

Benefits dropdown:
  Corporate Priority
  Sky Club Access
  Meetings & Groups
  ───────────────
  All benefits →

Cards dropdown:
  Personal Cards (4)
  Business Cards (3)
  ───────────────
  Compare all cards →

MOBILE NAV:
Hamburger → slide-in drawer with same structure
Sticky bottom bar: "Find my program" CTA
```

---

---

## ★ PROGRAM ELIGIBILITY QUIZ — `/tools/program-selector/`

### Overview

**Purpose:** Help businesses discover which Delta programs AND credit cards they're eligible for, in under 60 seconds. This is the primary conversion funnel entry point.

**Two delivery modes:**
1. **Standalone page** (`/tools/program-selector/`) — full-page experience with SEO
2. **Embeddable widget** (`<QuizWidget />`) — compact version embedded in homepage Program Finder section

**SEO title:** `Find Your Delta Business Travel Program | 60-Second Quiz`
**Meta description:** `Answer 4 quick questions to discover which Delta for Business program and Amex cards match your company. Free for small businesses.`

### Quiz Flow — 4 Steps + Results

**UX Pattern:** One question per screen. Large visual option cards (not radio buttons). Smooth slide transition between steps. Progress bar at top showing step X of 4.

```
┌─────────────────────────────────────────────────────────────────┐
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  Step 2 of 4                │
│                                                                 │
│  How many people travel for your company?                       │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ 👤           │  │ 👥           │                             │
│  │ Just me      │  │ 2–50 people  │                             │
│  │ Individual   │  │ Small biz    │                             │
│  └──────────────┘  └──────────────┘                             │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ 🏢           │  │ 🏛️           │                             │
│  │ 50–500       │  │ 500+         │                             │
│  │ Mid-market   │  │ Enterprise   │                             │
│  └──────────────┘  └──────────────┘                             │
│                                                                 │
│  ← Back                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Questions

**STEP 1 OF 4: Travel context**
```
Question: "What best describes your situation?"

Options (visual cards, large tap targets):
  ┌─────────────────────────────────────┐
  │ 🧳 I travel for work personally    │
  │    No employer involvement needed   │
  └─────────────────────────────────────┘
  ┌─────────────────────────────────────┐
  │ 🏢 My company has employees who    │
  │    travel for business              │
  └─────────────────────────────────────┘

Logic:
  "I travel personally" → pre-selects individual segment
  "My company" → continues to company-size questions
```

**STEP 2 OF 4: Company size** (skipped if individual selected)
```
Question: "How many people travel for your company?"

Options:
  ○ Just me (1 person)              → individual
  ○ 2–50 employees                  → smb
  ○ 50–500 employees                → mid-market
  ○ 500+ employees                  → enterprise

Sidebar note (subtle, not blocking):
  "Average US corporate traveler spends $2,500–$10,000/year.
   High-frequency transcontinental travelers can reach $15,000+."
```

**STEP 3 OF 4: Estimated annual travel spend**
```
Question: "What's your estimated annual air travel spend?"

Options (contextual based on step 2):
  If individual:
    ○ Under $2,000/year
    ○ $2,000–$5,000/year
    ○ $5,000–$15,000/year
    ○ Over $15,000/year

  If company:
    ○ Under $5,000/year             → smb Member
    ○ $5,000–$50,000/year           → smb Plus
    ○ $50,000–$300,000/year         → mid-market or smb Elite
    ○ Over $300,000/year            → enterprise

Logic: This determines program tier AND card recommendation
```

**STEP 4 OF 4: Primary goal**
```
Question: "What matters most to you?"

Options (select up to 2):
  □ Earning miles for the company
  □ Earning personal miles while traveling for work
  □ Getting discounted/negotiated fares
  □ Priority boarding, upgrades, and service
  □ Accelerating Medallion status
  □ Credit card rewards and perks

Logic: Influences card recommendation and benefit highlights
```

### Results Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ✓ Your results are ready                                       │
│                                                                 │
│  ┌─── YOUR PROGRAM ───────────────────────────────────────────┐ │
│  │ SkyMiles for Business — Plus Tier                          │ │
│  │ For companies with 2-50 travelers, $5K-$50K annual spend   │ │
│  │                                                            │ │
│  │ ✓ Company earns up to 10 miles/$                           │ │
│  │ ✓ Employees earn personal miles simultaneously             │ │
│  │ ✓ Free management dashboard                                │ │
│  │ ✓ eCredit redemptions (~1.5-2¢/mile)                       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─── YOUR IDEAL CARD ────────────────────────────────────────┐ │
│  │ [Card Image]  Delta SkyMiles® Gold Card                    │ │
│  │               $0 first year (then $150/yr)                 │ │
│  │                                                            │ │
│  │ Why this card for you:                                     │ │
│  │ • 2x miles on Delta + dining + supermarkets                │ │
│  │ • Free checked bag + Zone 5 boarding                       │ │
│  │ • $200 Delta flight credit                                 │ │
│  │                                                            │ │
│  │ [Apply Now → Amex ↗]  [See all cards →]                    │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─── YOUR MEDALLION PATH ────────────────────────────────────┐ │
│  │ Based on your spend: Silver Medallion achievable in ~8 mo  │ │
│  │ With Gold Card MQD boost: Gold Medallion possible by Dec   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  [Enroll Now — Free]          [Calculate Full ROI →]            │
│  [← See all programs]                                           │
└─────────────────────────────────────────────────────────────────┘
```

### Recommendation Logic (Agent 3 implements in `src/stores/quiz.ts`)

```typescript
// Program matching
if (travelers === 1 && context === 'personal') → individual
if (travelers <= 50 && spend < 5000) → smb (Member)
if (travelers <= 50 && spend >= 5000 && spend < 300000) → smb (Plus)
if (travelers <= 50 && spend >= 300000) → smb (Elite)
if (travelers > 50 && travelers <= 500) → mid-market
if (travelers > 500) → enterprise

// Card recommendation
if (spend < 5000 || goals.includes('entry-level')) → Blue ($0)
if (spend >= 5000 && spend < 15000) → Gold ($0 first yr)
if (spend >= 15000 && spend < 50000) → Platinum ($350)
if (spend >= 50000 || goals.includes('premium')) → Reserve ($650)

// Business card vs Personal card
if (context === 'company' && travelers > 5) → recommend Business variant
if (context === 'personal' || travelers <= 5) → recommend Personal variant

// Medallion projection
const annualMQD = spend * (isHub ? 1.0 : 0.8)
const cardMQD = cardTier === 'platinum' || cardTier === 'reserve' ? 2500 : 0
const projectedMQD = annualMQD + cardMQD
→ map to Silver ($5K) / Gold ($10K) / Platinum ($15K) / Diamond ($28K)
```

### State Management

Quiz results MUST persist in Zustand store and be available to:
- Enrollment form (pre-fill program type, company size, spend estimate)
- Homepage Program Finder (highlight recommended segment card)
- ROI Calculator (pre-fill inputs from quiz answers)

---

## ★ ENROLLMENT FORM — `/enroll/[type]/`

### Overview

**Purpose:** Convert quiz-qualified leads into enrolled Delta for Business accounts.

**Three enrollment paths:**
1. `/enroll/individual/` — 2-step quick enrollment (self-serve)
2. `/enroll/small-business/` — 5-step progressive form (self-serve)
3. `/enroll/enterprise/` — 3-step form + sales team handoff

**UX Pattern:** Progressive disclosure — show ONE section at a time. Animated progress bar. Smooth height transitions when revealing next section. Never show all fields at once.

### Design Pattern for All Enrollment Forms

```
┌─────────────────────────────────────────────────────────────────┐
│  ENROLL IN DELTA FOR BUSINESS                                   │
│                                                                 │
│  ━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━━━  Step 2 of 5           │
│  ✓ Company  ● Admin  ○ Travelers  ○ Bookings  ○ Review         │
│                                                                 │
│  ┌─── Step 2: Admin Contact ──────────────────────────────────┐ │
│  │                                                            │ │
│  │  First name          Last name                             │ │
│  │  [_______________]   [_______________]                     │ │
│  │                                                            │ │
│  │  Work email                                                │ │
│  │  [_______________________________]                         │ │
│  │                                                            │ │
│  │  Phone (optional)                                          │ │
│  │  [_______________]                                         │ │
│  │                                                            │ │
│  │  Role / title                                              │ │
│  │  [_______________]                                         │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  [← Back]                              [Continue →]             │
└─────────────────────────────────────────────────────────────────┘
```

### `/enroll/individual/` — 2 Steps

```
STEP 1: Your Information
  - First name *
  - Last name *
  - Personal email *
  - Existing SkyMiles number (optional)
    → If provided: "We'll link your existing SkyMiles account"
    → If empty: "We'll create a new SkyMiles account for you"

  Transition: slide-left animation (300ms ease)

STEP 2: Confirm & Activate
  - Summary card showing:
    Program: Delta for Business — Individual
    Benefits: Hertz Five Star, CLEAR discount, Industrious coworking, LinkedIn Premium
    Cost: Free
  - ☑ I agree to the program terms (link to /resources/program-terms/)
  - [Create My Free Account]

  → SUCCESS SCREEN (fade-in):
    ┌────────────────────────────────────────┐
    │  ✓ Welcome to Delta for Business!      │
    │                                        │
    │  Your account is ready.                │
    │  Check your email for activation.      │
    │                                        │
    │  📧 Sent to: user@email.com            │
    │                                        │
    │  [Go to Dashboard →]                   │
    └────────────────────────────────────────┘
```

### `/enroll/small-business/` — 5 Steps (Primary Conversion Flow)

```
── PRE-FILL ALERT (if coming from quiz) ──────────────────────
│ "Based on your quiz results, you qualify for:               │
│  SkyMiles for Business — Plus Tier                          │
│  ✓ [X] travelers × $[Y] spend = estimated [Z] miles/year"  │
───────────────────────────────────────────────────────────────

STEP 1 OF 5: Company Information
  Fields revealed progressively (field-by-field micro-animation):
  
  - Legal company name *
    [___________________________]
    (on blur: validates, reveals next field)
    
  - EIN / Tax ID *
    [___________________________]
    Helper text: "9-digit employer identification number"
    
  - Industry * (dropdown)
    [Select your industry        ▾]
    Options: Technology, Finance, Healthcare, Legal, Consulting,
             Manufacturing, Education, Government, Other
    
  - Company website (optional)
    [___________________________]
    
  - Number of employees who travel *
    [___] 
    Helper: "This helps us recommend the right tier"

  [Continue →]
  Validation: All required fields filled, EIN format valid
  Transition: current step slides left, next slides in from right

STEP 2 OF 5: Admin Contact
  - First name * + Last name *
    [_______________]   [_______________]
    
  - Work email *
    [_______________________________]
    Validation: Must be company domain (not gmail/yahoo)
    
  - Phone (optional)
    [_______________]
    
  - Role / title *
    [_______________]
    
  - ☑ Set as Primary Admin
  - Add Secondary Admin? [+ Add another admin]
    → Reveals: name + email fields for secondary

  [← Back]  [Continue →]

STEP 3 OF 5: Add Travelers
  Three options (tab interface):
  
  Tab 1: "Invite by email"
    - Enter email addresses (one per line or comma-separated)
    - [+ Add more]
    - Preview: "X travelers will be invited"
    
  Tab 2: "Upload CSV"
    - Drag & drop zone
    - Template download link: "Download CSV template"
    - Column format: first_name, last_name, email, skymiles_number
    
  Tab 3: "Skip for now"
    - "You can add travelers later from your dashboard"
    - Note: "Travelers must link their own SkyMiles ID after invitation"

  [← Back]  [Continue →]

STEP 4 OF 5: Connect Your Bookings
  Toggle switches (not required — can skip all):
  
  ┌─────────────────────────────────────────┐
  │ ● Delta.com direct booking              │ ON/OFF
  │   Auto-applies your Business ID at      │
  │   checkout for delta.com bookings       │
  ├─────────────────────────────────────────┤
  │ ○ Concur integration                    │ ON/OFF
  │   → If ON: shows setup guide link       │
  ├─────────────────────────────────────────┤
  │ ○ My company uses a TMC                 │ ON/OFF
  │   → If ON: TMC name + contact fields    │
  ├─────────────────────────────────────────┤
  │ ○ Other booking tool                    │ ON/OFF
  │   → If ON: text field for tool name     │
  └─────────────────────────────────────────┘

  [← Back]  [Continue →]

STEP 5 OF 5: Review & Confirm
  Summary card (read-only, editable via "Edit" links):
  
  ┌─ Company ─────────────────────── [Edit] ─┐
  │ Acme Corp · Tech · 25 travelers          │
  ├─ Admin ───────────────────────── [Edit] ─┤
  │ John Smith · john@acme.com               │
  ├─ Travelers ───────────────────── [Edit] ─┤
  │ 12 invitations queued                    │
  ├─ Bookings ────────────────────── [Edit] ─┤
  │ Delta.com direct · Concur                │
  ├──────────────────────────────────────────┤
  │ Program: SkyMiles for Business           │
  │ Starting tier: Member                    │
  │ (Upgrades automatically at $5K spend)    │
  └──────────────────────────────────────────┘

  ☑ I accept the program terms and conditions *
    (expandable accordion with full terms)
  
  [← Back]  [Create Account]

  → Loading state: spinner + "Setting up your account..."
  
  → SUCCESS SCREEN (full-screen, celebration animation):
    ┌────────────────────────────────────────────────┐
    │                                                │
    │  ✓ Your account is created!                    │
    │                                                │
    │  Your Business ID: DELTA-XXXXXXX               │
    │                                                │
    │  📧 Activation email sent to john@acme.com     │
    │  Please check your inbox and click the link    │
    │  to activate your account.                     │
    │                                                │
    │  What happens next:                            │
    │  1. Activate via email (check spam too)        │
    │  2. Your travelers will receive invitations    │
    │  3. Start booking to earn miles immediately    │
    │                                                │
    │  [Go to Dashboard →]  [Download Summary PDF]   │
    │                                                │
    └────────────────────────────────────────────────┘
```

### `/enroll/enterprise/` — 3 Steps + Sales Handoff

```
STEP 1 OF 3: Company Information
  Same as SMB Step 1, PLUS:
  - Estimated annual travel budget * (dropdown)
    $300K-$500K / $500K-$1M / $1M-$5M / $5M+
  - Primary routes/markets (multi-select)
    Domestic US / Transatlantic / Transpacific / Latin America
  - Current airline contracts? (yes/no)
    → If yes: "Which airlines?" text field

STEP 2 OF 3: Contact for Sales
  - Decision maker name *
  - Decision maker email *
  - Decision maker phone *
  - Preferred contact method: Email / Phone / Video call
  - Best time to reach you: Morning / Afternoon / Flexible
  - Additional notes (textarea, optional)

STEP 3 OF 3: Review & Submit
  Summary + "Submit to Delta Corporate Sales"
  
  → SUCCESS SCREEN:
    "Thank you! A Delta Corporate Sales representative
     will contact you within 2 business days."
    
    Reference number: ENT-XXXXXXX
    
    "While you wait, explore what Corporate Priority
     includes for your team →"
    
    [Explore Corporate Priority →]
```

### Progressive Disclosure Implementation Notes

**For Agent 3 (forms) — Technical requirements:**

```typescript
// Animation specs
const stepTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.3, ease: 'easeInOut' }
}

// Progress bar
const progressPercent = (currentStep / totalSteps) * 100
// Animated width transition: 400ms ease

// Field-level progressive disclosure (Step 1)
// Each field appears after the previous one is filled
// Use Framer Motion AnimatePresence + motion.div
// Height auto-animation for smooth reveal

// Form state persistence
// Use Zustand to persist form state across steps
// If user navigates away and returns, restore their progress
// Quiz results (if available) pre-fill: company size, spend, program type
```

**Validation strategy:**
- Validate on blur (per-field)
- Show inline errors below each field
- "Continue" button disabled until all required fields pass
- Use Zod schemas for validation
- Email: RFC 5322 + company domain check (warn on gmail/yahoo, don't block)
- EIN: 9-digit format XX-XXXXXXX
- Phone: optional, international format accepted

**Accessibility:**
- All form fields have associated labels
- Error messages linked via aria-describedby
- Progress bar has aria-valuenow, aria-valuemin, aria-valuemax
- Step transitions respect prefers-reduced-motion
- Focus management: auto-focus first field of each new step
- Tab order follows visual order

---

*Document: 02-sitemap-page-structure.md | Delta for Business Redesign | April 2026*
