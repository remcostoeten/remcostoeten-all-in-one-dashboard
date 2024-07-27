import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'
import { NextResponse } from 'next/server'

export async function GET() {
    const allPosts = await db.select().from(posts).all()

    return NextResponse.json(allPosts)
}

export async function POST(request: Request) {
    const { title, content } = await request.json()
    const newPost = await db
        .insert(posts)
        .values({ title, content })
        .returning()
        .get()

    return NextResponse.json(newPost)
}
