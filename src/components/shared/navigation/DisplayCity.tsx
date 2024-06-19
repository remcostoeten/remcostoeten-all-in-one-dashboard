'use client'

import { getCity } from '@/core/@server'
import { useEffect, useState } from 'react'

export default function DisplayCity() {
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cachedCity = localStorage.getItem('city')
        if (cachedCity) {
            setCity(cachedCity)
            setLoading(false)
        } else {
            getCity()
                .then((fetchedCity) => {
                    localStorage.setItem('city', fetchedCity)
                    setCity(fetchedCity)
                })
                .catch((error) => {
                    console.error(error)
                    setCity('Unknown City')
                })
                .finally(() => setLoading(false))
        }
    }, [])

    if (loading) {
        return (
            <div className='mx-2 animate-pulse bg-gray-300 h-3 w-24 rounded-md' />
        )
    }

    return <p className='text-white'>{city}</p>
}
