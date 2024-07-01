"use server"

import { revalidateTag } from 'next/cache'

export async function GetChatFiles(): Promise<string[]> {
    const response = await fetch(`http://localhost:3000/nl/api/chats`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat files')
    }
    revalidateTag('chats')
    return response.json()
}

export type apiProps = {
    chatId: any
}

export async function GetChatFile({ chatId = 'a' }: apiProps) {
    const response = await fetch(`http://localhost:3000/nl/api/chats/${chatId}`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    const data = await response.json()
}



export async function getChats() {
    const response = await fetch('http://localhost:3000/api/chats')
    if (!response.ok) {
        throw new Error('Failed to fetch chats')
    }
    return response.json()
}

export async function getChatData(chatId: string) {
    const response = await fetch(`http://localhost:3000/api/chats/${chatId}`)
    if (!response.ok) {
        throw new Error('Failed to fetch chat data')
    }
    return response.json()
}