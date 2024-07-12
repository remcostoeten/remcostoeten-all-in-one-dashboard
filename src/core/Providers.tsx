// components/Providers.tsx

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ClerkProvider } from '@clerk/nextjs'
import { TooltipProvider } from '@/components/ui/tooltip'
import { enUS, nlNL } from '@clerk/localizations'

type ProvidersProps = {
    children: ReactNode
    locale: string
    messages: any
}

export default function Providers({
    children,
    locale,
    messages
}: ProvidersProps) {
    // Clerk localization and URLs
    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'

    if (locale === 'nl') {
        clerkLocale = nlNL
    }

    if (locale !== 'en') {
        signInUrl = `/${locale}${signInUrl}`
        signUpUrl = `/${locale}${signUpUrl}`
        dashboardUrl = `/${locale}${dashboardUrl}`
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ClerkProvider
                localization={clerkLocale}
                signInUrl={signInUrl}
                signUpUrl={signUpUrl}
                signInFallbackRedirectUrl={dashboardUrl}
                signUpFallbackRedirectUrl={dashboardUrl}
            >
                <TooltipProvider>{children}</TooltipProvider>
            </ClerkProvider>
        </NextIntlClientProvider>
    )
}
