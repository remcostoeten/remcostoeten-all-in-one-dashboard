'use client'

import { usePathname } from 'next/navigation'
import Aside from './DashboardAside'
import SubMenu from './SubMenu'
import { enUS, nlNL } from '@clerk/localizations'

export default function DashboardSidebars(props: {
    params?: { locale: string }
}) {
    const pathname = usePathname()

    // Provide a default locale if props.params is undefined or does not contain a locale
    let locale = props.params?.locale ?? enUS

    if (props?.params?.locale === 'nl') {
        locale = nlNL
    }
    if (pathname.includes('/dashboard/chat')) {
        return (
            <>
                <Aside />
                <SubMenu />
            </>
        )
    }

    return (
        <>
            <Aside />
        </>
    )
}
