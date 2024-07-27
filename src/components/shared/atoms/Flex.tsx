import React from 'react'
import { twMerge } from 'tailwind-merge'

type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse'
type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap'
type JustifyContent =
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl'

type FlexVariant =
    | 'default'
    | 'center'
    | `space-x-${SpaceSize}`
    | `space-y-${SpaceSize}`

interface FlexProps<T extends React.ElementType = 'div'>
    extends React.HTMLAttributes<HTMLElement> {
    as?: T
    direction?: FlexDirection
    wrap?: FlexWrap
    justify?: JustifyContent
    items?: AlignItems
    content?: AlignContent
    gap?: number | string
    variant?: FlexVariant
    className?: string
    role?: string
    'aria-label'?: string
    'aria-labelledby'?: string
    'data-testid'?: string
    margin?: string
    key?: React.Key
}

const spaceToGap: Record<SpaceSize, string> = {
    xs: '2',
    s: '4',
    m: '6',
    l: '8',
    xl: '10'
}

const variantClasses: Record<FlexVariant, string> = {
    default: '',
    center: 'items-center justify-center',
    'space-x-xs': `items-center space-x-${spaceToGap.xs}`,
    'space-x-s': `items-center space-x-${spaceToGap.s}`,
    'space-x-m': `items-center space-x-${spaceToGap.m}`,
    'space-x-l': `items-center space-x-${spaceToGap.l}`,
    'space-x-xl': `items-center space-x-${spaceToGap.xl}`,
    'space-y-xs': `flex-col items-center space-y-${spaceToGap.xs}`,
    'space-y-s': `flex-col items-center space-y-${spaceToGap.s}`,
    'space-y-m': `flex-col items-center space-y-${spaceToGap.m}`,
    'space-y-l': `flex-col items-center space-y-${spaceToGap.l}`,
    'space-y-xl': `flex-col items-center space-y-${spaceToGap.xl}`
}

export const Flex = <T extends React.ElementType = 'div'>({
    as,
    direction,
    wrap,
    justify,
    items,
    content,
    gap,
    variant = 'default',
    children,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'data-testid': dataTestId,
    className,
    key,
    ...props
}: FlexProps<T>) => {
    const Component = as || 'div'
    const baseClasses = 'flex'
    const variantClass = variantClasses[variant]
    const classes = twMerge(
        baseClasses,
        variantClass,
        direction && `flex-${direction}`,
        wrap && `flex-${wrap}`,
        justify && `justify-${justify}`,
        items && `items-${items}`,
        content && `content-${content}`,
        gap !== undefined && `gap-${gap}`,
        className
    )

    return (
        <Component
            className={classes}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            data-testid={dataTestId}
            key={key}
            {...props}
        >
            {children}
        </Component>
    )
}
