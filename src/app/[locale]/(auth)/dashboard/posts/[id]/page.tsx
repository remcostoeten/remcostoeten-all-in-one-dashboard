import { eq } from 'drizzle-orm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await db
        .select()
        .from(posts)
        .where(eq(posts.id, parseInt(params.id)))
        .get()

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
            <div
                className='mb-4'
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <p className='text-sm text-gray-500 mb-4'>
                Views: {post.viewCount}
            </p>
            <Link href={`/dashboard/posts/${post.id}/edit`}>
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
