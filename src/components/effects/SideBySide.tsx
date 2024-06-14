import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon
} from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import Circles from './animated-logo-cloud'

export default function SideBySide() {
    const t = useTranslations('Landing')

    const features = [
        {
            name: t('features.manageFinance.name'),
            description: t('features.manageFinance.description'),
            icon: CloudArrowUpIcon
        },
        {
            name: t('features.secureStorage.name'),
            description: t('features.secureStorage.description'),
            icon: LockClosedIcon
        },
        {
            name: t('features.codeSnippets.name'),
            description: t('features.codeSnippets.description'),
            icon: ServerIcon
        }
    ]

    return (
        <div className='overflow-hidden '>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                    <div className='lg:pr-8 lg:pt-4'>
                        <div className='lg:max-w-lg'>
                            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
                                {t('header.title')}
                            </h2>
                            <p className='mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl'>
                                {t('header.subtitle')}
                            </p>
                            <p className='mt-6 text-lg leading-8  dark:text-gray-400 text-gray-600'>
                                {t('header.description')}
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
                    <Circles />
                </div>
            </div>
        </div>
    )
}
