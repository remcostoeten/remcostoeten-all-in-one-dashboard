// src/utils/getLocationByIP.ts
interface LocationData {
    city: string
    region: string
    country: string
    loc: string // latitude and longitude
}
const token = process.env.IPINFO_TOKEN
export const getLocationByIP = async (): Promise<LocationData | null> => {
    try {
        const response = await fetch(`https://ipinfo.io/json?token=${token}`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data: LocationData = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching location by IP:', error)
        return null
    }
}
