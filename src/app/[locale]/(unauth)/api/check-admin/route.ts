import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db } from '@/core/libs/DB'
import { usersSchema } from '@/core/models/Schema'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
    try {
        const { userId } = auth()

        console.log('Authenticated userId:', userId)

        if (!userId) {
            return NextResponse.json({ isAdmin: false }, { status: 401 })
        }

        const users = await db
            .select()
            .from(usersSchema)
            .where(eq(usersSchema.id, userId))

        console.log('Database query result:', users)

        const user = users[0]
        const isAdmin = user?.isAdmin === true

        console.log('Is admin:', isAdmin)

        return NextResponse.json({ isAdmin })
    } catch (error) {
        console.error('Detailed error in check-admin route:', error)
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        )
    }
}
