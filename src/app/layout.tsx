import '@/styles/app.scss'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { useMessages, NextIntlClientProvider } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import type { ReactNode } from 'react'
import { enUS, nlNL } from '@clerk/localizations'
import { TooltipProvider } from '@/components/ui/tooltip'
import TopNav from '@/components/shared/TopNav'
import NavBar from '@/components/shared/theme/navbar'
import { ClerkProvider } from '@clerk/nextjs'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export default function RootLayout(props: {
    children: ReactNode
    params: { locale: string }
}) {
    // Using internationalization in Client Components
    const messages = useMessages()

    // Clerk localization and URLs
    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'

    if (props.params.locale === 'nl') {
        clerkLocale = nlNL
    }

    if (props.params.locale !== 'en') {
        signInUrl = `/${props.params.locale}${signInUrl}`
        signUpUrl = `/${props.params.locale}${signUpUrl}`
        dashboardUrl = `/${props.params.locale}${dashboardUrl}`
    }

    return (
        <ClerkProvider
            localization={clerkLocale}
            signInUrl={signInUrl}
            signUpUrl={signUpUrl}
            signInFallbackRedirectUrl={dashboardUrl}
            signUpFallbackRedirectUrl={dashboardUrl}
        >
            <html
                lang={props.params.locale}
                className='dark          overflow-x-hidden'
            >
                <body className={`${plexsans.className} overflow-x-hidden`}>
                    <TooltipProvider>
                        {' '}
                        <NextIntlClientProvider
                            locale={props.params.locale}
                            messages={messages}
                        >
                            <TopNav />
                            <NavBar />
                            <main
                                className='min-w-screen  bg-dot-black/[0.2 flex flex-col items-center justify-between  bg-black pt-16 bg-dot-white/[0.2] -z-10'
                                style={{
                                    paddingTop:
                                        'calc(var(--nav-height) + 16px)',
                                    height: 'calc(100% - 48px)'
                                }}
                            >
                                {props.children}
                            </main>{' '}
                            <Toaster invert />
                        </NextIntlClientProvider>
                    </TooltipProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}

export const metadata: Metadata = {
    title: 'Remco Stoeten - all in one dashboard',
    description:
        'A comprehensive personal dashboard built with NextJS 15, TypeScript, Drizzle, Turso (SQLite), TailwindCSS, Clerk, Uploadthing, ShadCN-UI, and more. This all-in-one solution offers tools for file storage, URL extractors, notes, finances, kanban, HTML to TSX, SVG to CSS, reverse geolocation, and more. Currently migrating features from a previous.',
    keywords: [
        'Remco Stoeten',
        'all in one dashboard',
        'personal dashboard',
        'NextJS 15',
        'TypeScript',
        'Drizzle',
        'Turso',
        'SQLite',
        'TailwindCSS',
        'Clerk',
        'Uploadthing',
        'ShadCN-UI',
        'file storage',
        'URL extractors',
        'notes',
        'finances',
        'kanban',
        'HTML to TSX',
        'SVG to CSS',
        'reverse geolocation'
    ],

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
