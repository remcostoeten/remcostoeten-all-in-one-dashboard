import {
    CurrentTime,
    DisplayCity,
    LocaleSwitcher,
    TopNavSettings
} from './navigation'
import Breadcrumbs from './navigation/Breadcrumbs'

export default function TopNav() {
    return (
        <div className='flex w-full border-b items-center justify-between whitespace-nowrap  1 h-top-bar pl-2  pt-1 pb-1 pr-1.5'>
            <Breadcrumbs />
            <div className='flex items-center justify-end'>
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
