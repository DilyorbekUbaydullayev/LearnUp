// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextFetchEvent } from 'next/server';


const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ru', 'uz', 'tr'],
  defaultLocale: 'en',
});

export default function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  
  const res = intlMiddleware(req);
  if (res) return res;

  
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
