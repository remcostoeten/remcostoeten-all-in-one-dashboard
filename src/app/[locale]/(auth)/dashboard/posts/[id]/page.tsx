import { eq, sql } from 'drizzle-orm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'

export default async function PostPage({ params }: { params: { id: string } }) {
    const postId = parseInt(params.id)
    const post = await db.select().from(posts).where(eq(posts.id, postId)).get()

    if (!post) {
        return <div>Post not found</div>
    }

    await db
        .update(posts)
        .set({
            viewCount: sql`${posts.viewCount} + 1`
        })
        .where(eq(posts.id, postId))
        .run()

    const updatedPost = await db
        .select()
        .from(posts)
        .where(eq(posts.id, postId))
        .get()

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>{updatedPost.title}</h1>
            <div
                className='mb-4'
                dangerouslySetInnerHTML={{ __html: updatedPost.content }}
            />
            <p className='text-sm text-gray-500 mb-4'>
                Views: {updatedPost.viewCount}
            </p>
            <Link
                href={
                    updatedPost
                        ? `/dashboard/posts/${updatedPost.id}/edit`
                        : '#'
                }
            >
                <Button variant='outline' className='mr-2'>
                    Edit
                </Button>
            </Link>
            <Link href='/dashboard/posts'>
                <Button variant='outline'>Back to Dashboard</Button>
            </Link>
        </div>
    )
}
