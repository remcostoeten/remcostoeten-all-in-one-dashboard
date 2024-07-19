import fs from 'fs/promises'
import path from 'path'

export async function getChatData(name: string, page = 1, pageSize = 50) {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const filePath = path.join(chatDirectory, `${name}.json`)
    try {
        console.log(`Attempting to read file: ${filePath}`)
        console.log(`Page: ${page}, PageSize: ${pageSize}`)

        const fileContent = await fs.readFile(filePath, 'utf-8')
        const fullData = JSON.parse(fileContent)
        const startIndex = (page - 1) * pageSize
        const endIndex = startIndex + pageSize

        console.log(`Start Index: ${startIndex}, End Index: ${endIndex}`)

        if (startIndex >= fullData.messages.length) {
            console.log('Page out of bounds')
            return null
        }

        const paginatedMessages = fullData.messages.slice(startIndex, endIndex)
        return {
            ...fullData,
            messages: paginatedMessages,
            totalMessages: fullData.messages.length,
            currentPage: page,
            pageSize: pageSize
        }
    } catch (error) {
        console.error(`Error reading chat file for ${name}:`, error)
        return null
    }
}
