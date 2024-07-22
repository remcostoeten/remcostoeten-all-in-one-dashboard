import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html className='overflow-x-hidden'>
            <body className='!overflow-hidden'>{children}</body>
        </html>
    )
}
