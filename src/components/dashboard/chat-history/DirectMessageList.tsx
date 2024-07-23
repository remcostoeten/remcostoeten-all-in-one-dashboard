'use client'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { Bookmark } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAllChats } from '../../../core/@server/actions/getChatData'
import { useSubMenuStore } from '../../../core/stores/SubMenuStore'
import { getInitials } from '../../../core/utils/get-initials'
import { DirectMessageSkeleton } from '../../effects/SkeletonLoaders'
import AvatarShell from '../../theme/shells/AvatarShell'
import { SubMenuInnerContent } from '../theme/sub-menu/SubMenuContent'
import SubMenuSearch from '../theme/sub-menu/SubMenuSearch'
import ToggleAdminVisibility from './ToggleAdminVisibillity'
import AdminProtectedContent from '@/components/auth/AdminProtectedContent'

const backgrounds = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500'
]

interface DirectMessageProps {
    name: string
    adminOnly: boolean
}

function DirectMessage({
    name,
    adminOnly: initialAdminOnly
}: DirectMessageProps) {
    const [adminOnly] = useState(initialAdminOnly)
    const initials = getInitials(name || '')
    const firstLetter = initials[0] || ''
    const randomBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)]
    const pathname = usePathname()
    const isActive = pathname.includes(name)

    return (
        <div className='flex items-center justify-between'>
            <Link
                href={`/dashboard/chat/${encodeURIComponent(name)}`}
                className={`flex items-center gap-2 px-2.5 space-x-2 hover:bg-ghost ${isActive ? 'flex items-center bg-ghost py-1' : 'flex items-center py-.5 hover:bg-ghost'}`}
            >
                <AvatarShell
                    Initials={initials}
                    firstLetter={firstLetter}
                    hasTwoLetters={initials.length > 1}
                    width='5'
                    height='5'
                    background={randomBackground}
                />
                <div className='text-sm text-text-secondary hover:text-text-primary'>
                    {name}
                </div>
            </Link>
            <AdminProtectedContent>
                <ToggleAdminVisibility
                    name={name}
                    initialAdminOnly={adminOnly}
                />
            </AdminProtectedContent>
        </div>
    )
}

interface Chat {
    name: string
    adminOnly: boolean
}

export default function DirectMessageList() {
    const [isOpen, setIsOpen] = useState(true)
    const [chatNames, setChatNames] = useState<Chat[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)

    useEffect(() => {
        async function fetchChats() {
            setIsLoading(true)
            const chats = await getAllChats()

            console.log('Fetched chats:', chats)
            setChatNames(chats)
            setIsLoading(false)
        }

        fetchChats()
    }, [])

    return (
        <SubMenuInnerContent>
            <Link
                href='#'
                className='w-full p-0 max-w-[399px] h-[28px] text-text text-xs hover:bg-[rgba(165,189,255,0.15)] font-normal rounded-[5.25px] py-0 justify-start'
            >
                <div className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'>
                    <Bookmark className='w-3.5 h-3.5 mr-[7px] flex-shrink-0' />
                    <span className='flex-grow truncate text-left'>
                        Favorited
                    </span>
                </div>
            </Link>
            <SubMenuSearch />
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs text-text-secondary uppercase pb-1'>
                    Direct messages
                </span>
                <ChevronRightIcon
                    className={`h-3 w-3 text-text-secondary transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
            </div>
            {isLoading && (
                <div className='flex flex-col gap-2'>
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <DirectMessageSkeleton key={index} />
                        ))}
                </div>
            )}
            <AdminProtectedContent>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='flex flex-col gap-2'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {chatNames.length > 0 ? (
                                chatNames.map((chat, index) => (
                                    <DirectMessage
                                        key={index}
                                        name={chat.name}
                                        adminOnly={chat.adminOnly ?? false} // Provide a default value if null
                                    />
                                ))
                            ) : (
                                <div>No chats available</div>
                            )}
                        </motion.div>
                    )}
            </AdminProtectedContent>
        </AnimatePresence>
        </SubMenuInnerContent >
    )
}
