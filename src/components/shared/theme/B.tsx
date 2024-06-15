import { useState, useEffect } from 'react'

interface GeolocationState {
    country: any
    loaded: boolean
    coordinates?: {
        lat: number
        lng: number
    }
    error?: {
        code: number
        message: string
    }
}

const useGeolocation = () => {
    const [location, setLocation] = useState<GeolocationState>({
        loaded: false,
        coordinates: { lat: 0, lng: 0 }
    })

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error: GeolocationPositionError) => {
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            } as GeolocationPositionError)
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location
}

export default useGeolocation
