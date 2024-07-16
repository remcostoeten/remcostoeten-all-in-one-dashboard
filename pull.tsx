import React from 'react'

type PillProps = {
    href?: string
    children?: React.ReactNode
    as?: string
    style?: React.CSSProperties
    className?: string
}

export default function Pill({
    href,
    children,
    as = 'a',
    style,
    className
}: PillProps) {
    const Element: any = as === 'a' ? 'a' : as
    const defaultStyles: React.CSSProperties = {
        textWrap: 'nowrap',
        border: '0px solid rgb(229, 231, 235)',
        boxSizing: 'border-box',
        textDecoration: 'inherit',
        display: 'inline-flex',
        justifyContent: 'center',
        gap: '0.125rem',
        overflow: 'hidden',
        borderRadius: '9999px',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
        fontWeight: 500,
        transitionProperty:
            'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '0.15s',
        backgroundColor: 'rgba(52, 211, 153, 0.1)',
        color: 'rgb(52 211 153/1)',
        boxShadow:
            'inset 0 0 0 0px #fff,inset 0 0 0 calc(1px + 0px) rgb(110 231 183/1),var(--tw-shadow,0 0 #0000)'
    }

    return (
        <Element
            href={href}
            className={`inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300 ${className}`}
            style={{ ...defaultStyles, ...style }}
        >
            {children}
        </Element>
    )
}
