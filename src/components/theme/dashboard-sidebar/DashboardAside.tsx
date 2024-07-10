'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import TopSection from './TopSection'
import MenuItem from './MenuItem'
import NavSettings from './NavSettings'
import { cn } from '@/core/utils/cn'

const Aside = () => {
    const { isExpanded, setIsExpanded, enabledNavItems } = useMenuStore()
    const [isLoaded, setIsLoaded] = useState(false)
    const containerControls = useAnimationControls()

    useEffect(() => {
        setIsLoaded(true)
        containerControls.start(isExpanded ? 'open' : 'close')
    }, [isExpanded])

    if (!isLoaded) {
        return <span className='loading loading-infinity loading-lg'></span>
    }

    const filteredItems = DashboardAsideItems.filter(item => enabledNavItems[item.name])
    const favouriteItems = filteredItems.filter(item => item.isFavourite)
    const itemsWithoutFavourites = filteredItems.filter(item => !item.isFavourite)

    return (
        <motion.aside
            variants={{
                open: { width: '240px' },
                close: { width: '64px' }
            }}
            animate={containerControls}
            initial='close'
            className='flex w-[64px] flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col px-2'>
                <TopSection />
                <nav className='mb-4'>
                    {favouriteItems.map(({ name, svg, hasNotification }) => (
                        <MenuItem
                            key={name}
                            name={name}
                            icon={svg}
                            isExpanded={isExpanded}
                            hasNotification={hasNotification}
                        />
                    ))}
                </nav>
                <Seperator />
                <nav className='mt-4 space-y-2'>
                    {itemsWithoutFavourites.map(({ name, svg, hasNotification }) => (
                        <MenuItem
                            key={name}
                            name={name}
                            icon={svg}
                            isExpanded={isExpanded}
                            hasNotification={hasNotification}
                        />
                    ))}
                </nav>
            </div>
            <div className='mt-auto flex flex-col gap-2 '>
                <Seperator style={{ marginBottom: '20px' }} />
                <div className='px-4'><NavSettings />
                    <MenuItem
                        name='Search'
                        icon={
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='#7f7f7f'
                                className='size-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                                />
                            </svg>
                        }
                        hasNotification={false}
                        isExpanded={isExpanded}
                    />
                </div>
            </div>
        </motion.aside >
    )
}

export default Aside

export function Seperator({ mt = '0', mb = '0', mx = '0', ...props }: any) {
    return (
        <div
            {...props}
            className={cn(
                'h-[1px] px-7 mx-0 bg-border rounded-full w-full text-center self-center',
                {
                    'mt-[1px]': mt,
                    'mb-[1px]': mb,
                    'mx-[1px]': mx,
                }
            )}
        />
    )
}
