import { TooltipProvider } from '@/components/ui/tooltip'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { PlannerDataContextProvider } from '@/core/contexts/CalendarDataContext'
import { enUS, nlNL } from '@clerk/localizations'
import { SpeedInsights } from '@vercel/speed-insights/next'

type ProvidersProps = {
    children: ReactNode
    locale: string
    messages: any
    initialAppointments: any[]
    initialResources: any[]
}

export default function Providers({
    children,
    locale,
    messages,
    initialAppointments,
    initialResources
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
                <PlannerDataContextProvider
                    initialAppointments={initialAppointments}
                    initialResources={initialResources}
                >
                    <TooltipProvider>
                        <NextTopLoader
                            showSpinner={false}
                            color='#02c9a5'
                            initialPosition={0.38}
                            easing='ease-in-out'
                        />
                        {children}
                        <Analytics />
                        <SpeedInsights />
                        <Toaster position='top-center' />
                    </TooltipProvider>
                </PlannerDataContextProvider>
            </ClerkProvider>
        </NextIntlClientProvider>
    )
}
