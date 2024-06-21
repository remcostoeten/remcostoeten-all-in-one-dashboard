'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Breadcrumbs() {
    let pathname = usePathname()
    // This regex matches the start of the string, followed by any two or more characters (the locale),
    // followed by a slash, and replaces it with an empty string.
    pathname = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/')

    const pathSegments = [
        'Home',
        ...pathname.split('/').filter((segment) => segment)
    ]

    const formattedSegments = pathSegments.flatMap((segment, segmentIndex) => {
        if (segmentIndex === 0) {
            return (
                <Link
                    href='/'
                    key='home'
                    className='segment font-medium text-white text-opacity-80 text-xs'
                >
                    Home
                </Link>
            )
        } else {
            // Split the segment into parts, capitalize each part, and then join them with a space
            const formattedSegment = segment
                .split('-')
                .map((part) => {
                    if (part.length === 0) return ''
                    const formattedPart =
                        part[0]?.toUpperCase() + part.slice(1).toLowerCase()
                    return formattedPart
                })
                .join(' ') // Join the parts with a space

            return (
                <span className='segment' key={`${segmentIndex}`}>
                    {formattedSegment}
                </span>
            )
        }
    })

    return (
        <nav
            className='bg-gray-900 bg-opacity-10 text-white text-opacity-80 rounded-lg flex items-center gap-2 flex-1'
            aria-label='Breadcrumb'
        >
            <ol className='flex text-xs bg-white px-2 py-1  bg-opacity-10   rounded bg-icon-active-bg'>
                {formattedSegments.map((segment, index) => (
                    <li
                        key={index}
                        className={`flex items-center ${index !== 0 ? 'font-bold lowercase' : ''}`}
                    >
                        {segment}
                        {index < pathSegments.length - 1 && (
                            <span className='  text-white mx-2 text-opacity-50'>
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
