'use server'

import { db } from '@/core/libs/DB'
import { messages, chats } from '@/core/models/Schema'
import { eq, sql } from 'drizzle-orm'

export async function getAllChats() {
    try {
        console.log('Fetching chats...')
        const fetchedChats = await db.select().from(chats)

        console.log('Fetched chats:', fetchedChats)
        if (fetchedChats.length === 0) {
            console.log('No chats found')
            return []
        }
        return fetchedChats
    } catch (error) {
        console.error('Error fetching chats:', error)
        throw new Error('Could not fetch chats')
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
