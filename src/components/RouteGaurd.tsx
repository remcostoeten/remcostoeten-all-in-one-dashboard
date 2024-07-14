import React from 'react'
import { useRouteMatch } from '@/core/hooks/useRouteMatch'

type RouteGuardProps = {
    patterns: string | string[]
    children: React.ReactNode
}

export default function RouteGuard({ patterns, children }: RouteGuardProps) {
    const isMatch = useRouteMatch(patterns)

    if (isMatch) {
        return <>{children}</>
    }

    return null
}

/**
 * RouteGuard component that checks if the provided patterns match the current route.
 *
 * @param {string | string[]} patterns - Patterns to match against the current route.
 * @param {React.ReactNode} children - The React children to render if the patterns match.
 * @return {React.ReactNode} The rendered React children if the patterns match, otherwise null.
 *
 * @example
 * <RouteGuard patterns={['/about', '/contact']}>
 *     <div>Only visible on /about and /contact</div>
 * </RouteGuard>
 */