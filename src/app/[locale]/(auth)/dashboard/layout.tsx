'use client'

import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import DynamicSubMenu from '@/components/dashboard/theme/sub-menu/DynamicSubMenu'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'
import MainWrapper from './MainWrapper'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex' style={{ marginTop: 'var(--top-bar-height)' }}>
            <div className='fixed top-[] left-0 flex h-full'>
                <Aside />
                <DynamicSubMenu />
            </div>
            <MainWrapper>
                <DashHeader />
                <main className='p-4'>{children}</main>
            </MainWrapper>
        </main>
    )
}
