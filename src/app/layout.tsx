import { IBM_Plex_Sans } from 'next/font/google'
import '@/styles/app.scss'
import ProviderWrapper from '@/core/Providers'
import type { ReactNode } from 'react'
import TopNav from '@/components/shared/TopNav'
import PageWrapper from '@/components/theme/shells/PageWrapper'

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

type RootLayoutProps = {
    children: ReactNode
    locale: 'nl' | 'en' | 'nlNL' | 'enUS'
}

export default function Layout({ children }: RootLayoutProps) {
    return (
        <html lang='en' className='dark'>
            <body className={`${plexsans.className} overflow-x-hidden`}>
                <ProviderWrapper content={null}/>
            </body>
        </html>
    )
}
