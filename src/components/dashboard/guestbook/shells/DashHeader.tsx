'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RouteGuard from '@/components/RouteGaurd'
import AddAppointmentDialog from '@/app/[locale]/(auth)/dashboard/planner/components/AddAppointmentDialog'
import CalendarToolbar from '@/app/[locale]/(auth)/dashboard/planner/components/CalendarPicker'
import {
    ToggleSearch,
    ToggleSideMenu
} from '@/app/[locale]/(auth)/dashboard/MainWrapper'
import { useSubMenuStore } from '../../../../core/stores/SubMenuStore'
import ChatInfo from '../../chat-history/individual-chat/ChatInfo'
import { Flex } from '../../../shared/atoms/Flex'

function DashHeader() {
    const pathname = usePathname()
    const [showInfo, setShowInfo] = useState(false)
    const [title, setTitle] = useState('Dashboard')
    const { isSubMenuVisible } = useSubMenuStore((state) => ({
        isSubMenuVisible: state.isSubMenuVisible
    }))
    useEffect(() => {
        const pathSegments = pathname.split('/')
        const lastSegment = pathSegments[pathSegments.length - 1] || ''
        const formattedSegment = lastSegment.replace(/-/g, ' ')

        if (pathname.includes('chat')) {
            setTitle(`Chat with ${formattedSegment}`)
            useSubMenuStore.getState().openSubMenu()
            setShowInfo(true)
        } else {
            setShowInfo(false)
            setTitle(formattedSegment || 'Dashboard')
            useSubMenuStore.getState().closeSubMenu()
        }
    }, [pathname])

    return (
        <header className='flex flex-col  space-y-4 p-4 bg-section text-text-white max-h-top-section justify-center h-[46px]'>
            <div className='flex items-center justify-between'>
                <Flex
                    gap={1}
                    {...(isSubMenuVisible ? { className: 'ml-4' } : {})}
                >
                    <h1 className='ml-0 text-xl font-semibold'>
                        {title.charAt(0).toUpperCase() + title.slice(1)}
                    </h1>
                    {showInfo && <ChatInfo />}
                </Flex>
                <div className='flex space-x-2'>
                    <RouteGuard patterns={['/dashboard/chat']}>
                        <ToggleSearch />
                        <ToggleSideMenu />
                    </RouteGuard>{' '}
                    <RouteGuard patterns={['/dashboard/color']}>
                        <ToggleSideMenu />
                    </RouteGuard>
                    <RouteGuard patterns={['/dashboard/planner']}>
                        <AddAppointmentDialog />
                        <CalendarToolbar />
                    </RouteGuard>
                </div>
            </div>
        </header>
    )
}

export default DashHeader
