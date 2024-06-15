'use client'

import CurrentTime from '@/components/shared/theme/CurrentTime'
import {
    findNearestProvince,
    findNearestContinent
} from '@/core/utils/nearest-geolocation'
import useGeolocation from './B'

type BadgeProps = {
    floor: string
    section: string
    image1: string
    image2: string
}

function Badge({ floor, section, image1, image2 }: BadgeProps) {
    return (
        <div className='flex gap-2 py-1 pr-1.5 pl-2.5 text-xs leading-5 rounded bg-white bg-opacity-10'>
            <div className='font-medium text-white text-opacity-80'>Floor</div>
            <div className='font-bold text-white'>{section}</div>
            <img
                loading='lazy'
                src={image1}
                alt=''
                className='shrink-0 self-start w-4 aspect-square'
            />
            <img
                loading='lazy'
                src={image2}
                alt=''
                className='shrink-0 self-start w-4 aspect-square'
            />
        </div>
    )
}

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
            location?.country
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
                <Badge
                    floor='Main'
                    section='Main'
                    image1='https://cdn.builder.io/api/v1/image/assets/TEMP/828c261ec06fbecf94eb0d92ded27597a868c7b614fa65d4f5ca7598f19cffee?apiKey=2a72745ec00444ad9fe2bd2391d98932&'
                    image2='https://cdn.builder.io/api/v1/image/assets/TEMP/62f9ce4b36c58c62e4839c442bfbff32a6ed7c8e912b38a61d35e153c6055d1d?apiKey=2a72745ec00444ad9fe2bd2391d98932&'
                />
                <LocationDetails
                    city={locationName}
                    value1={23}
                    value2={10}
                    image='https://cdn.builder.io/api/v1/image/assets/TEMP/8cf930bd3e48320300e0988eb5934fdb8813ef1b11fc2472f91ed62ce47ad807?apiKey=2a72745ec00444ad9fe2bd2391d98932&'
                />
                <CurrentTime />
            </section>
        </div>
    )
}
