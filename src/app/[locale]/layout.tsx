import NavBar from '@/components/shared/theme/navbar'
import '../../styles/app.scss'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { useMessages, NextIntlClientProvider } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { enUS, frFR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import TopNav from '@/components/shared/TopNav'
import { Analytics } from '@vercel/analytics/react'
import siteConfig from '@/core/data/site-config'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export default function RootLayout(props: {
    children: ReactNode
    params: { locale: string }
}) {
    // Validate that the incoming `locale` parameter is valid
    if (!siteConfig.locales.includes(props.params.locale)) notFound()

    // Using internationalization in Client Components
    const messages = useMessages()

    // Clerk localization and URLs
    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'

    if (props.params.locale === 'fr') {
        clerkLocale = frFR
    }

    if (props.params.locale !== 'en') {
        signInUrl = `/${props.params.locale}${signInUrl}`
        signUpUrl = `/${props.params.locale}${signUpUrl}`
        dashboardUrl = `/${props.params.locale}${dashboardUrl}`
    }
    return (
        <html lang={props.params.locale} className='dark'>
            <body className={`${plexsans.className} overflow-x-hidden`}>
                {' '}
                <NextIntlClientProvider
                    locale={props.params.locale}
                    messages={messages}
                >
                    <ClerkProvider
                        localization={clerkLocale}
                        signInUrl={signInUrl}
                        signUpUrl={signUpUrl}
                        signInFallbackRedirectUrl={dashboardUrl}
                        signUpFallbackRedirectUrl={dashboardUrl}
                    >
                        {/* <GlowBackground fill='red' style={{ transform: 'translate(0px, -200px)' }} /> */}
                        <TopNav />
                        <NavBar />
                        <main
                            className='min-w-screen bg-dot-black/[0.2 flex flex-col items-center justify-between  bg-black pt-16 bg-dot-white/[0.2] -z-10'
                            style={{
                                paddingTop: 'calc(var(--nav-height) + 16px)'
                            }}
                        >
                            {props.children}
                        </main>{' '}
                        <Analytics />
                        <Toaster invert />
                    </ClerkProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    icons: [
        {
            rel: 'apple-touch-icon',
            url: '/apple-touch-icon.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32x32.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon-16x16.png'
        },
        {
            rel: 'icon',
            url: '/favicon.ico'
        }
    ]
}
