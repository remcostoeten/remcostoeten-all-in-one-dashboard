import React from 'react'

export default function ChatLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex h-screen'>
            <aside className='w-64 bg-dark-blue'>{/* Sidebar content */}</aside>
            <main className='flex-1 flex flex-col'>{children}</main>
        </div>
    )
}
