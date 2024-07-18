/**
 * Dynamically renders a sub-menu component based on the current route.
 * The sub-menu component is determined by the `subMenu` property of the current route in the `routeConfig`.
 * If the current route does not have a `subMenu` property, or the corresponding sub-menu component is not found, the function returns `null`.
 */
'use client'

import { usePathname } from 'next/navigation'
// import DriveSubMenu from './DriveSubMenu'
// import SettingsSubMenu from './SettingsSubMenu'
// import TodosSubMenu from './TodosSubMenu'
import { routeConfig } from '@/core/config/route-config'
import ChatSubMenu from '@/app/[locale]/(auth)/dashboard/chat/_components/ChatSubMenu';

const componentMap = {
    ChatSubMenu,
    // DriveSubMenu,
    // SettingsSubMenu,
    // TodosSubMenu,
};

const DynamicSubMenu = () => {
    const pathname = usePathname()
    const currentRoute = routeConfig.find(route => pathname.includes(route.path))

    if (!currentRoute || !currentRoute.subMenu) return null

    const SubMenuComponent = componentMap[currentRoute.subMenu]

    return SubMenuComponent ? <SubMenuComponent /> : null
}

export default DynamicSubMenu
