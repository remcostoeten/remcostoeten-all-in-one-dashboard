import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const chatName = searchParams.get('chatName')
    const messageId = searchParams.get('messageId')

    if (!chatName || !messageId) {
        return NextResponse.json({ error: 'Missing chatName or messageId' }, { status: 400 })
    }

    try {
        const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
        const filePath = path.join(chatDirectory, `${chatName}.json`)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const chatData = JSON.parse(fileContent)

        const messageIndex = chatData.messages.findIndex((msg: any) => msg.id === messageId)
        if (messageIndex === -1) {
            return NextResponse.json({ error: 'Message not found' }, { status: 404 })
        }

        const page = Math.floor(messageIndex / 50) + 1 // Assuming 50 messages per page

        return NextResponse.json({ page })
    } catch (error) {
        console.error('Error finding message page:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
