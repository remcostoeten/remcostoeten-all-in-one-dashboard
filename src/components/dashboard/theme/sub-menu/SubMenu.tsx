import React from 'react'
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

    return (
        <aside className='flex flex-col w-submenu max-w-submenu bg-sidebar text-text-primary border-r border-border'>
            <SubMenuHeader title={title} />
            <SubMenuContent>{children}</SubMenuContent>
        </aside>
    )
}

export default SubMenu
