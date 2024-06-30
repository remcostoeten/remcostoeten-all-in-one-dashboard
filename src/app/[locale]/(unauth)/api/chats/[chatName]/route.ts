import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET(
    request: Request,
    { params }: { params: { chatName: string } }
) {
    try {
        const filePath = path.join(
            process.cwd(),
            'src',
            'core',
            'data',
            'chats',
            `${params.chatName}-chat.json`
        )
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const messages = JSON.parse(fileContent)
        return NextResponse.json({ messages })
    } catch (error) {
        console.error('Error reading chat data:', error)
        return NextResponse.json(
            { error: 'Failed to read chat data' },
            { status: 500 }
        )
    }
}
