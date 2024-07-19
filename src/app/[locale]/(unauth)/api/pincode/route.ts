import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/core/libs/DB';
import { userPincodes } from '@/core/models/Schema';

export async function GET() {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await db.select({ pincode: userPincodes.pincode })
        .from(userPincodes)
        .where(eq(userPincodes.userId, userId))
        .limit(1);

    return NextResponse.json({ pincode: result[0]?.pincode || null });
}

export async function POST(request: NextRequest) {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { pincode } = await request.json();
    if (!pincode || pincode.length !== 6) {
        return NextResponse.json({ error: 'Invalid pincode' }, { status: 400 });
    }

    try {
        await db.insert(userPincodes).values({ userId, pincode })
            .onConflictDoUpdate({ target: userPincodes.userId, set: { pincode } });

        return NextResponse.json({ message: 'Pincode set successfully' });
    } catch (error) {
        console.error('Error setting pincode:', error);
        return NextResponse.json({ error: 'Error setting pincode' }, { status: 500 });
    }
}
