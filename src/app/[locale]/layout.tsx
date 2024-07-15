// app/[locale]/layout.tsx

import NavBar from '@/components/shared/theme/navbar'
import Providers from '@/core/Providers'
import { AppConfig } from '@/core/utils/app-config'
import type { Metadata } from 'next'
import { useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import '../../styles/app.scss'
import '../../styles/app.scss'
import TopNav from '@/components/shared/TopNav'
const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export default function RootLayout(props: {
    children: ReactNode
    params: { locale: string }
}) {
    // Set the locale for the request
    unstable_setRequestLocale(props.params.locale)

    // Validate that the incoming `locale` parameter is valid
    if (!AppConfig.locales.includes(props.params.locale)) notFound()

    // Using internationalization in Client Components
    const messages = useMessages()

    const initialAppointments = []
    const initialResources = []

    return (
        <html lang={props.params.locale} className='dark overflow-x-hidden'>
            <body className={`${plexsans.className} overflow-x-hidden`}>
                <Providers
                    locale={props.params.locale}
                    messages={messages}
                    initialAppointments={initialAppointments}
                    initialResources={initialResources}
                >
                    <TopNav />
                    <NavBar />
                    {props.children}
                    <Toaster invert />
                </Providers>
            </body>
        </html>
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
