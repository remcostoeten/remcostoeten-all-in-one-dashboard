import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import svgToReactComponent from '@/core/libs/svgToComponent';
import Link from 'next/link';

type MenuItemProps = {
    name: string
    icon: any
    isExpanded: boolean
    hasNotification: boolean
    anchor?: string
}

const MenuItem = ({ name, icon, isExpanded, hasNotification, anchor = '#' }: MenuItemProps) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon;
    const notificationClass = hasNotification ? 'has-notification' : '';

    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    {anchor && <Link href={anchor}></Link>}
                    <Link href={anchor}
                        className={`${notificationClass} trans rounded-lg flex items-center px-3 py-2 hover:bg-gray-800 cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}
                    >
                        <span className='w-6 h-6'>{IconComponent}</span>
                        {isExpanded && <span className='ml-3'>{name}</span>}
                    </Link>
                </TooltipTrigger>
                <TooltipContent side='right' align='center'>
                    <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default MenuItem;