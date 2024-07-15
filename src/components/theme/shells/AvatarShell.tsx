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
}

export default function wAvatarShell({
    background = 'bg-orange',
    Initials = 'RS',
    hasTwoLetters = false,
    firstLetter = 'R',
    hasAction,
    as: Component = 'div',
    href,
    target,
    ...props
}: AvatarShellProps) {
    const showInitials = hasTwoLetters || Initials.length > 2

    if (Component === Link && href) {
        return (
            <Link
                href={href}
                passHref
                className={`grid place-items-center w-8 h-8 text-lg font-medium text-white whitespace-nowrap rounded ${background}`}
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
            className={`grid place-items-center w-8 h-8 text-lg font-medium text-white whitespace-nowrap rounded ${background}`}
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
