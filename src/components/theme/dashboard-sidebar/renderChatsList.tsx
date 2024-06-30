import { getChatFiles } from '@/app/[locale]/(unauth)/chats/components/chat-utils'

export async function renderChatsList() {
    const chatFiles = await getChatFiles()

    return (
        <ul>
            {chatFiles.map((file) => (
                <li key={file}>{file}</li>
            ))}
        </ul>
    )
}
