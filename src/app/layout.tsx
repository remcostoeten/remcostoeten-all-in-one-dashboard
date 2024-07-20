import React from 'react'
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body className='overflow-hidden'>{children}</body>
        </html>
    )
}
