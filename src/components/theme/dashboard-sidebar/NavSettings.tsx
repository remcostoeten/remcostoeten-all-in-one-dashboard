'use client'

import { useEffect } from 'react'
import IconComponent from '../shells/IconShell'
import CustomPopover from '../shells/CustomPopover'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/config/menu-items'
import MuiCheckbox from '@/components/ui/mui/mui-checkbox'
import { Button } from '@/components/ui/button'
import { TriggerIcon } from '../icons'

export default function NavSettings() {
    const enabledNavItems = useMenuStore((state) => state.enabledNavItems)
    const toggleNavItem = useMenuStore((state) => state.toggleNavItem)

    function toggleAllItems() {
        const selectAll = Object.keys(enabledNavItems).length === 0

        DashboardAsideItems.forEach((item) => {
            if (selectAll) {
                if (!enabledNavItems[item.name]) {
                    toggleNavItem(item.name)
                }
            } else {
                if (enabledNavItems[item.name]) {
                    toggleNavItem(item.name)
                }
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
            <span className='icon-settings  pl-2'>
                <TriggerIcon />
            </span>
        </IconComponent>
    )

    const popoverContent = (
        <div className=' '>
            <h3 className='text-lg font-semibold '>Menu Settings</h3>
            {DashboardAsideItems.map((item) => (
                <div
                    key={item.name}
                    className='flex items-center justify-between'
                >
                    <div className='flex items-center space-x-2'>
                        <span className='capitalize'>{item.name}</span>
                    </div>
                    <button
                        onClick={() => {
                            console.log('Toggling:', item.name)
                            toggleNavItem(item.name)
                        }}
                        className='focus:outline-none'
                    >
                        {enabledNavItems[item.name] ? (
                            <MuiCheckbox checked={true} />
                        ) : (
                            <MuiCheckbox checked={false} />
                        )}
                    </button>
                </div>
            ))}
            {Object.keys(enabledNavItems).length > 0 && <hr className='my-2' />}
            <Button onClick={toggleAllItems}>
                {Object.keys(enabledNavItems).length > 0
                    ? 'Hide all'
                    : 'Show all never shows'}
            </Button>
        </div>
    )

    return (
        <CustomPopover trigger={trigger} align='start' width='fit'>
            {popoverContent}
        </CustomPopover>
    )
}
