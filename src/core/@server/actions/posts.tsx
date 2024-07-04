'use server'

import { notes } from '@/core/models/Schema'
import { db } from 'DB'
import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'

export async function getNotes() {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')
    
  return await db.select().from(notes).where(notes.userId.eq(userId))
}

export async function getNoteById(id: string) {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const note = await db.select().from(notes)
    .where(notes.id.eq(id).and(notes.userId.eq(userId)))
    .limit(1)

  if (note.length === 0) throw new Error('Note not found')

  return note[0]
}

export async function createNote(title: string, content: string) {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const newNote = await db.insert(notes).values({
    userId,
    title,
    content,
  }).returning()

  revalidatePath('/dashboard/notes')
  return newNote[0]
}

export async function updateNote(id: string, title: string, content: string) {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const updatedNote = await db.update(notes)
    .set({ title, content, updatedAt: new Date() })
    .where(notes.id.eq(id).and(notes.userId.eq(userId)))
    .returning()

  if (updatedNote.length === 0) throw new Error('Note not found')

  revalidatePath('/dashboard/notes')
  revalidatePath(`/dashboard/notes/${id}`)
  return updatedNote[0]
}

export async function deleteNote(id: string) {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  await db.delete(notes).where(notes.id.eq(id).and(notes.userId.eq(userId)))

  revalidatePath('/dashboard/notes')
}