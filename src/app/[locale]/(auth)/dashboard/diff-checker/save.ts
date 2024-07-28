'use server'

import { db } from '@/core/libs/DB'
import { textComparisonSchema } from '@/core/models/Schema'
import { redirect } from 'next/navigation'

export const handleSave = async (
    listA: string,
    listB: string,
    results: any,
    title: string
) => {
    try {
        await db.insert(textComparisonSchema).values({
            title,
            listA,
            listB,
            result: JSON.stringify(results)
        })
        redirect('/dashboard/diff-checker/overview')
    } catch (error) {
        console.error('Error saving comparison:', error)
        throw error // Rethrow error to be caught by the caller
    }
}
