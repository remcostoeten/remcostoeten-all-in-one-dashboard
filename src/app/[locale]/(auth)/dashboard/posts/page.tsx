import { Button } from '@/components/ui'
import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'
import Link from 'next/link'
import PostList from './components/PostList'

export default async function Home() {
    try {
        const allPosts = await db.select().from(posts).all()

        console.log('Fetched posts:', allPosts) // For debugging

        return (
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-bold mb-4'>Blog Posts</h1>
                <Link href='/dashboard/posts/create'>
                    <Button className='mb-4'>Create New Post</Button>
                </Link>
                {allPosts.length === 0 ? (
                    <p className='text-lg text-gray-600'>
                        No blogs found. Create your first post!
                    </p>
                ) : (
                    <PostList posts={allPosts} />
                )}
            </div>
        )
    } catch (error) {
        console.error('Error fetching posts:', error)
        return <p>Error loading posts. Please try again.</p>
    }
}
