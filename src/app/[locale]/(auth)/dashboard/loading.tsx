import { SkeletonDashboardAside } from '@/components/effects/SkeletonLoaders'
import SubMenu from '@/components/shared/theme/dashboard-sidebar/SubMenu'
import LoadingSpinner from '../../../../components/effects/Spinner'

export default function Loading() {
    return (
        <div className='w-screen h-screen grid place-items-center'>
            <LoadingSpinner />
        </div>
    )
}

function MockDashboard() {
    return (
        <main className='relative flex h-full bg-dash-body  w-full flex-row'>
            <SkeletonDashboardAside />
            <SubMenu />
            <section className=' flex w-full flex-col gap-5'>
                <div className='w-screen h-screen  grid place-items-center'>
                    <span className='loading loading-spinner text-accent'></span>
                </div>
            </section>
        </main>
    )
}
