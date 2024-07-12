'use server'

import fetchGasStations from '@/core/utils/api'

export async function getGasStations(
    addressInformation: string = 'Lemmer',
    fuelType: number = 2,
    range: number = 10, // Reduced range to 50 km
    sorting: number = 1
) {
    return fetchGasStations(addressInformation, fuelType, range, sorting)
}
1
