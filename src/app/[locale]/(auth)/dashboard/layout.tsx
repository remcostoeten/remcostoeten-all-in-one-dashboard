import type { ReactNode } from 'react'

import Flex from '@/components/shared/atoms/Flex'
import DashboardSidebars from '@/components/theme/dashboard-sidebar'

type DashboardLayoutProps = {
    children: ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className='relative flex h-full bg-dash-body w-full flex-row'>
            <Flex as='aside'>
                <DashboardSidebars />
            </Flex>
            {children}
        </main>
    )
}

function DashboardWireLayout({ children }) {
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
