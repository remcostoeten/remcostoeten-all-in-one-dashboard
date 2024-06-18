'use client'

import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

type Status = {
    value: string
    label: string
    icon: LucideIcon
}

export default function Search() {
    const [open, setOpen] = React.useState(false)

    const performSearch = (status: Status) => {
        console.log(`Searching for status: ${status.label}`)
        // Here you would trigger the actual search based on the selected status
    }

    return (
        <div className='flex items-center space-x-4'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button className='border-0 bg-0'>
                        <SearchIcon />
                    </button>
                </PopoverTrigger>
                <PopoverContent className='p-0' side='bottom' align='start'>
                    <Input placeholder='Search status' />
                </PopoverContent>
            </Popover>
        </div>
    )
}

function SearchIcon() {
    return (
        <svg
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.6377 12.0576L17.2671 15.6873C17.4624 15.8825 17.4624 16.1991 17.2671 16.3944C17.0738 16.5877 16.7614 16.5896 16.5658 16.4L12.9306 12.7646C11.8413 13.672 10.4441 14.1244 9.02965 14.0279C7.61522 13.9313 6.29248 13.2932 5.33657 12.2462C4.38067 11.1992 3.86521 9.824 3.89742 8.40665C3.92962 6.9893 4.50702 5.63893 5.5095 4.63645C6.51197 3.63398 7.86234 3.05658 9.27969 3.02437C10.697 2.99216 12.0722 3.50763 13.1193 4.46353C14.1662 5.41943 14.8044 6.74218 14.9009 8.1566C14.9975 9.57103 14.545 10.9682 13.6377 12.0576ZM5.67208 6.04058C5.17761 6.7806 4.91369 7.65063 4.91369 8.54064C4.91501 9.73371 5.38954 10.8775 6.23317 11.7212C7.0768 12.5648 8.22062 13.0394 9.41369 13.0407C10.3037 13.0407 11.1737 12.7768 11.9138 12.2823C12.6538 11.7878 13.2306 11.085 13.5712 10.2627C13.9118 9.44045 14.0009 8.53565 13.8273 7.66274C13.6536 6.78982 13.225 5.988 12.5957 5.35866C11.9663 4.72933 11.1645 4.30074 10.2916 4.12711C9.41868 3.95348 8.51388 4.04259 7.69161 4.38319C6.86935 4.72378 6.16654 5.30056 5.67208 6.04058Z'
                fill='white'
                fillOpacity='0.6'
            />
        </svg>
    )
}
