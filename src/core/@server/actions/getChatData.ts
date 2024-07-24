'use server'

import { db } from '@/core/libs/DB'
import { chats, messages } from '@/core/models/Schema'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { eq, isNull, or, sql } from 'drizzle-orm'

export async function getAllChats() {
    try {
        console.log('Fetching chats...')
        const { userId } = auth()
        const isAdmin = await.db()        
        if (!userId) {
            throw new Error('Not authenticated')
        }

        const user = await clerkClient.users.getUser(userId)
        const isAdmin = user.publicMetadata.isAdmin === true

        let query = db.select().from(chats)

        if (!isAdmin) {
            query = query.where(
                or(eq(chats.adminOnly, 0), isNull(chats.adminOnly))
            )
        }

        const fetchedChats = await query

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
    console.time('getChatWithMessages')
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
            .orderBy(sql`${messages.timestamp} ASC`)
            .limit(pageSize)
            .offset(startIndex)

        console.log(`Fetched ${messagesData.length} messages for chat ${name}`)

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
    } finally {
        console.timeEnd('getChatWithMessages')
    }
}
