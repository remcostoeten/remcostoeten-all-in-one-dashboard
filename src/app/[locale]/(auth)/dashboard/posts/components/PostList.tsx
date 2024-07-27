'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function PostList({ posts }: { posts: any[] }) {
    const currentUrl = usePathname()

    console.log(currentUrl)

    if (!posts || posts.length === 0) {
        return <p>No posts available.</p>
    }

    return (
        <ul className='space-y-4'>
            {posts.map(post => (
                <li key={post.id} className='border p-4 rounded'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p className='mt-2'>{post.content.substring(0, 100)}...</p>
                    <p className='text-sm text-gray-500 mt-2'>
                        Views: {post.viewCount}
                    </p>
                    <div className='mt-4 space-x-2'>
                        <Link href={`/dashboard/posts/${post.id}`}>
                            <Button variant='outline'>View</Button>
                        </Link>
                        <Link href={`dashboard/posts/${post.id}/edit`}>
                            <Button variant='outline'>Edit</Button>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
