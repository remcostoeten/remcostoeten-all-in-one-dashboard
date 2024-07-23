'use client'

import { ReactNode, type MouseEventHandler } from 'react'
import { Button } from '@/components/ui/button'
import { useSubMenuStore } from '@/core/stores/SubMenuStore'
import { FiSidebar, FiSearch } from 'react-icons/fi'
import { useChatSearchStore } from '@/core/stores/chatStore'

type MainWrapperProps = {
    children: ReactNode
    chatName?: string
}

export default function MainWrapper({ children, chatName }: MainWrapperProps) {
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)

    return (
        <section
            className='flex  flex-col ml-auto transition-[width]'
            style={{
                width: isSubMenuVisible
                    ? 'calc(100vw - var(--submenu-width) - var(--sidebar-width)'
                    : 'calc(100vw - var(--sidebar-width))',
                height: 'calc(100vh - var(--nav-height))'
            }}
        >
            {children}
        </section>
    )
}

export function ToggleSideMenu({ className }: { className?: string }) {
    const toggleSubMenu: MouseEventHandler<HTMLButtonElement> = () => {
        useSubMenuStore.getState().toggleSubMenu()
    }

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={toggleSubMenu}
            className={className}
        >
            <FiSidebar />
        </Button>
    )
}

export function ToggleSearch({ className }: { className?: string }) {
    const { toggleSearch } = useChatSearchStore()

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={toggleSearch}
            className={className}
        >
            <FiSearch />
        </Button>
    )
}
