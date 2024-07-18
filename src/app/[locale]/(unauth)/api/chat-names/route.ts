import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const allowedExtension = '.json'
    const fileNames = fs.readdirSync(chatDirectory)

    const chatNames = fileNames
        .filter((fileName) => fileName.endsWith(allowedExtension))
        .map((fileName) => fileName.replace(/\.json$/, ''))

    return NextResponse.json(chatNames)
}
