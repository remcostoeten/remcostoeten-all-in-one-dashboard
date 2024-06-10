import * as React from 'react'

import { cn } from '@/core/utils/cn'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'shadflex shadmin-h-[80px] shadw-full shadrounded-md shadborder shadborder-input shadbg-background shadpx-3 shadpy-2 shadtext-sm shadring-offset-background placeholder:shadtext-muted-foreground focus-visible:shadoutline-none focus-visible:shadring-2 focus-visible:shadring-ring focus-visible:shadring-offset-2 disabled:shadcursor-not-allowed disabled:shadopacity-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = 'Textarea'

export { Textarea }
