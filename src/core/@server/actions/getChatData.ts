'use server'

import { db } from '@/core/libs/DB'
import { messages, chats } from '@/core/models/Schema'
import { eq, and, gte, lte, sql } from 'drizzle-orm'

export async function getAllChats() {
    try {
        const allChats = await db.select({ name: chats.name }).from(chats)

        return allChats.map((chat) => chat.name)
    } catch (error) {
        console.error('Error fetching all chats:', error)
        return []
    }
}

export async function getChatData(name: string, page = 1, pageSize = 50) {
    try {
        const startIndex = (page - 1) * pageSize

        const chatData = await db
            .select()
            .from(chats)
            .where(eq(chats.name, name))
            .limit(1)

        if (chatData.length === 0) {
            return null
        }

        const totalMessages = await db
            .select({ count: sql`count(*)` })
            .from(messages)
            .where(eq(messages.chatName, name))

        const messagesData = await db
            .select()
            .from(messages)
            .where(eq(messages.chatName, name))
            .orderBy(messages.timestamp)
            .limit(pageSize)
            .offset(startIndex)

        return {
            ...chatData[0],
            messages: messagesData,
            totalMessages: totalMessages[0].count,
            currentPage: page,
            pageSize: pageSize
        }
    } catch (error) {
        console.error(`Error fetching chat data for ${name}:`, error)
        return null
    }
}
