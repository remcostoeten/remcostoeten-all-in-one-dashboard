import type { ReactNode } from 'react'

import Aside from '@/components/theme/huly/aside'
import Navigation from '@/components/theme/sidebar/Navigation'

interface DashboardLayoutProps {
    children: ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className='relative flex h-screen w-full flex-row'>
            <Aside />
            <Navigation />
            <section className='ml-20 flex w-full flex-col gap-5 p-10'>
                {children}
                <h1 className='text-4xl text-neutral-200'>Dashboard</h1>
                <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20' />
                <div className='flex w-full flex-row gap-5'>
                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                </div>
            </section>
        </main>
    )
}
