import { provinces, countries, type Province } from '@/core/data/world-long-lat'

type Continent = {
    name: string
    lat: number
    lng: number
}

export const continents: Continent[] = [
    { name: 'Africa', lat: 1.6508, lng: 10.2679 },
    { name: 'Antarctica', lat: -82.8628, lng: 135.0 },
    { name: 'Asia', lat: 34.0479, lng: 100.6197 },
    { name: 'Europe', lat: 54.526, lng: 15.2551 },
    { name: 'North America', lat: 54.526, lng: -105.2551 },
    { name: 'Australia', lat: -25.2744, lng: 133.7751 },
    { name: 'South America', lat: -8.7832, lng: -55.4915 }
]

const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
) => {
    const toRad = (value: number) => (value * Math.PI) / 180
    const R = 6371
    const dLat = toRad(lat2 - lat1)
    const dLng = toRad(lat2 - lng1)
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
}

export const findNearestContinent = (
    lat: number,
    lng: number
): Continent | null => {
    let nearestContinent: Continent | null = null
    let minDistance = Infinity

    for (const continent of continents) {
        const distance = getDistance(lat, lng, continent.lat, continent.lng)
        if (distance < minDistance) {
            minDistance = distance
            nearestContinent = continent
        }
    }

    return nearestContinent
}

export const findNearestCountry = (
    lat: number,
    lng: number,
    continent: Continent
): Province | null => {
    let nearestCountry: Province | null = null
    let minDistance = Infinity

    for (const country of countries) {
        const distance = getDistance(lat, lng, country.lat, country.lng)
        if (distance < minDistance) {
            minDistance = distance
            nearestCountry = country
        }
    }

    return nearestCountry
}

export const findNearestProvince = (
    lat: number,
    lng: number,
    country: Province
): Province | null => {
    let nearestProvince: Province | null = null
    let minDistance = Infinity

    for (const province of provinces) {
        if (province.country === country?.country) {
            const distance = getDistance(lat, lng, province.lat, province.lng)
            if (distance < minDistance) {
                minDistance = distance
                nearestProvince = province
            }
        }
    }

    return nearestProvince
}

export const findNearestLocation = (
    lat: number,
    lng: number
): {
    continent: Continent | null
    country: Province | null
    province: Province | null
} => {
    const nearestContinent = findNearestContinent(lat, lng)
    if (!nearestContinent) {
        return { continent: null, country: null, province: null }
    }

    const nearestCountry = findNearestCountry(lat, lng, nearestContinent)
    if (!nearestCountry) {
        return { continent: nearestContinent, country: null, province: null }
    }

    const nearestProvince = findNearestProvince(lat, lng, nearestCountry)
    return {
        continent: nearestContinent,
        country: nearestCountry,
        province: nearestProvince
    }
}
