'use server'

import { db } from '@/core/libs/DB'
import { tasks, categories } from '@/core/models/Schema'
import { eq } from 'drizzle-orm'

export async function getTasks() {
    return await db
        .select({
            id: tasks.id,
            title: tasks.title,
            description: tasks.description,
            content: tasks.content,
            priority: tasks.priority,
            categoryId: tasks.categoryId
        })
        .from(tasks)
        .leftJoin(categories, eq(tasks.categoryId, categories.id))
}

export async function getCategories() {
    return await db.select().from(categories)
}

export async function addTask(taskData: {
    title: string
    description: string
    content: string
    categoryId: number | null
    priority: number
}) {
    await db.insert(tasks).values(taskData)
}

export async function addCategory(name: string) {
    const existingCategory = await db
        .select()
        .from(categories)
        .where(eq(categories.name, name))
        .get()

    if (existingCategory) {
        return { success: false, message: 'Category already exists' }
    }

    const result = await db
        .insert(categories)
        .values({ name })
        .returning({ id: categories.id })

    return {
        success: true,
        message: 'Category added successfully',
        id: result[0].id
    }
}

export async function deleteCategory(id: number) {
    await db.delete(categories).where(eq(categories.id, id))
}

export async function updateCategory(id: number, name: string) {
    await db.update(categories).set({ name }).where(eq(categories.id, id))
}
