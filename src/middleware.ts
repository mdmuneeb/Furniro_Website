
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define which routes are protected
const isProtected = createRouteMatcher([
  '/component/MainCart', // exact match
  '/component/Order', // exact match
]);

export default clerkMiddleware(async (auth, req) => {
  console.log("🔐 Middleware triggered for:", req.nextUrl.pathname);

  if (isProtected(req)) {
    const { isAuthenticated } = await auth();

    if (!isAuthenticated) {
      const signInUrl = new URL('https://cool-moray-7.accounts.dev/sign-in');
      signInUrl.searchParams.set('redirect_url', req.url); // return to original page after login
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});


export const config = {
  matcher: [
    '/component/MainCart', // Only this route triggers the middleware
    '/component/Order', // Only this route triggers the middleware
    // OR use this to match broadly and test logging:
    // '/((?!_next|api|.*\\.(?:ico|jpg|jpeg|png|svg|css|js)).*)'
  ],
};