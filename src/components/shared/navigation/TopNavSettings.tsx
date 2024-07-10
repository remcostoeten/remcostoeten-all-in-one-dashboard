'use client'

import { toast } from 'sonner'
import { Search } from '.'
import SizeToggle from './SizeToggle'
import ThemeToggle from './ModeToggle'

export default function TopNavSettings() {
    return (
        <div className='flex gap-4 items-center'>
            <SettingWrapper>
                <ThemeToggle />
            </SettingWrapper>
            <SettingWrapper>
                <SizeToggle />
            </SettingWrapper>
            <SettingWrapper>
                <Search setIsOpen={() => {}} isOpen={false} />
            </SettingWrapper>
        </div>
    )
}

type SettingWrapperProps = {
    children: React.ReactNode
    onClick?: () => void
    showToast?: boolean
    message?: string
}

const SettingWrapper: React.FC<SettingWrapperProps> = ({
    children,
    onClick,
    showToast,
    message = '',
    ...props
}) => {
    const handleClick = () => {
        if (onClick) onClick()
        if (showToast && message) toast(message)
    }

    return (
        <div
            className='bg-none border-none m-0 p-0 rounded-none'
            onClick={handleClick}
            {...props}
        >
            {children}
        </div>
    )
}
