import type { Metadata } from 'next'
import Script from 'next/script'
import { CookieBanner } from '@/components/marketing/CookieBanner'
import '@/styles/globals.css'
import '@/styles/tokens.css'
import '@phosphor-icons/web/regular'
import '@phosphor-icons/web/bold'
import '@phosphor-icons/web/fill'
import '@phosphor-icons/web/duotone'

export const metadata: Metadata = {
  title: {
    default: 'Delta for Business | Corporate Travel Programs',
    template: '%s | Delta for Business',
  },
  description: 'Find the right Delta corporate travel program. Earn miles for your company, unlock Corporate Priority, and accelerate Medallion status.',
  metadataBase: new URL('https://business.delta.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Microsoft Clarity loader. Opt-in via env var — no hardcoded fallback so
  // unconfigured environments (CI, preview without secrets) never ship beacons.
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
        {clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityId}");`,
          }} />
        )}
      </body>
    </html>
  )
}
