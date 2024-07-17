import Link from 'next/link'
import { getNotes } from '@/core/@server/actions/posts'


interface NoteEditorProps {
    content: string;
    onChange: (content: string) => void;
  }

export async function NoteEditor({ content, onChange }: NoteEditorProps) {
    const userNotes = await getNotes()

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Your Notes</h1>
            <Link
                href='/dashboard/notes/new'
                className='mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
            >
                Create New Note
            </Link>
            <div className='grid gap-4 mt-4'>
                {userNotes.map((note) => (
                    <Link
                        key={note.id}
                        href={`/dashboard/notes/${note.id}`}
                        className='p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                        <h2 className='text-xl font-semibold'>{note.title}</h2>
                        <p className='text-gray-600 mt-2'>
                            {new Date(note.updatedAt).toLocaleString()}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
