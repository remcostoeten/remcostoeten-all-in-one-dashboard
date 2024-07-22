'use server'

import { db } from '@/core/libs/DB'
import { messages } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'

export async function updateFavorite(messageId: string, isFavourited: boolean) {
    try {
        const result = await db
            .update(messages)
            .set({ isFavourited: isFavourited ? true : false })
            .where(eq(messages.id, messageId))
            .run()

        console.log('Favorite updated successfully:', result)
        return { success: true, message: 'Favorite updated successfully' }
    } catch (error) {
        console.error('Error updating favorite:', error)
        return { success: false, message: 'Failed to update favorite' }
    }
}
