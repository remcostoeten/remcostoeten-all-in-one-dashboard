import { usersSchema } from '../models/Schema'
import { db } from './DB'
import { eq } from 'drizzle-orm'

export async function saveUser(user: {
    admin: boolean
    email: string
    id: string
}) {
    const timestamp = new Date() // Current time as Date object

    // Check if user exists by ID
    const existingUser = await db
        .select()
        .from(usersSchema)
        .where(eq(usersSchema.id, user.id))
        .get()

    if (!existingUser) {
        // Insert new user
        await db.insert(usersSchema).values({
            id: user.id,
            email: user.email,
            isAdmin: user.admin, // Pass boolean directly
            createdAt: timestamp, // Use Date object
            updatedAt: timestamp // Use Date object
        })
    } else {
        // Update existing user
        await db
            .update(usersSchema)
            .set({
                email: user.email,
                isAdmin: user.admin, // Pass boolean directly
                updatedAt: timestamp // Use Date object
            })
            .where(eq(usersSchema.id, user.id))
            .run()
    }
}
