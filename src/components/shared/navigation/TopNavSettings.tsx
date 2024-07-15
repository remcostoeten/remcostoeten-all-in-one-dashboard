'use client'

import { toast } from 'sonner'
import { Search } from '.'
import SizeToggle from './SizeToggle'
import ThemeToggle from './ModeToggle'
import { Flex } from '../atoms/Flex'

export default function TopNavSettings() {
    return (
        <>
            <SettingWrapper>
                <ThemeToggle />
            </SettingWrapper>
            <SettingWrapper>
                <SizeToggle />
            </SettingWrapper>
            <SettingWrapper>
                <Search />
            </SettingWrapper>
        </>
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
