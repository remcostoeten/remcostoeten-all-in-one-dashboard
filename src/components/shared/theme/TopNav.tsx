import {
    Breadcrumbs,
    TopNavSettings,
    LocaleSwitcher,
    DisplayCity,
    CurrentTime
} from '../navigation'

export default function TopNav() {
    return (
        <div className='flex w-full border-b items-center justify-between whitespace-nowrap  1 h-top-bar pl-2 py-1 pr-outskirts'>
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
