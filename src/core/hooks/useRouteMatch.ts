'use client'

import { usePathname } from 'next/navigation'

type MatchOptions = {
    suffix?: string
    dynamicSegments?: string[]
}

function removeLocale(pathname: string): string {
    const localePattern = /^\/([a-z]{2})\//

    return pathname.replace(localePattern, '/')
}

function createRegexPattern(pattern: string, options: MatchOptions): RegExp {
    const dynamicPattern =
        options.dynamicSegments?.reduce(
            (acc, segment) => acc.replace(segment, '([^/]+)'),
            '^'
        ) || '^'

    return new RegExp(`${dynamicPattern}${pattern}${options.suffix || ''}`)
}

export function useRouteMatch(
    patterns: string | string[],
    options: MatchOptions = {}
) {
    const pathname = usePathname()
    const pathWithoutLocale = removeLocale(pathname)

    const isMatch = Array.isArray(patterns)
        ? patterns.some((pattern) =>
              createRegexPattern(pattern, options).test(pathWithoutLocale)
          )
        : createRegexPattern(patterns, options).test(pathWithoutLocale)

    return isMatch
}
