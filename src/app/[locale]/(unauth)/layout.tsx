import { ThemeProvider } from '@core/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import '@/styles/app.scss'
import { Toaster } from 'sonner'
import { interDisplay } from '@/core/utils/fonts'

export const metadata: Metadata = {
    metadataBase: new URL('https://panel.remcostoeten.com'),
    title: {
        default: 'Personal all in one dashnoard',
        template: `%s | Remco Stoeten - Personal all in one dashboard`
    },
    openGraph: {
        description: 'Your all in one dashboard',
        images: ['']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nextjs Starter ',
        description: 'Your all in one dashboard',
        siteId: '',
        creator: '@remcostoeten',
        creatorId: '',
        images: ['']
    }
}
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang='en' suppressHydrationWarning>
                <body className={interDisplay.className}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className='min-w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2 flex flex-col items-center justify-between bg-white pt-16 dark:bg-black'>
                            <div className='mx-auto max-w-screen-md'>
                                {children}
                            </div>
                        </div>
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
