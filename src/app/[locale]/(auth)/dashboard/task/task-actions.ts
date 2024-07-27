'use server'

import { db } from '@/core/libs/DB'
import { tasks, categories } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'

export async function getTasks() {
    return await db
        .select()
        .from(tasks)
        .leftJoin(categories, eq(tasks.id, categories.id))
}

export async function getCategories() {
    return await db.select().from(categories)
}

export async function addTask(taskData: {
    title: string
    description: string
    content: string
    categoryId: number | null
}) {
    await db.insert(tasks).values(taskData)
}

export async function addCategory(name: string) {
    // Check if the category already exists
    const existingCategory = await db
        .select()
        .from(categories)
        .where(eq(categories.name, name))
        .get()

    if (existingCategory) {
        return { success: false, message: 'Category already exists' }
    }

    // Insert the new category
    await db.insert(categories).values({ name })
    return { success: true, message: 'Category added successfully' }
}

export async function deleteCategory(id: number) {
    await db.delete(categories).where(eq(categories.id, id))
}

export async function updateCategory(id: number, name: string) {
    await db.update(categories).set({ name }).where(eq(categories.id, id))
}
