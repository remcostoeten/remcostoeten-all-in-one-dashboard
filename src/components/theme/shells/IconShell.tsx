import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'
import type { FunctionComponent, ReactNode } from 'react'

type IconShellProps = {
    isButton?: boolean
    [x: string]: any // Allows for additional props
    children: ReactNode // Children must be a valid React node
    hasBorder?: boolean // Optional prop to control border visibility
    tooltipTitle?: string // New prop for tooltip title
}

const IconShell: FunctionComponent<IconShellProps> = ({
    children,
    isButton,
    hasBorder = true,
    tooltipTitle,
    ...props
}) => {
    const classes = `flex justify-center items-center px-2 w-8 h-8 rounded-md border border-solid ${
        hasBorder ? 'border-[#ffffff17]' : 'border-transparent'
    } hover:cursor-pointer hover:border-white/40 transition-colors duration-500`

    const content = (
        <div
            className={classes}
            {...(isButton ? { role: 'button', tabIndex: 0 } : {})}
            {...props}
        >
            {children}
        </div>
    )

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>{content}</TooltipTrigger>
            {tooltipTitle && (
                <TooltipContent side='right' align='center'>
                    <p>{tooltipTitle}</p>
                </TooltipContent>
            )}
        </Tooltip>
    )
}

export default IconShell
