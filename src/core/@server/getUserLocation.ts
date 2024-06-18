'use server'

import path from 'path'
import fs from 'fs'

export async function getUserLocation() {
    const filePath = path.join(__dirname, 'locationCache.json')
    console.log('Attempting to read locationCache.json from:', filePath)

    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        console.log('locationCache.json data:', data)
        const location = JSON.parse(data)
        return location
    } catch (error) {
        console.error('Error reading locationCache.json:', error)
        return { error: 'An unexpected error occurred' }
    }
}
