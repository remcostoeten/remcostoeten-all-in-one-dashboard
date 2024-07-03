import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
    try {
        const chatsDir = path.join(
            process.cwd(),
            'src',
            'core',
            'data',
            'chats'
        )
        const files = await fs.readdir(chatsDir)
        const chatFiles = files.filter((file) => file.endsWith('-chat.json'))
        return NextResponse.json(chatFiles)
    } catch (error) {
        console.error('Error reading chat files:', error)
        return NextResponse.json({ error: 'Failed to read chat files' })
    }
}
