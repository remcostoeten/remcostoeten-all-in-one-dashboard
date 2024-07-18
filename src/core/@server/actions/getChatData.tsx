import fs from 'fs'
import path from 'path'

export function getChatNames() {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const fileNames = fs.readdirSync(chatDirectory)

    return fileNames.map((fileName) => {
        return fileName.replace(/\.json$/, '')
    })
}
