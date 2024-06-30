import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'
import type { FunctionComponent, ReactNode } from 'react'

type IconShellProps = {
    as?: 'div' | 'button'
    isButton?: boolean
    [x: string]: any // Allows for additional props
    children: ReactNode // Children must be a valid React node
    hasBorder?: boolean // Optional prop to control border visibility
    tooltipTitle?: string // New prop for tooltip title,
    className?: string
}

const IconShell: FunctionComponent<IconShellProps> = ({
    as = 'div',
    children,
    isButton,
    hasBorder = true,
    className = '',
    tooltipTitle,
    ...props
}) => {
    const Component = isButton ? 'button' : 'div'
    const classes = `flex justify-center items-center px-2 w-8 h-8 rounded-md border border-solid ${hasBorder ? 'border-[#ffffff17]' : 'border-transparent'} hover:cursor-pointer hover:border-white/40 transition-colors duration-500 grid place-items-center ${className}`

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger>
                <Component className={classes} {...props}>
                    {children}
                </Component>
            </TooltipTrigger>
            <TooltipContent side='right' align='center'>
                <p>{tooltipTitle}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default IconShell
