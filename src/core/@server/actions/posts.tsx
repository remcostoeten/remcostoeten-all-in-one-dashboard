'use server'

import { notes } from '@/core/models/Schema'
import { db } from 'DB'
import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'
import { eq, and } from 'drizzle-orm'
import { nanoid } from 'nanoid'

export async function getNotes() {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    return await db
        .select()
        .from(notes)
        .where(eq(notes.userId as any, userId))
}

export async function getNoteById(id: string) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    const note = await db
        .select()
        .from(notes)
        .where(eq(notes.userId as any, userId))
        .limit(1)

    if (note.length === 0) throw new Error('Note not found')

    return note[0]
}

export async function createNote(title: string, content: string) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    const newNote = await db
        .insert(notes)
        .values({
            id: nanoid(), // Generate a unique ID
            userId,
            title,
            content,
            createdAt: new Date(), // You might want to add these fields
            updatedAt: new Date() // if they're required in your schema
        })
        .returning()

    revalidatePath('/dashboard/notes')
    return newNote[0]
}

export async function updateNote(id: string, title: string, content: string) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    const updatedNote = await db
        .update(notes)
        .set({ title, content, updatedAt: new Date() })
        .where(and(eq(notes.id, id), eq(notes.userId, userId)))
        .returning()

    if (updatedNote.length === 0) throw new Error('Note not found')

    revalidatePath('/dashboard/notes')
    revalidatePath(`/dashboard/notes/${id}`)
    return updatedNote[0]
}

export async function deleteNote(id: string) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    await db
        .delete(notes)
        .where(and(eq(notes.id, id), eq(notes.userId, userId)))

    revalidatePath('/dashboard/notes')
}
