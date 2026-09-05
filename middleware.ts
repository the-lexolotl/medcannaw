import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPartnerRoute = createRouteMatcher(['/partner-toolkit(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isPartnerRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}