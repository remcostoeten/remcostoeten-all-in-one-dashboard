import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon
} from '@heroicons/react/24/outline'
import { OrbitingCirclesComponent } from '../marketing/OrbitingCircles'

const features = [
    {
        name: 'Manage personal finance.',
        description:
            'A one-stop solution for managing personal finance, secure file storage, code snippets, and tools.',
        icon: CloudArrowUpIcon
    },
    {
        name: 'Secure file storage.',
        description:
            'Keep your files secure with built-in secure file storage solutions.',
        icon: LockClosedIcon
    },
    {
        name: 'Code snippets and tools.',
        description:
            'Access various tools and features like URL/text extractors, (reverse) geolocation finder, SVG to CSS-pseudo elements, HTML to JSX/TSX converter, and more.',
        icon: ServerIcon
    }
]

export default function SideBySide() {
    return (
        <div className='overflow-hidden '>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                    <div className='lg:pr-8 lg:pt-4'>
                        <div className='lg:max-w-lg'>
                            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
                                Some slogan
                            </h2>
                            <p className='mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl'>
                                A faster way to production
                            </p>
                            <p className='mt-6 text-lg leading-8  dark:text-gray-400 text-gray-600'>
                                Get rid of your dozens of dashboards and start
                                building your application with a single, unified
                                solution.
                            </p>
                            <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className='relative pl-9'
                                    >
                                        <dt className='inline font-semibold dark:text-gray-100 text-gray-900'>
                                            <feature.icon
                                                className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                                                aria-hidden='true'
                                            />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className='inline dark:text-gray-400'>
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <OrbitingCirclesComponent />
                </div>
            </div>
        </div>
    )
}
