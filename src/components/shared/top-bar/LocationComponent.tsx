'use client'

import { useEffect, useState } from 'react'
import { provinces, countries, continents } from '@/core/data/world-long-lat'

interface Location {
    name: string
    lat: number
    lng: number
}

const LocationComponent = () => {
    const [location, setLocation] = useState<string>('Loading...')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                const continent = continents.find(
                    (cont) =>
                        Math.abs(cont.lat - latitude) +
                            Math.abs(cont.lng - longitude) <
                        15
                )
                if (continent) {
                    setLocation(continent.name)
                    if (continent.name === 'Europe') {
                        const country = countries.find(
                            (c) =>
                                Math.abs(c.lat - latitude) +
                                    Math.abs(c.lng - longitude) <
                                10
                        )
                        if (country) {
                            setLocation(country.name)
                            if (country.country === 'NL') {
                                const province = provinces.find(
                                    (p) =>
                                        Math.abs(p.lat - latitude) +
                                            Math.abs(p.lng - longitude) <
                                        1
                                )
                                if (province) {
                                    setLocation(province.name)
                                }
                            }
                        }
                    }
                }
            },
            (error) => {
                setLocation('Location access denied.')
            }
        )
    }, [])

    return (
        <div>
            <h1>Your Location: {location}</h1>
        </div>
    )
}

export default LocationComponent
