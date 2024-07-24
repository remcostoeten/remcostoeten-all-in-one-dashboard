import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function getUserStatus() {
    const session = await getServerSession(authOptions)

    return {
        isAdmin: session?.user?.isAdmin ?? false
    }
}
