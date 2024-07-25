import ChannelList from '@/components/dashboard/chat-history/ChannelList'
import DirectMessageList from '@/components/dashboard/chat-history/DirectMessageList'
import SubMenu from '@/components/dashboard/theme/sub-menu/SubMenu'

export default async function ChatSubMenu() {
    return (
        <SubMenu title='Chat'>1
            <DirectMessageList />
            <ChannelList channels={['general', 'random']} />
        </SubMenu>
    )
}
