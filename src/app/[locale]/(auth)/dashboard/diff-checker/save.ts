'use server'

import { db } from '@/core/libs/DB'
import { textComparisonSchema } from '@/core/models/Schema'
import router from 'next/navigation'

export const handleSave = async (
    listA: string[],
    listB: string[],
    results: any
) => {
    try {
        await db.insert(textComparisonSchema).values({
            listA,
            listB,
            result: JSON.stringify(results)
        })
        router.push('/dashboard/diff-checker/overview')
    } catch (error) {
        console.error('Error saving comparison:', error)
    }
}
