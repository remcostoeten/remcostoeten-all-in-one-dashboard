'use client'

import { motion } from 'framer-motion'
import { cn } from '../../core/utils/cn'

const tabs = ['Home', 'UI Settings']

type TabProps = {
    text: string
    selected: boolean
    setSelected: (text: string) => void
    customID?: string
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${
                selected
                    ? 'text-primary'
                    : 'hover:text-gray-900 dark:hover:text-gray-100'
            } relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-blue-500/50`}
        >
            <span className='relative z-10'>{text}</span>
            {selected && (
                <motion.div
                    className='absolute left-0 top-0 flex size-full h-full w-full items-end justify-center'
                    layoutId={customID + 'linetab'}
                    transition={{
                        type: 'spring',
                        duration: 0.4,
                        bounce: 0,
                        delay: 0.1
                    }}
                >
                    <span className='z-0 h-[3px] w-[90%] rounded-t-full bg-indigo-200'></span>
                </motion.div>
            )}
        </button>
    )
}

type LineTabsProps = {
    tabs: string[]
    selected: string
    setSelected: (tab: string) => void
    center?: boolean
    customID?: string
}

const LineTabs = ({
    tabs,
    selected,
    setSelected,
    center,
    customID
}: LineTabsProps) => {
    return (
        <div
            className={cn(
                'mb-2.5  flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-gray-600',
                center && 'justify-center'
            )}
        >
            {tabs.map((tab) => (
                <Tab
                    text={tab}
                    selected={selected === tab}
                    setSelected={setSelected}
                    key={tab}
                    customID={customID}
                />
            ))}
        </div>
    )
}

export default LineTabs
