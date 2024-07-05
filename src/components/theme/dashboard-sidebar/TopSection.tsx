'use client'

import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import Hamburger from '@/components/effects/HamburgerToggle'
import { useMenuStore } from '@/core/stores/MenuStore'
import { usePathname } from 'next/navigation'
import { useChatSubMenuStore } from '@/core/stores/SubMenuStore'

export default function TopSection() {
    const { isExpanded, setIsExpanded } = useMenuStore()
    const { isSubMenuExpanded, setIsSubMenuExpanded } = useChatSubMenuStore()

    // ?    const toggleSubMenu = () => {
    // setIsSubMenuExpanded(!isSubMenuExpanded);
    // };

    const initial = useUser().user?.firstName?.charAt(0).toUpperCase() || ''
    const isChat = usePathname().includes('chat')

    return (
        <div className='flex flex-col gap-1 mb-4  px-2'>
            <div className='flex  gap-2 flex-col'>
                <AvatarShell Initials={initial} />
            </div>

            {/* {!isChat && ( */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='p-1 trans bg-ghost-active w-min border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800 h-8 grid place-items-center'
            >
                <Hamburger />
            </button>
            {/* )} */}
            {/* <button
                onClick={toggleSubMenu}
                className={`p-1 trans ${isChat ? 'bg-ghost-active' : '!bg-red-400'} w-min border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800 h-8 grid place-items-center`}
            >
                <Hamburger />
            </button> */}
        </div>
    )
}
