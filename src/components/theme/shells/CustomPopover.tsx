import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'

export default function CustomPopover({
    trigger,
    align = 'start',
    children,
    width = '150px'
}: {
    trigger: JSX.Element
    align?: 'center' | 'end' | 'start'
    children: React.ReactNode
    width?: string
}) {
    return (
        <Popover>
            <PopoverTrigger asChild className='cursor-pointer'>
<Button variant='ghost' size='icon'>
              {trigger}

              </Button>
              </PopoverTrigger>
            <PopoverContent
                align={align}
                style={{
                    backgroundColor: 'rgb(42, 41, 57)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: 'var(--radius)',
                    padding: '16px',
                    color: 'white',
                    width: width
                }}
            >
                {children}
            </PopoverContent>
        </Popover>
    )
}
