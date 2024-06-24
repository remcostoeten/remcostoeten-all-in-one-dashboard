'use client'

import { toast } from 'sonner'
import { Search } from '.'
import SizeToggle from './SizeToggle'

export default function TopNavSettings() {
    return (
        <div className='flex gap-4 items-center'>
            <SettingWrapper>
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M7.91357 0.0407715C4.06357 0.0407715 0.913574 3.19077 0.913574 7.04077C0.913574 10.8908 4.06357 14.0408 7.91357 14.0408C11.7636 14.0408 14.9136 10.8908 14.9136 7.04077C14.9136 3.19077 11.7636 0.0407715 7.91357 0.0407715ZM6.11357 12.7908C5.36357 12.5408 4.66357 12.1908 4.06357 11.6908C3.76357 11.4408 3.51357 11.1908 3.26357 10.8908C2.76357 10.2908 2.41357 9.59077 2.16357 8.84077C2.01357 8.24077 1.91357 7.64077 1.91357 7.04077C1.91357 3.74077 4.61357 1.04077 7.91357 1.04077V13.0408C7.31357 13.0408 6.71357 12.9408 6.11357 12.7908Z'
                        fill='#fff'
                        fill-opacity='0.6'
                    />
                </svg>
            </SettingWrapper>
            <SettingWrapper>
                <SizeToggle />
            </SettingWrapper>
            <SettingWrapper>
                <Search />
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
