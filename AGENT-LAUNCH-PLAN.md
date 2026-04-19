# AGENT LAUNCH PLAN — Delta for Business Web Redesign
## Execution Order, Dependencies & Initial Prompts

> **Purpose:** Copy-paste each prompt below into a Claude Code agent session. Run Agent 1 first, then Agents 2-4 in parallel, then Agent 5 last.

---

## Execution Timeline

```
Phase 1: Agent 1 — Architect (SOLO — must complete first)
  └── Scaffolds project, installs deps, populates config, types, tokens

Phase 2: Agents 2, 3, 4 — IN PARALLEL (start when Agent 1 is done)
  ├── Agent 2 — Marketing Pages (all public pages + homepage)
  ├── Agent 3 — Interactive Tools (quiz, calculator, enrollment forms)
  └── Agent 4 — Dashboard App (authenticated management hub)

Phase 3: Agent 5 — SEO & Quality (runs last, or parallel with Phase 2 tail)
  └── Metadata, JSON-LD, OG images, sitemap, a11y audit, perf audit
```

---

## AGENT 1 — ARCHITECT

### Initial Prompt

```
You are Agent 1 — Architect for the Delta for Business web redesign.

READ THESE FILES FIRST (in this exact order):
1. CLAUDE.md (master instruction file — read completely)
2. docs/03-design-system.md (Figma-extracted design system — colors, typography, spacing, shadows, buttons, cards)
3. docs/02-sitemap-page-structure.md (complete IA and sitemap)
4. .agents/skills/programmatic-seo/SKILL.md (SEO URL structure guidelines)

YOUR TASKS (complete in order, do not skip any):

TASK 1: Initialize the Next.js project
- Run: npx create-next-app@latest delta-for-business --typescript --tailwind --app --src-dir --import-alias "@/*" --no-git
- Run: cd delta-for-business && npx shadcn-ui@latest init --defaults
- Install: npm install framer-motion zustand react-hook-form @hookform/resolvers zod recharts @phosphor-icons/web @vercel/og next-mdx-remote

TASK 2: Populate src/styles/tokens.css
- The file already exists with Figma-extracted values. Verify it matches docs/03-design-system.md exactly.
- Update src/styles/globals.css to import tokens.css and @phosphor-icons/web/regular

TASK 3: Configure tailwind.config.ts
- Extend theme with CSS custom properties from tokens.css
- Map all color tokens to Tailwind utility classes (e.g., bg-delta-navy → var(--color-delta-blue-700))
- Map typography tokens to font-family/font-size/line-height
- Add custom breakpoints: md: 800px, 2xl: 1512px
- Add custom spacing scale from Figma tokens

TASK 4: Create ALL TypeScript types in src/types/index.ts
- Segment, Card, MedallionTier, SMBTier, NavItem, PageMeta, QuizAnswer, QuizResult, ROIInput, ROIOutput, AirlinePartner, EarningPartner
- Include the enrollment form types: EnrollmentFormData, EnrollmentStep, CompanyInfo, AdminContact, TravelerInvite
- See CLAUDE.md §4 for type details

TASK 5: Populate ALL config data files
- src/config/segments.ts — 4 segments with full data (see CLAUDE.md §7)
- src/config/cards.ts — 7 cards with earning rates, fees, tier colors, perks
- src/config/medallion.ts — 4 tiers with MQD thresholds
- src/config/smb-tiers.ts — Member/Plus/Elite with earning rates
- src/config/navigation.ts — Already populated with mainNav + utilityNav + authNav + footerNav + externalUrls
- src/config/partners.ts — 23 airline partners + 22 earning partners

TASK 6: Create utility hooks
- src/lib/hooks/useSegment.ts — reads ?for= query parameter
- src/lib/hooks/useMediaQuery.ts — responsive breakpoint hook (800px, 1512px)
- src/lib/hooks/useScrollSpy.ts — tracks which section is in view

TASK 7: Scaffold shadcn/ui components
- Run shadcn add for: button, card, badge, tabs, accordion, dialog, dropdown-menu, input, slider, table, tooltip, progress
- Customize the Button component to match the 7 Figma variants (see docs/03-design-system.md §6)

TASK 8: Create ALL page and component stub files
- Every page in the sitemap (docs/02-sitemap-page-structure.md) needs a page.tsx stub
- Every component listed in CLAUDE.md §8 needs a stub file
- Stubs should have: correct imports, TypeScript interface, empty JSX with TODO comments referencing the relevant doc section

TASK 9: Set up middleware.ts
- Redirect /account/* to login if not authenticated
- Handle ?for= segment parameter persistence

TASK 10: Create app/layout.tsx with root metadata
- Delta for Business metadata template
- Whitney font loading (or system font fallback)
- Global providers

When all tasks are complete, write to docs/agent-log.md:
"Agent 1 — Architect: COMPLETE. All types, configs, tokens, and stubs are in place. Agents 2, 3, 4 may begin."

DO NOT STOP until all 10 tasks are complete and verified.
```

---

## AGENT 2 — MARKETING PAGES

### Initial Prompt

```
You are Agent 2 — Marketing Pages for the Delta for Business web redesign.

READ THESE FILES FIRST (in this exact order):
1. CLAUDE.md (master instruction file — read completely, especially §1 Step 6 for Figma references)
2. docs/03-design-system.md (Figma-extracted design system — this is your primary visual reference)
3. docs/02-sitemap-page-structure.md (every page spec with sections, components, SEO)
4. docs/05-content-strategy.md (tone, messaging, value propositions)
5. docs/06-faqs-knowledge-base.md (FAQ content for each page)
6. docs/07-skymiles-knowledge-base.md (SkyMiles content)
7. docs/04-competitive-analysis.md (for the /programs/compare/ page)
8. .agents/skills/frontend-design/SKILL.md (bold aesthetic direction)
9. .agents/skills/ui-ux-pro-max/SKILL.md (UX guidelines)
10. .agents/skills/programmatic-seo/SKILL.md (SEO page patterns)

CRITICAL RULES:
- Use Figma MCP to extract design context for EVERY section before building it
- Use get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="[NODE_ID]") with the node IDs from docs/03-design-system.md §0
- ALL colors must use CSS custom properties from tokens.css — ZERO hardcoded hex values
- Use Phosphor Icons (@phosphor-icons/web) — NEVER Lucide
- All pages must be fully responsive: 1512px → 800px → 392px
- Every page needs generateMetadata() with unique title, description, OG image
- Import data from src/config/ — never define domain data in components
- External Delta links use the externalUrls registry from src/config/navigation.ts

YOUR BUILD ORDER (complete in sequence, do not skip):

PHASE 1: Shell
1. src/components/marketing/Nav.tsx — Extract from Figma node, responsive, sticky, utility nav with external links, auth nav
2. src/components/marketing/Footer.tsx — Multi-column, external links section, legal strip
3. src/app/(marketing)/layout.tsx — Nav + main + Footer wrapper

PHASE 2: Homepage (THE most important page — build it pixel-perfect)
Build src/app/(marketing)/page.tsx with these sections in order:
4. Hero section — Extract from Figma 199:4488. "The best company for business" + 3 stat cards + logo bar
5. AuthorityBar — Figma 199:4499. Trust stats + partner logos
6. ProgramFinder — Figma 199:4577 + 199:4855. 4-column plan grid with segment cards
7. PainPointSection — Per-segment personalized content
8. SkyMilesTeaser — SkyMiles for Business explanation with dual-earn diagram
9. CardsTeaser — Figma 223:5269. Tab switcher (Personal/Business) with card grid. Personal: 2-col (min-w 470px). Business: 3-col (336-340px).
10. MedallionTeaser — Medallion in business context
11. FinalCTA — Enroll / Contact Sales / Calculate ROI

PHASE 3: Program Pages
12. /programs/ — Overview with comparison table
13. /programs/individual/ — Individual traveler program
14. /programs/small-business/ — SkyMiles for Business with tiers sub-pages
15. /programs/mid-market/ — Mid-market with Corporate Priority
16. /programs/enterprise/ — Enterprise with full managed travel
17. /programs/compare/ — Delta vs United vs American (from docs/04-competitive-analysis.md)

PHASE 4: Benefits, Cards, SkyMiles, Medallion
18-22. /benefits/* pages (Corporate Priority suite, Sky Club, Meetings)
23-30. /cards/* pages (hub, compare, 4 personal, 3 business) — "Apply Now" links to externalUrls.creditCards
31-35. /skymiles/* pages (hub, how-it-works, earning, redeeming, double-earn)
36-42. /medallion/* pages (hub, overview, 4 tiers, MQD calculator)

PHASE 5: Resources
43-47. /resources/* pages (FAQ with all 11 sections A-K, glossary, blog, case studies, terms)

EVERY component must:
- Be fully responsive (test mentally at 1512px, 800px, 392px)
- Use Framer Motion for section entrance animations
- Have proper semantic HTML (h1, h2, nav, main, section, article)
- Include alt text on all images
- Use the correct button variants from docs/03-design-system.md §6

DO NOT STOP until all pages are built, responsive, and using design tokens consistently. When done, write to docs/agent-log.md.
```

---

## AGENT 3 — INTERACTIVE TOOLS & FORMS

### Initial Prompt

```
You are Agent 3 — Interactive Tools for the Delta for Business web redesign.

READ THESE FILES FIRST (in this exact order):
1. CLAUDE.md (master instruction file — read completely)
2. docs/03-design-system.md (Figma-extracted design system)
3. docs/02-sitemap-page-structure.md — ESPECIALLY the sections:
   - "★ PROGRAM ELIGIBILITY QUIZ" (full quiz spec with 4 steps, logic, results screen)
   - "★ ENROLLMENT FORM" (3 enrollment paths with progressive disclosure specs)
   - "PAGE: ROI Calculator" spec
4. .agents/skills/ui-ux-pro-max/SKILL.md (interaction patterns, form UX)

CRITICAL RULES:
- ALL form UX must use progressive disclosure — ONE section/question at a time
- Animated transitions between steps (Framer Motion, 300ms ease)
- Progress bar with animated width (400ms ease)
- Never show all input fields at once
- Form state persists in Zustand stores
- Quiz results pre-fill enrollment forms
- Use React Hook Form + Zod for validation
- ALL styling via CSS custom properties from tokens.css
- Phosphor Icons only — never Lucide

YOUR BUILD ORDER:

PHASE 1: State Management (Zustand stores)
1. src/stores/quiz.ts — Quiz state: current step, answers, result, recommendation logic
2. src/stores/calculator.ts — ROI calculator state: inputs, outputs, computed values
3. src/stores/segment.ts — Selected segment state (shared across pages via ?for= param)
4. src/stores/enrollment.ts — NEW: Enrollment form state: current step, form data, validation

PHASE 2: Program Eligibility Quiz
5. src/components/tools/ProgramQuiz.tsx — Full 4-step quiz (see doc spec exactly):
   Step 1: Travel context (personal vs company)
   Step 2: Company size (1/2-50/50-500/500+)
   Step 3: Annual travel spend (contextual ranges)
   Step 4: Primary goals (multi-select, up to 2)
   Results: Program match + Card recommendation + Medallion projection
   - Large visual option cards (not radio buttons)
   - One question per screen
   - Smooth slide transitions
   - "← Back" navigation at each step
   - Results persist in Zustand for enrollment pre-fill

6. src/components/tools/QuizWidget.tsx — Compact embeddable version for homepage
   - Simplified 2-step version (company size → spend)
   - "Take the full quiz →" link to standalone page
   - Used inside ProgramFinder section on homepage

7. src/app/(marketing)/tools/program-selector/page.tsx — Standalone quiz page with SEO

PHASE 3: ROI Calculator
8. src/components/tools/ROICalculator.tsx — Interactive calculator with live output:
   - Left panel: sliders + inputs (travelers, trips, fare, route type, cabin mix)
   - Right panel: live-updating results (miles, eCredits, savings, tier projections)
   - Methodology accordion
   - Save estimate → email input
   - Next steps CTA (conditional on estimated program)

9. src/app/(marketing)/tools/roi-calculator/page.tsx — Standalone page

PHASE 4: MQD Calculator
10. src/components/tools/MQDCalculator.tsx
    - Inputs: trips/year, avg fare, card type, current spend
    - Outputs: projected MQDs, status, time to next tier
    - Visual progress bar toward each Medallion tier

PHASE 5: Enrollment Forms (★ CRITICAL — conversion pages)
11. src/components/tools/EnrollmentForm.tsx — Shared form shell:
    - Animated progress bar (step dots + percentage fill)
    - Step transition animation (slide-left/right)
    - "← Back" / "Continue →" navigation
    - Field-level progressive disclosure (fields appear as previous ones are filled)
    - Respects prefers-reduced-motion
    - Auto-focus first field on each step

12. src/app/(marketing)/enroll/individual/page.tsx — 2-step quick enrollment:
    Step 1: Name, email, SkyMiles number (optional)
    Step 2: Confirm + create account
    Success: "Welcome!" screen with email activation message

13. src/app/(marketing)/enroll/small-business/page.tsx — 5-step progressive form:
    Step 1: Company info (name, EIN, industry, website, traveler count)
    Step 2: Admin contact (name, email, phone, role)
    Step 3: Add travelers (email invite / CSV upload / skip)
    Step 4: Connect bookings (Delta.com toggle, Concur, TMC)
    Step 5: Review & confirm (summary with edit links, terms checkbox)
    Success: "Account created!" + Business ID + activation email message
    - Pre-fill from quiz results if available
    - Company domain email validation (warn on gmail/yahoo)
    - EIN format validation (XX-XXXXXXX)

14. src/app/(marketing)/enroll/enterprise/page.tsx — 3-step + sales handoff:
    Step 1: Company info + budget range + routes + existing contracts
    Step 2: Decision maker contact + preferred contact method
    Step 3: Review & submit to sales
    Success: "A Delta rep will contact you within 2 business days"

PHASE 6: Card Comparison Table
15. src/components/tools/CardCompareTable.tsx — Interactive 7-card comparison
    - Sticky header row with card images
    - Toggle: Personal / Business / All
    - Highlight recommended card (from quiz results)

DO NOT STOP until all tools, quizzes, calculators, and enrollment forms are fully functional with proper animations, validation, and state management. When done, write to docs/agent-log.md.
```

---

## AGENT 4 — DASHBOARD APP

### Initial Prompt

```
You are Agent 4 — Dashboard App for the Delta for Business web redesign.

READ THESE FILES FIRST:
1. CLAUDE.md (master instruction file — §10 Dashboard Architecture)
2. docs/03-design-system.md (Figma-extracted design system)
3. docs/02-sitemap-page-structure.md (dashboard page specs)
4. .agents/skills/ui-ux-pro-max/SKILL.md (dashboard patterns, data viz)

CRITICAL RULES:
- Dashboard is the authenticated area at /account/*
- Use mock data for all API responses (src/lib/api/mock-data.ts)
- All styling via CSS custom properties from tokens.css
- Responsive: desktop sidebar → mobile bottom tab nav
- Phosphor Icons (fill weight for active states, regular for default)
- Use Recharts for all charts and data visualization

YOUR BUILD ORDER:

PHASE 1: Layout & Auth
1. src/app/(dashboard)/layout.tsx — Sidebar + TopBar + main content area
2. src/components/dashboard/Sidebar.tsx — Logo, nav items (Phosphor icons), tier badge, collapsed state
3. src/components/dashboard/TopBar.tsx — Business ID, search, notifications, quick actions
4. src/lib/auth/auth-options.ts — NextAuth.js config (mock provider for now)
5. src/lib/api/mock-data.ts — Mock data for: miles balance, transactions, travelers, reports, tier progress

PHASE 2: Onboarding Flow
6. src/app/(dashboard)/onboarding/page.tsx — 4-step guided onboarding (shown once after first login):
   Step 1: Company confirmed (welcome + business ID)
   Step 2: Link travelers (invite or confirm imported list)
   Step 3: First booking guide (how to use Business ID)
   Step 4: Dashboard tour (highlight key sections)
   - Progress dots, smooth transitions, "Skip tour" option

PHASE 3: Main Dashboard Views
7. src/app/(dashboard)/account/dashboard/page.tsx — Overview with:
   - 4 KPI cards (Miles balance, Tier progress, Monthly spend, Active travelers)
   - Quick actions grid
   - Recent activity feed
   - Monthly summary chart (Recharts)

8. src/app/(dashboard)/account/miles/page.tsx — Miles & Rewards:
   - Balance display (company miles + breakdown)
   - Transaction history table (sortable, filterable)
   - Redemption options (eCredits, upgrades)
   - Miles transfer form

9. src/app/(dashboard)/account/travelers/page.tsx — Traveler Roster:
   - Table: name, email, SkyMiles#, status, last flight
   - Add traveler (email invite)
   - Bulk actions (CSV import/export)
   - Individual traveler detail panel

10. src/app/(dashboard)/account/reports/page.tsx — Spend & Reports:
    - Date range selector
    - Spend by department chart (Recharts bar)
    - Spend by route chart (Recharts pie)
    - Top travelers table
    - Export to CSV/PDF

11. src/app/(dashboard)/account/tier-progress/page.tsx — Tier Progress:
    - Visual progress bar toward next SMB tier (Member → Plus → Elite)
    - Employee Medallion status overview
    - MQD projection chart
    - Alert settings (50%, 90%, monthly)

12. src/app/(dashboard)/account/wallet/page.tsx — Credit Wallet:
    - eCredits balance + history
    - Available rewards
    - Redemption flow

13. src/app/(dashboard)/account/settings/page.tsx — Account Settings:
    - Company info (editable)
    - Admin management
    - Notification preferences
    - Booking integrations (Concur, TMC)
    - API keys (if applicable)

PHASE 4: Shared Components
14. src/components/dashboard/KPICard.tsx — Stat card with icon, value, trend, sparkline
15. src/components/dashboard/TierProgress.tsx — Animated progress bar component
16. src/components/dashboard/RecentActivity.tsx — Activity feed with icons
17. src/components/dashboard/QuickActions.tsx — Grid of action buttons
18. src/components/dashboard/MonthlySummary.tsx — Recharts area chart
19. src/components/dashboard/TravelerRoster.tsx — Sortable table component
20. src/components/dashboard/SpendChart.tsx — Multi-chart dashboard
21. src/components/dashboard/MilesTransfer.tsx — Transfer form with validation
22. src/components/dashboard/OnboardingOverlay.tsx — Step-by-step tour overlay

DO NOT STOP until all dashboard views are built with mock data, responsive layouts, and working navigation. When done, write to docs/agent-log.md.
```

---

## AGENT 5 — SEO & QUALITY

### Initial Prompt

```
You are Agent 5 — SEO & Quality for the Delta for Business web redesign.

READ THESE FILES FIRST:
1. CLAUDE.md (master instruction file — §12 SEO Implementation Rules, §14 SEO Directives)
2. docs/03-design-system.md (verify all components use design tokens)
3. docs/02-sitemap-page-structure.md (every page's SEO spec)
4. docs/06-faqs-knowledge-base.md (FAQ content for JSON-LD)
5. .agents/skills/programmatic-seo/SKILL.md (SEO at scale)
6. .agents/skills/web-design-guidelines/SKILL.md (quality guidelines)

YOUR TASKS:

1. Root Layout Metadata (src/app/layout.tsx)
   - Title template: "%s | Delta for Business"
   - Default description, OG image, canonical URL
   - Viewport, theme-color, favicon

2. Per-Page Metadata
   - EVERY page must have generateMetadata() with:
     - Unique title (50-60 chars, primary keyword)
     - Unique description (150-160 chars with CTA language)
     - Open Graph tags (title, description, image)
     - Canonical URL
   - Verify all pages in the sitemap have metadata

3. JSON-LD Structured Data
   - Homepage: Organization + WebSite with sitelinks
   - Program pages: Product schema
   - FAQ pages: FAQPage schema (use content from docs/06-faqs-knowledge-base.md)
   - Card pages: Product schema with offers
   - Blog/Case studies: Article schema
   - Create src/components/seo/JsonLd.tsx helper component

4. Breadcrumb Component
   - src/components/seo/Breadcrumb.tsx
   - BreadcrumbList schema on every page
   - Visual breadcrumb + schema markup

5. OG Image Generation
   - src/app/og/[...slug]/route.tsx using @vercel/og
   - Template: Delta branding + page title + section icon
   - Generate unique OG images for key pages

6. Sitemap & Robots
   - src/app/sitemap.ts — All public pages with priorities
   - src/app/robots.ts — Allow all, disallow /account/, /api/

7. Quality Audit
   - Verify all images have alt text
   - Verify all pages have exactly one H1
   - Verify heading hierarchy (H1 → H2 → H3, no skipping)
   - Verify all interactive elements are keyboard accessible
   - Verify all form inputs have labels
   - Verify color contrast ratios meet WCAG AA
   - Verify external links have rel="noopener noreferrer" and target="_blank"
   - Verify no hardcoded hex colors (all through CSS custom properties)

8. Performance
   - Verify all images use next/image
   - Verify dynamic imports for heavy components (Recharts, Framer Motion)
   - Check for layout shifts
   - Verify font loading strategy

DO NOT STOP until every page has proper metadata, JSON-LD, breadcrumbs, and passes the quality audit. When done, write to docs/agent-log.md.
```

---

## COORDINATION PROTOCOL

### Agent Log

All agents write their status to `docs/agent-log.md`:

```markdown
## Agent Log

### Agent 1 — Architect
- Status: [PENDING | IN PROGRESS | COMPLETE]
- Started: [timestamp]
- Completed: [timestamp]
- Notes: [any issues or decisions]

### Agent 2 — Marketing Pages
- Status: [PENDING | IN PROGRESS | COMPLETE]
- Depends on: Agent 1
- Notes:

### Agent 3 — Interactive Tools
- Status: [PENDING | IN PROGRESS | COMPLETE]
- Depends on: Agent 1
- Notes:

### Agent 4 — Dashboard
- Status: [PENDING | IN PROGRESS | COMPLETE]
- Depends on: Agent 1
- Notes:

### Agent 5 — SEO & Quality
- Status: [PENDING | IN PROGRESS | COMPLETE]
- Depends on: Agents 2, 3, 4 (can start in parallel on root-level tasks)
- Notes:
```

### File Ownership — DO NOT VIOLATE

```
Agent 1 owns: src/types/, src/config/, src/styles/, src/lib/ (except api/auth), tailwind.config.ts, next.config.ts
Agent 2 owns: src/app/(marketing)/, src/components/marketing/, src/components/ui/
Agent 3 owns: src/components/tools/, src/stores/, src/app/(marketing)/tools/, src/app/(marketing)/enroll/
Agent 4 owns: src/app/(dashboard)/, src/components/dashboard/, src/lib/api/, src/lib/auth/
Agent 5 owns: src/components/seo/, src/app/sitemap.ts, src/app/robots.ts, src/app/og/, public/
```

---

*Document: AGENT-LAUNCH-PLAN.md | Delta for Business Redesign | April 2026*
