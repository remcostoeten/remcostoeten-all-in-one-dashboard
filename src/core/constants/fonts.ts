import { Inter, IBM_Plex_Sans, Roboto_Mono } from 'next/font/google'

export const roboto = Roboto_Mono({
    weight: ['200', '400', '600']
})

export const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export const inter = Inter({
    weight: ['200', '400', '600', '800']
})
