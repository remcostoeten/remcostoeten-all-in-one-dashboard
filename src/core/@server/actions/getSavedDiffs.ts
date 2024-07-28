'use server'

import { db } from '@/core/libs/DB'
import { textComparisonSchema } from '@/core/models/Schema'

export async function fetchSavedDiffsFromAPI() {
    try {
        const diffs = await db.select().from(textComparisonSchema).all()

        return diffs
    } catch (error) {
        console.error('Error fetching saved diffs:', error)
        throw new Error('Could not fetch saved diffs')
    }
}
