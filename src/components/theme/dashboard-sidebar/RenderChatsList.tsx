import { GetChatData } from '@/app/[locale]/(unauth)/chats/components/chat-utils'

function fetchDataAndMap(callback) {
    return callback().then((data) => data.map((item) => item))
}

export function RenderChatsList() {
    const chatFiles = fetchDataAndMap(GetChatData)

    console.log(chatFiles)
    return (
        <ul>
            {/* {chatFiles?.map((file) => ( */}
            {/* <li key={file}>{file}</li> */}
            {/* ))} */}
            kaas
        </ul>
    )
}
