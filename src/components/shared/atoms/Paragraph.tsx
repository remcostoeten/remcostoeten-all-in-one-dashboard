import React from 'react'
import { twMerge } from 'tailwind-merge'

type ParagraphProps = {
    border?: string
    spacing?: string
    className?: string
    children: React.ReactNode
    margin?: string
    padding?: string
    color?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    'data-testid'?: string
    role?: string
    ariaLabel?: string
}

export default function Paragraph({
    border = 'border-b border-white/10', // Default border bottom with 10% opacity white
    spacing = 'mb-2 pb-2',
    className,
    children,
    margin,
    padding,
    color = 'text-text-white',
    size = 'md',
    role,
    ariaLabel,
    ...props
}: ParagraphProps) {
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    }

    const classes = twMerge(
        color,
        spacing,
        border,
        margin,
        padding,
        sizeClasses[size],
        className
    )

    return (
        <p className={classes} role={role} aria-label={ariaLabel} {...props}>
            {children}
        </p>
    )
}
