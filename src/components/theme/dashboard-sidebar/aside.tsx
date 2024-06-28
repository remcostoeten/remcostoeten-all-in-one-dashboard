'use client'

import { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { containerVariants } from '@/core/libs/animations'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import NavSettings from './NavSettings'
import TopSection from './topSection'
import MenuItemWithTooltip from './MenuItemWithTooltip'
import ProfileButton from './UserProfileButton'
import { useEffect } from 'react'

const Aside = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { enabledNavItems } = useMenuStore()
    const containerControls = useAnimationControls()
    const svgControls = useAnimationControls()

    useEffect(() => {
        isOpen
            ? containerControls.start('open')
            : containerControls.start('close')
        svgControls.start(isOpen ? 'open' : 'close')
    }, [isOpen])

    const handleOpenClose = () => setIsOpen(!isOpen)

    return (
        <motion.aside
            variants={containerVariants}
            animate={containerControls}
            initial='close'
            className='flex w-16 flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col items-center'>
                <TopSection />
                <div className='flex flex-col items-center gap-4'>
                    {DashboardAsideItems.map(({ name, svg }) => (
                        <MenuItemWithTooltip key={name} svg={svg}>
                            {' '}
                            name{' '}
                        </MenuItemWithTooltip>
                    ))}
                </div>
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-1 user-button'>
                <NavSettings />
                <ProfileButton />
            </div>
        </motion.aside>
    )
}

export default Aside
1
