'use client'

import Breadcrumbs from '../Breadcrumbs'
import CurrentTime from '@/components/shared/theme/CurrentTime'
import {
    findNearestProvince,
    findNearestContinent
} from '@/core/utils/nearest-geolocation'
import useGeolocation from './B'
import LocationComponent from '../top-bar/LocationComponent'

type LocationDetailsProps = {
    city: string
    value1: number
    value2: number
    image: string
}

function LocationDetails({
    city,
    value1,
    value2,
    image
}: LocationDetailsProps) {
    return (
        <div className='flex gap-2 pr-3 my-auto text-sm text-center text-white text-opacity-80'>
            <img
                loading='lazy'
                src={image}
                alt=''
                className='shrink-0 pr-5 max-w-full aspect-[5.88] w-[116px]'
            />
            <div className='flex gap-1.5 px-2 py-0.5 rounded'>
                <div>{city}</div>
                <div className='flex gap-1'>
                    <div>{value1}</div>
                    <div>{value2}</div>
                </div>
            </div>
        </div>
    )
}

export default function TopNav() {
    const location = useGeolocation()
    let locationName = 'Loading...'

    if (location.loaded && location.coordinates) {
        const nearestProvince = findNearestProvince(
            location.coordinates.lat,
            location.coordinates.lng,
            location.country
        )
        if (nearestProvince && nearestProvince.country === 'NL') {
            locationName = nearestProvince.name
        } else {
            const nearestContinent = findNearestContinent(
                location.coordinates.lat,
                location.coordinates.lng
            )
            locationName = nearestContinent ? nearestContinent.name : 'Unknown'
        }
    }

    return (
        <div className='flex flex-col justify-center whitespace-nowrap bg-gray-900'>
            <section className='flex gap-5 justify-between py-1.5 pl-4 w-full max-md:flex-wrap max-md:max-w-full'>
                <Breadcrumbs />
                <LocationComponent />
                <CurrentTime />
            </section>
        </div>
    )
}
