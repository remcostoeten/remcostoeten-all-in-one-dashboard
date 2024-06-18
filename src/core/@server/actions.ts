'use server'
import { promises as fs } from 'fs'
import path from 'path'

// Define a path for the cache file
const cacheFilePath = path.join(__dirname, 'locationCache.json')
const cacheDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export async function getUserLocation() {
    try {
        // Try to read the cache file
        const cacheRaw = await fs.readFile(cacheFilePath, 'utf8')
        const cache = JSON.parse(cacheRaw)

        // Check if the cache is still valid
        if (new Date().getTime() - cache.timestamp < cacheDuration) {
            return cache.data // Return cached data if it's still fresh
        }
    } catch (error) {
        // If there's an error reading the cache, proceed to fetch new data
    }

    try {
        // Fetch new data if cache is expired or not found
        const response = await fetch('https://ipapi.co/json/')
        if (!response.ok) {
            // Instead of throwing, return a default value or specific error object
            console.error('Failed to fetch location data')
            return { error: 'Failed to fetch location data' }
        }
        const data = await response.json()

        // Update the cache with the new data
        const cache = {
            timestamp: new Date().getTime(),
            data: data
        }
        await fs.writeFile(cacheFilePath, JSON.stringify(cache), 'utf8')

        return data
    } catch (error) {
        // Handle any unexpected errors during fetch or cache update
        console.error('An unexpected error occurred:', error)
        return { error: 'An unexpected error occurred' }
    }
}
