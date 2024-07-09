import type { ReactNode } from 'react'

import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'

type DashboardLayoutProps = {
    children: ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className='relative flex h-full bg-dash-body  w-full flex-row'>
            <Aside />
            <div className='flex-1'>{children}</div>
        </main>
    )
}

function DashboardTemporaryBlocks({ children }: { children: ReactNode }) {
    return (
        <section className=' flex w-full flex-col gap-5'>
            {children}
            <h1 className='text-4xl text-neutral-200'>Dashboard</h1>
            <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20' />
            <div className='flex w-full flex-row gap-5'>
                <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
            </div>
        </section>
    )
}
