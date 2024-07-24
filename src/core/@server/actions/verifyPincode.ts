'use server'

import { eq } from 'drizzle-orm'
import { userPincodes } from '../../models/Schema'
import { db } from '../../libs/DB'
import { auth } from '@clerk/nextjs/server'

export async function verifyPincode(formData: FormData) {
    const { userId } = auth()

    if (!userId) {
        throw new Error('User not authenticated')
    }

    const pincode = formData.get('pincode') as string

    if (!pincode) {
        throw new Error('Pincode is required')
    }

    const result = await db
        .select()
        .from(userPincodes)
        .where(eq(userPincodes.userId, userId))
        .limit(1)

    if (result.length === 0 || result[0].pincode !== pincode) {
        return { success: false, message: 'Invalid pincode' }
    }

    return { success: true }
}
