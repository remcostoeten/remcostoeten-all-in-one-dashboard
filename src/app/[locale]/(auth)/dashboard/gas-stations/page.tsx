'use client'

import { useState, useEffect } from 'react'
import { getGasStations } from '@/core/@server/actions/getStations'
import GasStationList from './components/GasStationList'
import { RawDataDisplay } from './components/RawDataDisplay'
import ChatHeader from '@/components/dashboard/guestbook/chat/ChatHeader'
import { createBroadcastChannel } from '@/core/utils/broadcastChannel'
import PageDesign from './PageDesogn'

export default function GasStationsPage() {
    const [city, setCity] = useState('burgum')
    const [fuelType, setFuelType] = useState(0)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const channel = createBroadcastChannel('gasStationsUpdate')

        if (channel) {
            channel.onmessage = (event) => {
                const { city: newCity, fuelType: newFuelType } = event.data
                setCity(newCity)
                setFuelType(newFuelType)
            }
        }

        return () => {
            if (channel) {
                channel.close()
            }
        }
    }, [])

    const fetchGasStations = async (
        cityName: string,
        fuelTypeNumber: number
    ) => {
        try {
            const result = await getGasStations(cityName, fuelTypeNumber)
            setData(result.data)
            setError(result.error)
        } catch (err) {
            setError('An error occurred while fetching data')
            setData(null)
        }
    }

    useEffect(() => {
        fetchGasStations(city, fuelType)
    }, [city, fuelType])

    const handleCitySubmit = (newCity: string) => {
        setCity(newCity)
        const channel = createBroadcastChannel('gasStationsUpdate')
        if (channel) {
            channel.postMessage({ city: newCity, fuelType })
        }
    }

    const handleFuelTypeChange = (newFuelType: number) => {
        setFuelType(newFuelType)
        const channel = createBroadcastChannel('gasStationsUpdate')
        if (channel) {
            channel.postMessage({ city, fuelType: newFuelType })
        }
    }

    if (error) return <div>Error: {error}</div>
    if (!data) return <div>Loading...</div>

    const gasStations = data.gasStations || []

    return (
        <div>
            <PageDesign
                onCitySubmit={handleCitySubmit}
                onFuelTypeChange={handleFuelTypeChange}
            />
            <ChatHeader />
            <h1>Gas Stations in {city}</h1>
            <GasStationList stations={gasStations} />
            <h2>Raw API Response:</h2>
            <RawDataDisplay data={data} />
        </div>
    )
}
