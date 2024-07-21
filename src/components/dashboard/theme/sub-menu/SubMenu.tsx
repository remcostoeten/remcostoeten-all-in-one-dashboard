import React, { type MouseEventHandler } from 'react'
import SubMenuHeader from './SubMenuHeader'
import SubMenuContent from './SubMenuContent'
import SubMenuSearch from './SubMenuSearch'
import { useSubMenuStore } from '../../../../core/stores/SubMenuStore'

export interface SubMenuProps {
    title: string
    children: React.ReactNode
    showSearch?: boolean
}

const SubMenu: React.FC<SubMenuProps> = ({
    title,
    children,
    showSearch = true
}) => {
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)

    if (!isSubMenuVisible) return null

    const dragMenu = () => {
        useSubMenuStore.getState().toggleSubMenu()
    }

    return (
        <aside
            onDragStart={dragMenu}
            onDragEnd={dragMenu}
            className='flex flex-col sm:w-submenu sm:max-w-submenu bg-sidebar text-text-primary border-r border-border sm:flex w-minus-sidebar -[64px]'
        >
            <SubMenuHeader title={title} />
            <SubMenuContent>{children}</SubMenuContent>
        </aside>
    )
}

export default SubMenu
