import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body className='!overflow-x-hidden'>{children}</body>
        </html>
    )
}
