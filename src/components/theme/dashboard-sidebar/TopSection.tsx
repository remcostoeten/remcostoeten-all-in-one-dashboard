'use client'

import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import Hamburger from '@/components/effects/HamburgerToggle'
import { toast } from 'sonner'
import { useMenuStore } from '@/core/stores/MenuStore'
import Link from 'next/link'

export default function TopSection() {
    const { isExpanded, setIsExpanded } = useMenuStore()
    const initial = useUser.name.charAt(0).toUpperCase()

    return (
        <div
            className={`flex flex-col gap-1 mb-4     ${isExpanded ? 'px-3 py-2     items-start' : 'items-center'}`}
        >
            <div className='flex items-center gap-2 flex-col'>
                <AvatarShell as={Link} href='/dashboard' Initials={initial} />
            </div>

            <Hamburger />
        </div>
    )
}
