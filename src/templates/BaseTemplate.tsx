import { useTranslations } from 'next-intl'
import type { ReactNode } from 'react'

import HeroSection from '@/components/marketing/HeroSection'
import { AppConfig } from '@/core/utils/AppConfig'

const BaseTemplate = (props: {
    leftNav: ReactNode
    rightNav?: ReactNode
    children: ReactNode
}) => {
    const t = useTranslations('BaseTemplate')

    return (
        <div className='min-w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2 flex flex-col items-center justify-between bg-white pt-16 dark:bg-black'>
            <div className='mx-auto max-w-screen-md'>
                <header className='border-b border-gray-300'>
                    <div className='pb-8 pt-16'>
                        <HeroSection />
                        <h1 className='text-3xl font-bold text-gray-900'>
                            {AppConfig.name}
                        </h1>
                        <h2 className='text-xl'>{t('description')}</h2>
                    </div>

                    <div className='flex justify-between'>
                        <nav>
                            <ul className='flex flex-wrap gap-x-5 text-xl'>
                                {props.leftNav}
                            </ul>
                        </nav>
                        <nav>
                            <ul className='flex flex-wrap gap-x-5 text-xl'>
                                {props.rightNav}
                            </ul>
                        </nav>
                    </div>
                </header>
                <main className='pt-16'>{props.children}</main>{' '}
                {/* Add padding-top here */}
                <footer className='border-t border-gray-300 py-8 text-center text-sm'>
                    © Copyright {new Date().getFullYear()} {AppConfig.name}.
                    {` ${t('made_with')} `}
                    <a
                        href='https://creativedesignsguru.com'
                        className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    >
                        CreativeDesignsGuru
                    </a>
                    .
                    {/*
                     * PLEASE READ THIS SECTION
                     * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
                     * The link doesn't need to appear on every pages, one link on one page is enough.
                     * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
                     */}
                </footer>
            </div>
        </div>
    )
}

export { BaseTemplate }
