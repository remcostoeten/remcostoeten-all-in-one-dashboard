'use server'

import { db } from '@/core/libs/DB'
import { chats } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'

export async function toggleAdminOnly(chatName: string, adminOnly: boolean) {
    await db
        .update(chats)
        .set({ adminOnly: adminOnly ? true : false })
        .where(eq(chats.name, chatName))
        .run()
}
