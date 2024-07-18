import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
    const chatDirectory = path.join(process.cwd(), 'src/core/data/chats')
    const fileNames = fs.readdirSync(chatDirectory)

    const chatNames = fileNames.map((fileName) => {
        return fileName.replace(/\.json$/, '')
    })

    return NextResponse.json(chatNames)
}
