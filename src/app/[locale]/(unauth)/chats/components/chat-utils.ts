import type { ChatFile, ChatMessage } from '@/core/types/chat-types'
import { useLocale } from 'next-intl'

export async function getChatFiles(): Promise<string[]> {
    const locale = useLocale()

    const response = await fetch(`/${locale}/api/chats`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat files')
    }
    return response.json()
}

export async function getChatData(chatName: string): Promise<ChatFile> {
    const locale = useLocale()

    // Assuming your API supports fetching chat data based on chatName and locale
    const response = await fetch(`/${locale}/api/chats/${chatName}`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    const data = await response.json()
    return { name: chatName, messages: data.messages }
}
