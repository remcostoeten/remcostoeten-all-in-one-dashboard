'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Breadcrumbs() {
    const pathname = usePathname()
    // Prepend "Home" to the pathSegments array
    const pathSegments = ['Home', ...pathname.split('/').filter((segment) => segment)]

    const formattedSegments = pathSegments.flatMap((segment, segmentIndex) => {
        // Handle "Home" segment differently
        if (segmentIndex === 0) {
            return (
                <Link href="/" key="home" className='segment font-medium text-white text-opacity-80'>Home
                </Link>
            )
        } else {
            return segment.split('-').map((part, partIndex) => {
                const formattedPart = part[0].toUpperCase() + part.slice(1).toLowerCase()
                return (
                    <span className='segment' key={`${segmentIndex}-${partIndex}`}>
                        {formattedPart}
                    </span>
                )
            })
        }
    })

    return (
        <nav aria-label='Breadcrumb' className='breadcrumbs'>
            <ol className='flex py-1 pr-1.5 pl-2.5 text-xs leading-5 rounded bg-icon-active-bg'>
                   {formattedSegments.map((segment, index) => (
                    <li
                        key={index}
                        className={`flex items-center ${index !== 0 ? 'lowercase' : ''}`}
                    >
                        {segment}
                        {index < pathSegments.length - 1 && (
                            <span className='mx-2 text-white text-opacity-50'>
                                /
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs