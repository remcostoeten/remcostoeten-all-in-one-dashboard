'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '@/core/@server/actions/posts'
import NoteEditor from '../components/NoteEditor'

export default function NotePage({ params }: { params: { id: string } }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (params.id !== 'new') {
            getNoteById(params.id)
                .then((note) => {
                    setTitle(note.title)
                    setContent(note.content || '')
                })
                .catch((error) => {
                    console.error('Failed to fetch note:', error)
                    router.push('/dashboard/notes')
                })
        }
    }, [params.id, router])

    const handleSave = async () => {
        try {
            if (params.id === 'new') {
                await createNote(title, content)
            } else {
                await updateNote(params.id, title, content)
            }
            router.push('/dashboard/notes')
        } catch (error) {
            console.error('Failed to save note:', error)
        }
    }

    const handleDelete = async () => {
        if (
            params.id !== 'new' &&
            confirm('Are you sure you want to delete this note?')
        ) {
            try {
                await deleteNote(params.id)
                router.push('/dashboard/notes')
            } catch (error) {
                console.error('Failed to delete note:', error)
            }
        }
    }

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Note title'
                className='w-full text-3xl font-bold mb-4 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent'
            />
            <NoteEditor content={content} onChange={setContent} />
            <div className='mt-4 flex justify-between'>
                <button
                    onClick={handleSave}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                >
                    Save Note
                </button>
                {params.id !== 'new' && (
                    <button
                        onClick={handleDelete}
                        className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
                    >
                        Delete Note
                    </button>
                )}
            </div>
        </div>
    )
}
