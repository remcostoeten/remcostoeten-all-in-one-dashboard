'use client'

import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import Hamburger from '@/components/effects/HamburgerToggle'
import { toast } from 'sonner'
import { useMenuStore } from '@/core/stores/MenuStore'

export default function TopSection() {
    const { isExpanded, setIsExpanded } = useMenuStore()
    const initial = useUser.name.charAt(0).toUpperCase()

    return (
        <div
            className={`flex flex-col gap-1 mb-4     ${isExpanded ? 'px-3 py-2     items-start' : 'items-center'}`}
        >
            <div className='flex items-center gap-2 flex-col'>
                <AvatarShell Initials={initial} />
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='p-1 trans bg-ghost-active w-min border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800 h-8 grid place-items-center'
            >
                <Hamburger />
            </button>
        </div>
    )
}

function StaticHamburger() {
    const { isExpanded, setIsExpanded } = useMenuStore()

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    const handleTogle = () => {
        toast('I know, I know, animation is screwed up')
        // if (isOpen) {
        //     setIsOpen(false)
        // } else {
        //     setIsOpen(true)
        // }
    }

    return (
        <>
            <button
                className=' w-[50px] scale-75 grid place-items-center h-[50px] hover:bg-icon-active-background bg-[#ffffff17] rounded-md trans hover:border-icon-active-background border'
                onClick={() => handleTogle()}
            >
                <Hamburger />
            </button>
            {isExpanded && <></>}
        </>
    )
}
