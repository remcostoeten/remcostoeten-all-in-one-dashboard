'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <HydrationOverlay>
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </HydrationOverlay>
    )
}
