import type { Metadata } from 'next'
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
