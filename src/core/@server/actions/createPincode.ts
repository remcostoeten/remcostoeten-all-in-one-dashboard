'use server'

import { auth } from '@clerk/nextjs/server'
import { db } from '../../libs/DB'
import { userPincodes } from '../../models/Schema'

export async function savePincode(formData: FormData) {
    const { userId } = auth()
    if (!userId) {
        throw new Error('User not authenticated')
    }

    const pincode = formData.get('pincode') as string
    if (!pincode || pincode.length !== 6) {
        throw new Error('Invalid pincode')
    }

    await db
        .insert(userPincodes)
        .values({
            userId,
            pincode
        })
        .onConflictDoUpdate({
            target: userPincodes.userId,
            set: { pincode }
        })

    return { success: true }
}
