import { GetChatFiles } from '@/core/@server/actions/getLocalFile'
import { Fragment } from 'react'

export default async function RenderChatsList() {
    const chatFiles = await GetChatFiles()

    return (
        <>
            {chatFiles.map((file: string) => (
                <Fragment key={file}>{file} </Fragment>
            ))}
        </>
    )
}
