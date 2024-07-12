'use client'

import { useState, useEffect } from 'react'
import { getGasStations } from '@/core/@server/actions/getStations'
import GasStationList from './components/GasStationList'
import { RawDataDisplay } from './components/RawDataDisplay'
import ChatHeader from '@/components/dashboard/guestbook/chat/ChatHeader'
import PageDesign from './PageDesogn'

export default function GasStationsPage() {
  const [city, setCity] = useState('burgum')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchGasStations = async (cityName: string) => {
    try {
      const result = await getGasStations(cityName)
      setData(result.data)
      setError(result.error)
    } catch (err) {
      setError('An error occurred while fetching data')
      setData(null)
    }
  }

  useEffect(() => {
    fetchGasStations(city)
  }, [city])

  const handleCitySubmit = (newCity: string) => {
    setCity(newCity)
  }

  if (error) return <div>Error: {error}</div>
  if (!data) return <div>Loading...</div>

  const gasStations = data.gasStations || []

  return (
    <div>
      <PageDesign onCitySubmit={handleCitySubmit} />
      <ChatHeader />
      <h1>Gas Stations in {city}</h1>
      <GasStationList stations={gasStations} />
      <h2>Raw API Response:</h2>
      <RawDataDisplay data={data} />
    </div>
  )
}