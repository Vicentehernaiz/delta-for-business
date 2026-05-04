/**
 * Multi-column marketing footer
 * Figma node: 242:7545 (1512 × 418px)
 * Background: var(--color-delta-blue-700) — dark navy
 */

import Link from 'next/link'
import { footerNav } from '@/config/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: 'var(--color-delta-blue-700)' }}
    >
      {/* Logo */}
      <div className="container pt-12 pb-0">
        <div className="flex items-center mb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '32px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/logos/https_/business.delta.com/Logo-delta-for-business.svg"
            alt="Delta for Business"
            style={{ height: '36px', width: 'auto' }}
          />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 — Programs */}
          <div>
            <h3
              className="text-[length:var(--type-scale-14)] font-bold uppercase tracking-[var(--letter-spacing-marketing-x-large)] mb-4"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              Programs
            </h3>
            <ul className="space-y-3">
              {footerNav.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                    style={{ color: 'var(--color-neutral-0)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Benefits */}
          <div>
            <h3
              className="text-[length:var(--type-scale-14)] font-bold uppercase tracking-[var(--letter-spacing-marketing-x-large)] mb-4"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              Benefits
            </h3>
            <ul className="space-y-3">
              {footerNav.benefits.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                    style={{ color: 'var(--color-neutral-0)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Cards & Miles */}
          <div>
            <h3
              className="text-[length:var(--type-scale-14)] font-bold uppercase tracking-[var(--letter-spacing-marketing-x-large)] mb-4"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              Cards &amp; Miles
            </h3>
            <ul className="space-y-3">
              {footerNav.cards.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                    style={{ color: 'var(--color-neutral-0)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/skymiles"
                  className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                  style={{ color: 'var(--color-neutral-0)' }}
                >
                  SkyMiles for Business
                </Link>
              </li>
              <li>
                <Link
                  href="/delta-sync"
                  className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                  style={{ color: 'var(--color-neutral-0)' }}
                >
                  Delta Business Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/medallion"
                  className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                  style={{ color: 'var(--color-neutral-0)' }}
                >
                  Medallion Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company + Resources */}
          <div>
            <h3
              className="text-[length:var(--type-scale-14)] font-bold uppercase tracking-[var(--letter-spacing-marketing-x-large)] mb-4"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                    style={{ color: 'var(--color-neutral-0)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerNav.external.map((link) => (
                <li key={link.href}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                      style={{ color: 'var(--color-neutral-0)' }}
                    >
                      {link.label}
                      <i className="ph ph-arrow-square-out text-xs"></i>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[length:var(--type-scale-14)] transition-colors hover:opacity-100 opacity-85"
                      style={{ color: 'var(--color-neutral-0)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enroll CTA Row */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--color-aura-secondary)' }}
        >
          <div>
            <p
              className="text-[length:var(--type-scale-16)] font-semibold"
              style={{ color: 'var(--color-neutral-0)' }}
            >
              Ready to start earning?
            </p>
            <p
              className="text-[length:var(--type-scale-14)]"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              Free enrollment for the Gold business plan. Contact sales for the Platinum and Diamond business plans.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/enroll/small-business"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-full)] text-[length:var(--type-scale-14)] font-semibold shadow-[var(--shadow-button)] transition-colors"
              style={{ backgroundColor: 'var(--color-delta-red-400)', color: 'var(--color-neutral-0)' }}
            >
              Enroll now
            </Link>
            <Link
              href="/enroll/enterprise"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-full)] border text-[length:var(--type-scale-14)] font-semibold transition-colors"
              style={{ borderColor: 'var(--color-neutral-0)', color: 'var(--color-neutral-0)' }}
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>

      {/* Legal Strip */}
      <div style={{ backgroundColor: 'var(--color-aura-secondary)' }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[length:var(--type-scale-14)]"
            style={{ color: 'var(--color-neutral-600)' }}
          >
            © {currentYear} Delta Air Lines, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: 'Privacy Policy', href: 'https://www.delta.com/us/en/legal/privacy-policy' },
              { label: 'Terms of Use', href: 'https://www.delta.com/us/en/legal/terms' },
              { label: 'Cookie Settings', href: '#' },
              { label: 'Accessibility', href: 'https://www.delta.com/us/en/accessibility/overview' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[length:var(--type-scale-14)] hover:underline transition-colors"
                style={{ color: 'var(--color-neutral-600)' }}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: 'ph-twitter-logo', href: 'https://twitter.com/delta', label: 'Twitter' },
              { icon: 'ph-linkedin-logo', href: 'https://linkedin.com/company/delta-air-lines', label: 'LinkedIn' },
              { icon: 'ph-facebook-logo', href: 'https://facebook.com/delta', label: 'Facebook' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ color: 'var(--color-neutral-500)' }}
              >
                <i className={`ph ${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
