'use client'

import { useEffect } from 'react'
import CustomPopover from '../../theme/shells/CustomPopover'
import { useThemeStore } from '@/core/stores/useThemeStore'
import { toast } from 'sonner'

type ThemeOption = 'Light' | 'Dark' | 'System'

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeStore()

    useEffect(() => {
        const root = window.document.documentElement

        if (theme === 'System') {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
                ? 'Dark'
                : 'Light'

            root.classList.toggle('dark', systemTheme === 'Dark')
        } else {
            root.classList.toggle('dark', theme === 'Dark')
        }
    }, [theme])

    const handleThemeChange = (newTheme: ThemeOption) => {
        setTheme(newTheme)
        toast('Theme changed to ' + newTheme)
        if (newTheme === 'Light') {
            toast('Light mode is under development')
        }
    }

    const trigger = (
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
                fillOpacity='0.6'
            />
        </svg>
    )

    const content = (
        <div className='bg-gray-800 rounded-lg p-2 space-y-2'>
            {(['Light', 'Dark', 'System'] as ThemeOption[]).map(
                (themeOption) => (
                    <button
                        key={themeOption}
                        onClick={() => handleThemeChange(themeOption)}
                        className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            theme === themeOption
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        <div className='flex items-center'>
                            <span className='w-8 h-8 mr-3 flex items-center justify-center bg-gray-700 rounded-md'>
                                {themeOption === 'Light' && (
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z' />
                                        <path d='M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22' />
                                    </svg>
                                )}
                                {themeOption === 'Dark' && (
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                                    </svg>
                                )}
                                {themeOption === 'System' && (
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <rect
                                            x='2'
                                            y='3'
                                            width='20'
                                            height='14'
                                            rx='2'
                                            ry='2'
                                        />
                                        <line x1='8' y1='21' x2='16' y2='21' />
                                        <line x1='12' y1='17' x2='12' y2='21' />
                                    </svg>
                                )}
                            </span>
                            {themeOption}
                        </div>
                        {theme === themeOption && (
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M20 6L9 17L4 12'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        )}
                    </button>
                )
            )}
        </div>
    )

    return (
        <CustomPopover align='end' width='240px' trigger={trigger}>
            {content}
        </CustomPopover>
    )
}
