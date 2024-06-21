import { Toaster } from 'sonner'
import type { ReactNode } from 'react'
import { enUS, nlNL } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import TopNav from '@/components/shared/TopNav'

type ProviderWrapperProps = {
    children: ReactNode |any
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
    const locale = ['nl', 'en', 'nlNL', 'enUS']

    const messages = useMessages()

    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'
    if (locale.includes('nl')) {
        clerkLocale = nlNL
    }
    if (!locale.includes('en')) {
        signInUrl = `/${locale}${signInUrl}`
        signUpUrl = `/${locale}${signUpUrl}`
        dashboardUrl = `/${locale}${dashboardUrl}`
    }

    return (
        <NextIntlClientProvider locale={locale[0]} messages={messages}>
            <ClerkProvider
                localization={clerkLocale}
                signInUrl={signInUrl}
                signUpUrl={signUpUrl}
                signInFallbackRedirectUrl={dashboardUrl}
                signUpFallbackRedirectUrl={dashboardUrl}
            >
              <TopNav/>
                <Toaster />
                <Analytics />
            </ClerkProvider>
        </NextIntlClientProvider>
    )
}
