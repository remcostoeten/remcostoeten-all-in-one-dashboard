import { useRouteMatch } from '@/core/hooks/useRouteMatch'
import type { ReactNode } from 'react'

type RouteGuardProps = {
    patterns: string | string[]
    children: ReactNode
    options?: {
        suffix?: string
        dynamicSegments?: string[]
    }
}

export default function RouteGuard({
    patterns,
    children,
    options
}: RouteGuardProps) {
    const isRouteMatch = useRouteMatch(patterns, options)

    if (isRouteMatch) {
        return <>{children}</>
    }
}

/**
 * RouteGuard component that checks if the provided patterns match the current route.
 *
 * @param {string | string[]} patterns - Patterns to match against the current route.
 * @param {React.ReactNode} children - The React children to render if the patterns match.
 * @param {Object} options - Additional options for route matching.
 * @param {string} options.suffix - Optional suffix for route matching.
 * @param {string[]} options.dynamicSegments - Optional dynamic segments for route matching.
 * @return {React.ReactNode} The rendered React children if the patterns match, otherwise null.
 *
 * @example
 * <RouteGuard
 *   patterns="/dashboard/chat"
 *   options={{ dynamicSegments: ['/[name]'] }}
 * >
 *   <div>Visible on /dashboard/chat/any-name</div>
 * </RouteGuard>
 */
