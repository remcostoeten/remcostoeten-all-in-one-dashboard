import { useMessages, NextIntlClientProvider } from 'next-intl'
import { enUS, nlNL } from '@clerk/localizations'
import { ReactNode } from 'react' // Ensure ReactNode is imported
import { Toaster } from 'sonner'

interface Props {
    children: ReactNode
    params: {
        locale: string
    }
}

const RootLayout: React.FC<Props> = ({ children, params }) => {
    const messages = useMessages()

    // Clerk localization and URLs
    let clerkLocale = enUS
    let signInUrl = '/sign-in'
    let signUpUrl = '/sign-up'
    let dashboardUrl = '/dashboard'

    if (params.locale === 'nl') {
        clerkLocale = nlNL
    }

    if (params.locale !== 'en') {
        signInUrl = `/${params.locale}${signInUrl}`
        signUpUrl = `/${params.locale}${signUpUrl}`
        dashboardUrl = `/${params.locale}${dashboardUrl}`
    }

    return (
        <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
            {/* Removed the duplicate {children} */}
            <Toaster invert />
        </NextIntlClientProvider>
    )
}

export default RootLayout
