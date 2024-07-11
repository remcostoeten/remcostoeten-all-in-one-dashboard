import { eq, sql } from 'drizzle-orm'
import { NextResponse } from 'next/server'

import { db } from '@/core/libs/DB'
import { guestbookSchema } from '@/core/models/Schema'
import {
    DeleteGuestbookValidation,
    EditGuestbookValidation,
    GuestbookValidation
} from '@/core/validations/GuestbookValidation'

export const POST = async (request: Request) => {
    const json = await request.json()
    const parse = GuestbookValidation.safeParse(json)

    if (!parse.success) {
        return NextResponse.json(parse.error.format(), { status: 422 })
    }

    try {
        const guestbook = await db
            .insert(guestbookSchema)
            // @ts-ignore
            .values(parse.data)
            .returning()

        return NextResponse.json({
            id: guestbook[0]?.id
        })
    } catch (error) {

        return NextResponse.json({}, { status: 500 })
    }
}

export const PUT = async (request: Request) => {
    const json = await request.json()
    const parse = EditGuestbookValidation.safeParse(json)

    if (!parse.success) {
        return NextResponse.json(parse.error.format(), { status: 422 })
    }

    try {
        await db
            .update(guestbookSchema)
            .set({
                ...parse.data,
                updatedAt: sql`(strftime('%s', 'now'))`
            })
            .where(eq(guestbookSchema.id, parse.data.id))
            .run()


        return NextResponse.json({})
    } catch (error) {

        return NextResponse.json({}, { status: 500 })
    }
}

export const DELETE = async (request: Request) => {
    const json = await request.json()
    const parse = DeleteGuestbookValidation.safeParse(json)

    if (!parse.success) {
        return NextResponse.json(parse.error.format(), { status: 422 })
    }

    try {
        await db
            .delete(guestbookSchema)
            .where(eq(guestbookSchema.id, parse.data.id))
            .run()


        return NextResponse.json({})
    } catch (error) {

        return NextResponse.json({}, { status: 500 })
    }
}
