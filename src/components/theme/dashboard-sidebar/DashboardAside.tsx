'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { containerVariants } from '@/core/libs/animations'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import NavSettings from './NavSettings'
import TopSection from './topSection'
import MenuItemWithTooltip from './MenuItemWithTooltip'
import ProfileButton from './UserProfileButton'

const Aside = () => {
    const { enabledNavItems } = useMenuStore()
    const [isLoaded, setIsLoaded] = useState(false)
    const containerControls = useAnimationControls()
    const svgControls = useAnimationControls()

    useEffect(() => {
        setIsLoaded(true)
        containerControls.start('close')
        svgControls.start('close')
    }, [])

    if (!isLoaded) {
        ;<span className='loading loading-infinity loading-lg'></span>
    }

    return (
        <motion.aside
            variants={containerVariants}
            animate={containerControls}
            initial='close'
            className='flex w-16 flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col items-center'>
                <TopSection />
                <div className='flex flex-col items-center gap-1'>
                    {DashboardAsideItems.map(
                        ({ name, svg }) =>
                            enabledNavItems[name] && (
                                <MenuItemWithTooltip key={name} svg={svg}>
                                    {name}
                                </MenuItemWithTooltip>
                            )
                    )}
                </div>
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-2 user-button'>
                <Seperator />
                <NavSettings />
                <ProfileButton />
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
