'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/core/utils/cn'

type Tab = {
    title: string
    value: string
    content?: string | React.ReactNode | any
}

export default function AnimatedTabs({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
    value,
    onValueChange
}: {
    tabs: Tab[]
    containerClassName?: string
    activeTabClassName?: string
    tabClassName?: string
    contentClassName?: string
    value: string
    onValueChange: (value: string) => void
}) {
    const [hovering, setHovering] = useState(false)
    const [tabs, setTabs] = useState<Tab[]>(propTabs)

    useEffect(() => {
        setTabs(propTabs)
    }, [propTabs])

    const activeTab = tabs.find(tab => tab.value === value) || tabs[0]

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...tabs]
        const selectedTab = newTabs.splice(idx, 1)[0]

        newTabs.unshift(selectedTab)
        setTabs(newTabs)
        onValueChange(selectedTab.value)
    }

    return (
        <>
            <div
                className={cn(
                    'flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full h-fit',
                    containerClassName
                )}
            >
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => moveSelectedTabToTop(idx)}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn(
                            'relative px-4 py-2 rounded-full',
                            tabClassName
                        )}
                        style={{
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {activeTab.value === tab.value && (
                            <motion.div
                                layoutId='clickedbutton'
                                transition={{
                                    type: 'spring',
                                    bounce: 0.3,
                                    duration: 0.6
                                }}
                                className={cn(
                                    'absolute inset-0 bg-section dark:bg-zinc-800 rounded-full ',
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className='relative block text-white '>
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={activeTab}
                key={activeTab.value}
                hovering={hovering}
                className={cn('', contentClassName)}
            />
        </>
    )
}

export const FadeInDiv = ({
    className,
    tabs,
    active,
    hovering
}: {
    className?: string
    key?: string
    tabs: Tab[]
    active: Tab
    hovering?: boolean
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === active.value
    }

    return (
        <div className='relative w-full '>
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        marginTop: isActive(tab) ? 0 : '-40px',
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,

                        scale: isActive(tab) ? '1' : '0'
                    }}
                    className={cn('w-full top-0 left-0', className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    )
}
