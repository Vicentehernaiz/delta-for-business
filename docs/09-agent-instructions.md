# 09 — Agent Instructions
## Delta for Business — Claude Code Agent Team

> **Every agent reads this before starting.**
> Agent role, exact task order, coordination protocol, and what NOT to touch.

---

### 🎯 USABILITY TESTING — ALL AGENTS MUST READ

This project's primary goal is **usability testing** of the corporate travel section. Every component and page you build must be:
- **Fully interactive** — all buttons, forms, navigation, tabs, accordions must work (no static mockups)
- **Realistic content** — use real Delta program data and actual copy (never lorem ipsum placeholders)
- **Complete user flows** — enrollment forms must submit, quiz must produce results, calculators must compute real values
- **Responsive** — every component must be testable on desktop (1512px), tablet (800px), and mobile (392px)
- **Accessible** — keyboard navigable, screen reader compatible, meet WCAG 2.1 AA standards

Usability testers will evaluate: navigation clarity, information architecture, enrollment friction, program comprehension, and tool usefulness. Your prototype pages must support end-to-end task completion—not decorative designs. Every interactive element must actually function.

---

## AGENT 1 — ARCHITECT
### "Build the foundation. Nothing runs without you."

**Start immediately. All other agents wait for you.**

### Your exact task list (in order):

**TASK 1: Scaffold the project**
```bash
npx create-next-app@latest delta-for-business \
  --typescript --tailwind --app --src-dir \
  --import-alias "@/*" --no-git

cd delta-for-business
npx shadcn-ui@latest init --defaults
npm install framer-motion zustand react-hook-form \
  @hookform/resolvers zod recharts @phosphor-icons/web \
  @vercel/og next-mdx-remote
```

**TASK 2: Extract Figma design tokens**
```
1. Connect Figma MCP
2. Run: get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="179-2310")
3. Run: get_variable_defs(fileKey="a2Xx676U8t3nZj5AOlMeOw")
4. Extract ALL colors, typography, spacing, radius, shadows
5. Populate src/styles/tokens.css (see template in CLAUDE.md)
6. Extend tailwind.config.ts to use CSS variables
```

**TASK 3: Create all TypeScript types**

File: `src/types/index.ts`

```typescript
// Core segment type
export type SegmentId = 'individual' | 'smb' | 'mid-market' | 'enterprise'

export interface Segment {
  id: SegmentId
  name: string
  shortName: string
  tagline: string
  description: string
  color: string
  minTravelers: number | null
  maxTravelers: number | null
  annualSpend: { min: number; max: number | null }
  programType: 'self-serve' | 'negotiated'
  oldName: string
  enrollmentPath: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  keyBenefits: string[]
  forWho: string[]
  howItWorks: string[]
  availableCards: CardId[]
  milesPolicy: string
}

// Card types
export type CardFamily = 'personal' | 'business' | 'corporate'
export type CardTier = 'blue' | 'gold' | 'platinum' | 'reserve'
export type CardId = 
  | 'blue-personal'
  | 'gold-personal' 
  | 'platinum-personal' 
  | 'reserve-personal'
  | 'gold-business'
  | 'platinum-business'
  | 'reserve-business'

export interface Card {
  id: CardId
  name: string
  family: CardFamily
  tier: CardTier
  annualFee: number
  firstYearFee: number
  color: string
  earningRates: EarningRate[]
  benefits: string[]
  mqdHeadstart: number
  mqdBoostRate: number | null
  skyClubVisitsPerYear: number | null
  skyClubUnlimitedThreshold: number | null
  companionCertCabin: 'none' | 'main' | 'first-or-above'
  maxEmployeeCards: number | null
  annualCredits: Credit[]
  tripDelayTriggerHours: number | null
  tripDelayMaxCoverage: number | null
  welcomeBonus: WelcomeBonus
  applyUrl: string
  bestFor: string
  compatibleSegments: SegmentId[]
}

export interface EarningRate {
  category: string
  rate: number
  cap?: number
  note?: string
}

export interface Credit {
  name: string
  amount: number
  frequency: 'annual' | 'monthly'
  note?: string
}

export interface WelcomeBonus {
  miles: number
  spendRequired: number
  monthsToSpend: number
  note?: string
}

// Medallion types
export type MedallionTier = 'silver' | 'gold' | 'platinum' | 'diamond'

export interface MedallionStatus {
  tier: MedallionTier
  mqdRequired: number
  boardingZone: number
  skyMilesBonusPct: number
  upgradeWindowHours: number
  upgradeQueuePriority: number
  skyClubAccess: 'none' | 'paid' | 'membership'
  choiceBenefitCount: number
  perks: string[]
  color: string
}

// SkyMiles for Business tiers
export type SMBTierId = 'member' | 'plus' | 'elite'

export interface SMBTier {
  id: SMBTierId
  name: string
  minTravelers: number | null
  minAnnualRevenue: number | null
  earningRates: SMBEarningRate[]
  bonusMultiplier: number
  perks: string[]
  redemptions: string[]
  color: string
}

export interface SMBEarningRate {
  routeType: 'hub' | 'non-hub'
  cabin: 'premium' | 'comfort-plus' | 'main' | 'basic-economy'
  milesPerDollar: number
}

// Quiz types
export interface QuizAnswer {
  companySize: 'individual' | '2-50' | '50-300' | '300+'
  primaryGoal: 'perks' | 'miles' | 'fares' | 'managed'
  estimatedSpend: 'under-5k' | '5k-50k' | '50k-300k' | 'over-300k'
}

export interface QuizResult {
  segment: SegmentId
  recommendedCard: CardId
  recommendedMedallionPath: MedallionTier
  rationale: string
}

// Calculator types
export interface ROIInput {
  travelers: number
  tripsPerYear: number
  avgBaseFare: number
  routeType: 'hub' | 'non-hub' | 'mixed'
  cabinMix: { premium: number; comfortPlus: number; main: number }
  currentTier: SMBTierId
}

export interface ROIOutput {
  estimatedAnnualMiles: number
  eCreditValue: number
  savingsVsNoProgram: number
  monthsToPlus: number | null
  monthsToElite: number | null
  recommendedCard: CardId
}

// Navigation types
export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

// Page metadata
export interface PageMeta {
  title: string
  description: string
  ogImage?: string
  canonical: string
  keywords?: string[]
}
```

**TASK 4: Populate config files**

These files must be accurate — all agents import from here.

Create: `src/config/segments.ts` — 4 segment objects with all fields
Create: `src/config/cards.ts` — 7 card objects with all fields  
Create: `src/config/medallion.ts` — 4 tier objects
Create: `src/config/smb-tiers.ts` — 3 SMB tier objects
Create: `src/config/navigation.ts` — full nav tree

Reference: `docs/01-product-reference.md` for all data values

**TASK 5: Set up route groups and shared layouts**

```
src/app/
  (marketing)/layout.tsx    ← Nav + Footer + marketing shell
  (dashboard)/layout.tsx    ← Sidebar + topbar + auth check
```

**TASK 6: Signal completion**

Add to `docs/06-agent-log.md`:
```
[Agent 1 — COMPLETE]
- Tokens extracted: [date]
- Types defined: [count] interfaces
- Config files populated: segments, cards, medallion, smb-tiers, navigation
- Route groups: (marketing), (dashboard)
- Ready for: Agent 2, Agent 3, Agent 4 (all can start)
```

**NEVER touch:**
- Any page files (Agent 2's job)
- Interactive tools (Agent 3's job)
- Dashboard views (Agent 4's job)
- Sitemap/robots (Agent 5's job)

---

---

## FIGMA DESIGN REFERENCE — ALL AGENTS MUST READ

The homepage and design system have been extracted from Figma and documented. **Every agent implementing UI must follow these references:**

### Mandatory reading before ANY UI work:
- **`docs/03-design-system.md`** — Complete extracted design system (colors, typography, spacing, shadows, buttons, cards, responsive rules)
- **`src/styles/tokens.css`** — CSS custom properties populated from Figma extraction

### Figma Source References (for re-extraction when needed):

```
HOMEPAGE DESIGN:   https://www.figma.com/design/a2Xx676U8t3nZj5AOlMeOw/Delta?node-id=242-7645&m=dev
DESIGN SYSTEM:     https://www.figma.com/design/a2Xx676U8t3nZj5AOlMeOw/Delta?node-id=251-8690&m=dev
```

### Design Implementation Rules (from Figma extraction):

1. **Font:** Whitney font family (Semibold for headings/buttons, Medium for body). Fallback: `system-ui, sans-serif`
2. **Colors:** Use `var(--color-*)` tokens exclusively. Primary navy `#002d59`, primary red `#c01933`, body text `#004080`
3. **Buttons:** 7 variants — primary-red, dark, light, active-blue, ghost-white, link-blue, link-red. All pill-shaped (border-radius: 999px)
4. **Cards:** White bg, 1px `#f2f3f5` border, 10px radius, shadow `0px 4px 30px rgba(0,0,0,0.05)`. 32px padding.
5. **Responsive:** Desktop 1512px → Tablet 800px → Mobile 392px. Grids: 4-col → 2-col → 1-col
6. **Spacing:** Use `var(--spacing-*)` tokens (4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 96)
7. **Shadows:** Card shadow and button shadow are different — see tokens.css
8. **Tab switcher:** Pill-shaped container, 800px wide, 4px padding, active tab has blue bg
9. **Card tier name colors:** Blue `#5970c2`, Gold `#8f6c32`, Platinum `#6f7f8d`, Reserve `#726394`
10. **Zero hardcoded hex values** — everything through CSS custom properties

### Homepage Figma Node IDs (for section-by-section extraction):

| Section | Node ID | Use for |
|---|---|---|
| Hero | `199:4488` | Hero section layout, stat cards |
| Authority | `199:4499` | Stats grid, trust logos |
| Business Plans | `199:4577` | 4-column plan grid |
| Plan Details | `199:4855` | Expanded comparison |
| Amex Cards | `199:4671` | Card showcase, tab switcher |
| Medallion | `199:4740` | MQD/Medallion section |
| Footer | `242:7545` | Footer layout |
| Typography | `159:1367` | Type scale reference |
| Buttons | `223:5171` | All 7 button variants |
| Cards | `223:5269` | Card component patterns |

---

## AGENT 2 — MARKETING PAGES
### "Build the public face. SEO, conversion, clarity."

**Start when:** Agent 1 marks complete in agent-log.md

**Read first:** 
- **`docs/03-design-system.md`** (Figma-extracted design system — MANDATORY)
- `docs/02-sitemap-page-structure.md` (your primary spec)
- `docs/05-content-strategy.md`
- `src/types/index.ts` (types you'll use)
- `src/config/segments.ts` (data you'll import)

### Your exact build order:

**Phase 1: Shell (required before any page)**
1. `src/components/marketing/Nav.tsx`
   - Extract nav from Figma: get_design_context(node="[NAV_NODE]")
   - Responsive: desktop horizontal + mobile hamburger drawer
   - Sticky with scroll-triggered opacity transition
   - "Log in" (ghost) + "Find my program →" (red primary)
   
2. `src/components/marketing/Footer.tsx`
   - 4-column layout
   - Links: Programs / Benefits / Cards / Resources
   - Legal + copyright strip

3. `src/app/(marketing)/layout.tsx`
   - Nav + main + Footer
   - Global marketing styles

**Phase 2: Homepage** — `/app/(marketing)/page.tsx`

Build sections in this exact order (matches Figma flow):
1. `<Hero>` — navy bg, headline, 2 CTAs (Log in + Find my program)
2. `<AuthorityBar>` — 4 stats + logo strip
3. `<ProgramFinder>` — "Find your program in 60 seconds"
   - Receives ?for= parameter + quiz result
   - Shows 4 `<SegmentCard>` in a row
   - Each card: for who / how it works / benefits / cards / miles
   - Quiz CTA widget (right column) — uses Agent 3's QuizWidget
4. `<PainPointSection>` — per-segment personalized content
5. `<SkyMilesTeaser>` — exploration hook with "Know more" → /skymiles/
6. `<CardsTeaser>` — cards for business vs personal + 4 tiers with fees
7. `<MedallionTeaser>` — status in business context
8. `<FinalCTAStrip>` — 3 parallel: Enroll / Contact Sales / Calculate ROI

**Phase 3: Program pages**
- `/programs/page.tsx` — comparison table
- `/programs/individual/page.tsx`
- `/programs/small-business/page.tsx` + sub-pages
- `/programs/mid-market/page.tsx`
- `/programs/enterprise/page.tsx`

**Phase 4: Cards**
- `/cards/compare/page.tsx` — main comparison table
- `/cards/personal/page.tsx` + individual cards
- `/cards/business/page.tsx` + individual cards

**Phase 5: SkyMiles, Medallion, Benefits**
- `/skymiles/` hub and sub-pages
- `/medallion/` hub and tier pages
- `/benefits/corporate-priority/` and sub-pages

**Phase 6: Enrollment flows**
- `/enroll/individual/page.tsx`
- `/enroll/small-business/page.tsx` — the conversion form from Figma
- `/enroll/enterprise/page.tsx`

**Phase 7: Resources**
- `/resources/faq/page.tsx`
- Blog template
- Case study template

**Phase 8: Delta Sync**
- `/delta-sync/page.tsx` — Delta Sync platform overview (marketing page)

**Component rules:**
```tsx
// Every component: no hardcoded data, import from config
import { segments } from '@/config/segments'
import type { Segment } from '@/types'

// Every component: no hardcoded colors
// Use: className="bg-[var(--color-delta-navy)]"
// Or: className="bg-delta-navy" (if Tailwind extended)

// Every segment card: accept segment as prop
interface SegmentCardProps {
  segment: Segment
  isHighlighted?: boolean
  size?: 'default' | 'compact'
}
```

---

## AGENT 3 — INTERACTIVE TOOLS
### "Make the calculators and quiz that convert browsers into customers."

**Start when:** Agent 1 marks complete

**Read first:**
- `docs/02-sitemap-page-structure.md` (quiz + calculator specs)
- `src/types/index.ts` (QuizAnswer, QuizResult, ROIInput, ROIOutput)
- `src/config/segments.ts` (quiz routing logic)

### Build order:

**TASK 1: Zustand stores**

```typescript
// src/stores/quiz.ts
import { create } from 'zustand'
import type { QuizAnswer, QuizResult, SegmentId } from '@/types'

interface QuizStore {
  step: 1 | 2 | 3 | 'result'
  answers: Partial<QuizAnswer>
  result: QuizResult | null
  setAnswer: (key: keyof QuizAnswer, value: string) => void
  computeResult: () => void
  reset: () => void
}
```

```typescript
// src/stores/calculator.ts
import { create } from 'zustand'
import type { ROIInput, ROIOutput } from '@/types'

interface CalculatorStore {
  inputs: ROIInput
  outputs: ROIOutput | null
  setInput: (key: keyof ROIInput, value: unknown) => void
  calculate: () => void
}
```

**TASK 2: Program Selector Quiz**

`src/components/tools/ProgramQuiz.tsx`
- 3 steps with animated transitions (Framer Motion)
- Step 1: Company size (4 options, large tap targets)
- Step 2: Primary goal (4 options)  
- Step 3: Estimated spend (4 options)
- Result: segment + card + Medallion path recommendation
- "Back to programs" → triggers navigation to #program-finder with ?for=[result]

ALSO create embeddable version:
`src/components/tools/QuizWidget.tsx`
- Compact version for homepage sidebar
- Same logic, smaller UI footprint
- On result: scrolls page to #program-finder + applies ?for= param

**TASK 3: ROI Calculator**

`src/components/tools/ROICalculator.tsx`
- Live calculation (no submit button — updates as user types/slides)
- All inputs use Radix Slider or shadcn Input
- Outputs update with animation (number counting up)
- "Save estimate" → email capture modal

**TASK 4: MQD Calculator**

`src/components/tools/MQDCalculator.tsx`
- Input: flights/year + avg base fare + card selection
- Output: total MQDs + progress to each tier
- Card selector: shows Headstart + Boost calculation breakdown

**TASK 5: Card Comparison Interactive Table**

`src/components/tools/CardCompareTable.tsx`
- Sticky header
- Family toggle: Personal | Business
- Row highlighting on hover
- "Best for" badges
- Import all card data from `src/config/cards.ts`

**ROUTING RULE — the quiz loop:**
```typescript
// When quiz completes, update URL and scroll to program finder
const handleQuizComplete = (result: QuizResult) => {
  router.push(`/?for=${result.segment}`, { scroll: false })
  // Smooth scroll to #program-finder section
  document.getElementById('program-finder')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}
```

---

## AGENT 4 — DASHBOARD APP
### "Build the management hub. This is where companies live daily."

**Start when:** Agent 1 marks complete

**Read first:**
- `docs/02-sitemap-page-structure.md` (dashboard section)
- The Figma retention loop: Onboarding → Main view → Stage 7 loop
- `src/types/index.ts`

### Build order:

**TASK 1: Auth setup**
```bash
npm install next-auth
```
Configure NextAuth or Clerk with:
- Email/password
- SSO option
- Redirect to /account/dashboard on login
- Redirect to /enroll on failed auth

**TASK 2: Dashboard layout**

`src/app/(dashboard)/layout.tsx`
- Auth check — redirect to login if not authenticated
- Sidebar navigation (collapsible)
- Top bar with user info + notifications

`src/components/dashboard/Sidebar.tsx`
- Delta logo + Business ID display
- Navigation items with icons (Phosphor)
- Active state styling
- Collapse on mobile

**TASK 3: Onboarding overlay**

`src/components/dashboard/OnboardingOverlay.tsx`
- Show on first login (check localStorage + server state)
- 4 steps: Business ID → Link travelers → First booking → Tour
- Progress indicator: ●●●○
- "Skip tour" option
- Persists step position if user closes and reopens

**TASK 4: Dashboard home**

`src/app/(dashboard)/account/dashboard/page.tsx`
- 4 KPI cards: Miles balance / Tier progress % / Monthly spend / Active travelers
- Each with delta vs previous period
- Tier Progress widget (% bar + ETA)
- Quick Actions panel
- Recent Activity feed

**TASK 5: Reports view**

`src/app/(dashboard)/account/reports/page.tsx`
- Date range picker (last 30d / 90d / YTD / custom)
- Department / project code filter
- Charts: spend by traveler (bar) + miles earned over time (line)
- Savings vs baseline calculation
- Export: CSV + PDF (client-side generation)
- "Schedule auto-delivery" → email settings modal

**TASK 6: Traveler Roster**

`src/app/(dashboard)/account/travelers/page.tsx`
- Data table: name / SkyMiles ID / linked status / spend YTD / miles earned
- Status badges: Linked (green) / Pending (amber) / Unlinked (gray)
- Bulk actions: Add / Remove / Send invite
- CSV upload modal
- Search/filter

**TASK 7: Tier Progress**

`src/app/(dashboard)/account/tier-progress/page.tsx`
- Current tier badge + progress bar
- Spend needed to next tier
- Projection at current pace
- Historical spend chart (12 months)
- Alert configuration

**TASK 8: Miles & Wallet**

`src/app/(dashboard)/account/miles/page.tsx`
- Company mile balance
- Transaction history
- Transfer to employee form
- eCredit redemption flow
- Sky Club membership purchase

**TASK 9: Delta Sync Dashboard (future implementation)**

`src/app/(dashboard)/delta-sync/page.tsx` (future)
- Centralized business management dashboard for Delta Sync users
- Employee account management view
- Shared rewards tracking
- Cards and credits management interface
- SkyMiles management hub

**All dashboard data:**
For now, use mock data in `src/lib/api/mock-data.ts`
Structure it to match the types — easy to swap for real API later.

---

## AGENT 5 — SEO & QUALITY
### "Make sure Google finds it and everyone can use it."

**Start when:** Agent 2 starts building pages (run in parallel)

### Tasks:

**TASK 1: Root layout metadata**
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://business.delta.com'),
  title: { 
    default: 'Delta for Business', 
    template: '%s | Delta for Business' 
  },
  description: 'Corporate travel programs for every business size...',
  // OG, Twitter, icons, manifest
}
```

**TASK 2: Per-page metadata**
Add `generateMetadata()` to every marketing page.
Reference: target titles and descriptions in `docs/04-seo-strategy.md`

**TASK 3: JSON-LD structured data**

`src/components/seo/JsonLd.tsx`
```typescript
// Renders <script type="application/ld+json">
// Used in page layouts for structured data injection
```

Implement for:
- Organization (root layout)
- FAQPage (all FAQ sections)  
- Product (program pages)
- WebApplication (calculator pages)
- Article (blog pages)
- BreadcrumbList (all pages)

**TASK 4: Sitemap**
```typescript
// src/app/sitemap.ts
// Auto-generates sitemap.xml from all routes
// Include: all marketing pages
// Exclude: /account/*, /api/*
// Priority: homepage 1.0, program pages 0.9, card pages 0.8
```

**TASK 5: robots.txt**
```typescript
// src/app/robots.ts
// Allow: all marketing pages
// Disallow: /account/, /api/, /admin/
// Sitemap: https://business.delta.com/sitemap.xml
```

**TASK 6: OG images**
```typescript
// src/app/og/[...slug]/route.tsx
// Dynamic OG image generation with @vercel/og
// Template: Delta navy bg + page title + segment color accent
```

**TASK 7: Accessibility audit**
- All images: alt text
- All interactive elements: aria labels
- Color contrast: WCAG AA minimum
- Keyboard navigation: all interactive elements reachable
- Focus indicators: visible on all focusable elements
- Screen reader: test with main flow

---

## COORDINATION RULES

### File ownership (absolute — no exceptions)

```
tokens.css         → Agent 1 ONLY
types/index.ts     → Agent 1 ONLY  
config/*.ts        → Agent 1 ONLY
components/marketing/ → Agent 2 ONLY
components/tools/  → Agent 3 ONLY
components/dashboard/ → Agent 4 ONLY
app/(marketing)/   → Agent 2 ONLY
app/(dashboard)/   → Agent 4 ONLY
app/sitemap.ts     → Agent 5 ONLY
```

### Shared files (any agent can read, Agent 1 owns writes)

```
src/types/index.ts     → READ ONLY for Agents 2, 3, 4, 5
src/config/           → READ ONLY for Agents 2, 3, 4, 5
src/styles/tokens.css → READ ONLY for Agents 2, 3, 4, 5
src/components/ui/    → Agent 1 scaffolds, all agents can add components
```

### Communication protocol

Each agent logs completion in `docs/06-agent-log.md`:
```
[Agent X — Task Y — COMPLETE — timestamp]
Built: [list of files]
Depends on: [what you need from others]
Provides: [what you expose to others]
Notes: [any decisions or deviations]
```

### Conflict resolution

If you need to change a file owned by another agent:
1. Document the needed change in `docs/06-agent-log.md`
2. The owning agent makes the change
3. Never modify another agent's files directly

---

*Document: 09-agent-instructions.md | Delta for Business | April 2026*
