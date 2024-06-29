import { type NextRequest } from 'next/server'

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    // query is "hello" for /api/search?query=hello
}

export async function POST(request: Request) {
    const res = await request.json()
    return Response.json({ res })
}
