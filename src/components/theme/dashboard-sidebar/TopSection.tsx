
'use client'

import { useUser } from '@clerk/nextjs'
import AvatarShell from '../shells/AvatarShell'
import Hamburger from '@/components/effects/HamburgerToggle'
import { useMenuStore } from '@/core/stores/MenuStore'
import Link from 'next/link'
import { Flex } from '@/components/shared/atoms/Flex'

export default function TopSection() {
    const { isExpanded } = useMenuStore()
    const { user } = useUser()
    const initial = user?.firstName?.[0]?.toUpperCase() || ''

    return (
        <Flex
            direction='col'
            gap='1'
            className={`mb-4 ${isExpanded ? 'px-3 py-2 items-start' : 'items-center'}`}
        >
            <Flex direction='col' gap='2 '>
                <AvatarShell as={Link} href='/dashboard' Initials={initial} />
            </Flex>

            <Hamburger />
        </Flex>
    )
}
