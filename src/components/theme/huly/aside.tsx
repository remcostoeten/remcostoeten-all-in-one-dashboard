'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { containerVariants } from '@/core/libs/animations'
import ProfileButton from './UserProfileButton'
import NavSettings from './NavSettings'
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import AvatarShell from '../shells/AvatarShell'

const TopSection = () => {
    return (
        <div className='flex flex-col items-center gap-4 mb-4'>
            <AvatarShell />
            <div className='bg-red-500 text-white rounded-md p-2'>J</div>
            <button className='p-2 hover:bg-gray-700 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    )
}

const MiddleSection = () => {
    const { enabledNavItems } = useMenuStore();

    return (
        <div className='flex flex-col items-center gap-4'>
            {DashboardAsideItems.map((icon, index) => (
                enabledNavItems[icon.name] && (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <button className='p-2 hover:bg-gray-700 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                                </svg>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{icon.tooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                )
            ))}
        </div>
    )
}

const BottomSection = () => {
    return (
        <>
            <div className='mx-auto my-4 h-px w-[65%] bg-border px-4' />
            <div className='flex w-full flex-col items-center justify-center gap-1 user-button'>
                <NavSettings />
                <ProfileButton />
            </div>
        </>
    )
}

export default function Aside() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const containerControls = useAnimationControls()
    const svgControls = useAnimationControls()

    useEffect(() => {
        if (isOpen) {
            containerControls.start('open')
            svgControls.start('open')
        } else {
            containerControls.start('close')
            svgControls.start('close')
        }
    }, [isOpen])

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
        setSelectedProject(null)
    }

    return (
        <motion.aside
            variants={containerVariants}
            animate={containerControls}
            initial='close'
            className='flex  w-16 flex-col justify-between bg-sidebar border-r border-border py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col items-center'>
                <TopSection />
                <MiddleSection />
            </div>
            <BottomSection />
        </motion.aside>
    )
}
