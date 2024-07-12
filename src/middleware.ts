import { authMiddleware } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { AppConfig } from './core/utils/app-config';
import type createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix,
    defaultLocale: AppConfig.defaultLocale
});

const publicRoutes = ['/sign-in(.*)', '/sign-up(.*)'];

export default authMiddleware({
    publicRoutes,
    beforeAuth: (req) => {
        // Run next-intl middleware before Clerk's auth middleware
        return intlMiddleware(req);
    },
    afterAuth: (auth, req) => {
        // Handle authentication logic here
        if (!auth.userId && !auth.isPublicRoute) {
            const locale = req.nextUrl.pathname.split('/')[1] || AppConfig.defaultLocale;
            const signInUrl = new URL(`/${locale}/sign-in`, req.url);
            signInUrl.searchParams.set('redirect_url', req.url);
            return NextResponse.redirect(signInUrl);
        }

        // If the user is authenticated and trying to access a public route,
        // redirect them to the dashboard
        if (auth.userId && auth.isPublicRoute) {
            const locale = req.nextUrl.pathname.split('/')[1] || AppConfig.defaultLocale;
            const dashboardUrl = new URL(`/${locale}/dashboard`, req.url);
            return NextResponse.redirect(dashboardUrl);
        }

        // Allow the request to proceed
        return NextResponse.next();
    },
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};