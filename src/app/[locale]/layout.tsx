import { IBM_Plex_Sans } from 'next/font/google';
import '../../styles/app.scss';
import ProviderWrapper from '@/core/Providers';
import type { ReactNode } from 'react';

// Call and assign to a const in the module scope
const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
});

type RootLayoutProps = {
    children: ReactNode;
    locale: 'nl' | 'en' | 'nlNL' | 'enUS';
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang='en' className='dark'>
          <body className={`${plexsans.className} overflow-x-hidden`}>
              <ProviderWrapper>
                  <main className='min-w-screen bg-dot-black/[0.2] flex flex-col items-center justify-between bg-black pt-16 bg-dot-white/[0.2] -z-10'>
                      {children}
                  </main>
              </ProviderWrapper>
          </body>
      </html>
  );
}