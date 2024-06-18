import { getUserLocation } from "@/core/@server/actios"
import CurrentTime from "./navigation/CurrentTime"
import TopNavSettings from "./navigation/TopNavSettings"
import Breadcrumbs from "./navigation/Breadcrumbs"

export default async function TopNav() {
    // Assuming getUserLocation is a server action that will be resolved before the component mounts
    const location = await getUserLocation()

    return (
        <div className='flex flex-col justify-center whitespace-nowrap bg-gray-900 text-xs h-top-bar'>
            <nav className='flex gap-5 justify-between h-top-bar pl-4 w-full max-md:flex-wrap max-md:max-w-full pr-6 items-center'>
                <Breadcrumbs />
                <div className='flex gap-5 items-center'>
                    <TopNavSettings />
                    <CurrentTime />
                    {location.city && (
                        <p className='text-white'>{location.city}</p>
                    )}
                </div>
            </nav>
        </div>
    )
}
