'use client'

import { usePathname } from 'next/navigation'
import NavBar from './NavBar'
import TopNav from './TopNav'

export default function HeaderWrapper() {
    const pathname = usePathname()
    const dashboard = pathname.includes('/dashboard')

    return (
        <div
            className={` ${dashboard ? 'fixed top-0 left-0 w-full bg-top-bar' : ''}`}
        >
            <TopNav />
            <NavBar />
        </div>
    )
}
