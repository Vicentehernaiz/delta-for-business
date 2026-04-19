import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'

// Agent 1 (Architect) will define authentication strategy:
// - Clerk integration, or
// - NextAuth.js with providers (Google, Microsoft, SAML for enterprise)
//
// This is a stub. See: docs/02-auth-strategy.md

const authOptions: NextAuthOptions = {
  providers: [
    // TODO: Configure providers (Google OAuth, Clerk, SAML, etc.)
  ],
  // TODO: Configure callbacks, session, jwt options
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
