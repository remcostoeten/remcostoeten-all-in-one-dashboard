import { NextResponse } from 'next/server'
import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const post = await db
        .select()
        .from(posts)
        .where(eq(posts.id, parseInt(params.id)))
        .get()

    return NextResponse.json(post)
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { title, content } = await request.json()
    const updatedPost = await db
        .update(posts)
        .set({ title, content })
        .where(eq(posts.id, parseInt(params.id)))
        .returning()
        .get()

    return NextResponse.json(updatedPost)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    await db
        .delete(posts)
        .where(eq(posts.id, parseInt(params.id)))
        .run()
    return NextResponse.json({ message: 'Post deleted' })
}
