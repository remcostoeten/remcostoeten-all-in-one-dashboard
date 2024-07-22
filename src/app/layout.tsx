import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body className='overflow-hidden'>{children}</body>
        </html>
    )
}
