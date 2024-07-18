import React from 'react'
import SubMenuHeader from './SubMenuHeader'
import SubMenuContent from './SubMenuContent'
import SubMenuSearch from './SubMenuSearch'

interface SubMenuProps {
    title: string
    children: React.ReactNode
    showSearch?: boolean
}

const SubMenu: React.FC<SubMenuProps> = ({
    title,
    children,
    showSearch = true
}) => {
    return (
        <div className='flex flex-col w-full max-w-[240px] bg-sidebar text-text-primary border-r border-border'>
            <SubMenuHeader title={title} />
            {showSearch && <SubMenuSearch />}
            <SubMenuContent>{children}</SubMenuContent>
        </div>
    )
}

export default SubMenu
