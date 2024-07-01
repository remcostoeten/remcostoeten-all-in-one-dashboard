'use client'

import SubMenu from '@/components/theme/dashboard-sidebar/SubMenu'
import { useChatSubMenuStore } from '@/core/stores/SubMenuStore'

export default function TjetLayout({ children }: { children: React.ReactNode }) {
    const { isSubMenuExpanded } = useChatSubMenuStore()

    return (
        <div className="flex h-full">
            <SubMenu />
            <section className='flex-1 overflow-y-auto p-4 sm:p-6'>
                {children}
            </section>
        </div>
    )
}