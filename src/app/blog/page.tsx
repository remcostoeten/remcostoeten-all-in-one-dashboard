import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'

export default function BlogIndex() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )

    return (
        <div className='mx-auto max-w-2xl py-16'>
            <h1 className='mb-8 text-3xl font-bold'>Blog</h1>
            {posts.map((post) => (
                <div key={post._id} className='mb-8'>
                    <h2 className='mb-1 text-xl'>
                        <Link
                            href={post.url}
                            className='text-blue-700 hover:text-blue-900'
                        >
                            {post.title}
                        </Link>
                    </h2>
                    <time
                        dateTime={post.date}
                        className='mb-2 block text-xs text-gray-600'
                    >
                        {format(new Date(post.date), 'LLLL d, yyyy')}
                    </time>
                </div>
            ))}
        </div>
    )
}
