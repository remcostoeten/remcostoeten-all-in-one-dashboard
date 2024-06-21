import { Toaster } from 'sonner'
import type { ReactNode } from 'react'
import { enUS, nlNL } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import siteConfig from '@/core/data/site-config'
import { NextIntlClientProvider, useMessages } from 'next-intl'

type ProviderWrapperProps = {
  children: ReactNode;
};

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  const locale = ['nl', 'en', 'nlNL', 'enUS']

  const messages = useMessages();

  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  if (locale.includes('nl')) {
    clerkLocale = nlNL;
  }
  if (!locale.includes('en')) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
  }

  return (
    <NextIntlClientProvider
      locale={locale[0]}
      messages={messages}
    >
      <ClerkProvider
        localization={clerkLocale}
        signInUrl={signInUrl}
        signUpUrl={signUpUrl}
        signInFallbackRedirectUrl={dashboardUrl}
        signUpFallbackRedirectUrl={dashboardUrl}
      >
        {children}
        <Toaster/>
        <Analytics/>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}