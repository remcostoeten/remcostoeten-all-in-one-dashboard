'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PostForm from '../../components/PostForm'

export default function EditPost({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [post, setPost] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/api/posts/${params.id}`)
            .then((res) => res.json())
            .then(setPost)
            .catch(() => setError('Failed to load post'))
    }, [params.id])

    const handleSubmit = async (postData) => {
        try {
            const response = await fetch(`/api/posts/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            })

            if (response.ok) {
                router.push(`/dashboard/posts/${params.id}`)
            } else {
                setError('Failed to update post')
            }
        } catch (error) {
            setError('An error occurred')
        }
    }

    if (error) return <div>{error}</div>
    if (!post) return <div>Loading...</div>

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Edit Post</h1>
            <PostForm post={post} onSubmit={handleSubmit} />
        </div>
    )
}
