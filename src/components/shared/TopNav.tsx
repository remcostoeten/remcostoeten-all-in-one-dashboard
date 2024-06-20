import LocaleSwitcher from '../LocaleSwitcher'
import { CurrentTime, TopNavSettings } from './navigation'
import Breadcrumbs from './navigation/Breadcrumbs'
import DisplayCity from './navigation/DisplayCity'
import SearchDialog from './navigation/Search'

export default function TopNav() {
    return (
        <div className='flex w-full items-center justify-between whitespace-nowrap flex-1 h-top-bar px-4 pr-8 py-1'>
            <Breadcrumbs />
            <div className='flex gap-6 items-center justify-end text-xs'>
                <TopNavSettings />
                <LocaleSwitcher />
                <span className='flex items-center gap-2 text-xs'>
                    <DisplayCity />
                    <CurrentTime />
                </span>
            </div>
        </div>
    )
}
