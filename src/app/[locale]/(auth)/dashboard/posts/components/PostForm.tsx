'use client'

import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Editor from '@/components/editor/advanced-editor'
import { defaultValue } from '@/app/default-value'
import { JSONContent } from 'novel'

type PostFormProps = {
    post?: {
        title: string
        content: string
    }
    onSubmit: (postData: { title: string; content: string }) => void
}

export default function PostForm({ post, onSubmit }: PostFormProps) {
    const [title, setTitle] = useState(post?.title || '')
    const [content, setContent] = useState(post?.content || '')

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ title, content })
    }
    const [value, setValue] = useState<JSONContent>(defaultValue)

    useCallback(debounce(setValue, 300), [])

    let parsedContent: JSONContent

    try {
        parsedContent = JSON.parse(content)
    } catch (error) {
        parsedContent = defaultValue
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Title'
            />
            <Editor
                value={parsedContent}
                onChange={(value: JSONContent) =>
                    setContent(JSON.stringify(value))
                }
            />
            <Button type='submit'>{post ? 'Update' : 'Create'} Post</Button>
        </form>
    )
}

function debounce<T>(fn: (arg: T) => void, delay: number): (arg: T) => void {
    let timer: NodeJS.Timeout | null = null

    return function (arg: T) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn(arg)
            timer = null
        }, delay)
    }
}
