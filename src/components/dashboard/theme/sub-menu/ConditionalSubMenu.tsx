'use client'

import { usePathname } from 'next/navigation'
import SubMenu from '../../../../components/dashboard/theme/sub-menu/SubMenu'
import RenderChatsList from '../../../../components/shared/theme/dashboard-sidebar/RenderChatsList'
import ChannelList from '../../../../components/dashboard/chat-history/ChannelList'

const ConditionalSubMenu = () => {
    const pathname = usePathname()

    if (pathname.includes('/dashboard/chat')) {
        return (
            <SubMenu title="Chat">
                <RenderChatsList />
                <ChannelList channels={['general', 'random']} />
            </SubMenu>
        )
    }

    return null
}

export default ConditionalSubMenu
