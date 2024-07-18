import fs from 'fs/promises'
import path from 'path'

export async function getChatNames() {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const fileNames = await fs.readdir(chatDirectory)

    return fileNames.map((fileName) => fileName.replace(/\.json$/, ''))
}

export async function getChatData(name: string) {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const filePath = path.join(chatDirectory, `${name}.json`)

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(fileContent)
    } catch (error) {
        console.error(`Error reading chat file for ${name}:`, error)
        return null
    }
}
