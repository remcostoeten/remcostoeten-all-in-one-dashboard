import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../../core/libs/DB'
import { favoriteMessagesSchema } from '../../../../../core/models/Schema'
import { json } from 'stream/consumers'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { messageId, userId, chatBetween } = req.body

    if (req.method === 'POST') {
        await db
            .insert(favoriteMessagesSchema)
            .values({ messageId, userId, chatBetween })
        res.status(200).json({ message: 'Message favorited' })
    } else if (req.method === 'DELETE') {
        await db.delete(favoriteMessagesSchema).where({ messageId, userId })
        res.status(200).json({ message: 'Message unfavorited' })
    } else {
        res.setHeader('Allow', ['POST', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
