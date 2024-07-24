import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db } from '@/core/libs/DB'
import { chats } from '@/core/models/Schema'

export async function POST(req: NextRequest) {
    const { chatName, adminOnly } = await req.json()

    console.log('Received request:', { chatName, adminOnly })

    try {
        // Check if the chat exists
        const existingChat = await db
            .select()
            .from(chats)
            .where(eq(chats.name, chatName))
            .first()

        console.log('Existing chat:', existingChat)

        if (!existingChat) {
            return NextResponse.json(
                { error: 'Chat not found' },
                { status: 404 }
            )
        }

        // Perform the update
        const result = await db
            .update(chats)
            .set({ adminOnly })
            .where(eq(chats.name, chatName))

        console.log('Update result:', result)

        if (result.rowsAffected === 0) {
            return NextResponse.json(
                { error: 'No rows updated' },
                { status: 400 }
            )
        }

        return NextResponse.json({
            message: 'Chat visibility updated successfully'
        })
    } catch (error) {
        console.error('Error updating chat visibility:', error)
        return NextResponse.json(
            { error: 'Failed to update chat visibility' },
            { status: 500 }
        )
    }
}
