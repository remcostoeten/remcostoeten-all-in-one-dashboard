import * as React from 'react'

import { cn } from '@/core/utils/cn'

type InputProps = {
    backgroundColor?: string
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, backgroundColor, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    type,
                    backgroundColor,
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'

export { Input }
