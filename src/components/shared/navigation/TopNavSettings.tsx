'use client'

import { toast } from 'sonner'
import Search from './Search'

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
                <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M14.7892 13.5647C15.9212 13.5647 16.751 12.8586 16.751 11.8985V11.3596L14.9371 11.4711C13.8952 11.533 13.3549 11.8985 13.3549 12.5427C13.3549 13.1621 13.9144 13.5647 14.7892 13.5647ZM14.5512 14.5C13.1426 14.5 12.21 13.7196 12.21 12.5365C12.21 11.3906 13.1233 10.7155 14.8085 10.6164L16.751 10.5049V9.94735C16.751 9.11735 16.1849 8.659 15.1623 8.659C14.3583 8.659 13.7601 9.0554 13.625 9.6872H12.5509C12.583 8.5599 13.7215 7.6989 15.1751 7.6989C16.8153 7.6989 17.8701 8.5413 17.8701 9.85445V14.4381H16.8089V13.2798H16.7831C16.3908 14.0231 15.5225 14.5 14.5512 14.5Z'
                        fill='white'
                        fill-opacity='0.6'
                    />
                    <path
                        d='M10.643 14.4381L9.71037 11.8799H6.01841L5.08577 14.4381H3.87012L7.29194 5.5H8.43682L11.8587 14.4381H10.643ZM7.8451 6.8565L6.3593 10.9322H9.36947L7.88367 6.8565H7.8451Z'
                        fill='white'
                        fill-opacity='0.6'
                    />
                </svg>
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

function toggleTheme() {
    // Implementation placeholder
}
