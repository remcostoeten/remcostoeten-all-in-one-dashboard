'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import RouteGuard from '@/components/RouteGaurd'
import AddAppointmentDialog from '@/app/[locale]/(auth)/dashboard/planner/components/AddAppointmentDialog'
import CalendarToolbar from '@/app/[locale]/(auth)/dashboard/planner/components/CalendarPicker'

function DashHeader() {
    const pathname = usePathname()
    const [title, setTitle] = useState('Dashboard')

    useEffect(() => {
        const pathSegments = pathname.split('/')
        const lastSegment = pathSegments[pathSegments.length - 1] || ''
        setTitle(lastSegment.replace(/-/g, ' ') || 'Dashboard')
    }, [pathname])

    return (
        <header className='flex flex-col space-y-4 p-4 bg-blue-alternative text-text-white'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </h1>
                <div className='flex space-x-2'>
                    <RouteGuard patterns={['/dashboard/planner']}>
                        <AddAppointmentDialog />
                        <CalendarToolbar />
                    </RouteGuard>
                </div>
            </div>
        </header>
    )
}

interface ActionButtonProps {
    onClick?: () => void
    children: React.ReactNode
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='bg-ghost hover:bg-ghost-hover text-text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary'
        >
            {children}
        </button>
    )
}

export default DashHeader
