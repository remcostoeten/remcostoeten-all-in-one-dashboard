'use client'

import { useState, useEffect } from 'react'
import CustomPopover from '../../theme/shells/CustomPopover'

type SizeOption = 'Spacious' | 'Compact'

export default function SizeToggle() {
    const [selectedSize, setSelectedSize] = useState<SizeOption>('Spacious')

    useEffect(() => {
        document.documentElement.style.fontSize = selectedSize === 'Compact' ? '14px' : '16px'
    }, [selectedSize])

    const handleSizeChange = (size: SizeOption) => {
        setSelectedSize(size)
        // You might want to save this preference to localStorage or send it to a backend
    }


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
          fill-opacity='0.6'
      />
      <path
          d='M10.643 14.4381L9.71037 11.8799H6.01841L5.08577 14.4381H3.87012L7.29194 5.5H8.43682L11.8587 14.4381H10.643ZM7.8451 6.8565L6.3593 10.9322H9.36947L7.88367 6.8565H7.8451Z'
          fill='white'
          fill-opacity='0.6'
      />
  </svg>
    ) 
    const content = (
        <div className="flex bg-gray-800 rounded-lg p-1">
            {(['Spacious', 'Compact'] as SizeOption[]).map((size) => (
                <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        selectedSize === size
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:text-white'
                    }`}
                >
                    {size === 'Spacious' ? (
                        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mb-1 mx-auto">
                            <path d="M23.8382 23.1294C26.1022 23.1294 27.7617 21.7172 27.7617 19.797V18.7192L24.134 18.9422C22.0501 19.0661 20.9695 19.797 20.9695 21.0854C20.9695 22.3242 22.0886 23.1294 23.8382 23.1294ZM23.3622 25C20.545 25 18.6797 23.4391 18.6797 21.073C18.6797 18.7812 20.5064 17.4309 23.8767 17.2327L27.7617 17.0097V15.8947C27.7617 14.2347 26.6296 13.318 24.5843 13.318C22.9763 13.318 21.7799 14.1108 21.5098 15.3744H19.3615C19.4258 13.1198 21.7027 11.3978 24.61 11.3978C27.8903 11.3978 30 13.0826 30 15.7089V24.8761H27.8775V22.5596H27.826C27.0413 24.0461 25.3047 25 23.3622 25Z"></path><path d="M15.5458 24.8761L13.6805 19.7598H6.29658L4.4313 24.8761H2L8.84365 7H11.1334L17.9771 24.8761H15.5458ZM9.94996 9.71301L6.97837 17.8644H12.9987L10.0271 9.71301H9.94996Z"></path>
                        </svg>
                    ) : (
                        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 mx-auto">
                            <path d="M23.8382 23.1294C26.1022 23.1294 27.7617 21.7172 27.7617 19.797V18.7192L24.134 18.9422C22.0501 19.0661 20.9695 19.797 20.9695 21.0854C20.9695 22.3242 22.0886 23.1294 23.8382 23.1294ZM23.3622 25C20.545 25 18.6797 23.4391 18.6797 21.073C18.6797 18.7812 20.5064 17.4309 23.8767 17.2327L27.7617 17.0097V15.8947C27.7617 14.2347 26.6296 13.318 24.5843 13.318C22.9763 13.318 21.7799 14.1108 21.5098 15.3744H19.3615C19.4258 13.1198 21.7027 11.3978 24.61 11.3978C27.8903 11.3978 30 13.0826 30 15.7089V24.8761H27.8775V22.5596H27.826C27.0413 24.0461 25.3047 25 23.3622 25Z"></path><path d="M15.5458 24.8761L13.6805 19.7598H6.29658L4.4313 24.8761H2L8.84365 7H11.1334L17.9771 24.8761H15.5458ZM9.94996 9.71301L6.97837 17.8644H12.9987L10.0271 9.71301H9.94996Z"></path>
                        </svg>
                    )}
                    <span className="block">{size}</span>
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