import SubMenu from '@/components/dashboard/theme/sub-menu/SubMenu'
import SavedDiffsList from './SavedDiffsList'

export default function DiffCheckerSubMenu() {
    return (
        <SubMenu title='Saved diffs'>
            <SavedDiffsList />
        </SubMenu>
    )
}
