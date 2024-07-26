import React from 'react'
import SubMenu from '@/components/dashboard/theme/sub-menu/SubMenu'
import ChannelList from '@/components/dashboard/chat-history/ChannelList'
import DirectMessageList from '@/components/dashboard/chat-history/DirectMessageList'

export default async function DiffCheckerSubMenu() {
    return (
        <SubMenu title='Saved diffs'>
            <DirectMessageList />
            <ChannelList channels={['general', 'random']} />
        </SubMenu>
    )
}
