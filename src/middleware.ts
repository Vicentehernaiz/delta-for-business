import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Persist ?for= segment parameter
  const forParam = searchParams.get('for')

  // Redirect /account/* to login if not authenticated (mock for now)
  if (pathname.startsWith('/account')) {
    // Local dev: allow viewing dashboard without the mock auth cookie
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.next()
    }
    const isAuthenticated = request.cookies.get('delta-auth')
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/enroll/individual', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/account/:path*'],
}
