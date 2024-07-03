import type { ChatFile } from '@/core/types/chat-types'

const bASE_URL = 'http://localhost:3000/api/chats'

export async function GetChatFiles(): Promise<string[]> {
    const response = await fetch(`http://localhost:3001/nl/api/chats`)
    if (!response.ok) {
        console.log('Failed to fetch chat files')
    }

    return response.json()
}

export async function GetChatData(chatName: string): Promise<ChatFile> {
    const response = await fetch(`${bASE_URL}/api/chats/${chatName}`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    const data = await response.json()
    return { name: chatName, messages: data.messages }
}
