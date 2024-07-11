import { getGasStations } from '@/core/@server/actions/getStations'
import GasStationList from './components/GasStationList'
import { RawDataDisplay } from './components/RawDataDisplay'  
export default async function GasStationsPage() {
  const { data, error } = await getGasStations('Lemmer')

  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No data available</div>

  const gasStations = data.gasStations || []

  return (
    <div>
      <h1>Gas Stations</h1>
      <GasStationList stations={gasStations} />
      <h2>Raw API Response:</h2>
      <RawDataDisplay data={data} />
    </div>
  )
}