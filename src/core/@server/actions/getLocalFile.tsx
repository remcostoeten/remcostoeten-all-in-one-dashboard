"use server"

import { revalidateTag } from 'next/cache'
import { cache } from 'react'

export const GetChatFiles = cache(async (): Promise<string[]> => {
    const response = await fetch(`http://localhost:3000/nl/api/chats`, { next: { tags: ['chats'] } })
    if (!response.ok) {
        throw new Error('Failed to fetch chat files')
    }
    return response.json()
})

export type apiProps = {
    chatId: any
}

export const GetChatFile = cache(async ({ chatId = 'a' }: apiProps) => {
    const response = await fetch(`http://localhost:3000/nl/api/chats/${chatId}`, { next: { tags: [`chat-${chatId}`] } })
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    return response.json()
})

export const getChats = cache(async () => {
    const response = await fetch('http://localhost:3000/api/chats', { next: { tags: ['chats'] } })
    if (!response.ok) {
        throw new Error('Failed to fetch chats')
    }
    return response.json()
})

export const getChatData = cache(async (chatId: string) => {
    const response = await fetch(`http://localhost:3000/api/chats/${chatId}`, { next: { tags: [`chat-${chatId}`] } })
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    return response.json()
})

export async function revalidateChats() {
    revalidateTag('chats')
}

export async function revalidateChat(chatId: string) {
    revalidateTag(`chat-${chatId}`)
}