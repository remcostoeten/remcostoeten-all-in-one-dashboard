import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useMessages } from 'next-intl'
import { enUS, nlNL } from '@clerk/localizations'
import { Analytics } from '@vercel/analytics/react'
interface AppProvidersProps {
    children: ReactNode
    locale: string
}

export default function AppProviders({ children, locale }: AppProvidersProps) {
    const messages = useMessages()

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
                <TooltipProvider>
                    {children}
                    <Analytics />
                    <Toaster invert />
                </TooltipProvider>
            </ClerkProvider>
        </NextIntlClientProvider>
    )
}
