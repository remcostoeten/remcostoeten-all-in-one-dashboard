'use server'

import { db } from '@/core/libs/DB'
import { chats } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'
export async function updateChatVisibility(
    chatName: string,
    adminOnly: boolean
) {
    try {
        console.log('Received request:', { chatName, adminOnly })

        // Validate adminOnly value
        if (typeof adminOnly !== 'boolean') {
            throw new Error('adminOnly value is invalid')
        }

        // Perform the update
        const result = await db
            .update(chats)
            .set({ adminOnly })
            .where(eq(chats.name, chatName))
            .returning()

        if (result.length === 0) {
            console.log('No chat found with name:', chatName)
            return null
        }

        console.log('Updated chat:', result[0])
        return result[0]
    } catch (error) {
        console.error('Error updating chat visibility:', error)
        throw new Error('Could not update chat visibility')
    }
}
