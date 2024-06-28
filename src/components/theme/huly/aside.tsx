'use client'

import { m, motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SettingsIcon, UserIcon } from '../icons'
import IconGhost from '../shells/IconShell'
import IconComponent from '../shells/IconShell'
import { containerVariants, svgVariants } from '@/core/libs/animations'

const BottomSection = () => {
    return (
        <>
            <div className='mx-auto my-4 h-px w-[65%] bg-border px-4' />
            <div className='flex  w-full flex-col items-center justify-center gap-1'>
                <IconGhost hasBorder={false}>
                    <SettingsIcon fill='#fff9' width='20' height='20' />
                </IconGhost>
                <IconComponent>
                    <UserIcon width={36} height={24} />
                </IconComponent>
            </div>
        </>
    )
}

export default function Aside() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<string | null>(null)

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
            className='flex fit-content   flex-col justify-between bg-dark-blue border-r   py-4 text-sm font-medium text-white'
        >
            <div className='flex w-full flex-1 flex-col items-center pb-14'>
                <button
                    className='flex rounded-full p-1'
                    onClick={() => handleOpenClose()}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1}
                        stroke='currentColor'
                        className='size-8 stroke-neutral-200'
                    >
                        <m.path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            variants={svgVariants}
                            animate={svgControls}
                            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut'
                            }}
                        />
                    </svg>
                </button>
                <div className='size-8 items-center justify-center rounded bg-red-400 px-3'>
                    R
                </div>
                <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/afd695f1c0f90e9687cbfe900851a8a7e464e309371bb7d6ec804b664172918d?apiKey=2a72745ec00444ad9fe2bd2391d98932&'
                    className='mt-2.5 '
                />
                <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/3f7492b1338c0edf06d038169ecacb129582ee764a09dea32c6f9f5e1d6b6dca?apiKey=2a72745ec00444ad9fe2bd2391d98932&'
                    className='mt-6 '
                />
            </div>
            <BottomSection />
        </motion.aside>
    )
}
