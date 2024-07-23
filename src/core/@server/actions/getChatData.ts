'use server'

import { db } from '@/core/libs/DB'
import { chats, messages } from '@/core/models/Schema'
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

export async function getChatWithMessages(
    name: string,
    page = 1,
    pageSize = 50
) {
    try {
        const chatInfo = await db
            .select()
            .from(chats)
            .where(eq(chats.name, name))
            .limit(1)
            .then(results => results[0])

        if (!chatInfo) {
            return null
        }

        const startIndex = (page - 1) * pageSize

        const totalMessages = await db
            .select({ count: sql<number>`count(*)` })
            .from(messages)
            .where(eq(messages.chatName, name))
            .then(result => result[0].count)

        const messagesData = await db
            .select()
            .from(messages)
            .where(eq(messages.chatName, name))
            .orderBy(sql`${messages.timestamp} DESC`)
            .limit(pageSize)
            .offset(startIndex)

        return {
            ...chatInfo,
            messages: messagesData,
            totalMessages: totalMessages,
            currentPage: page,
            pageSize: pageSize
        }
    } catch (error) {
        console.error(`Error fetching chat data for ${name}:`, error)
        throw new Error('Could not fetch chat data')
    }
}
