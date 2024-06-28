import IconComponent from '../shells/IconShell'
import CustomPopover from '../shells/CustomPopover'
import { useMenuStore } from '@/core/stores/MenuStore'
import { DashboardAsideItems } from '@/core/data/menu-items'
import MenuItemWithTooltip from './MenuItemWithTooltip'

export default function NavSettings() {
    const { enabledNavItems, toggleNavItem } = useMenuStore()

    const trigger = (
        <IconComponent
            tooltipTitle='Settings'
            hasBorder
            isButton={true}
            className='user-btn nostyle'
        >
            <span className='icon-settings'>
                <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M8.99976 1.99976C8.44747 1.99976 7.99976 2.44747 7.99976 2.99976V6.09976C5.69976 6.59976 3.99976 8.59976 3.99976 10.9998C3.99976 13.3998 5.69976 15.3998 7.99976 15.8998L7.99976 28.9998C7.99976 29.552 8.44747 29.9998 8.99976 29.9998C9.55204 29.9998 9.99976 29.552 9.99976 28.9998L9.99976 15.8998C12.2998 15.3998 13.9998 13.3998 13.9998 10.9998C13.9998 8.59976 12.2998 6.59976 9.99976 6.09976V2.99976C9.99976 2.44747 9.55204 1.99976 8.99976 1.99976ZM11.9998 10.9998C11.9998 12.6998 10.6998 13.9998 8.99976 13.9998C7.29976 13.9998 5.99976 12.6998 5.99976 10.9998C5.99976 9.29976 7.29976 7.99976 8.99976 7.99976C10.6998 7.99976 11.9998 9.29976 11.9998 10.9998Z'></path>
                    <path d='M22.9998 29.9998C23.552 29.9998 23.9998 29.552 23.9998 28.9998V25.8998C26.2998 25.3998 27.9998 23.3998 27.9998 20.9998C27.9998 18.5998 26.2998 16.5998 23.9998 16.0998V2.99976C23.9998 2.44747 23.552 1.99976 22.9998 1.99976C22.4475 1.99976 21.9998 2.44747 21.9998 2.99976V16.0998C19.6998 16.5998 17.9998 18.5998 17.9998 20.9998C17.9998 23.3998 19.6998 25.3998 21.9998 25.8998V28.9998C21.9998 29.552 22.4475 29.9998 22.9998 29.9998ZM19.9998 20.9998C19.9998 19.2998 21.2998 17.9998 22.9998 17.9998C24.6998 17.9998 25.9998 19.2998 25.9998 20.9998C25.9998 22.6998 24.6998 23.9998 22.9998 23.9998C21.2998 23.9998 19.9998 22.6998 19.9998 20.9998Z'></path>
                </svg>
            </span>
        </IconComponent>
    )

    const popoverContent = (
        <div className='w-56'>
            {DashboardAsideItems.map(({ name, svg }, index) => (
                <MenuItemWithTooltip key={index} svg={svg}>
                    {name}
                </MenuItemWithTooltip>
            ))}
        </div>
    )

    return (
        <CustomPopover trigger={trigger} align='start' width='fit'>
            {popoverContent}
        </CustomPopover>
    )
}
