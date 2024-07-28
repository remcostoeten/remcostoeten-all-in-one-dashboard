'use client'

import IconComponent from '../shells/IconShell'
import CustomPopover from '../shells/CustomPopover'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/config/menu-items'
import { Button } from '@/components/ui/button'
import { TriggerIcon } from '../icons'
import { Flex } from '@/components/shared/atoms/Flex'
import LineTabs from '@c/effects/LineTabs'
import { SiteSizeStore } from '@/core/stores/SiteSizeStore'
import { useState } from 'react'
import { useThemeStore } from '@/core/stores/useThemeStore'
import { useSubMenuStore } from '@/core/stores/SubMenuStore'
import LabeledToggleSwitch from '@/components/effects/LabeledToggle'
import Paragraph from '@c/shared/atoms/Paragraph'
import ThemeToggle from '@/components/shared/navigation/ModeToggle'
import SizeToggle from '@/components/shared/navigation/SizeToggle'

export default function NavSettings() {
    const enabledNavItems = useMenuStore((state) => state.enabledNavItems)
    const { theme, setTheme } = useThemeStore()
    const { size, setSize } = SiteSizeStore()
    const [selectedTab, setSelectedTab] = useState('Menu Settings')
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)

    function toggleNavItem(itemName: string) {
        useMenuStore.setState((state) => {
            const newEnabledNavItems = { ...state.enabledNavItems }

            if (newEnabledNavItems[itemName]) {
                delete newEnabledNavItems[itemName]
            } else {
                newEnabledNavItems[itemName] = true
            }
            return { enabledNavItems: newEnabledNavItems }
        })
    }

    function toggleAllItems() {
        const allItemsEnabled = DashboardAsideItems.every(
            (item) => enabledNavItems[item.name]
        )

        useMenuStore.setState((state) => {
            if (allItemsEnabled) {
                // If all items are enabled, disable all
                return { enabledNavItems: {} }
            } else {
                // If not all items are enabled, enable all
                const newEnabledNavItems = {}

                DashboardAsideItems.forEach((item) => {
                    newEnabledNavItems[item.name] = true
                })
                return { enabledNavItems: newEnabledNavItems }
            }
        })
    }

    const trigger = (
        <IconComponent
            tooltipTitle='Settings'
            hasBorder
            isButton={true}
            className='flex justify-start flex-col space-y-4 items-start'
        >
            <span className='icon-settings pl-2'>
                <TriggerIcon />
            </span>
        </IconComponent>
    )

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Menu Settings':
                return (
                    <>
                        <Flex direction='col'>
                            <Paragraph size='sm'>
                                Decide which menu items you want to show or
                                rather have hidden.
                            </Paragraph>
                        </Flex>
                        <Flex direction='col' gap='3'>
                            {DashboardAsideItems.map((item) => (
                                <Flex justify='between' key={item.name}>
                                    <span>{item.name}</span>
                                    <input
                                        type='checkbox'
                                        onChange={() =>
                                            toggleNavItem(item.name)
                                        }
                                        checked={!!enabledNavItems[item.name]}
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                    />
                                </Flex>
                            ))}
                        </Flex>
                        <hr className='my-2' />
                        <Button onClick={toggleAllItems}>
                            {DashboardAsideItems.every(
                                (item) => enabledNavItems[item.name]
                            )
                                ? 'Hide all'
                                : 'Show all'}
                        </Button>
                    </>
                )
            case 'UI Settings':
                return (
                    <>
                        <Paragraph size='sm'>
                            Manage the state of the layout, toggle the submenu
                            for example or trigger a compacter view.
                        </Paragraph>
                        <Flex direction='col' gap='4'>
                            <Flex items='center' justify='between'>
                                <span>
                                    Color theme <small>(buggy)</small>
                                </span>
                                <ThemeToggle />
                            </Flex>
                            <Flex items='center' justify='between'>
                                <span>Spacing size</span>
                                <Button size='icon' variant='ghost'>
                                    <SizeToggle />
                                </Button>
                            </Flex>
                            <Flex items='center' justify='between'>
                                <span>Submenu</span>
                                <input
                                    type='checkbox'
                                    onChange={() =>
                                        useSubMenuStore.setState((state) => ({
                                            isSubMenuVisible:
                                                !state.isSubMenuVisible
                                        }))
                                    }
                                    checked={isSubMenuVisible}
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                />
                            </Flex>
                        </Flex>
                    </>
                )
            default:
                return null
        }
    }

    const popoverContent = (
        <div className='p-4'>
            <LineTabs
                tabs={['Menu Settings', 'UI Settings']}
                selected={selectedTab}
                setSelected={setSelectedTab}
            />
            {renderTabContent()}
        </div>
    )

    return (
        <CustomPopover trigger={trigger} align='start' width='fit'>
            {popoverContent}
        </CustomPopover>
    )
}
