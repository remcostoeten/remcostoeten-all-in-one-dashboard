'use client'

import TopNav from '@/components/shared/TopNav'
import NavBar from '@/components/shared/theme/navbar'
import { usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'

export default function PageWrapper({ content }: { content: ReactNode }) {
    const pathname = usePathname()

    const dashboard = pathname.includes('dashboard')

    return (
        <>
            <div className={!dashboard ? 'flex flex-col' : ''}>
                {' '}
                <TopNav />
                {!dashboard && <NavBar />}
            </div>
            <main
                className='min-w-screen bg-dot-black/[0.2 flex flex-col items-center justify-between  bg-black pt-16 bg-dot-white/[0.2] -z-10'
                style={{
                    paddingTop: 'calc(var(--nav-height) + 16px)'
                }}
            >
                {content}
            </main>
        </>
    )
}
