import type { ReactNode } from 'react'

import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'

interface DashboardLayoutProps {
    children: ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className='relative flex h-full bg-dash-body  w-full flex-row'>
            <Aside />
            <section className=' flex w-full flex-col gap-5 p-4'>
                {children}
            </section>
        </main>
    )
}
