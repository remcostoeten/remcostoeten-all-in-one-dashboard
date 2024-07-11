import { cache } from 'react'

export type ApiResponse<T> = {
  data: T | null
  error: string | null
}

export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { data: null, error: error instanceof Error ? error.message : 'An unknown error occurred' }
  }
}

export const cachedFetchApi = cache(fetchApi) 