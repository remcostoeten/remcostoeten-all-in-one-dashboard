import { CurrentTime } from './navigation'
import Breadcrumbs from './navigation/Breadcrumbs'
import DisplayCity from './navigation/DisplayCity'
import SearchDialog from './navigation/Search'

export default function TopNav() {
    return (
        <div className='flex w-full items-center justify-between whitespace-nowrap flex-1 h-top-bar px-4 pr-8 py-1'>
            <Breadcrumbs />
            <div className='flex gap-6 items-center justify-end'>
                {/* <TopNavSettings /> */}
                {/* <LocaleSwitcher /> */}
<SearchDialog />
                <DisplayCity />
                <CurrentTime />
            </div>
        </div>
    )
}
