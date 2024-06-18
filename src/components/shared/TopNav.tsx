'use client'

import React, { useEffect, useState } from 'react'
import CurrentTime from './navigation/CurrentTime'
import TopNavSettings from './navigation/TopNavSettings'
import Breadcrumbs from './navigation/Breadcrumbs'
import LocaleSwitcher from '../LocaleSwitcher'
import Settings from './navigation/Settings'

export default function TopNav() {
    const [location, setLocation] = useState<{ city: string } | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchLocation() {
            try {
                const response = await fetch('/api/getUserLocation')
                const data = await response.json()
                setLocation(data)
            } catch (error) {
                console.error('Error fetching user location:', error)
                setError(error)
            }
        }

        fetchLocation()
    }, [])

    return (
        <div className='flex flex-col justify-center whitespace-nowrap bg-gray-900 text-xs h-top-bar py-1'>
            <nav className='flex gap-5 justify-between h-top-bar pl-4 w-full max-md:flex-wrap max-md:max-w-full pr-6 items-center'>
                <Breadcrumbs />
                <div className='flex gap-5 items-center'>
                    <TopNavSettings />
                    <Settings />
                    <LocaleSwitcher />
                    <p className='text-white'>
                        {location ? location.city : 'Loading...'}
                    </p>
                    <CurrentTime />
                </div>
            </nav>
        </div>
    )
}
