'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/core/libs/i18nNavigation'
import CustomPopover from '../../theme/shells/CustomPopover'

const flagMap = {
    en: { flag: '🇺🇸', name: 'English' },
    nl: { flag: '🇳🇱', name: 'Dutch' }
}

export default function LocaleSwitcherPopover() {
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const handleLocaleChange = (newLocale: string) => {
        router.push(pathname, { locale: newLocale })
        router.refresh()
    }

    const trigger = (
        <span className='flex items-center space-x-4 cursor-pointer'>
            {flagMap[locale]?.flag || '🇺🇸'}
        </span>
    )

    const content = (
        <div className='space-y-4 '>
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
                        <span className='ml-auto text-theme-primary'>✓</span>
                    )}
                </button>
            ))}
        </div>
    )

    return (
        <CustomPopover align='end' width='205px' trigger={trigger}>
            {content}
        </CustomPopover>
    )
}
