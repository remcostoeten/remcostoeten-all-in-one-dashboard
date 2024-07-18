import React, { ReactNode } from 'react'
import Link from 'next/link'

type AvatarShellProps = {
    background?: string
    Initials?: string
    hasTwoLetters?: boolean
    firstLetter?: string
    hasAction?: ReactNode
    as?: keyof JSX.IntrinsicElements | typeof Link
    href?: string
    target?: string
    width?: string
    height?: string
}

export default function AvatarShell({
    background = 'bg-orange',
    Initials = 'RS',
    hasTwoLetters = false,
    firstLetter = 'R',
    hasAction,
    as: Component = 'div',
    href,
    target,
    width = '8',
    height = '8',
    ...props
}: AvatarShellProps) {
    const showInitials = hasTwoLetters || Initials.length > 2

    if (Component === Link && href) {
        return (
            <Link
                href={href}
                passHref
                className={`grid place-items-center w-${width} h-${height} text-lg font-medium text-white whitespace-nowrap rounded ${background}`}
                target={target}
                {...props}
            >
                <p>
                    {firstLetter}
                    {showInitials && <span>{Initials.toUpperCase()}</span>}
                </p>
                {hasAction && <div>{hasAction}</div>}
            </Link>
        )
    }

    return (
        <Component
            href={''}
            className={`grid place-items-center w-${width} h-${height} text-lg font-medium text-white whitespace-nowrap rounded ${background}`}
            {...props}
        >
            <p>
                {firstLetter}
                {showInitials && <span>{Initials.toUpperCase()}</span>}
            </p>
            {hasAction && <div>{hasAction}</div>}
        </Component>
    )
}
