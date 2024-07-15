import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative flex  bg-dash-body  w-full flex-row border-t h-minus-nav border border-red-400'>
            <Aside />
            <section className=' flex w-full flex-col '>
                <DashHeader />
                {children}
            </section>
        </main>
    )
}
