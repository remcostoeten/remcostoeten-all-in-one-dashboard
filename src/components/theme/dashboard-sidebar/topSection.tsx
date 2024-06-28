import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import NotificationMenuItem from './NotificationItem'

type TopSectionProps = {
    someProp: string
}

export default function TopSection() {
    const initial = useUser.name.charAt(0).toUpperCase()
    return (
        <>
            <div className='flex flex-col gap-1 items-center  mb-4'>
                <AvatarShell Initials={initial} />
                <StaticHamburger />
                <NotificationMenuItem />
            </div>
        </>
    )
}

function StaticHamburger() {
    return (
        <button className='p-1.5 hover:bg-gray-900 bg-[#ffffff17] rounded-md'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
        </button>
    )
}
