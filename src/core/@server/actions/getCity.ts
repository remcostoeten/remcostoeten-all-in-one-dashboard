import { cache } from 'react'

export const getCity = cache(async () => {
    try {
        const response = await fetch('https://ipapi.co/json')
        if (!response.ok) {
            throw new Error('Failed to fetch city data')
        }
        const data = await response.json()
        return data.city || 'Unknown City'
    } catch (error) {
        console.error(error)
        return 'Unknown City'
    }
})
