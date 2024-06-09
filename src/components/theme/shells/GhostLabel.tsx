import type { ElementType, FunctionComponent, ReactNode, SVGProps } from 'react'

interface LocalIconContainerProps {
    children: ReactNode
    as?: ElementType
    href?: string
    [x: string]: any
}

const sharedClasses =
    'flex gap-1.5 flex items-center justify-center px-3 py-1.5 mt-7 text-xs text-center whitespace-nowrap rounded-md border border-solid bg-ghost text-white h-max border-ghost hover:border-ghost-hover hover:bg-ghost-hover border-transition'

const LocalIconContainer: FunctionComponent<LocalIconContainerProps> = ({
    children,
    as: Component = 'div',
    href,
    ...props
}) => {
    if (Component === 'a') {
        return (
            <a
                href={href!}
                {...props}
                className={`${sharedClasses} border-ghost hover:border-ghost-hover hover:bg-ghost-hover`}
            >
                {children}
            </a>
        )
    }

    return (
        <Component
            className={`${sharedClasses} border-ghost hover:border-ghost-hover hover:bg-ghost-hover`}
            {...props}
        >
            {children}
        </Component>
    )
}

type LocalIconLabelProps = {
    label: string
}

const LocalIconLabel: FunctionComponent<LocalIconLabelProps> = ({ label }) => (
    <span>{label}</span>
)

interface LocalIconShellProps {
    icon?: FunctionComponent<SVGProps<SVGSVGElement>>
    label: string
    as?: 'div' | 'button' | 'a'
    href?: string
    [x: string]: any
}

const GhostLabel: FunctionComponent<LocalIconShellProps> = ({
    icon: Icon,
    label,
    as = 'div',
    href,
    ...props
}) => {
    return (
        <LocalIconContainer as={as} href={href} {...props}>
            {Icon && <Icon className='h-icon w-icon' />}
            <LocalIconLabel label={label} />
        </LocalIconContainer>
    )
}

export default GhostLabel

/* Example usage:
<GhostLabel icon={Icon} label="Label" as="button" onClick={handleClick} />
*/
