// src/components/ui/Flex.tsx

import React from 'react'
import clsx from 'clsx'

type FlexProps = {
    children: React.ReactNode
    dir?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    gap?: string
    className?: string
}

/**
 * Flex component to create flexible layouts using a minimalistic API.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the Flex container.
 * @param {'row' | 'row-reverse' | 'col' | 'col-reverse'} [dir='row'] - The direction of the flex items.
 * @param {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'} [justify='start'] - The justification of the flex items.
 * @param {'start' | 'end' | 'center' | 'stretch' | 'baseline'} [align='stretch'] - The alignment of the flex items.
 * @param {string} [gap='0'] - The gap between the flex items.
 * @param {string} [className=''] - Additional custom class names.
 * @returns {JSX.Element} The rendered Flex component.
 */
const Flex: React.FC<FlexProps> = ({
    children,
    dir = 'row',
    justify = 'start',
    align = 'stretch',
    gap = '0',
    className = ''
}) => {
    const classes = clsx(
        'flex',
        {
            'flex-row': dir === 'row',
            'flex-row-reverse': dir === 'row-reverse',
            'flex-col': dir === 'col',
            'flex-col-reverse': dir === 'col-reverse',
            'justify-start': justify === 'start',
            'justify-end': justify === 'end',
            'justify-center': justify === 'center',
            'justify-between': justify === 'between',
            'justify-around': justify === 'around',
            'justify-evenly': justify === 'evenly',
            'items-start': align === 'start',
            'items-end': align === 'end',
            'items-center': align === 'center',
            'items-stretch': align === 'stretch',
            'items-baseline': align === 'baseline'
        },
        {
            [`gap-${gap}`]: gap
        },
        className
    )

    return <div className={classes}>{children}</div>
}

export default Flex
