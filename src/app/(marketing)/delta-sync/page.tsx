/**
 * Delta Business Tool — Centralized Business Management Platform
 * URL: /delta-sync
 *
 * FIGMA REFERENCES:
 * - "Delta Business Tool" heading:       node 275:8698
 * - Dashboard preview:          node 275:8701
 * - "Delta Business Manager":   node 275:8787
 * - Platform description:       node 275:8754
 *
 * DESIGN SYSTEM: docs/03-design-system.md
 * CONTENT: docs/08-delta-sync.md
 *
 * PURPOSE: Marketing page for the Delta Business Tool centralized management platform.
 * This page explains the platform's features and shows UI previews.
 * Actual platform access is behind auth at /account/dashboard.
 *
 * USABILITY TESTING NOTE: This page must be fully interactive and navigable
 * for usability testing of the corporate section. All CTAs must lead to
 * real enrollment or demo flows.
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delta Business Tool | Centralized Business Travel Management Platform',
  description:
    'Manage employees, SkyMiles, credit cards, eCredits, and rewards — all in one place. Delta Business Tool is the centralized platform for Delta for Business companies.',
  openGraph: {
    title: 'Delta Business Tool — One Platform for All Your Business Travel',
    description:
      'Link employee profiles, request business cards, manage company credit, transfer SkyMiles, and track rewards from a single dashboard.',
  },
}

export default function DeltaSyncPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: Hero — "Delta Business Tool"
          Figma node: 275:8698 (Display 64, delta-blue-700)
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-[var(--container-wide)]">
          {/* H1 — Display 64px, Whitney Semibold, delta-blue-700 */}
          <h1
            className="text-[length:var(--type-scale-64)] font-[family-name:var(--font-display)] leading-[var(--line-height-heading-xxxl)] tracking-[var(--letter-spacing-heading-xxxl)] text-[color:var(--color-delta-blue-700)]"
          >
            Delta Business Tool
          </h1>

          {/* Subtitle — Body Standard 16, delta-blue-500, max-w-480 centered */}
          <p
            className="mx-auto mt-6 max-w-[480px] text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]"
          >
            A travel, SkyMiles, and card management tool designed for business plans.
            Link your employees&apos; profiles and accounts, request cards, and manage
            credit—all within a single, centralized platform.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-[var(--spacing-12)]">
            {/* Primary CTA — delta-red-400 */}
            <a
              href="/enroll/small-business"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-delta-red-400)] px-[var(--spacing-24)] shadow-[var(--shadow-button)] text-[length:var(--type-scale-16)] font-[family-name:var(--font-display)] leading-[var(--type-scale-18)] tracking-[var(--letter-spacing-marketing-x-large)] text-[color:var(--color-neutral-2)]"
            >
              Get Started Free
            </a>

            {/* Secondary CTA — neutral-50 */}
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-neutral-50)] px-[var(--spacing-24)] shadow-[var(--shadow-button)] text-[length:var(--type-scale-16)] font-[family-name:var(--font-display)] leading-[var(--type-scale-18)] tracking-[var(--letter-spacing-marketing-x-large)] text-[color:var(--color-delta-blue-700)]"
            >
              See All Features
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: Dashboard Preview
          Figma node: 275:8701 (dashboard-preview)
          White card, 10px radius, card shadow, contains
          screenshot of the Delta Business Manager UI
          ═══════════════════════════════════════════════════ */}
      <section className="pb-24">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div
            className="overflow-hidden rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] shadow-[var(--shadow-card)]"
            style={{ aspectRatio: '1200 / 594', maxHeight: '100vh' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/delta-sync/dashboard-preview.png"
              alt="Delta Business Tool dashboard — overview, quick actions, miles, requests, traveler activity and credit summary"
              className="block w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: Platform Features Grid
          8 key features of Delta Business Tool
          ═══════════════════════════════════════════════════ */}
      <section id="features" className="bg-[var(--color-neutral-2)] py-24">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <h2
            className="text-center text-[length:var(--type-scale-40)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-xl)] tracking-[var(--letter-spacing-heading-xl)] text-[color:var(--color-delta-blue-600)]"
          >
            Everything your business needs, in one place
          </h2>

          {/* Feature cards grid — 2x4 desktop, 2x2 tablet, 1-col mobile */}
          <div className="mt-16 grid grid-cols-1 gap-[var(--spacing-24)] sm:grid-cols-2 lg:grid-cols-4">

            {/* Feature 1: Employee & Manager Linked Accounts */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-users-three text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Employee &amp; Manager Linked Accounts
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Connect employee SkyMiles profiles to your company account. Managers get oversight without accessing personal accounts.
              </p>
              {/* TODO: Add feature illustration
                  Image: /assets/images/delta-sync/feature-linked-accounts.png */}
            </div>

            {/* Feature 2: Shared Rewards System */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-gift text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Shared Rewards System
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Company miles and employee miles work together. Track dual-earn across the organization in real time.
              </p>
            </div>

            {/* Feature 3: Cards Management */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-credit-card text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Cards Management
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                View all active Delta-Amex cards across your organization. Track spending, earning rates, and card benefits at a glance.
              </p>
            </div>

            {/* Feature 4: Request Business Cards */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-plus-circle text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Request Business Cards
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Request new Delta-Amex business cards for employees directly from the platform. Up to 99 employee cards free on Gold+.
              </p>
            </div>

            {/* Feature 5: Company Credit Management */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-wallet text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Company Credit Management
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Set spending limits, approve purchases, and manage company-wide credit allocation from one centralized dashboard.
              </p>
            </div>

            {/* Feature 6: Dynamic Benefits */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-sparkle text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                Dynamic Benefits
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Benefits adjust automatically as your company tier upgrades. From Member to Plus to Elite — your perks scale with your spend.
              </p>
            </div>

            {/* Feature 7: SkyMiles → eCredits Redemption */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-arrows-clockwise text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                SkyMiles → eCredits Redemption
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Convert company SkyMiles into eCredits to purchase future flights. Manage eCredit balances and allocate them across your team.
              </p>
            </div>

            {/* Feature 8: SkyMiles Transfers to Employees */}
            <div className="rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] p-[var(--spacing-24)] shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-l)] bg-[var(--color-delta-blue-600)]">
                <i className="ph ph-paper-plane-tilt text-2xl text-white" />
              </div>
              <h3 className="mt-4 text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] leading-[var(--line-height-body-medium)] text-[color:var(--color-delta-blue-700)]">
                SkyMiles Transfers to Employees
              </h3>
              <p className="mt-2 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                Reward top performers by transferring company SkyMiles directly to their personal accounts. Incentivize loyalty and performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: Platform UI Showcase
          Side-by-side UI screenshots with descriptions
          ═══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <h2
            className="text-center text-[length:var(--type-scale-40)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-xl)] tracking-[var(--letter-spacing-heading-xl)] text-[color:var(--color-delta-blue-600)]"
          >
            See Delta Business Tool in action
          </h2>

          {/* UI Screenshot 1: Dashboard Overview */}
          <div className="mt-16 flex flex-col gap-[var(--spacing-48)]">
            <div className="flex flex-col items-center gap-[var(--spacing-32)] lg:flex-row">
              <div className="flex-1">
                <h3 className="text-[length:var(--type-scale-28)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-m)] tracking-[var(--letter-spacing-heading-xxs)] text-[color:var(--color-delta-blue-700)]">
                  Partnership Value Dashboard
                </h3>
                <p className="mt-4 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                  See your total partnership value at a glance — contract value, experience value, and combined metrics. Your dedicated Delta Account Manager and Global Sales Solutions contact are always one click away.
                </p>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden aspect-video rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] shadow-[var(--shadow-card)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/delta-sync/dashboard-preview.png"
                    alt="Partnership Value Dashboard — KPIs and quick actions"
                    className="block w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>
            </div>

            {/* UI Screenshot 2: Loyalty & Rewards */}
            <div className="flex flex-col items-center gap-[var(--spacing-32)] lg:flex-row-reverse">
              <div className="flex-1">
                <h3 className="text-[length:var(--type-scale-28)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-m)] tracking-[var(--letter-spacing-heading-xxs)] text-[color:var(--color-delta-blue-700)]">
                  Loyalty &amp; Rewards Management
                </h3>
                <p className="mt-4 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                  Track loyalty tokens, service points, and amenity credits across your organization. Convert SkyMiles to eCredits, transfer miles to employees, and manage your company wallet — all from one screen.
                </p>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden aspect-video rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] shadow-[var(--shadow-card)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/delta-sync/dashboard-preview.png"
                    alt="Loyalty & Rewards Management — miles, eCredits and tier progress"
                    className="block w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>

            {/* UI Screenshot 3: Smart Search & Quick Actions */}
            <div className="flex flex-col items-center gap-[var(--spacing-32)] lg:flex-row">
              <div className="flex-1">
                <h3 className="text-[length:var(--type-scale-28)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-m)] tracking-[var(--letter-spacing-heading-xxs)] text-[color:var(--color-delta-blue-700)]">
                  Smart Search &amp; Quick Actions
                </h3>
                <p className="mt-4 text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
                  Find any traveler, ticket, or SkyMiles number instantly. Quick Actions let you perform common tasks — from requesting a card to checking flight status — without navigating away.
                </p>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden aspect-video rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-[var(--color-neutral-0)] shadow-[var(--shadow-card)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/delta-sync/dashboard-preview.png"
                    alt="Smart Search & Quick Actions — find travelers, tickets and run common tasks"
                    className="block w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'top right' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: Platform Tabs — What's Inside
          Mirrors the Figma dashboard nav tabs:
          Dashboard · Contract · Loyalty · Services ·
          Amenities · Corporate Programs · Data & Reporting
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[var(--color-neutral-2)] py-24">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <h2
            className="text-center text-[length:var(--type-scale-40)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-xl)] tracking-[var(--letter-spacing-heading-xl)] text-[color:var(--color-delta-blue-600)]"
          >
            7 modules, one platform
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-center text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
            Delta Business Tool brings together everything your travel program needs.
          </p>

          {/* Module list — matches the Figma dashboard tabs */}
          <div className="mt-12 grid grid-cols-1 gap-[var(--spacing-16)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { icon: 'ph-chart-line-up', title: 'Dashboard', desc: 'Partnership value, KPIs, quick actions, and AI-powered smart search' },
              { icon: 'ph-file-text', title: 'Contract', desc: 'Contract details, MSA terms, negotiated rates, and renewal tracking' },
              { icon: 'ph-heart', title: 'Loyalty', desc: 'SkyMiles balances, Medallion progress, mile transfers, and eCredits' },
              { icon: 'ph-headset', title: 'Services', desc: 'Dedicated account manager, Global Sales Solutions, priority support' },
              { icon: 'ph-star', title: 'Amenities', desc: 'Sky Club access, upgrades, companion certificates, and travel credits' },
              { icon: 'ph-buildings', title: 'Corporate Programs', desc: 'Corporate Priority benefits, employee benefits administration' },
              { icon: 'ph-chart-bar', title: 'Data & Reporting', desc: 'Spend analytics, traveler reports, ROI tracking, and custom exports' },
            ].map((mod) => (
              <div
                key={mod.title}
                className="flex items-start gap-[var(--spacing-16)] rounded-[var(--radius-l)] border border-[var(--color-neutral-5)] bg-white p-[var(--spacing-16)]"
              >
                <i className={`ph ${mod.icon} text-2xl text-[color:var(--color-delta-blue-600)]`} />
                <div>
                  <h3 className="text-[length:var(--type-scale-18)] font-[family-name:var(--font-display)] text-[color:var(--color-delta-blue-700)]">
                    {mod.title}
                  </h3>
                  <p className="mt-1 text-[length:var(--type-scale-14)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-small)] text-[color:var(--color-neutral-700)]">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: CTA — Get Started
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <h2
            className="text-[length:var(--type-scale-40)] font-[family-name:var(--font-body)] leading-[var(--line-height-heading-xl)] tracking-[var(--letter-spacing-heading-xl)] text-[color:var(--color-delta-blue-600)]"
          >
            Ready to centralize your business travel?
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[length:var(--type-scale-16)] font-[family-name:var(--font-body)] leading-[var(--line-height-body-medium)] tracking-[var(--letter-spacing-marketing-small)] text-[color:var(--color-delta-blue-500)]">
            Delta Business Tool is included free with every SkyMiles for Business account.
            Enroll today and start managing your program from day one.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-[var(--spacing-12)]">
            <a
              href="/enroll/small-business"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-delta-red-400)] px-[var(--spacing-24)] shadow-[var(--shadow-button)] text-[length:var(--type-scale-16)] font-[family-name:var(--font-display)] leading-[var(--type-scale-18)] tracking-[var(--letter-spacing-marketing-x-large)] text-[color:var(--color-neutral-2)]"
            >
              Enroll Now — Free
            </a>
            <a
              href="/tools/program-selector"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-neutral-50)] px-[var(--spacing-24)] shadow-[var(--shadow-button)] text-[length:var(--type-scale-16)] font-[family-name:var(--font-display)] leading-[var(--type-scale-18)] tracking-[var(--letter-spacing-marketing-x-large)] text-[color:var(--color-delta-blue-700)]"
            >
              Find My Program First
            </a>
            <a
              href="/enroll/enterprise"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-full)] px-[var(--spacing-24)] text-[length:var(--type-scale-16)] font-[family-name:var(--font-display)] leading-[var(--type-scale-18)] tracking-[var(--letter-spacing-marketing-x-large)] text-[color:var(--color-delta-blue-700)] underline"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
