import CurrentTime from './navigation/CurrentTime'
import TopNavSettings from './navigation/TopNavSettings'
import Breadcrumbs from './navigation/Breadcrumbs'
import LocaleSwitcher from '../LocaleSwitcher'
import Settings from './navigation/Settings'
import DisplayCity from './navigation/DisplayCity'

export default async function TopNav() {
    // const city = await getCity();

    return (
        <div className='flex flex-col justify-center whitespace-nowrap bg-gray-900 text-xs h-top-bar py-1'>
            <nav className='flex gap-5 justify-between h-top-bar pl-4 w-full max-md:flex-wrap max-md:max-w-full pr-6 items-center'>
                <Breadcrumbs />
                <div className='flex gap-5 items-center'>
                    <TopNavSettings />
                    <Settings />
                    <LocaleSwitcher />
                    <DisplayCity />
                    <CurrentTime />
                </div>
            </nav>
        </div>
    )
}
