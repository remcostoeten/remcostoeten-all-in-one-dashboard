import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html data-theme='sunset'>
            <body className='!overflow-x-hidden'>{children}</body>
        </html>
    )
}
