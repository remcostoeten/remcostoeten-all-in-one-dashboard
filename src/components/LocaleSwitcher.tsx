'use client'

import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/core/libs/i18nNavigation'

const flagMap = {
    en: { flag: '🇺🇸', name: 'English' },
    nl: { flag: '🇳🇱', name: 'Dutch' }
}

export default function LocaleSwitcherPopover() {
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()
    const [open, setOpen] = React.useState(false)

    const handleLocaleChange = (newLocale: string) => {
        router.push(pathname, { locale: newLocale })
        router.refresh()
    }

    return (
        <div className='flex items-center space-x-4'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button className='border-0 bg-transparent'>
                        {flagMap[locale]?.flag || '🇺🇸'}
                    </button>
                </PopoverTrigger>
                <PopoverContent
                    className='p-4 w-[205px] flex flex-col gap-4 bg-[#2A2939] border border-icon'
                    side='bottom'
                    align='start'
                >
                    {Object.entries(flagMap).map(([key, { flag, name }]) => (
                        <button
                            key={key}
                            onClick={() => handleLocaleChange(key)}
                            className={`flex gap-4 justify-between items-center w-full text-left ${locale === key ? '' : ''}`}
                        >
                            <span className='flex gap-4'>
                                {flag} <span>{name}</span>
                            </span>
                            {locale === key && (
                                <span className='ml-auto text-theme-primary'>
                                    ✓
                                </span>
                            )}
                        </button>
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    )
}
