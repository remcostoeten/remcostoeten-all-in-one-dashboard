'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PostForm from '../components/PostForm'

export default function CreatePost() {
    const router = useRouter()
    const [error, setError] = useState('')

    const handleSubmit = async (postData) => {
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            })

            if (response.ok) {
                const newPost = await response.json()

                router.push(`/dashboard/posts/${newPost.id}`)
            } else {
                setError('Failed to create post')
            }
        } catch (error) {
            setError('An error occurred')
        }
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Create New Post</h1>
            {error && <p className='text-red-500 mb-4'>{error}</p>}
            <PostForm onSubmit={handleSubmit} />
        </div>
    )
}
