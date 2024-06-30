import type { ChatFile } from '@/core/types/chat-types'

export async function GetChatFiles(): Promise<string[]> {
    const response = await fetch(`/api/chats`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat files')
    }
    return response.json()
}

export async function GetChatData(chatName: string): Promise<ChatFile> {
    const response = await fetch(`/api/chats/${chatName}`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    const data = await response.json()
    return { name: chatName, messages: data.messages }
}
