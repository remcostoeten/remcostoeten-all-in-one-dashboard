import {
    CurrentTime,
    DisplayCity,
    LocaleSwitcher,
    TopNavSettings
} from './navigation'
import Breadcrumbs from './navigation/Breadcrumbs'

export default function TopNav() {
    return (
        <div className='flex w-full items-center justify-between whitespace-nowrap  1 h-top-bar pl-2 py-1 pr-outskirts'>
            <Breadcrumbs />
            <div className='flex gap-4   items-center justify-end'>
                <TopNavSettings />
                <LocaleSwitcher />
                <div className='flex items-center text-xs gap-1'>
                    <DisplayCity />
                    <CurrentTime />
                </div>
            </div>
        </div>
    )
}
