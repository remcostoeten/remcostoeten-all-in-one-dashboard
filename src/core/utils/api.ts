type ApiResponse<T> = {
  data: T | null
  error: string | null
}

const API_BASE_URL = process.env.API_BASE_URL

export default async function fetchGasStations(
  addressInformation: string = '',
  fuelType: number = 2,
  range: number = 200,
  sorting: number = 1
): Promise<ApiResponse<any>> {
  const params = new URLSearchParams({
      v: '61',
      fuelType: fuelType.toString(),
      range: range.toString(),
      sorting: sorting.toString()
  })

  if (addressInformation) {
      params.append('addressInformation', addressInformation)
  }

  const API_URL = `${API_BASE_URL}?${params.toString()}`

  try {
      const response = await fetch(API_URL)
      if (!response.ok) {
          throw new Error('Failed to fetch data')
      }
      const rawData = await response.json()
      return { data: rawData, error: null }
  } catch (error) {
      console.error('Error fetching gas stations:', error)
      return {
          data: null,
          error:
              error instanceof Error
                  ? error.message
                  : 'An unknown error occurred'
      }
  }
}
