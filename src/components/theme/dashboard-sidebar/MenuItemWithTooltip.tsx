import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from '@/components/ui/tooltip'
import React from 'react'

type MenuItemWithTooltipProps = {
    svg: any;
    children: any;
    ariaLabel?: any;
    hasNotification?: boolean;
    isFavourite?: boolean;
}
export default function MenuItemWithTooltip({
    svg,
    children,
    ariaLabel,
    hasNotification,
    isFavourite,
}: MenuItemWithTooltipProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <>

                    <button
                        role='button'
                        aria-label={ariaLabel}
                        className={`${hasNotification ? "has-notification" : ""} ${isFavourite ? "is-favourite" : ""} p-2 hover:bg-icon-active-background rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border hover:border-[#ffffff17] border-transparent transition-all duration-500 focus:ring-offset-black focus:ring-white`}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            e.preventDefault()
                        }
                    >

                        <span className='w-8 h-8 inline-flex justify-center items-center {hasNotification ? "has-notification" : ""}'>
                            {/* <span
                                className='w-6 h-6'
                                dangerouslySetInnerHTML={{ __html: svg }}
                            /> */}
                            <span className='w-6 h-6'>

                                {svg}
                            </span>
                        </span>
                        <TooltipContent side='right' className='tooltip-right'>
                            {children}
                        </TooltipContent>
                    </button>
                </>
            </TooltipTrigger>
        </Tooltip>
    )
}
