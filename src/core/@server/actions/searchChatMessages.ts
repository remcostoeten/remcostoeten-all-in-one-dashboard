'use server'

import { db } from '@/core/libs/DB'
import { messages } from '@/core/models/Schema'
import { eq, and, sql } from 'drizzle-orm'

export async function searchChatMessages(
    name: string,
    query: string,
    page = 1,
    pageSize = 50
) {
    try {
        const startIndex = (page - 1) * pageSize

        // Count total matching messages
        const totalCountResult = await db
            .select({ count: sql`count(*)` })
            .from(messages)
            .where(
                and(
                    eq(messages.chatName, name),
                    sql`${messages.content} LIKE '%' || ${query} || '%'`
                )
            )

        const totalMessages = Number(totalCountResult[0].count)

        // Fetch paginated matching messages
        const matchingMessages = await db
            .select()
            .from(messages)
            .where(
                and(
                    eq(messages.chatName, name),
                    sql`${messages.content} LIKE '%' || ${query} || '%'`
                )
            )
            .limit(pageSize)
            .offset(startIndex)
            .orderBy(messages.timestamp)

        return {
            messages: matchingMessages,
            totalMessages: totalMessages,
            currentPage: page,
            pageSize: pageSize,
            totalPages: Math.ceil(totalMessages / pageSize)
        }
    } catch (error) {
        console.error(`Error searching chat messages for ${name}:`, error)
        return {
            messages: [],
            totalMessages: 0,
            currentPage: 1,
            pageSize: pageSize,
            totalPages: 0
        }
    }
}
