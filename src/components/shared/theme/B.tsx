'use client'

import { useState, useEffect } from 'react'

interface GeolocationState {
    country: string | null // Assuming country is a string. Adjust as necessary.
    loaded: boolean
    coordinates?: {
        lat: number
        lng: number
    }
    error?: GeolocationPositionError // Use the built-in type for clarity.
}

const useGeolocation = () => {
    const [location, setLocation] = useState<GeolocationState>({
        country: null, // Initialize country as null or as appropriate.
        loaded: false,
        coordinates: { lat: 0, lng: 0 }
    })

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            country: null, // Update this based on how you determine the country.
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error: GeolocationPositionError) => {
        setLocation({
            country: null, // Maintain consistency in state structure.
            loaded: true,
            error
        })
    }

    useEffect(() => {
        ;(async () => {
            if (!('geolocation' in navigator)) {
                onError(
                    new GeolocationPositionError(0, 'Geolocation not supported')
                )
                return
            }

            let permissionStatus
            try {
                permissionStatus = await navigator.permissions.query({
                    name: 'geolocation'
                })
            } catch (e) {
                // Permissions API is not supported.
                navigator.geolocation.getCurrentPosition(onSuccess, onError)
                return
            }

            if (
                permissionStatus.state === 'granted' ||
                permissionStatus.state === 'prompt'
            ) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError)
            } else {
                onError(new GeolocationPositionError(1, 'Permission denied'))
            }
        })()
    }, [])

    return location
}

export default useGeolocation
