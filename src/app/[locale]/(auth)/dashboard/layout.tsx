import DashHeader from '@/components/dashboard/guestbook/shells/DashHeader'
import Aside from '@/components/theme/dashboard-sidebar/DashboardAside'

export default function Layout({ children }: { children: React.ReactNode }) {
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
