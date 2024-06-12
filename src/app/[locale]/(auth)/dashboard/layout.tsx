import type { ReactNode } from 'react'
import Aside from '@/components/theme/huly/aside'
import Navigation from '@/components/theme/sidebar/Navigation'
import NavBar from '@/components/shared/theme/navbar'
import Footer from '@/components/shared/theme/footer'
import { AppConfig } from '@/core/utils/AppConfig'
import '@/styles/app.scss'
import { useMessages, NextIntlClientProvider } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { enUS, frFR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

interface DashboardLayoutProps {
    children: ReactNode
    params: { locale: string }
}

export default function DashboardLayout({
    children,
    params
}: DashboardLayoutProps) {
    // Validate that the incoming `locale` parameter is valid
    if (!AppConfig.locales.includes(params.locale)) notFound()

    // Using internationalization in Client Components
    const messages = useMessages()

    // Clerk localization and URLs
    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'

    if (params.locale === 'fr') {
        clerkLocale = frFR
    }

    if (params.locale !== 'en') {
        signInUrl = `/${params.locale}${signInUrl}`
        signUpUrl = `/${params.locale}${signUpUrl}`
        dashboardUrl = `/${params.locale}${dashboardUrl}`
    }

    return (
        <html lang={params.locale} className='dark'>
            <body className={`${plexsans.className}`}>
                <NextIntlClientProvider
                    locale={params.locale}
                    messages={messages}
                >
                    <ClerkProvider
                        localization={clerkLocale}
                        signInUrl={signInUrl}
                        signUpUrl={signUpUrl}
                        signInFallbackRedirectUrl={dashboardUrl}
                        signUpFallbackRedirectUrl={dashboardUrl}
                    >
                        <NavBar />
                        <main
                            className='relative flex h-screen w-full flex-row'
                            style={{
                                paddingTop: 'calc(var(--nav-height) + 2rem)'
                            }}
                        >
                            <Aside />
                            <Navigation />
                            <section className='ml-20 flex w-full flex-col gap-5 p-10'>
                                {children}
                                <h1 className='text-4xl text-neutral-200'>
                                    Dashboard
                                </h1>
                                <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20' />
                                <div className='flex w-full flex-row gap-5'>
                                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </ClerkProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
