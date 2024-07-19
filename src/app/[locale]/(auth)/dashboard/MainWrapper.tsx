'use client'

import { Button } from "@/components/ui"
import { useSubMenuStore } from "../../../../core/stores/SubMenuStore"
import { FiSidebar } from "react-icons/fi"

export default function MainWrapper({ children }) {
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)

    return (
        <section
            className='flex flex-col w-full trans'
            style={{
                marginLeft: isSubMenuVisible ? '304px' : '64px',
                height: 'calc(100vh - var(--nav-height))'
            }}
        >{children}
            <ToggleSideMenu />
        </section>
    )
}


export function ToggleSideMenu({ className }: { className?: string }) {
    const toggleSubMenu = useSubMenuStore((state) => state.toggleSubMenu)
    return (
        <Button variant='ghost' size='icon' onClick={toggleSubMenu} className={className}><FiSidebar /></Button>
    )
}
