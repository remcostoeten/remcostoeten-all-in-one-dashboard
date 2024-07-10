'use client'

import { useEffect } from 'react'
import IconComponent from '../shells/IconShell'
import CustomPopover from '../shells/CustomPopover'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import MuiCheckbox from '@/components/ui/mui/mui-checkbox'
import { Button } from '@/components/ui/button'

export default function NavSettings() {
    const enabledNavItems = useMenuStore((state) => state.enabledNavItems)
    const toggleNavItem = useMenuStore((state) => state.toggleNavItem)
    const isExpanded = useMenuStore((state) => state.isExpanded)
    useEffect(() => {
        console.log('enabledNavItems changed:', enabledNavItems)
    }, [enabledNavItems])

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
            className='flex justify-start items-start'
        >
            <span className='icon-settings  pl-2'>
                <svg
                    className='w-6 h-6 mr-2'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M8.99976 1.99976C8.44747 1.99976 7.99976 2.44747 7.99976 2.99976V6.09976C5.69976 6.59976 3.99976 8.59976 3.99976 10.9998C3.99976 13.3998 5.69976 15.3998 7.99976 15.8998L7.99976 28.9998C7.99976 29.552 8.44747 29.9998 8.99976 29.9998C9.55204 29.9998 9.99976 29.552 9.99976 28.9998L9.99976 15.8998C12.2998 15.3998 13.9998 13.3998 13.9998 10.9998C13.9998 8.59976 12.2998 6.59976 9.99976 6.09976V2.99976C9.99976 2.44747 9.55204 1.99976 8.99976 1.99976ZM11.9998 10.9998C11.9998 12.6998 10.6998 13.9998 8.99976 13.9998C7.29976 13.9998 5.99976 12.6998 5.99976 10.9998C5.99976 9.29976 7.29976 7.99976 8.99976 7.99976C10.6998 7.99976 11.9998 9.29976 11.9998 10.9998Z'></path>
                    <path d='M22.9998 29.9998C23.552 29.9998 23.9998 29.552 23.9998 28.9998V25.8998C26.2998 25.3998 27.9998 23.3998 27.9998 20.9998C27.9998 18.5998 26.2998 16.5998 23.9998 16.0998V2.99976C23.9998 2.44747 23.552 1.99976 22.9998 1.99976C22.4475 1.99976 21.9998 2.44747 21.9998 2.99976V16.0998C19.6998 16.5998 17.9998 18.5998 17.9998 20.9998C17.9998 23.3998 19.6998 25.3998 21.9998 25.8998V28.9998C21.9998 29.552 22.4475 29.9998 22.9998 29.9998ZM19.9998 20.9998C19.9998 19.2998 21.2998 17.9998 22.9998 17.9998C24.6998 17.9998 25.9998 19.2998 25.9998 20.9998C25.9998 22.6998 24.6998 23.9998 22.9998 23.9998C21.2998 23.9998 19.9998 22.6998 19.9998 20.9998Z'></path>
                </svg>
            </span>
            {isExpanded && <span className='ml-2'>Settings</span>}
        </IconComponent>
    )

    const popoverContent = (
        <div className='w-64 p-4 '>
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
            <Button variant='outline' onClick={toggleAllItems}>
                {Object.keys(enabledNavItems).length > 0
                    ? 'Hide all'
                    : 'ssow allnever  shows'}
            </Button>
        </div>
    )

    return (
        <CustomPopover trigger={trigger} align='start' width='fit'>
            {popoverContent}
        </CustomPopover>
    )
}
