import { getChatData } from '../../../core/@server/actions/getChatData'
import DirectMessageList from './DirectMessageList'

export default async function DirectMessageListWrapper() {
    const chatNames = await getChatData()
    return <DirectMessageList chatData={chatNames} />
}
