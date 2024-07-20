import ChannelList from '@/components/dashboard/chat-history/ChannelList'
import DirectMessageList from '@/components/dashboard/chat-history/DirectMessageList'
import SubMenu from '@/components/dashboard/theme/sub-menu/SubMenu'

export default async function ColorToolSubMenu() {
    return (
        <SubMenu title='Color tool'>
            <DirectMessageList />
            <ChannelList channels={['general', 'random']} />
        </SubMenu>
    )
}
