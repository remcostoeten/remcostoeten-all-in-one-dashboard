'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import TopSection from './TopSection'
import { SearchIcon, SettingsIcon } from '../icons'
import MenuItemWithTooltip from './MenuItemWithTooltip'
import svgToReactComponent from '@/core/libs/svgToComponent'
import MenuItem from './MenuItem'

const Aside = () => {
    const { isExpanded, setIsExpanded } = useMenuStore()
    const [isLoaded, setIsLoaded] = useState(false)
    const containerControls = useAnimationControls()

    useEffect(() => {
        setIsLoaded(true)
        containerControls.start(isExpanded ? 'open' : 'close')
    }, [isExpanded])

    if (!isLoaded) {
        return <span className='loading loading-infinity loading-lg'></span>
    }

    return (
        <motion.aside
            variants={{
                open: { width: '240px' },
                close: { width: '64px' }
            }}
            animate={containerControls}
            initial='close'
            className='flex w-16 flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col'>
                <TopSection />
                <nav className='mt-4'>
                    {DashboardAsideItems.map(({ name, svg, hasNotification }) => (
                        <>
                            {hasNotification && <Seperator />}
                            <MenuItem name={name} icon={svg} isExpanded={isExpanded} />
                        </>
                    ))}
                </nav>
            </div>
            <div className='mt-auto'>
                <Seperator />
                {/* <MenuItem name="Project Settings" icon={SettingsIcon} isExpanded={isExpanded} /> */}
                {/* <MenuItem name="Search" icon={SearchIcon} isExpanded={isExpanded} /> */}
            </div>
        </motion.aside>
    )
}

export default Aside

export function Seperator({ ...props }: any) {
    return (
        <div
            {...props}
            className='h-[1px] px-7 mx-4 bg-neutral-500/50 rounded-full w-max'
        />
    )
}

