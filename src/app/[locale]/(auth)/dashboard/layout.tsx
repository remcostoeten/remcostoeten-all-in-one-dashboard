import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex h-minus-nav'>
            <Aside />
            <section className='w-minus-sidebar flex w- flex-col h-minus-nav'>
                <DashHeader />
                {children}
            </section>
        </main>
    )
}
