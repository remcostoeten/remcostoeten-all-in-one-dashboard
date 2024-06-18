   'use server'

   import { promises as fs } from 'fs'
   import path from 'path'

   const cacheFilePath = path.join(__dirname, 'locationCache.json')
   const cacheDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

   export async function getUserLocation() {
       try {
           const cacheRaw = await fs.readFile(cacheFilePath, 'utf8')
           const cache = JSON.parse(cacheRaw)

           if (new Date().getTime() - cache.timestamp < cacheDuration) {
               return cache.data
           }
       } catch (error) {
           // If there's an error reading the cache, proceed to fetch new data
       }

       try {
           const response = await fetch('https://ipapi.co/json/')
           if (!response.ok) {
               console.error('Failed to fetch location data')
               return { error: 'Failed to fetch location data' }
           }
           const data = await response.json()

           const cache = {
               timestamp: new Date().getTime(),
               data: data
           }
           await fs.writeFile(cacheFilePath, JSON.stringify(cache), 'utf8')

           return data
       } catch (error) {
           console.error('An unexpected error occurred:', error)
           return { error: 'An unexpected error occurred' }
       }
   }