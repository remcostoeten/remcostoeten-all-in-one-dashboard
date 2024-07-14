
import { usePathname } from 'next/navigation'

export function useRouteMatch(patterns: string | string[]): boolean {
    const pathname = usePathname()

    const matchPattern = (pattern: string): boolean => {
        if (pattern.endsWith('*')) {
            return pathname.startsWith(pattern.slice(0, -1))
        }
        return pathname === pattern
    }

    if (Array.isArray(patterns)) {
        return patterns.some(matchPattern)
    }

    return matchPattern(patterns)
}