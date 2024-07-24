import { db } from '@/core/libs/DB'
import { saveUser } from '@/core/libs/userService'
import { usersSchema } from '@/core/models/Schema'
import { currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { getTranslations } from 'next-intl/server'

export default async function HelloWrapper() {
    const t = await getTranslations('Dashboard')
    const user = await currentUser()

    if (user) {
        const userExists = await db
            .select({ id: usersSchema.id })
            .from(usersSchema)
            .where(eq(usersSchema.id, user.id))
            .limit(1)

        if (userExists.length === 0) {
            const adminEmail = process.env.ADMIN_EMAIL
            const isAdmin = adminEmail === user.emailAddresses[0]?.emailAddress

            await saveUser({
                id: user.id,
                email: user.emailAddresses[0]?.emailAddress,
                admin: isAdmin
            })
        }
    }

    return (
        <p>
            👋{' '}
            {t('hello_message', {
                email: user?.emailAddresses[0]?.emailAddress
            })}
        </p>
    )
}
