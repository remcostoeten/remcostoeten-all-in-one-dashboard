// src/app/[locale]/layout.tsx
import PushButton from '@/components/shared/SentPushNotificationt'
import { AppConfig } from '@/core/utils/AppConfig'
import '@/styles/app.scss'
import type { Metadata } from 'next'
import { useMessages, NextIntlClientProvider } from 'next-intl'
import { IBM_Plex_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

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

    return (
        <html lang={props.params.locale} className='dark'>
            <body className={`${plexsans.className}`}>
                <NextIntlClientProvider
                    locale={props.params.locale}
                    messages={messages}
                >
                    <PushButton />
                    {props.children}
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
