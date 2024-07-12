export type GasStation = {
    name: string
    fuel: {
        fuelPrice: number
        lastUpdated: string
    }
    location: {
        address: {
            city: string
            province: string
        }
        coordinates: {
            latitude: number
            longitude: number
        }
    }
}
