'use server'

import fs from 'fs/promises'
import path from 'path'

export async function searchChatMessages(
    name: string,
    query: string,
    page = 1,
    pageSize = 50
) {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const filePath = path.join(chatDirectory, `${name}.json`)

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const fullData = JSON.parse(fileContent)

        const matchingMessages = fullData.messages.filter((message) =>
            message.content.toLowerCase().includes(query.toLowerCase())
        )

        const startIndex = (page - 1) * pageSize
        const endIndex = startIndex + pageSize

        const paginatedMessages = matchingMessages.slice(startIndex, endIndex)

        return {
            messages: paginatedMessages,
            totalMessages: matchingMessages.length,
            currentPage: page,
            pageSize: pageSize,
            totalPages: Math.ceil(matchingMessages.length / pageSize)
        }
    } catch (error) {
        console.error(`Error searching chat file for ${name}:`, error)
        return {
            messages: [],
            totalMessages: 0,
            currentPage: 1,
            pageSize: pageSize,
            totalPages: 0
        }
    }
}
