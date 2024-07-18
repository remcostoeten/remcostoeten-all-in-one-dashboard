import { getChatData } from '../../../core/@server/actions/getChatData'

export async function DirectMessageData() {
    const chatData = await getChatData()
    return { chatData }
}
