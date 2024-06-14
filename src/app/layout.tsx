import NextTopLoader from 'nextjs-toploader'
import NavBar from '@/components/shared/theme/NavBar'
import '@/styles/app.scss'
import { useMessages, NextIntlClientProvider } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import type { ReactNode } from 'react'
import { enUS, nlNL } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/shared/theme/Footer'
import TopNav from '@/components/shared/theme/TopNav'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export default function RootLayout(props: {
    children: ReactNode
    params: { locale: string }
}) {
    const messages = useMessages()

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
        <html lang={props.params.locale} className='dark'>
            <body className={`${plexsans.className} text-foreground`}>
                {' '}
                <div className='test' />{' '}
                <NextIntlClientProvider
                    locale={props.params.locale}
                    messages={messages}
                >
                    <NextTopLoader color='#2dd4bf' />
                    <ClerkProvider
                        localization={clerkLocale}
                        signInUrl={signInUrl}
                        signUpUrl={signUpUrl}
                        signInFallbackRedirectUrl={dashboardUrl}
                        signUpFallbackRedirectUrl={dashboardUrl}
                    >
                        <TopNav />
                        <NavBar />
                        <main className='min-w-screen bg-dot-black/[0.2 flex flex-col items-center justify-between  bg-black pt-16 bg-dot-white/[0.2]'>
                            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                                {props.children}
                            </div>
                        </main>
                        <Footer />
                        {/* <main
                            style={{
                                paddingTop: 'calc(var(--nav-height) + 16px)'
                            }}
                        >
                            {props.children}
                        </main>{' '}
                        Add padding-top here */}
                    </ClerkProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

// export const metadata: Metadata = {
//     icons: [
//         {
//             rel: 'apple-touch-icon',
//             url: '/apple-touch-icon.png'
//         },
//         {
//             rel: 'icon',
//             type: 'image/png',
//             sizes: '32x32',
//             url: '/favicon-32x32.png'
//         },
//         {
//             rel: 'icon',
//             type: 'image/png',
//             sizes: '16x16',
//             url: '/favicon-16x16.png'
//         },
//         {
//             rel: 'icon',
//             url: '/favicon.ico'
//         }
//     ]
// }
