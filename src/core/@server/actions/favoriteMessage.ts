'use server'

import { db } from "../../libs/DB";
import { favoriteMessagesSchema } from "../../models/Schema";

export async function addFavorite(messageId: string, userId: string, chatBetween: string) {
    await db.insert(favoriteMessagesSchema).values({ messageId, chatBetween, userId });
}
