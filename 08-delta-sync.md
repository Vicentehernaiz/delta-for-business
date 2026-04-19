# 08 — Delta Sync Platform

## Overview

Delta Sync is the centralized business management platform where companies manage all Delta-related operations. It lives at `/delta-sync/` as a marketing page and will have a future dashboard implementation at `/dashboard/delta-sync/`.

The platform consolidates employee account management, rewards pooling, card management, company credit allocation, and dynamic benefits scaling—all in one integrated interface.

---

## Figma References

| Asset | Node ID | Purpose |
|-------|---------|---------|
| Landing section | 275:8698 | Hero heading "Delta SYNC" |
| Dashboard preview | 275:8701 | Main dashboard UI mockup |
| Business Manager label | 275:8787 | Section identifier |
| Platform description | 275:8754 | Overview copy |
| **Figma File** | `a2Xx676U8t3nZj5AOlMeOw` | Complete Delta Sync designs |

---

## Platform Features (8 core features)

### 1. Employee & Manager Linked Accounts
**Icon:** `ph-users-three`

Companies link employee SkyMiles accounts for centralized tracking and oversight. Managers see travel activity, status progress, and eCredit balances without accessing personal account credentials.

**User story:** As a travel manager, I need to link my employees' SkyMiles accounts to the company pool so I can track travel metrics and allocate company benefits at scale.

---

### 2. Shared Rewards System
**Icon:** `ph-gift`

Pool SkyMiles earned across all corporate travelers through company-wide earning. Company decides allocation: reinvest in business travel, distribute to top performers, or convert to eCredits for future bookings.

**User story:** As a finance director, I need to see dual-earn (company + employee miles) in one place so I can strategically decide whether to reinvest miles, reward performers, or monetize the balance.

---

### 3. Cards Management
**Icon:** `ph-credit-card`

View and manage all corporate Delta SkyMiles credit cards in one dashboard. Track spending, set department-level limits, monitor rewards earning, and manage card holders across the organization.

**User story:** As a procurement officer, I need visibility into all corporate card spend and earning so I can prevent overspend and optimize which cards are used for which expense categories.

---

### 4. Request Business Cards
**Icon:** `ph-plus-circle`

Streamlined self-service application process for employees to request Delta SkyMiles business credit cards. Corporate pre-approval workflows ensure cards ship to authorized employees faster.

**User story:** As an HR manager, I need employees to request cards with one click so I don't have to manage manual application forms or third-party vendor portals.

---

### 5. Company Credit Management
**Icon:** `ph-wallet`

Manage company eCredits balance, allocate credits to departments or individual travelers, track usage, monitor expiration dates, and set approval workflows for large redemptions.

**User story:** As a travel administrator, I need to allocate eCredits to teams based on budget and monitor consumption so we don't waste unexpired credit and can plan next year's budget.

---

### 6. Dynamic Benefits
**Icon:** `ph-sparkle`

Benefits that scale with company travel volume. As collective spending increases, automatically unlock enhanced perks: Sky Club access, priority upgrades, priority boarding, baggage waivers, and travel credits.

**User story:** As a CEO, I want our corporate travel perks to grow with the company so that as we spend more, employees get better benefits without manual negotiation.

---

### 7. SkyMiles → eCredits Redemption
**Icon:** `ph-arrows-clockwise`

Convert pooled SkyMiles to eCredits for flexible booking and cash-equivalent value. Dashboard shows real-time conversion rates, available balance, transaction history, and redemption forecasts.

**User story:** As a finance manager, I need to convert excess miles to eCredits before expiration so we get maximum value and can allocate travel budget flexibly across the team.

---

### 8. SkyMiles Transfers to Employees
**Icon:** `ph-paper-plane-tilt`

Transfer SkyMiles from the company pool to individual employees as rewards, incentives, or travel enablement. Transparent transfer history and limits prevent overallocation and fraud.

**User story:** As a rewards manager, I want to recognize top performers with SkyMiles from the company balance so employees feel valued and are incentivized to travel smart.

---

## Platform Modules (7 dashboard tabs)

The Delta Sync dashboard is organized into 7 functional tabs, each addressing a specific business travel need:

| Tab | Icon | Purpose | Key Metrics |
|-----|------|---------|------------|
| **Dashboard** | `ph-chart-line-up` | Partnership overview, KPIs, quick actions, AI-powered smart search | Contract value, experience value, active travelers, YTD spending |
| **Contract** | `ph-file-text` | Agreement details, MSA terms, negotiated rates, renewal dates, tier status | Tier level, renewal date, negotiated discounts, contract amendments |
| **Loyalty** | `ph-heart` | SkyMiles balances, Medallion progress, mile transfers, eCredit allocation | Total company miles, individual employee balances, Medallion status, eCredit pool |
| **Services** | `ph-headset` | Dedicated account manager contact, Global Sales Solutions team, priority support, escalation workflows | Account manager details, support tier, SLA response times |
| **Amenities** | `ph-star` | Sky Club access, upgrades, companion certificates, travel credits, priority boarding | Sky Club passes allocated, upgrade inventory, certificate expiration dates |
| **Corporate Programs** | `ph-buildings` | Program enrollment, benefits configuration, employee benefit administration, policy settings | Enrolled programs, employee count by tier, policy compliance status |
| **Data & Reporting** | `ph-chart-bar` | Spend analytics, traveler reports, ROI tracking, custom exports, spend forecasting | Monthly spend trends, top routes, top travelers, savings realized, ROI calculation |

---

## Marketing Page Spec (/delta-sync/)

### Route
`src/app/(marketing)/delta-sync/page.tsx`

### Page Structure (6 sections)
1. **Hero** — "Delta SYNC" headline, value prop, dual CTAs (Get Started Free, See All Features)
2. **Dashboard Preview** — Full-width screenshot of the main dashboard UI
3. **Feature Grid** — 8 feature cards (2x4 grid), each with icon, title, description
4. **UI Showcase** — 3 alternating side-by-side panels showing dashboard, loyalty, and smart search UIs with descriptions
5. **Platform Modules** — 7 cards showing the dashboard tabs with icons and brief descriptions
6. **Final CTA** — "Ready to centralize your business travel?" with 3 CTAs (Enroll Now, Find My Program, Contact Sales)

### Design System
- **Typography:** Phosphor icons, Whitney font (display/body), CSS custom properties from `tokens.css`
- **Colors:** Delta blue tones (`--color-delta-blue-*`), delta red accent (`--color-delta-red-400`), neutral grays
- **Layout:** Container widths via `--container-wide`, `--container-narrow`; responsive grid with Tailwind breakpoints
- **Spacing:** CSS variables (`--spacing-*`), gap-based layout
- **Shadows & Radius:** `--shadow-card`, `--radius-l` for consistent depth

### Image Placeholders Needed
All placeholder images are located in `/assets/images/delta-sync/`:

| Image | Dimensions | Purpose | Content |
|-------|-----------|---------|---------|
| `dashboard-preview.png` | 1200×594 | Section 2 hero screenshot | Full Delta Sync dashboard with all 7 tabs visible |
| `feature-linked-accounts.png` | 400×300 | Optional feature card illustration | Icon or diagram showing employee linking concept |
| `ui-dashboard.png` | 600×400 | Section 4, panel 1 | Partnership Value Dashboard screenshot |
| `ui-loyalty.png` | 600×400 | Section 4, panel 2 | Loyalty & Rewards Management screenshot |
| `ui-smart-search.png` | 600×400 | Section 4, panel 3 | Smart Search & Quick Actions screenshot |

### CTA Links
- **Get Started Free** → `/enroll/small-business`
- **See All Features** → `#features` (anchor to feature grid)
- **Enroll Now — Free** → `/enroll/small-business`
- **Find My Program First** → `/tools/program-selector`
- **Contact Sales** → `/enroll/enterprise`

---

## Integration Points

### Navigation
- Added to primary marketing navigation in `src/config/navigation.ts` as part of the [Programs ▾] dropdown
- Added to footer navigation in `src/config/navigation.ts` under "Delta Sync" section

### Enrollment & Cross-linking
- Primary CTA links to `/enroll/small-business` for immediate enrollment
- Sales CTA links to `/enroll/enterprise` for large account setup
- Links to `/tools/program-selector` for customers uncertain about their program tier

### Dashboard Implementation (Future)
- Post-enrollment users access the live platform at `/dashboard/delta-sync/`
- Route group: `(dashboard)` with protected auth middleware
- Will mirror the 7 platform modules defined above as fully functional tab views

---

## Implementation Notes

### Agent Responsibilities

**Agent 2 (Marketing Pages):** Owns the `/delta-sync/` marketing page
- Must follow design tokens from `src/styles/tokens.css`
- All images use placeholder pattern in layout; integration with real screenshots deferred
- Ensure all CTAs are wired to enrollment flows
- Component-based card rendering for features and modules

**Agent 4 (Dashboard):** Will own the `/dashboard/delta-sync/` implementation when phase reaches dashboard build
- Must implement all 7 platform modules as tab-based navigation
- Tab switching UI, state management, and metric displays
- Integrate with backend APIs for real data fetching
- Implement the quick actions and smart search functionality

### Usability Testing Context
This page is critical for usability testing of the corporate section. All CTAs must lead to real enrollment or demo flows (not empty routes). The dashboard preview and UI showcase panels should display realistic mockups to set proper expectations.

### Future Phases
- **Phase 1 (Current):** Marketing page at `/delta-sync/` with static screenshots and feature overview
- **Phase 2:** Live dashboard implementation at `/dashboard/delta-sync/` with authenticated access
- **Phase 3:** Full integration with backend APIs for real-time data on SkyMiles, eCredits, card management, and reporting
