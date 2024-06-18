import type { ReactNode } from 'react'
import Aside from '@/components/theme/huly/aside'
import Navigation from '@/components/theme/sidebar/Navigation'
import NavBar from '@/components/shared/theme/NavBar'
import '@/styles/app.scss'
import { useMessages } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { enUS, frFR } from '@clerk/localizations'
import siteConfig from '@/core/data/site-config'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

type DashboardLayoutProps = {
    children: ReactNode
    params: { locale: string }
}

export default function DashboardLayout({
    children,
    params
}: DashboardLayoutProps) {
    if (!siteConfig.locales.includes(params.locale)) notFound()

    const messages = useMessages()

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
        <html className='dark'>
            <body className={`${plexsans.className}`}>
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
                        <h1 className='text-4xl text-neutral-200'>Dashboard</h1>
                        <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20' />
                        <div className='flex w-full flex-row gap-5'>
                            <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                            <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                        </div>
                    </section>
                </main>
            </body>
        </html>
    )
}
