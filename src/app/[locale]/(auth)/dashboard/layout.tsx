import type { PropsWithChildren } from 'react'

import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'
import MainContentHeaderWrapper from '@/components/dashboard/guestbook/shells/MainContentHeaderWrapper'
import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <main className='relative flex flex-1 bg-dash-body  w-full flex-row'>
            <Aside />
            <section className=' flex w-full flex-col gap-5 p-4'>
                <DashHeader />
                {children}
            </section>
        </main>
    )
}
