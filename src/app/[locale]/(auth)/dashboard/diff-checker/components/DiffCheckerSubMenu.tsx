import SubMenu from '@/components/dashboard/theme/sub-menu/SubMenu'
import React from 'react'
import NotesList from './NotesList'
import SavedDiffsList from './SavedDiffsList'

export default function DiffCheckerSubMenu() {
    return (
        <SubMenu title='Saved diffs'>
            <SavedDiffsList />
            <></>
            {/* <NotesList notes={['General', 'Important']} /> */}
        </SubMenu>
    )
}
