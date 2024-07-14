'use client'

import { useEffect, useMemo, useState } from 'react'
import CustomPopover from '@/components/theme/shells/CustomPopover'
import { SiteSizeStore } from '@/core/stores/SiteSizeStore'

const sizeOptions = ['Large', 'Spacious', 'Compact'] as const
type SizeOption = (typeof sizeOptions)[number]

const fontSizeMap: Record<SizeOption, string> = {
    Large: '18px',
    Spacious: '16px',
    Compact: '14px'
}

const defaultSize: SizeOption = 'Spacious'

export default function SizeToggle() {
    const { size: storeSize, setSize } = SiteSizeStore()
    const [currentSize, setCurrentSize] = useState<SizeOption>(
        storeSize || defaultSize
    )

    useEffect(() => {
        if (storeSize && storeSize !== currentSize) {
            setCurrentSize(storeSize)
        }
    }, [storeSize])

    useEffect(() => {
        document.documentElement.style.fontSize = fontSizeMap[currentSize]
    }, [currentSize])

    const handleSizeChange = (newSize: SizeOption) => {
        setSize(newSize)
        setCurrentSize(newSize)
    }

    const renderSizeButton = (sizeOption: SizeOption) => (
        <button
            key={sizeOption}
            onClick={() => handleSizeChange(sizeOption)}
            className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentSize === sizeOption
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
            }`}
        >
            <span
                className={
                    sizeOption === 'Large'
                        ? 'text-2xl'
                        : sizeOption === 'Spacious'
                          ? 'text-xl'
                          : 'text-base'
                }
            >
                Aa
            </span>
            <span>{sizeOption}</span>
        </button>
    )

    const content = useMemo(
        () => (
            <div className='flex flex-col bg-gray-800 rounded-lg p-1'>
                {sizeOptions.map(renderSizeButton)}
            </div>
        ),
        [currentSize]
    )

    const trigger = (
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
                fillOpacity='0.6'
            />
            <path
                d='M10.643 14.4381L9.71037 11.8799H6.01841L5.08577 14.4381H3.87012L7.29194 5.5H8.43682L11.8587 14.4381H10.643ZM7.8451 6.8565L6.3593 10.9322H9.36947L7.88367 6.8565H7.8451Z'
                fill='white'
                fillOpacity='0.6'
            />
        </svg>
    )

    return <CustomPopover trigger={trigger} content={content} />
}
