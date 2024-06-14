import { AppConfig } from '@/core/utils/AppConfig'
import '@/styles/app.scss'
import { useMessages } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { enUS, nlNL } from '@clerk/localizations'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export default function RootLayout(props: {
    children: ReactNode
    params: { locale: string }
}) {
    // Validate that the incoming `locale` parameter is valid
    if (!AppConfig.locales.includes(props.params.locale)) notFound()

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
        // <main className='min-w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex mx-auto flex-col  bg-white pt-16 dark:bg-black '>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
            {props.children}
        </div>
        // </main>
    )
}
