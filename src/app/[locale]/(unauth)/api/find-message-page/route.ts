import { NextResponse } from 'next/server'
import { db } from '@/core/libs/DB'
import { messages } from '@/core/models/Schema'
import { eq, and, sql } from 'drizzle-orm'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const chatName = searchParams.get('chatName')
    const messageId = searchParams.get('messageId')

    if (!chatName || !messageId) {
        return NextResponse.json(
            { error: 'Invalid parameters' },
            { status: 400 }
        )
    }

    try {
        const message = await db
            .select()
            .from(messages)
            .where(
                and(eq(messages.chatName, chatName), eq(messages.id, messageId))
            )
            .limit(1)

        if (message.length === 0) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            )
        }

        // Calculate the page number based on the message's position
        const messageIndex = await db
            .select({ count: sql<number>`count(*)` })
            .from(messages)
            .where(
                and(
                    eq(messages.chatName, chatName),
                    sql`${messages.timestamp} <= ${message[0].timestamp}`
                )
            )
            .then((result) => result[0].count)

        const pageSize = 50 // Make sure this matches your frontend page size
        const page = Math.floor(messageIndex / pageSize) + 1

        return NextResponse.json({ page })
    } catch (error) {
        console.error('Error finding message page:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
