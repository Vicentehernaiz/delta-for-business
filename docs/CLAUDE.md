# CLAUDE.md — Delta for Business Web Redesign
## Master instruction file for Claude Code

> **Read this file completely before writing any code.**
> This file defines the project architecture, agent roles, design system extraction protocol, and all shared contracts.

---

## ⚠️ PRIMARY OBJECTIVE: USABILITY TESTING

This project's primary goal is **usability testing** of the corporate travel section. Every page, component, and interaction must be:
- **Fully interactive** — all buttons, forms, navigation, tabs, accordions must work
- **Realistic content** — no lorem ipsum; use real Delta program data and copy
- **Complete user flows** — enrollment forms submit, quiz produces results, calculators compute
- **Responsive** — testable on desktop (1512px), tablet (800px), and mobile (392px)
- **Accessible** — keyboard navigable, screen reader compatible, WCAG 2.1 AA

Testers will evaluate: navigation clarity, information architecture, enrollment friction, program comprehension, and tool usefulness. Every prototype page must support end-to-end task completion.

---

## 0. Project Overview

**Product:** Delta for Business — corporate travel web redesign  
**Two separate products in one repo:**
1. **Marketing site** (`/app/(marketing)/`) — public-facing, SEO-optimized
2. **Dashboard app** (`/app/(dashboard)/`) — authenticated management hub

**User flow reference (from Figma):**
- Trigger → Awareness → Landing → Exploration (SkyMiles, Cards, Medallion) → Intent/Quiz → Enrollment → Dashboard onboarding → Retention loop

---

## 1. Figma MCP Setup — REQUIRED BEFORE STARTING

### Step 1: Connect Figma MCP in Claude Code

Add these to your MCP servers configuration:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN_HERE"
      }
    }
  }
}
```

### Step 2: Primary Figma file references

```
DESIGN FILE:     https://www.figma.com/design/a2Xx676U8t3nZj5AOlMeOw/Delta
USER FLOW FILE:  https://www.figma.com/board/optnGu2hC3kn4lpG67GDl7
ARCH MAP FILE:   https://www.figma.com/board/IiRZXMLef5vp9x1OrIBqQY
```

### Step 3: Extract design tokens from Figma

When starting any UI component, run this extraction protocol:

```
1. Use Figma MCP: get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="179-2310")
2. Use Figma MCP: get_variable_defs(fileKey="a2Xx676U8t3nZj5AOlMeOw")
3. Map extracted values to tokens in src/styles/tokens.css
4. Never hardcode colors or spacing — always use CSS custom properties
```

### Step 4: Navbar extraction example

```
To build the navbar, run:
get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="[NAVBAR_NODE_ID]")

Then extract:
- Background color → var(--color-nav-bg)
- Text color → var(--color-nav-text)
- Link hover color → var(--color-nav-hover)
- Height → var(--nav-height)
- Font family → var(--font-nav)
- Font size → var(--text-nav-item)
- Padding → var(--nav-item-px) var(--nav-item-py)
```

### Step 5: Component extraction workflow

For every new component:
```
1. Identify the Figma node ID from the design file
2. Call get_design_context() with that node ID
3. Note: background, border, padding, typography, border-radius, shadows
4. Map each value to a CSS variable or Tailwind class
5. Build the component using ONLY tokens — never raw hex values
6. Cross-reference with src/styles/tokens.css
```

### Step 6: HOMEPAGE DESIGN REFERENCE — MANDATORY

The homepage design has been extracted from Figma and documented in `docs/03-design-system.md`. Agents MUST use this as the source of truth for implementation.

**Primary design references (extracted April 2026):**

```
HOMEPAGE DESIGN:   https://www.figma.com/design/a2Xx676U8t3nZj5AOlMeOw/Delta?node-id=242-7645&m=dev
DESIGN SYSTEM:     https://www.figma.com/design/a2Xx676U8t3nZj5AOlMeOw/Delta?node-id=251-8690&m=dev
```

**Key Figma node IDs for homepage sections:**

| Section | Node ID | Dimensions |
|---|---|---|
| Hero | `199:4488` | 1512 × 982px |
| Authority/Stats | `199:4499` | 1512 × 844px |
| Business Plans Grid | `199:4577` | 1512 × 933px |
| Plan Details Expanded | `199:4855` | 1512 × 1325px |
| Delta-Amex Cards | `199:4671` | 1512 × 1726px |
| Medallion Status | `199:4740` | 1512 × 866px |
| Footer | `242:7545` | 1512 × 418px |
| **Tablet variant** | `242:6884` | 800px |
| **Mobile variant** | `249:7838` | 392px |

**Design system component node IDs:**

| Component | Node ID | Contents |
|---|---|---|
| Typography Styles | `159:1367` | All type scale definitions |
| Button Component | `223:5171` | 7 button variants (red, navy, gray, ghost, links) |
| Card Components | `223:5269` | Personal + Business card layouts with tab switcher |
| Font Weights | `159:1386` | Whitney font family specimens |

**Implementation rules from the extracted design:**

1. **Font family:** Whitney (Semibold for headings/buttons, Medium for body) — use system-font fallback stack
2. **Three responsive breakpoints:** Desktop 1512px → Tablet 800px → Mobile 392px
3. **Container widths:** narrow (1024px), wide (1200px), max (1448px)
4. **Card shadow:** `0px 4px 30px rgba(0,0,0,0.05)` — used on ALL card components
5. **Button shadow:** `0px 2px 5px rgba(12,125,238,0.1)` — used on solid buttons
6. **Border radius:** 10px for cards/containers, 999px for buttons/pills
7. **Primary CTA:** Delta red (#c01933) bg, white text, full-pill radius
8. **7 button variants:** primary-red, dark, light, active-blue, ghost-white, link-blue, link-red
9. **Grid layouts:** 4-col plans → 2-col tablet → 1-col mobile
10. **All colors MUST use CSS custom properties from `tokens.css`** — zero hardcoded hex values

**Agents MUST read `docs/03-design-system.md` before implementing any UI component.** This document contains the complete extracted design system with exact values for colors, typography, spacing, shadows, borders, button variants, card patterns, and responsive rules.

---

## 2. Tech Stack

```
Framework:    Next.js 14 (App Router, TypeScript strict)
Styling:      Tailwind CSS + CSS custom properties (tokens.css)
Components:   shadcn/ui (Radix UI primitives)
Animation:    Framer Motion
Forms:        React Hook Form + Zod
State:        Zustand (quiz, segment selection, dashboard)
Icons:        Phosphor Icons (@phosphor-icons/web)
Charts:       Recharts
SEO:          Next.js Metadata API + JSON-LD
Auth:         NextAuth.js (or Clerk)
Deploy:       Vercel
Testing:      Vitest + Playwright
```

### Icons — Phosphor Icons (MANDATORY)

This project uses **Phosphor Icons** instead of Lucide. All agents must follow these rules:

```bash
# Install
npm i @phosphor-icons/web
```

```typescript
// Import the full regular set (default weight)
import "@phosphor-icons/web/regular"

// OR import specific weights for performance:
import "@phosphor-icons/web/bold"
import "@phosphor-icons/web/light"
import "@phosphor-icons/web/fill"
import "@phosphor-icons/web/duotone"
import "@phosphor-icons/web/thin"
```

**Usage in JSX:**
```tsx
// Use as web component with class name
<i className="ph ph-airplane"></i>
<i className="ph-bold ph-chart-line"></i>
<i className="ph-fill ph-star"></i>

// Sizing via CSS or Tailwind
<i className="ph ph-airplane text-2xl"></i>
<i className="ph ph-users text-[var(--text-lg)]"></i>
```

**Weight guide for this project:**
- `regular` — Default for body content, navigation, UI elements
- `bold` — CTAs, emphasis, active states
- `fill` — Selected/active states, KPI cards, dashboard indicators
- `duotone` — Hero sections, feature cards, decorative icons
- `light` — Secondary text, captions, subtle indicators

**NEVER use Lucide React.** If a shadcn/ui component imports from `lucide-react`, replace the import with the equivalent Phosphor icon class.

**Common icon mappings for this project:**
```
Navigation:     ph-airplane, ph-credit-card, ph-medal, ph-chart-line, ph-users
Programs:       ph-buildings, ph-user, ph-briefcase, ph-globe
Dashboard:      ph-chart-bar, ph-currency-dollar, ph-trend-up, ph-trend-down
Actions:        ph-arrow-right, ph-plus, ph-download, ph-envelope
Status:         ph-check-circle, ph-warning, ph-info, ph-x-circle
```

---

## 3. Agent Team — Roles & Ownership

This project uses **5 specialized agents**. Each agent owns specific files and never touches another agent's files without explicit instruction.

---

### AGENT 1 — Architect
**Start here. Run first.**

**Responsibility:** Project scaffolding, configuration, shared systems

**Files owned:**
```
next.config.ts
tailwind.config.ts
src/styles/tokens.css          ← Design tokens from Figma
src/lib/                       ← Utilities, hooks, constants
src/types/index.ts             ← ALL TypeScript types
src/config/                    ← Data files (segments, cards, medallion)
src/config/segments.ts
src/config/cards.ts
src/config/medallion.ts
src/config/navigation.ts
middleware.ts
```

**First task:**
1. Run `npx create-next-app@latest delta-for-business --typescript --tailwind --app`
2. Install deps: `npx shadcn-ui@latest init`
3. Extract Figma tokens → populate `src/styles/tokens.css`
4. Define all types in `src/types/index.ts`
5. Populate all config files with domain data

**Never:** Build UI components, write page code

---

### AGENT 2 — Marketing Pages
**Depends on: Agent 1 complete**

**Responsibility:** All public marketing pages

**Files owned:**
```
src/app/(marketing)/
src/components/marketing/
src/components/ui/              ← Shared primitive components
content/                        ← MDX content
```

**Build order:**
1. Layout + Nav + Footer
2. Homepage (`/`)
3. Programs overview (`/programs/`)
4. Individual segment pages (`/programs/[segment]/`)
5. Benefits hub (`/benefits/`)
6. Cards hub (`/cards/`) + compare page
7. Individual card pages (`/cards/[slug]/`)
8. Medallion hub (`/medallion/`)
9. Resources (FAQ, blog, case studies)
10. Enroll pages (`/enroll/`)

**Never:** Write dashboard code, API routes, auth logic

---

### AGENT 3 — Interactive Tools
**Depends on: Agent 1 complete**

**Responsibility:** Calculators, quiz, interactive comparison tools

**Files owned:**
```
src/components/tools/
src/app/(marketing)/tools/
src/stores/                     ← Zustand stores
src/stores/quiz.ts
src/stores/calculator.ts
src/stores/segment.ts
```

**Build order:**
1. Zustand stores (quiz state, segment selection, calculator)
2. Program selector quiz (`/tools/program-selector/`)
3. ROI calculator (`/tools/roi-calculator/`)
4. MQD calculator (`/medallion/mqd-calculator/`)
5. Card comparison interactive table
6. Connection diagram (interactive SVG)

**Never:** Write server components, API routes, dashboard code

---

### AGENT 4 — Dashboard App
**Depends on: Agent 1 complete**

**Responsibility:** All authenticated dashboard views (management app)

**Files owned:**
```
src/app/(dashboard)/
src/components/dashboard/
src/lib/api/                    ← API client + mock data
src/lib/auth/                   ← Auth utilities
```

**Build order:**
1. Dashboard layout (sidebar + topbar)
2. Onboarding flow (shown after first login)
3. Overview / KPI home
4. Miles & Rewards
5. Spend & Reports
6. Traveler Roster
7. Tier Progress tracker
8. Credit Wallet
9. Settings

**Never:** Write marketing pages, public-facing components

---

### AGENT 5 — SEO & Quality
**Runs last, or in parallel with Agent 2**

**Responsibility:** Metadata, structured data, a11y, performance, sitemaps

**Files owned:**
```
src/app/layout.tsx              ← Root metadata
src/components/seo/
src/app/sitemap.ts
src/app/robots.ts
public/                         ← OG images, icons, manifest
```

**Tasks:**
1. Root layout metadata
2. Per-page metadata via generateMetadata()
3. JSON-LD structured data (Organization, Product, FAQPage, Article)
4. OG image generation (@vercel/og)
5. Sitemap generation
6. robots.txt
7. Core Web Vitals audit

---

## 4. Shared Contracts — Read Before Writing Any Component

### 4.1 Import rules (NEVER violate these)

```typescript
// ✅ CORRECT — import from config
import { segments } from '@/config/segments'
import { cards } from '@/config/cards'
import { medallionTiers } from '@/config/medallion'
import type { Segment, Card, MedallionTier } from '@/types'

// ❌ WRONG — never define domain data in a component
const segments = [{ id: 'smb', name: 'Small Business', ... }]
```

### 4.2 Styling rules (NEVER violate these)

```tsx
// ✅ CORRECT — use CSS variables from tokens.css
<div className="bg-[var(--color-delta-navy)] text-[var(--color-white)]">

// ✅ CORRECT — use Tailwind semantic classes mapped to tokens
<div className="bg-delta-navy text-white">

// ❌ WRONG — never hardcode colors
<div style={{ backgroundColor: '#0B1940' }}>
<div className="bg-[#0B1940]">
```

### 4.3 Component pattern (always use this)

```tsx
// Every component follows this pattern:
interface ComponentProps {
  // explicit prop types — no `any`
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  return (
    <div className="...tailwind classes using tokens...">
      {/* content */}
    </div>
  )
}
```

### 4.4 Segment parameter system

Pages accept `?for=[segment]` to pre-select a segment:

```typescript
// Valid segment values
type SegmentParam = 'individual' | 'smb' | 'mid-market' | 'enterprise'

// How to read it in a page
export default function Page({ searchParams }: { searchParams: { for?: SegmentParam } }) {
  const segment = searchParams.for ?? 'smb' // default to SMB
  ...
}
```

---

## 5. Design Token Extraction Template

When Agent 1 extracts tokens from Figma, populate this file:

```css
/* src/styles/tokens.css */
/* AUTO-EXTRACTED FROM FIGMA — DO NOT EDIT MANUALLY */
/* Run: extract-figma-tokens.ts to refresh */

:root {
  /* ── Brand colors ─────────────────────── */
  --color-delta-navy:    /* extracted from Figma */;
  --color-delta-red:     /* extracted from Figma */;
  --color-delta-white:   #FFFFFF;
  --color-delta-gray:    /* extracted from Figma */;

  /* ── Segment colors ───────────────────── */
  --color-segment-individual:   /* teal family */;
  --color-segment-smb:          /* teal family */;
  --color-segment-mid:          /* blue family */;
  --color-segment-enterprise:   /* blue family */;

  /* ── Card tier colors ─────────────────── */
  --color-card-blue:      /* gray */;
  --color-card-gold:      /* purple */;
  --color-card-platinum:  /* deep purple */;
  --color-card-reserve:   /* navy */;

  /* ── Medallion tier colors ────────────── */
  --color-medallion-silver:   /* gray-blue */;
  --color-medallion-gold:     /* amber */;
  --color-medallion-platinum: /* violet */;
  --color-medallion-diamond:  /* navy */;

  /* ── Typography ───────────────────────── */
  --font-display:    /* extracted from Figma */;
  --font-body:       /* extracted from Figma */;

  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;
  --text-2xl:   1.5rem;
  --text-3xl:   1.875rem;
  --text-4xl:   2.25rem;
  --text-5xl:   3rem;
  --text-hero:  /* extracted from Figma hero */;

  /* ── Spacing ──────────────────────────── */
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;

  /* ── Layout ───────────────────────────── */
  --nav-height:       /* extracted from Figma */;
  --nav-height-mob:   /* mobile version */;
  --container-max:    1280px;
  --container-pad:    var(--space-6);

  /* ── Border radius ────────────────────── */
  --radius-sm:   /* extracted */;
  --radius-md:   /* extracted */;
  --radius-lg:   /* extracted */;
  --radius-xl:   /* extracted */;
  --radius-full: 9999px;

  /* ── Shadows ──────────────────────────── */
  --shadow-card:    /* extracted */;
  --shadow-nav:     /* extracted */;
  --shadow-modal:   /* extracted */;

  /* ── Transitions ──────────────────────── */
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;

  /* ── Z-index ──────────────────────────── */
  --z-nav:      100;
  --z-modal:    200;
  --z-toast:    300;
}
```

---

## 6. Navbar Extraction Instructions

**For Agent 2 (Marketing Pages), step 1:**

```
1. Open Figma MCP connection
2. Run: get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="[NAV_NODE]")
3. From the response, extract:
   - Top-level frame dimensions → nav height
   - Background fill color → --color-nav-bg
   - Logo node position/size → logo dimensions
   - Nav item text styles → font, size, weight, color
   - Active/hover state colors → --color-nav-active, --color-nav-hover
   - CTA button styles → map to Button component variant
   - Mobile breakpoint behavior → hamburger menu pattern

4. Build Nav component:
```

```tsx
// src/components/marketing/Nav.tsx
// Extracted from Figma node [NAV_NODE_ID]
// Background: var(--color-nav-bg)
// Height: var(--nav-height)
// Font: var(--font-nav-item), var(--text-nav-item)

export function Nav() {
  return (
    <header
      className="fixed top-0 w-full z-[var(--z-nav)]"
      style={{ height: 'var(--nav-height)', background: 'var(--color-nav-bg)' }}
    >
      <nav className="container flex items-center justify-between h-full">
        <DeltaLogo />
        <NavLinks />
        <NavCTAs />
        <MobileMenuButton />
      </nav>
    </header>
  )
}
```

---

## 7. Domain Data Config — Agent 1 must build these

### src/config/segments.ts

```typescript
import type { Segment } from '@/types'

export const segments: Record<string, Segment> = {
  individual: {
    id: 'individual',
    name: 'Individual Business Traveler',
    shortName: 'Individual',
    tagline: 'Personal travel perks, zero employer involvement',
    description: 'For any person who travels for work...',
    color: 'var(--color-segment-individual)',
    programType: 'self-serve',
    oldName: 'Delta Business Traveler',
    enrollmentPath: '/enroll/individual',
    minTravelers: 1,
    maxTravelers: 1,
    annualSpend: { min: 0, max: null },
    ctaPrimary: { label: 'Get it free', href: '/enroll/individual' },
    ctaSecondary: { label: 'Know more', href: '/programs/individual' },
    keyBenefits: [
      'Hertz Five Star status',
      'CLEAR Plus discount',
      'Industrious coworking at $99/month',
      'LinkedIn Premium discount',
    ],
  },
  smb: {
    id: 'smb',
    name: 'Small Business',
    shortName: 'Small Business',
    tagline: 'Your company earns miles. Your employees earn miles. Same flight.',
    description: 'For companies with 1–50 travelers...',
    color: 'var(--color-segment-smb)',
    programType: 'self-serve',
    oldName: 'SkyMiles for Business',
    enrollmentPath: '/enroll/small-business',
    minTravelers: 1,
    maxTravelers: 50,
    annualSpend: { min: 5000, max: 299999 },
    ctaPrimary: { label: 'Get started free', href: '/enroll/small-business' },
    ctaSecondary: { label: 'Know more', href: '/programs/small-business' },
    keyBenefits: [
      'Company earns up to 10 miles/$',
      'Employees earn personal miles simultaneously',
      'eCredit redemptions (~1.5–2¢/mile)',
      'Management dashboard included',
    ],
  },
  'mid-market': {
    id: 'mid-market',
    name: 'Mid-Market Business',
    shortName: 'Mid-Market',
    tagline: 'Negotiated fares, Corporate Priority, account manager',
    description: 'For companies with 50–500 travelers...',
    color: 'var(--color-segment-mid)',
    programType: 'negotiated',
    oldName: 'Mid-Market Sales Agreement (MSA)',
    enrollmentPath: '/enroll/enterprise',
    minTravelers: 50,
    maxTravelers: 500,
    annualSpend: { min: 50000, max: 300000 },
    ctaPrimary: { label: 'Contact sales', href: '/enroll/enterprise' },
    ctaSecondary: { label: 'Know more', href: '/programs/mid-market' },
    keyBenefits: [
      'Negotiated fares off published rates',
      'Full Corporate Priority suite',
      'Dedicated account manager',
      'Concur / TMC integration',
    ],
  },
  enterprise: {
    id: 'enterprise',
    name: 'Large Enterprise',
    shortName: 'Enterprise',
    tagline: 'Full managed travel with global Corporate Priority coverage',
    description: 'For companies with 500+ travelers...',
    color: 'var(--color-segment-enterprise)',
    programType: 'negotiated',
    oldName: 'Corporate Sales Agreement (CSA)',
    enrollmentPath: '/enroll/enterprise',
    minTravelers: 500,
    maxTravelers: null,
    annualSpend: { min: 300000, max: null },
    ctaPrimary: { label: 'Contact sales', href: '/enroll/enterprise' },
    ctaSecondary: { label: 'Know more', href: '/programs/enterprise' },
    keyBenefits: [
      'Full Corporate Priority suite globally',
      'Partner airlines: AF, KLM, LATAM, VA',
      'Unused ticket transfer program',
      '24/7 Corporate Solutions support',
    ],
  },
}

export const segmentOrder = ['individual', 'smb', 'mid-market', 'enterprise'] as const
```

---

## 8. File Structure

```
delta-for-business/
├── CLAUDE.md                          ← THIS FILE
├── .agents/
│   └── skills/                        ← Installed agent skills
│       ├── frontend-design/           ← Bold aesthetic direction
│       ├── web-design-guidelines/     ← Vercel Web Interface Guidelines
│       ├── ui-ux-pro-max/             ← Comprehensive UI/UX design rules
│       └── programmatic-seo/          ← SEO-driven page generation
├── docs/
│   ├── 02-sitemap-page-structure.md
│   ├── 04-competitive-analysis.md
│   ├── 05-content-strategy.md
│   ├── 06-faqs-knowledge-base.md
│   ├── 07-skymiles-knowledge-base.md
│   ├── 09-agent-instructions.md
│   └── agent-log.md                   ← Agent coordination log
├── src/
│   ├── app/
│   │   ├── (marketing)/               ← Agent 2
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               ← Homepage
│   │   │   ├── programs/
│   │   │   │   ├── page.tsx           ← Programs overview (comparison table)
│   │   │   │   ├── compare/
│   │   │   │   │   └── page.tsx       ← Delta vs competitors (SEO)
│   │   │   │   └── [segment]/
│   │   │   │       └── page.tsx       ← individual | small-business | mid-market | enterprise
│   │   │   ├── benefits/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── corporate-priority/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── seating/page.tsx
│   │   │   │   │   ├── boarding/page.tsx
│   │   │   │   │   ├── upgrades/page.tsx
│   │   │   │   │   ├── service-recovery/page.tsx
│   │   │   │   │   └── global/page.tsx
│   │   │   │   ├── sky-club/page.tsx
│   │   │   │   └── meetings-groups/page.tsx
│   │   │   ├── cards/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── compare/
│   │   │   │   │   └── page.tsx       ← All 7 cards side-by-side
│   │   │   │   ├── personal/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── blue/page.tsx
│   │   │   │   │   ├── gold/page.tsx
│   │   │   │   │   ├── platinum/page.tsx
│   │   │   │   │   └── reserve/page.tsx
│   │   │   │   └── business/
│   │   │   │       ├── page.tsx
│   │   │   │       ├── gold-business/page.tsx
│   │   │   │       ├── platinum-business/page.tsx
│   │   │   │       └── reserve-business/page.tsx
│   │   │   ├── skymiles/
│   │   │   │   ├── page.tsx           ← SkyMiles hub
│   │   │   │   ├── how-it-works/page.tsx
│   │   │   │   ├── earning/page.tsx
│   │   │   │   ├── redeeming/page.tsx
│   │   │   │   └── double-earn/page.tsx
│   │   │   ├── medallion/
│   │   │   │   ├── page.tsx           ← Medallion overview
│   │   │   │   ├── overview/page.tsx
│   │   │   │   ├── silver/page.tsx
│   │   │   │   ├── gold/page.tsx
│   │   │   │   ├── platinum/page.tsx
│   │   │   │   ├── diamond/page.tsx
│   │   │   │   └── mqd-calculator/page.tsx
│   │   │   ├── delta-sync/
│   │   │   │   └── page.tsx           ← Delta Sync platform overview
│   │   │   ├── tools/                 ← Agent 3
│   │   │   │   ├── program-selector/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── roi-calculator/
│   │   │   │       └── page.tsx
│   │   │   ├── enroll/
│   │   │   │   ├── individual/page.tsx
│   │   │   │   ├── small-business/page.tsx
│   │   │   │   └── enterprise/page.tsx
│   │   │   └── resources/
│   │   │       ├── faq/page.tsx
│   │   │       ├── glossary/page.tsx
│   │   │       ├── blog/
│   │   │       │   └── [slug]/page.tsx
│   │   │       ├── case-studies/
│   │   │       │   └── [slug]/page.tsx
│   │   │       └── program-terms/page.tsx
│   │   ├── (dashboard)/               ← Agent 4
│   │   │   ├── layout.tsx
│   │   │   ├── account/
│   │   │   │   ├── dashboard/page.tsx
│   │   │   │   ├── miles/page.tsx
│   │   │   │   ├── travelers/page.tsx
│   │   │   │   ├── reports/page.tsx
│   │   │   │   ├── tier-progress/page.tsx
│   │   │   │   ├── wallet/page.tsx
│   │   │   │   └── settings/page.tsx
│   │   │   └── onboarding/page.tsx
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/route.ts
│   │   ├── og/
│   │   │   └── [...slug]/route.tsx    ← Dynamic OG image generation
│   │   ├── layout.tsx                 ← Agent 5 (root metadata)
│   │   ├── sitemap.ts                 ← Agent 5
│   │   └── robots.ts                  ← Agent 5
│   ├── components/
│   │   ├── marketing/                 ← Agent 2
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── AuthorityBar.tsx
│   │   │   ├── ProgramFinder.tsx
│   │   │   ├── SegmentCard.tsx
│   │   │   ├── SegmentGrid.tsx
│   │   │   ├── PainPointSection.tsx
│   │   │   ├── SkyMilesTeaser.tsx
│   │   │   ├── CardsTeaser.tsx
│   │   │   ├── MedallionTeaser.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── PartnerGrid.tsx
│   │   │   ├── DualEarnDiagram.tsx
│   │   │   └── EarningRatesTable.tsx
│   │   ├── tools/                     ← Agent 3
│   │   │   ├── ProgramQuiz.tsx
│   │   │   ├── QuizWidget.tsx         ← Embeddable homepage version
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── MQDCalculator.tsx
│   │   │   └── CardCompareTable.tsx
│   │   ├── dashboard/                 ← Agent 4
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopBar.tsx
│   │   │   ├── KPICard.tsx
│   │   │   ├── TierProgress.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   ├── MonthlySummary.tsx
│   │   │   ├── OnboardingOverlay.tsx
│   │   │   ├── TravelerRoster.tsx
│   │   │   ├── SpendChart.tsx
│   │   │   └── MilesTransfer.tsx
│   │   ├── seo/                       ← Agent 5
│   │   │   ├── JsonLd.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── OgImage.tsx
│   │   └── ui/                        ← Shared (Agent 1 scaffolds)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── tabs.tsx
│   │       ├── accordion.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── slider.tsx
│   │       ├── table.tsx
│   │       ├── tooltip.tsx
│   │       └── progress.tsx
│   ├── config/                        ← Agent 1
│   │   ├── segments.ts
│   │   ├── cards.ts
│   │   ├── medallion.ts
│   │   ├── smb-tiers.ts
│   │   ├── navigation.ts
│   │   └── partners.ts               ← Airline + earning partner data
│   ├── lib/                           ← Agent 1
│   │   ├── utils.ts
│   │   ├── hooks/
│   │   │   ├── useSegment.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   └── useScrollSpy.ts
│   │   ├── api/                       ← Agent 4
│   │   │   └── mock-data.ts
│   │   └── auth/                      ← Agent 4
│   │       └── auth-options.ts
│   ├── stores/                        ← Agent 3
│   │   ├── quiz.ts
│   │   ├── calculator.ts
│   │   └── segment.ts
│   ├── styles/
│   │   ├── tokens.css                 ← Agent 1 (from Figma)
│   │   └── globals.css
│   └── types/
│       └── index.ts                   ← Agent 1
├── content/
│   ├── faq/
│   ├── blog/
│   └── case-studies/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── cards/                 ← Card product images
│   │   │   ├── hero/                  ← Hero section assets
│   │   │   ├── delta-sync/            ← Delta Sync platform images
│   │   │   ├── logos/                 ← Brand/partner logos
│   │   │   ├── medallion/             ← Medallion tier images
│   │   │   ├── og/                    ← OG image templates
│   │   │   └── partners/              ← Partner airline/hotel logos
│   │   ├── fonts/                     ← Whitney font files
│   │   └── icons/                     ← Icon assets
│   ├── favicon.ico
│   └── manifest.json
├── scripts/
│   └── extract-figma-tokens.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 9. Page Scroll Architecture — Homepage

**From the Figma flow, the homepage has this exact scroll sequence:**

```
/  (homepage)
│
├── [SECTION 1] HERO
│   "WHAT, FOR WHO, AND HOW"
│   Clear 3-segment value prop
│   Two CTAs: Log in / Launch app (existing) + Find my program (new)
│
├── [SECTION 2] AUTHORITY
│   Impactful data + logos
│   #1 BTN 14 years, $8.2B Amex, 95% premium households
│
├── [SECTION 3] PROGRAM FINDER — "Find your program in 60 seconds"
│   ← Red arrow loops back here from Quiz
│   4 segment cards side-by-side:
│   Individual | SMB ($5k-50k) | Corporate Mid ($50-300k) | Corporate Large ($50-300k+)
│   Each card: For who, how it works, benefits, cards, miles
│   CTAs: Know more / Get it OR Get started OR Contact sales
│
├── [SECTION 4] PAIN POINTS + MOTIVATIONS
│   Per segment personalized content
│   
├── [SECTION 5] EXPLORATION — STAGE 3
│   SkyMiles for Business explanation (For who / how it works / use with)
│   → "Know more" → links to SkyMiles URL page
│
├── [SECTION 6] PREMIUM CARDS
│   For what programs, for who, benefits
│   Cards for business vs Cards for personal use
│   Blue $0 / Gold $150 / Platinum $350 / Reserve $650
│   → "Know more about cards" → Cards URL
│
├── [SECTION 7] MEDALLION STATUS
│   In business section context
│
└── [SECTION 8] FINAL CTA
    → Enroll / Contact Sales / Calculate ROI
```

---

## 10. Dashboard Architecture — From Figma Flow

```
/account/dashboard  (authenticated)
│
├── ONBOARDING FLOW (shown once after first login)
│   Step 1: Company confirmed
│   Step 2: Link travelers
│   Step 3: First booking guide
│   Step 4: Dashboard tour
│
├── MAIN VIEW (post-onboarding + retention loop returns here)
│   KPIs: Miles balance / Tier progress / Monthly spend / Active travelers
│   Quick actions
│   Recent activity
│
└── RETENTION LOOP (Stage 7)
    Monthly report → tier alert → redemption prompt → loops back
```

---

## 11. Enrollment Flow — From Figma Intent Stage

```
STAGE 5: INTENT — Decision to enroll (CONVERSION)
│
├── User fills form
│   + System alert: "Your parameters match [program type]"
│   + Review benefits and terms
│   + Contact Delta sales team (if mid/large)
│   + I understand and create account
│
├── If SMB → Create account (self-serve green path)
│
├── If Mid/Large → Meeting with Corporate Sales
│   (closing conditions discussion)
│
├── System dialogue: account created + mail sent
│
└── Activation mail + conditions
    ↓
    Dashboard onboarding
```

---

## 12. SEO Implementation Rules

### Every page must have:

```typescript
// app/(marketing)/[page]/page.tsx
export const metadata: Metadata = {
  title: '[Page Title] | Delta for Business',
  description: '[150-160 char description with primary keyword]',
  openGraph: {
    title: '[OG Title]',
    description: '[OG Description]',
    images: ['/og/[page-specific].png'],
  },
  alternates: {
    canonical: 'https://business.delta.com/[path]',
  },
}
```

### JSON-LD structured data:

```typescript
// Use this pattern for FAQ pages
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}
```

---

## 13. Agent Skills — REQUIRED BEFORE BUILDING

Four specialized skills are installed in `.agents/skills/`. Agents **must read the relevant SKILL.md** before starting any UI, design, or SEO work.

### Skill assignment by agent

| Agent | Must read before starting |
|---|---|
| **Agent 1 — Architect** | `programmatic-seo/SKILL.md` (URL structure, sitemap architecture, internal linking) |
| **Agent 2 — Marketing Pages** | `frontend-design/SKILL.md` + `ui-ux-pro-max/SKILL.md` + `programmatic-seo/SKILL.md` |
| **Agent 3 — Interactive Tools** | `ui-ux-pro-max/SKILL.md` (interaction patterns, form UX, accessibility) |
| **Agent 4 — Dashboard App** | `ui-ux-pro-max/SKILL.md` (dashboard patterns, data viz, navigation) |
| **Agent 5 — SEO & Quality** | `programmatic-seo/SKILL.md` + `web-design-guidelines/SKILL.md` |
| **Any agent doing UI review** | `web-design-guidelines/SKILL.md` (fetches latest Vercel Web Interface Guidelines) |

### Skill descriptions

**`frontend-design`** — Production-grade frontend interfaces with bold aesthetic direction. Avoid generic AI aesthetics. Commit to a cohesive design language: typography, color, motion, spatial composition.

**`web-design-guidelines`** — Review UI code against Vercel's Web Interface Guidelines. Covers accessibility, performance, layout, interaction patterns. Run this on every component before marking it complete.

**`ui-ux-pro-max`** — Comprehensive design intelligence: 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types. Priority order: Accessibility → Touch/Interaction → Performance → Style → Layout → Typography → Animation → Forms → Navigation → Charts.

**`programmatic-seo`** — SEO-driven page generation at scale. Covers URL structure, template design, internal linking architecture, indexation strategy, and quality checks. Critical for the comparison pages, segment pages, and card pages that follow repeatable patterns.

---

## 14. SEO-Optimized Structure Directives

Agents must analyze all available documentation (`docs/02-sitemap-page-structure.md`, `docs/04-competitive-analysis.md`, `docs/05-content-strategy.md`, `docs/06-faqs-knowledge-base.md`, `docs/07-skymiles-knowledge-base.md`) and apply these SEO principles when building the site structure:

### URL architecture rules

```
✅ CORRECT — subfolder structure consolidates domain authority
business.delta.com/programs/small-business/
business.delta.com/cards/compare/
business.delta.com/skymiles/double-earn/

❌ WRONG — subdomains split authority
skymiles.business.delta.com/
cards.business.delta.com/
```

### Internal linking architecture (hub and spoke)

Every section uses a hub-and-spoke model:

```
/programs/                  ← HUB (comparison table, overview)
├── /individual/            ← SPOKE
├── /small-business/        ← SPOKE (cross-links to /cards/, /skymiles/)
├── /mid-market/            ← SPOKE (cross-links to /benefits/corporate-priority/)
├── /enterprise/            ← SPOKE
└── /compare/               ← SPOKE (cross-links to ALL spokes + competitor keywords)

/cards/                     ← HUB
├── /compare/               ← SPOKE (THE comparison hub)
├── /personal/[slug]/       ← SPOKES (each links to compare + related cards)
└── /business/[slug]/       ← SPOKES

/skymiles/                  ← HUB
├── /how-it-works/          ← SPOKE
├── /earning/               ← SPOKE (links to /cards/ for card earning)
├── /redeeming/             ← SPOKE
└── /double-earn/           ← SPOKE (links to /programs/compare/ for competitive context)
```

### Programmatic SEO opportunities

These page patterns follow repeatable templates and should be built as programmatic SEO pages:

| Pattern | Template | Variables | Target keywords |
|---|---|---|---|
| Segment pages | `/programs/[segment]/` | segment data from config | "delta [segment] program" |
| Card pages | `/cards/[family]/[slug]/` | card data from config | "delta amex [card] card 2026" |
| Medallion tiers | `/medallion/[tier]/` | tier data from config | "delta [tier] medallion status" |
| Comparison | `/programs/compare/` | competitor data from docs | "delta vs [competitor]" |

### Per-page SEO checklist (Agent 5 enforces, all agents follow)

```
□ Unique <title> with primary keyword (50-60 chars)
□ Unique <meta description> with CTA language (150-160 chars)
□ H1 contains primary keyword (exactly one H1 per page)
□ H2s contain secondary/related keywords
□ JSON-LD structured data (FAQPage, Product, Organization as appropriate)
□ Open Graph image (unique per page, generated via @vercel/og)
□ Canonical URL set
□ Internal links to hub page + 2-3 related spokes
□ FAQ section with FAQPage schema (from docs/06-faqs-knowledge-base.md)
□ Breadcrumb with BreadcrumbList schema
□ Alt text on all images
□ Page loads in < 2.5s (LCP target)
```

### Competitive comparison page SEO (from programmatic-seo skill)

The `/programs/compare/` page is a **Comparisons playbook** page (see `programmatic-seo/SKILL.md`):
- Target keywords: "delta vs united corporate travel", "delta vs american airlines business"
- Unique value: proprietary analysis, not just spec sheets
- Each comparison section must provide original insight, not just swapped variables
- Internal links to every segment page and the enrollment flow
- FAQPage schema with comparison-specific questions from `docs/06-faqs-knowledge-base.md`

---

## 15. Reference Documents

Before building any section, read the relevant doc:

| Section | Read this doc |
|---|---|
| **Any UI component (MANDATORY)** | `docs/03-design-system.md` — Figma-extracted tokens, colors, typography, buttons, cards, responsive rules |
| Homepage implementation | `docs/03-design-system.md` §8-10 — Section architecture, grid patterns, CTA patterns |
| Any page | `docs/02-user-journey.md` |
| Product data | `docs/01-product-reference.md` |
| SEO / metadata | `docs/04-seo-strategy.md` |
| Copy / tone | `docs/05-content-strategy.md` |
| Competitive messaging / compare page | `docs/04-competitive-analysis.md` |
| FAQ content per page | `docs/06-faqs-knowledge-base.md` |
| SkyMiles content / partner data | `docs/07-skymiles-knowledge-base.md` |
| Delta Sync marketing page | `docs/08-delta-sync.md` |

---

## 16. Git Workflow

```bash
# Branch per agent
git checkout -b agent/1-architect
git checkout -b agent/2-marketing
git checkout -b agent/3-tools
git checkout -b agent/4-dashboard
git checkout -b agent/5-seo

# Commit convention
feat(marketing): add homepage hero section
feat(dashboard): add tier progress tracker
fix(tools): correct ROI calculation formula
docs: update agent handoff notes
```

---

## 17. Quick Start Commands

```bash
# Install
npm create next-app@latest delta-for-business -- --typescript --tailwind --app --src-dir --import-alias "@/*"
cd delta-for-business
npx shadcn-ui@latest init

# Add dependencies
npm install framer-motion zustand react-hook-form @hookform/resolvers zod recharts @phosphor-icons/web

# Dev
npm run dev

# Extract Figma tokens (after MCP setup)
npx ts-node scripts/extract-figma-tokens.ts

# Build
npm run build

# Type check
npm run type-check
```

---

*Last updated: April 2026 | Project: Delta for Business Redesign*
