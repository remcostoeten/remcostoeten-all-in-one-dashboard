'use client'

import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/config/menu-items'
import TopSection from './TopSection'
import MenuItem from './MenuItem'
import NavSettings from './NavSettings'
import { cn } from '@/core/utils/cn'
import SearchDialog from '@/components/shared/navigation/Search'
import { Flex } from '@/components/shared/atoms/Flex'
import CreatePincode from '../../auth/CreatePincode'

const Aside = () => {
    const { isExpanded, setIsExpanded, enabledNavItems } = useMenuStore()
    const containerControls = useAnimationControls()

    useEffect(() => {
        containerControls.start(isExpanded ? 'open' : 'close')
    }, [isExpanded])

    const filteredItems = DashboardAsideItems.filter(
        (item) => enabledNavItems[item.name]
    )
    const favouriteItems = filteredItems.filter((item) => item.isFavourite)

    const itemsWithoutFavourites = filteredItems.filter(
        (item) => !item.isFavourite
    )

    return (
  <motion.aside
    variants={{
        open: { width: '168px' },
        close: { width: '64px' }
    }}
    animate={containerControls}
    initial='open'
    className='dashboard-aside max-h-minus-nav flex w-[64px] flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white overflow-x-auto'
>
                <Flex
                    direction='col'
                    variant='space-y-m'
                    {...(isExpanded && { items: 'start' })}
                >
                    <TopSection />

                    <Flex
                        as='nav'
                        gap='2'
                        variant='space-y-m'
                        style={{ marginBottom: '1rem' }}
                    >
                        {favouriteItems.map(
                            ({ name, svg, hasNotification }) => (
                                <MenuItem
                                    key={name}
                                    name={
                                        name
                                            .replace('-', ' ')
                                            .charAt(0)
                                            .toUpperCase() +
                                        name.replace('-', ' ').slice(1)
                                    }
                                    icon={svg}
                                    link={name}
                                    isExpanded={isExpanded}
                                    hasNotification={hasNotification}
                                />
                            )
                        )}
                    </Flex>
                    <Seperator />
                    <nav className='mt-4 space-y-2'>
                        {itemsWithoutFavourites?.map(
                            ({ name, svg, hasNotification }) => (
                                <MenuItem
                                    key={name}
                                    name={name}
                                    icon={svg}
                                    link={name}
                                    isExpanded={isExpanded}
                                    hasNotification={hasNotification}
                                />
                            )
                        )}
                    </nav>
                </Flex>
                <Flex direction='col' className='mt-auto px-2' gap='2'>
                    <Seperator className='mb-5' />
                    <Flex
                        direction='col'
                        variant='space-y-m'
                        items='start'
                        gap='2'
                    >
                        <CreatePincode />
                        <NavSettings />
                        <SearchDialog />
                    </Flex>
                </Flex>
            </motion.aside>
        </>
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
                    'mx-[1px]': mx
                }
            )}
        />
    )
}
