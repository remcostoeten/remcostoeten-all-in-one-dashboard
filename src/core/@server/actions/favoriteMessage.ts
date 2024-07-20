'use server'

import { db } from '../../libs/DB'
import { favoriteMessagesSchema } from '../../models/Schema'

export async function addFavorite(
    messageId: string,
    userId: string,
    chatBetween: string,
    messageContent: string,
    messageTimestamp: string
) {
    try {
        const result = await db
            .insert(favoriteMessagesSchema)
            .values({
                messageId,
                userId,
                chatBetween,
                messageContent,
                messageTimestamp
            })
            .onConflictDoNothing()

        console.log('Favorite added successfully:', result)
        return { success: true, message: 'Favorite added successfully' }
    } catch (error) {
        console.error('Error adding favorite:', error)
        return { success: false, message: 'Failed to add favorite' }
    }
}
