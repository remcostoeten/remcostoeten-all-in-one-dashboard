import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'
import DynamicSubMenu from '@/components/dashboard/theme/sub-menu/DynamicSubMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex h-minus-nav'>
            <Aside />
            <DynamicSubMenu />
            <section className='w-minus-sidebar flex w- flex-col h-minus-nav'>
                <div className=''>
                    <DashHeader />
                    {children}
                </div>
            </section>
        </main>
    )
}
