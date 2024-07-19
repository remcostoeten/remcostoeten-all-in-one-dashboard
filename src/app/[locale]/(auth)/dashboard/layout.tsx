'use client'
import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'
import DynamicSubMenu from '@/components/dashboard/theme/sub-menu/DynamicSubMenu'
import MainWrapper from './MainWrapper'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex' style={{ marginTop: 'var(--top-bar-height)' }}>
            <div className='fixed top-[] left-0 flex h-full'>
                <Aside className='dashboard-aside max-h-minus-nav flex w-[64px] flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white' />
                <DynamicSubMenu />
            </div>
            <MainWrapper>
                <DashHeader />
                <main className='p-4'>{children}</main>
            </MainWrapper>
        </main>
    )
}
