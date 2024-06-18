import { cookies } from 'next/headers'

const CACHE_KEY = 'userLocation'
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

const fetchUserLocation = async () => {
    const cookieStore = cookies()
    const cachedData = cookieStore.get(CACHE_KEY)

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData.value)
        if (Date.now() - timestamp < CACHE_EXPIRY) {
            return data
        }
    }

    try {
        const response = await fetch('https://ipapi.co/json/')
        if (!response.ok) {
            throw new Error('Failed to fetch location data')
        }
        const data = await response.json()
        cookieStore.set(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() }),
            {
                maxAge: CACHE_EXPIRY / 1000
            }
        )
        return data
    } catch (error) {
        console.error('Failed to fetch location data:', error)
        return null
    }
}

export default fetchUserLocation
