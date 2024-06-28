'use client'

import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import NotificationMenuItem from './NotificationItem'
import { Seperator } from './DashboardAside'
import Hamburger from '@/components/effects/HamburgerToggle'
import { toast } from 'sonner'
import { useState } from 'react'

export default function TopSection() {
    const initial = useUser.name.charAt(0).toUpperCase()
    return (
        <>
            <div className='flex flex-col gap-1 items-center  mb-'>
                <div className='flex items-center gap-2 flex-col'>
                    <AvatarShell Initials={initial} />
                    <StaticHamburger />
                    <Seperator
                        style={{ marginTop: '20px', marginBottom: '0' }}
                    />
                </div>
                <NotificationMenuItem />
            </div>
        </>
    )
}

function StaticHamburger() {
    const [isOpen, setIsOpen] = useState(false)
    const handleTogle = () => {
        toast('I know, I know, animation is screwed up')
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    return (
        <>
            <button
                className=' w-[50px] scale-75 grid place-items-center h-[50px] hover:bg-gray-900 bg-[#ffffff17] rounded-md'
                onClick={() => handleTogle()}
            >
                <Hamburger />
            </button>
            {isOpen && <></>}
        </>
    )
}
